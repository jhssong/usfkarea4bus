import {useEffect, useState} from 'react';
import {useRecoilValue} from 'recoil';
import {selectedStopState} from '../../stores/atom';
import * as T from '../types';
import useTime from './useTime';
import {getMetaData} from '../getMetaData';

export default function useBusStopData() {
  const selectedStop = useRecoilValue(selectedStopState);
  const [stopData, setStopData] = useState<T.StopData>(T.emptyStopData);
  const {timeHM, isHoliday} = useTime();

  function getStopData(busID: string) {
    if (selectedStop === null) return;

    const [stopArr, scheduleArr]: T.MetaData = getMetaData(busID, isHoliday);

    let stopIndexArr: number[] = [];

    for (let [index, value] of stopArr.entries())
      if (value === selectedStop) stopIndexArr.push(index);

    for (let stopIndex of stopIndexArr) {
      const [nowTime, nextTime] = getBusTime(scheduleArr, stopIndex, timeHM);

      setStopData(prev => [
        ...prev,
        {
          busID,
          stopID: selectedStop,
          nextStopID: stopArr[stopIndex + 1],
          stopIndex: stopIndex,
          nowTime,
          nextTime,
        },
      ]);
    }
  }

  function getCHDStopData(busID: string) {
    if (selectedStop === null) return;

    const [stopArr, scheduleArr]: T.MetaData = getMetaData(busID, isHoliday);

    const stopIndex = selectedStop === stopArr[1] ? 1 : 2;
    const schedule = scheduleArr[stopIndex];

    const [nowTime, nextTime] = getCHDBusTime(schedule, timeHM);

    setStopData(prev => [
      ...prev,
      {
        busID,
        stopID: selectedStop,
        nextStopID: stopArr[stopIndex === 1 ? 1 : 2],
        stopIndex: stopIndex,
        nowTime,
        nextTime,
      },
    ]);
  }

  useEffect(() => {
    if (selectedStop === null) return;

    const busID = selectedStop[0] + selectedStop[1];
    setStopData([]);
    getStopData(busID); // for CH, CW, CG, CC POST RUN
    // for CH DFAC RUN
    if (selectedStop === 'CH1' || selectedStop === 'CW11')
      getCHDStopData('CHD');
    // for NAK
    if (false) {
    }
  }, [selectedStop, timeHM, isHoliday]);

  return stopData;
}

function getBusTime(
  scheduleArr: T.scheduleArr,
  stopIndex: number,
  timeHM: string,
) {
  for (let [index, scheduleArrRow] of scheduleArr.entries()) {
    const len = scheduleArr.length;
    const nowTime = scheduleArrRow[stopIndex];

    const isValidTime = nowTime !== 'x' && nowTime >= timeHM;
    const isNoBus = index + 1 === scheduleArr.length;

    if (isValidTime) {
      for (let nextIndex = index + 1; nextIndex < len; nextIndex++) {
        const nextTime = scheduleArr[nextIndex][stopIndex];
        if (nextTime !== 'x') return [nowTime, nextTime];
        else if (nextIndex === len) return [nowTime, 'x'];
      }
      return [nowTime, 'x'];
    }

    if (isNoBus) return ['x', 'x'];
  }
  return ['x', 'x'];
}

function getCHDBusTime(scheduleArr: string[], timeHM: string) {
  for (let [index, value] of scheduleArr.entries()) {
    const nowTime = value;
    const isValidTime = nowTime !== 'x' && nowTime >= timeHM;
    const isNoBus = index + 1 === scheduleArr.length;

    if (isValidTime) {
      const nowTime = value;
      const nextTime = scheduleArr[++index] ?? 'x';
      return [nowTime, nextTime];
    }

    if (isNoBus) return ['x', 'x'];
  }
  return ['x', 'x'];
}
