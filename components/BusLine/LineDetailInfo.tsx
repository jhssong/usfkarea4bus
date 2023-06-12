import React from 'react';
import {useRecoilState} from 'recoil';
import {selectedStopState} from '../../stores/atom';
import * as S from '../../styles/BusLineStyle';
import {StopList} from '../../utils/constants';
import getTimeInfo from '../../utils/getTimeInfo';

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
    <S.DetailPressable
      isPoint={isPoint}
      onPress={() => handlePressable(stopID)}>
      <S.LineView>
        <S.LinePoint source={require('../../assets/img/point.png')} />
        <S.BusLine isStart={isStart} isEnd={isEnd} />
      </S.LineView>

      <S.DetailInfoView>
        <S.DetailInfoTextView>
          <S.DetailCampText>CP {camp}</S.DetailCampText>
          <S.DetailNameText>{name}</S.DetailNameText>
        </S.DetailInfoTextView>
        {isAfter && <S.TimeText>{time}</S.TimeText>}
      </S.DetailInfoView>
    </S.DetailPressable>
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
