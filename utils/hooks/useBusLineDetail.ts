import {useEffect, useState} from 'react';
import {useRecoilValue} from 'recoil';
import {selectedStopState} from '../../stores/atom';
import useTime from './useTime';
import * as T from '../types';
import {getMetaData} from '../getMetaData';

const emptyStopData: T.StopData = [];
const emptyLineDetail: T.LineDetail = {
  camp: '',
  stopList: [],
  scheduleList: [],
};

export default function useBusLineDetail(data: T.LineData) {
  const selectedStop = useRecoilValue(selectedStopState);
  const [stopData, setStopData] = useState<T.StopData>(emptyStopData);
  const [lineDetail, setLineDetail] = useState<T.LineDetail>(emptyLineDetail);
  const {timeHM, isHoliday} = useTime();

  function getLineDetail(camp: string, lineData: T.LineData) {
    // {"camp": "CHD", "nextStopID": "CHTMP", "nextTime": "No Bus",
    //  "nowTime": "No Bus", "scheduleIndex": 18, "stopID": "CH1", "stopIndex": 1}
    console.log(lineData.scheduleIndex);
    const [stopList, scheduleArr]: T.MetaData = getMetaData(camp, isHoliday);
    let scheduleList: string[] | string;
    if (camp === 'CHD') {
      scheduleList = scheduleArr[lineData.stopIndex];
      console.log(scheduleArr[lineData.stopIndex]);
    } else {
      scheduleList = scheduleArr[lineData.scheduleIndex];
      console.log(scheduleArr);
    }

    setLineDetail({camp, stopList, scheduleList});
  }

  // get line detail data
  useEffect(() => {
    if (type === 'line' && typeof data !== 'boolean' && data.stopID !== null) {
      let camp = '';
      if (data.camp === 'CHD') camp = 'CHD';
      else camp = data.stopID[0] + data.stopID[1];
      getLineDetail(camp, data);
    }
  }, [type, data]);
}
