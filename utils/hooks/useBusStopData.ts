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
  nextStopID: string;
  stopIndex: number;
  scheduleIndex: number;
  nowTime: string;
  nextTime: string;
};

type StopData = LineData[];

type LineDetail = {
  stopList: string[];
  scheduleList: string[];
};

const emptyLineDetail: LineDetail = {
  stopList: [],
  scheduleList: [],
};

type BusStopVisible = boolean;

export default function useBusStopData(
  type: string,
  data: BusStopVisible | LineData,
) {
  const [selectedStop, setSelectedStop] = useRecoilState(selectedStopState);
  const [stopData, setStopData] = useState<StopData>([]);
  const [lineDetail, setLineDetail] = useState<LineDetail>(emptyLineDetail);
  const {timeHM, isHoliday} = useTime();

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

  // TODO [low] combine getStopData() & getCHDStopData()
  function getStopData(camp: string) {
    const [busName, stopArr, scheduleArr]: MetaData = getMetaData(camp);

    let stopIndexArr: number[] = [];

    for (let [index, value] of stopArr.entries())
      if (value === selectedStop) stopIndexArr.push(index);

    for (let stopIndex of stopIndexArr)
      for (let [index, value] of scheduleArr.entries()) {
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
            nextStopID: stopArr[stopIndex + 1],
            stopIndex: stopIndex,
            scheduleIndex: index,
            nowTime: scheduleArr[index][stopIndex],
            nextTime: nextTime(),
          };

          setStopData(prev => [...prev, newLineData]);
          break;
        }
        if (index + 1 === scheduleArr.length) {
          const newLineData: LineData = {
            busName: busName,
            stopID: selectedStop,
            nextStopID: stopArr[stopIndex + 1],
            stopIndex: stopIndex,
            scheduleIndex: index,
            nowTime: 'No Bus',
            nextTime: 'No Bus',
          };
          setStopData(prev => [...prev, newLineData]);
        }
      }
  }

  function getCHDStopData(camp: string) {
    const [busName, stopArr, scheduleArr]: MetaData = getMetaData(camp);

    const stopIndex = selectedStop === stopArr[0] ? 0 : 1;
    const schedule = scheduleArr[stopIndex];

    for (let [index, value] of schedule.entries()) {
      if (value >= timeHM) {
        const newLineData: LineData = {
          busName: busName,
          stopID: selectedStop,
          nextStopID: stopArr[stopIndex === 0 ? 1 : 0],
          stopIndex: stopIndex,
          scheduleIndex: index,
          nowTime: value,
          nextTime: schedule[++index] ?? 'No Bus',
        };
        setStopData(prev => [...prev, newLineData]);
        break;
      }
      if (index + 1 === schedule.length) {
        const newLineData: LineData = {
          busName: busName,
          stopID: selectedStop,
          nextStopID: stopArr[stopIndex === 0 ? 1 : 0],
          stopIndex: stopIndex,
          scheduleIndex: index,
          nowTime: 'No Bus',
          nextTime: 'No Bus',
        };
        setStopData(prev => [...prev, newLineData]);
      }
    }
  }

  function getLineDetail(camp: string, lineData: LineData) {
    const [x, stopList, scheduleArr]: MetaData = getMetaData(camp);
    const scheduleList = scheduleArr[lineData.scheduleIndex];

    setLineDetail({stopList, scheduleList});
  }

  // get stop data
  useEffect(() => {
    setStopData([]);
    if (selectedStop === null) return;
    // CH, CW, CG, CC POST RUN
    getStopData(selectedStop[0] + selectedStop[1]);
    // CH DFAC RUN
    if (selectedStop === 'CH1' || selectedStop === 'CW11')
      getCHDStopData('CHD');
    // NAK
    if (false) {
    }
  }, [selectedStop, timeHM, isHoliday]);

  // get line detail datas
  useEffect(() => {
    if (type === 'line' && typeof data !== 'boolean' && data.stopID !== null) {
      let camp = '';
      if (data.busName === 'DFAC RUN') camp = 'CHD';
      else camp = data.stopID[0] + data.stopID[1];
      getLineDetail(camp, data);
    }
  }, [type]);

  return {stopData, lineDetail};
}
