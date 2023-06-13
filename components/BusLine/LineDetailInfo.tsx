import React from 'react';
import * as S from '../../styles/BusLineStyle';
import * as C from '../../utils/constants';
import {StopList} from '../../utils/constants';
import getTimeInfo from '../../utils/getTimeInfo';
import useTime from '../../utils/hooks/useTime';

export default function LineDetailInfo({
  isStart,
  isEnd,
  isPoint,
  isAfter,
  stopID,
  busTime,
  handlePressable,
}) {
  const {timeHM} = useTime();
  const camp = StopList[stopID].camp;
  const name = StopList[stopID].name;
  const time = getTime(timeHM, busTime);

  // TODO [low] add current bus location
  return (
    <S.DetailPressable isPoint={isPoint} onPress={handlePressable}>
      <S.LineView>
        <S.LinePoint source={C.PointSrc} />
        <S.BusLine isStart={isStart} isEnd={isEnd} />
      </S.LineView>

      <S.InfoView>
        <S.InfoTextView>
          <S.CampText>CP {camp}</S.CampText>
          <S.NameText>{name}</S.NameText>
        </S.InfoTextView>
        {isAfter && <S.TimeText>{time}</S.TimeText>}
      </S.InfoView>
    </S.DetailPressable>
  );
}

function getTime(timeHM: string, busTime: string) {
  if (busTime.length === 0) return ''; // for TMP
  else if (busTime === 'x') return 'No Bus';
  else return getTimeInfo(timeHM, busTime);
}
