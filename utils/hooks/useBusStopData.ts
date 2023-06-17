import {useEffect, useState} from 'react';
import {useRecoilValue} from 'recoil';
import {selectedStopState} from '../../stores/atom';
import useTime from './useTime';
import * as T from '../types';
import {getMetaData} from '../getMetaData';

export default function useBusStopData() {
  const selectedStop = useRecoilValue(selectedStopState);
  const [stopData, setStopData] = useState<T.StopData>(T.emptyStopData);
  const {timeHM, isHoliday} = useTime();

  function getStopData(camp: string) {
    const [stopArr, scheduleArr]: T.MetaData = getMetaData(camp, isHoliday);

    let stopIndexArr: number[] = [];

    for (let [index, value] of stopArr.entries())
      if (value === selectedStop) stopIndexArr.push(index);

    for (let stopIndex of stopIndexArr)
      for (let [index, value] of scheduleArr.entries()) {
        let newLineData: T.LineData = {
          camp: camp,
          stopID: selectedStop,
          nextStopID: stopArr[stopIndex + 1],
          stopIndex: stopIndex,
          scheduleIndex: index,
          nowTime: '',
          nextTime: '',
        };

        const nowTime = value[stopIndex];
        if (nowTime !== 'x' && nowTime >= timeHM) {
          const getNextTime = (): string => {
            const len = scheduleArr.length;
            for (let nextIndex = index + 1; nextIndex < len; nextIndex++) {
              const nextTime: string = scheduleArr[nextIndex][stopIndex];
              if (nextTime !== 'x') return nextTime;
            }
            return 'No Bus';
          };

          setStopData(prev => [
            ...prev,
            {
              ...newLineData,
              nowTime: nowTime,
              nextTime: getNextTime(),
            },
          ]);

          break;
        }

        // if there isn't bus anymore today
        if (index + 1 === scheduleArr.length) {
          setStopData(prev => [
            ...prev,
            {...newLineData, nowTime: 'No Bus', nextTime: 'No Bus'},
          ]);
        }
      }
  }

  function getCHDStopData(camp: string) {
    const [stopArr, scheduleArr]: T.MetaData = getMetaData(camp, isHoliday);

    const stopIndex = selectedStop === stopArr[0] ? 0 : 1;
    const schedule = scheduleArr[stopIndex];

    for (let [index, value] of schedule.entries()) {
      let newLineData: T.LineData = {
        camp: camp,
        stopID: selectedStop,
        nextStopID: stopArr[stopIndex === 0 ? 1 : 0],
        stopIndex: stopIndex,
        scheduleIndex: index,
        nowTime: '',
        nextTime: '',
      };

      if (value >= timeHM) {
        setStopData(prev => [
          ...prev,
          {
            ...newLineData,
            nowTime: value,
            nextTime: schedule[++index] ?? 'No Bus',
          },
        ]);

        break;
      }

      if (index + 1 === schedule.length) {
        setStopData(prev => [
          ...prev,
          {
            ...newLineData,
            nowTime: 'No Bus',
            nextTime: 'No Bus',
          },
        ]);
      }
    }
  }

  useEffect(() => {
    setStopData([]);
    if (selectedStop === null) return;
    // for CH, CW, CG, CC POST RUN
    getStopData(selectedStop[0] + selectedStop[1]);
    // for CH DFAC RUN
    // if (selectedStop === 'CH1' || selectedStop === 'CW11')
    //   getCHDStopData('CHD');
    // for NAK
    if (false) {
    }
  }, [selectedStop, timeHM, isHoliday]);

  return stopData;
}
