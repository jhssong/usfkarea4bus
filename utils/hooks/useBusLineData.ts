import {useEffect, useState} from 'react';
import useTime from './useTime';
import * as T from '../types';
import {getMetaData} from '../getMetaData';

export default function useBusLineDetail(data: T.LineData) {
  const [stopList, setStopList] = useState<string[]>([]);
  const [scheduleList, setScheduleList] = useState<string[]>([]);
  const {timeHM, isHoliday} = useTime();

  function getLineDetail(camp: string, lineData: T.LineData) {
    const [stopList, scheduleArr]: T.MetaData = getMetaData(camp, isHoliday);

    const scheduleList =
      camp === 'CHD'
        ? getCHDScheduleList(lineData.stopIndex, scheduleArr, stopList.length)
        : getScheduleList(lineData.stopIndex, scheduleArr);
    // console.log(scheduleList);
    setStopList(stopList);
    setScheduleList(scheduleList);
  }

  function getScheduleList(stopIndex: number, scheduleArr: T.scheduleArr) {
    let scheduleIndex = -1;

    while (true) {
      if (++scheduleIndex === scheduleArr.length)
        return Array.from({length: scheduleArr[0].length}, () => 'x');

      let startValue = 'x';
      let startIndex = 0;
      while (startValue === 'x') {
        startIndex++;
        startValue = scheduleArr[scheduleIndex][startIndex];
      }
      const currentStopValue = scheduleArr[scheduleIndex][stopIndex];
      const currentStopBeforeValue =
        scheduleArr[scheduleIndex - 1 < 0 ? 0 : scheduleIndex - 1][stopIndex];

      // console.log(scheduleIndex, startValue, currentStopValue, timeHM);

      if (startValue >= timeHM) {
        if (
          currentStopBeforeValue !== 'x' &&
          currentStopBeforeValue >= timeHM
        ) {
          // console.log('This is Case1');
          return scheduleArr[scheduleIndex - 1];
        } else if (currentStopValue !== 'x' && currentStopValue >= timeHM) {
          // console.log('This is Case2');
          return scheduleArr[scheduleIndex];
        }
      } else if (currentStopValue !== 'x' && currentStopValue >= timeHM) {
        // console.log('This is Case3');
        return scheduleArr[scheduleIndex];
      }
    }
  }

  function getCHDScheduleList(
    stopIndex: number,
    scheduleArr: T.scheduleArr,
    arrLength: number,
  ) {
    let scheduleIndex = -1;

    while (true) {
      if (++scheduleIndex === scheduleArr[1].length)
        return Array.from({length: arrLength}, () => 'x');

      const value = scheduleArr[stopIndex][scheduleIndex];

      if (value >= timeHM) {
        let list = Array.from({length: arrLength}, () => 'x');
        list[stopIndex] = value;
        return list;
      }
    }
  }

  useEffect(() => {
    if (data === null) return;
    let camp = '';

    if (data.busID === 'CHD') camp = 'CHD';
    else camp = data.stopID[0] + data.stopID[1];

    getLineDetail(camp, data);
  }, [data]);

  return [stopList, scheduleList];
}
