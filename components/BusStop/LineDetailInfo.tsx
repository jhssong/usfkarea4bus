import React from 'react';
import * as Styles from '../../styles/BusStopStyle';
import {StopList} from '../../utils/constants';
import getTimeInfo from '../../utils/getTimeInfo';
import {useRecoilState} from 'recoil';
import {selectedStopState} from '../../stores/atom';

// 특정 정류장 클릭 시 selectedStop을 그걸로 변경하고 이 창은 닫기
export default function LineDetailInfo({
  isStart,
  isEnd,
  isPoint,
  isAfter,
  stopID,
  timeHM,
  busTime,
  handlePressable,
}) {
  const [selectedStop, setSelectedStop] = useRecoilState(selectedStopState);
  const camp = getCamp(stopID);
  const name = getName(stopID);
  const time = getTime(timeHM, busTime);

  return (
    <Styles.DetailPressable
      isPoint={isPoint}
      onPress={() => handlePressable(stopID)}>
      <Styles.LineView>
        <Styles.LinePoint source={require('../../assets/img/point.png')} />
        <Styles.BusLine isStart={isStart} isEnd={isEnd} />
      </Styles.LineView>

      <Styles.DetailInfoView>
        <Styles.DetailInfoTextView>
          <Styles.DetailCampText>CP {camp}</Styles.DetailCampText>
          <Styles.DetailNameText>{name}</Styles.DetailNameText>
        </Styles.DetailInfoTextView>
        {isAfter && <Styles.TimeText>{time}</Styles.TimeText>}
      </Styles.DetailInfoView>
    </Styles.DetailPressable>
  );
}

function getCamp(stopID: number) {
  return StopList[stopID].camp;
}

function getName(stopID: number) {
  if (stopID === -1) return StopList[stopID].name;
  else return StopList[stopID].name;
}

function getTime(timeHM: string, busTime: string) {
  if (busTime.length === 0) return '';
  else return getTimeInfo(timeHM, busTime);
}
