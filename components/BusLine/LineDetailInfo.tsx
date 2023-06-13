import React from 'react';
import * as S from '../../styles/BusLineStyle';
import {StopList} from '../../utils/constants';
import getTimeInfo from '../../utils/getTimeInfo';

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
