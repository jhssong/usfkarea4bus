import {useEffect, useState} from 'react';
import useTime from './useTime';
import * as T from '../types';
import {getMetaData} from '../getMetaData';

export default function useBusLineDetail(data: T.LineData) {
  const [stopList, setStopList] = useState<string[]>([]);
  const [scheduleList, setScheduleList] = useState<string[]>([]);
  const {timeHM, isHoliday} = useTime();

  function getLineDetail(camp: string, lineData: T.LineData) {
    console.log('check2');
    const [stopList, scheduleArr]: T.MetaData = getMetaData(camp, isHoliday);

    const scheduleList =
      camp === 'CHD'
        ? getCHDScheduleList(lineData.stopIndex, scheduleArr, stopList.length)
        : getScheduleList(lineData.stopIndex, scheduleArr);

    setStopList(stopList);
    setScheduleList(scheduleList);
  }

  function getScheduleList(stopIndex: number, scheduleArr: T.scheduleArr) {
    let scheduleIndex = -1;

    while (true) {
      if (++scheduleIndex === scheduleArr.length)
        return Array.from({length: scheduleArr[0].length}, () => 'x');

      const startValue = scheduleArr[scheduleIndex][1];
      const currentValue = scheduleArr[scheduleIndex][stopIndex];

      if (startValue !== 'x' && startValue >= timeHM) {
        if (currentValue >= timeHM) return scheduleArr[scheduleIndex];
        else return scheduleArr[scheduleIndex - 1];
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

    console.log('check1');

    getLineDetail(camp, data);
  }, [data]);

  return [stopList, scheduleList];
}
