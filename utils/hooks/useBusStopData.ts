import {useEffect, useState} from 'react';
import {useRecoilState} from 'recoil';
import {selectedStopState} from '../../stores/atom';
import useTime from './useTime';
import * as Constants from '../../utils/constants';

type MetaData = [string, string[], string[][]];
const emptyReturn: MetaData = ['', [''], ['']['']];

type LineData = {
  busName: string;
  stopID: string | null;
  nextStop: string;
  time: string;
  nowTime: string;
  nextTime: string;
};

type StopData = LineData[];

export default function useBusStopData(busStopVisible) {
  const [selectedStop, setSelectedStop] = useRecoilState(selectedStopState);
  const [stopData, setStopData] = useState<StopData>([]);
  const {time, isHoliday} = useTime();
  const timeHMS = time.toString().split(' ')[4].split(':');
  const timeHM = timeHMS[0] + timeHMS[1];

  function getMetaData(camp: string): MetaData {
    if ((camp === 'CH' || camp === 'CG' || camp == 'CW') && !isHoliday)
      return [
        Constants.BusList[camp],
        Constants.CH_WeekStop,
        Constants.CH_WeekSchedule,
      ];
    else if ((camp === 'CH' || camp === 'CG' || camp == 'CW') && isHoliday)
      return [
        Constants.BusList[camp],
        Constants.CH_WkndStop,
        Constants.CH_WkndSchedule,
      ];
    else if (camp === 'CHD' && !isHoliday)
      return [
        Constants.BusList[camp],
        Constants.CHD_Stop,
        Constants.CHD_WeekSchedule,
      ];
    else if (camp === 'CHD' && isHoliday)
      return [
        Constants.BusList[camp],
        Constants.CHD_Stop,
        Constants.CHD_WkndSchedule,
      ];
    else return emptyReturn;
  }

  function getStopData(camp: string) {
    const [busName, stopArr, scheduleArr]: MetaData = getMetaData(camp);

    let stopIndexArr: number[] = [];
    for (let [index, value] of stopArr.entries())
      if (value === selectedStop) stopIndexArr.push(index);

    for (let stopIndex of stopIndexArr)
      for (let [index, value] of scheduleArr.entries())
        if (value[stopIndex] >= timeHM) {
          const nextTime = (): string => {
            for (
              let scheduleIndex = index + 1;
              scheduleIndex < scheduleArr.length;
              scheduleIndex++
            ) {
              const time: string = scheduleArr[scheduleIndex][stopIndex];
              if (time !== '0000') return time;
            }
            return 'No Bus';
          };

          const newLineData: LineData = {
            busName: busName,
            stopID: selectedStop,
            nextStop: Constants.StopList[stopArr[stopIndex + 1]].name,
            time: timeHM,
            nowTime: scheduleArr[index][stopIndex],
            nextTime: nextTime(),
          };
          setStopData(prev => [...prev, newLineData]);
          break;
        }
  }

  function getCHDStopData() {
    const [busName, stopArr, scheduleArr]: MetaData = getMetaData('CHD');

    const stopIndex = selectedStop === stopArr[0] ? 0 : 1;
    const schedule = scheduleArr[stopIndex];

    for (let [index, value] of schedule.entries()) {
      if (value >= timeHM) {
        const newLineData: LineData = {
          busName: busName,
          stopID: selectedStop,
          nextStop: Constants.StopList[stopArr[stopIndex === 0 ? 1 : 0]].name,
          time: timeHM,
          nowTime: value,
          nextTime: schedule[++index] ?? 'No Bus',
        };
        setStopData(prev => [...prev, newLineData]);
        break;
      }
    }
  }

  useEffect(() => {
    if (selectedStop === null) return;
    // CH, CW, CG, CC POST RUN
    getStopData(selectedStop[0] + selectedStop[1]);
    // CH DFAC RUN
    if (selectedStop === 'CH1' || selectedStop === 'CW11') getCHDStopData();
    // NAK
    if (false) {
    }
  }, [selectedStop, time]);

  useEffect(() => {
    if (busStopVisible === false) setStopData([]);
  }, [busStopVisible]);

  return [stopData];
}
