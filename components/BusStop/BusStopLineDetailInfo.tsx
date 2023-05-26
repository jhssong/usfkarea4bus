import React, {useEffect, useState} from 'react';
import * as Styles from '../../styles/BusStopStyle';
import * as Constants from '../../utils/constants';
import {View} from 'react-native';

// 여기서 필요한건 stop 이름, 색칠해야되는지 여부
// 특정 정류장 클릭 시 selectedStop을 그걸로 변경하고 이 창은 닫기
export default function BusStopLineDetailInfo({stopID, busTime}) {
  useEffect(() => console.log(stopID), []);
  return (
    <Styles.LineDetail>
      <Styles.BusLine />

      <View>
        <Styles.LineDetailText>
          #{Constants.StopList[stopID].num} - {Constants.StopList[stopID].name}
        </Styles.LineDetailText>
        <Styles.LineDetailText>{busTime}</Styles.LineDetailText>
      </View>
    </Styles.LineDetail>
  );
}
