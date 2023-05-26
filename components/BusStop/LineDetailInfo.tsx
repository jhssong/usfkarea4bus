import React, {useEffect, useState} from 'react';
import * as Styles from '../../styles/BusStopStyle';
import useTime from '../../utils/hooks/useTime';
import {StopList} from '../../utils/constants';
import getTimeInfo from '../../utils/getTimeInfo';

// 여기서 필요한건 stop 이름, 색칠해야되는지 여부
// 특정 정류장 클릭 시 selectedStop을 그걸로 변경하고 이 창은 닫기
export default function LineDetailInfo({stopID, busTime}) {
  const {timeHM} = useTime();

  return (
    <Styles.DetailPressable>
      <Styles.BusLineView>
        <Styles.BusLineBlock />
        <Styles.BusLine />
      </Styles.BusLineView>

      <Styles.DetailInfoView>
        <Styles.DetailNameText>{name(stopID)}</Styles.DetailNameText>
        <Styles.TimeText>{time(timeHM, busTime)}</Styles.TimeText>
      </Styles.DetailInfoView>
    </Styles.DetailPressable>
  );
}

function name(stopID: number) {
  if (stopID === -1) return StopList[stopID].name;
  else return `${StopList[stopID].name}`;
}

function time(timeHM: string, busTime: string) {
  if (busTime.length === 0) return '';
  else return getTimeInfo(timeHM, busTime);
}
