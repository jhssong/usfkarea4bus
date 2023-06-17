import React from 'react';
import * as S from '../../styles/BusLineStyle';
import * as C from '../../utils/constants';
import * as T from '../../utils/types';
import useTime from '../../utils/hooks/useTime';
import getTimeInfo from '../../utils/getTimeInfo';

export default function LineDetailItem(props: T.LineItemProps) {
  const {
    index,
    stopID,
    busName,
    currentStopIndex,
    lineDetail,
    handlePressable,
  } = props;
  const {timeHM} = useTime();
  const camp = `CP ${C.StopList[stopID].camp}`;
  const name = `${C.StopList[stopID].name}`;
  const busTime = lineDetail.scheduleList[index];
  const time = getTimeInfo(timeHM, busTime);

  const isStart = index === 0;
  const isEnd = index === Object.keys(lineDetail.stopList).length - 1;

  const isPoint = currentStopIndex === index;
  const isAfter = busName === 'CHD' ? isPoint : currentStopIndex <= index;
  const isNoBus = time === 'No Bus';

  // TODO [low] add current bus location
  return (
    <S.DetailPressable isPoint={isPoint} onPress={handlePressable}>
      <S.LineView>
        <S.LinePoint source={C.PointSrc} />
        <S.BusLine isStart={isStart} isEnd={isEnd} />
      </S.LineView>

      <S.InfoView>
        <S.InfoTextView>
          <S.CampText>{camp}</S.CampText>
          <S.NameText>{name}</S.NameText>
        </S.InfoTextView>
        {isAfter && <S.TimeText noBus={isNoBus}>{time}</S.TimeText>}
      </S.InfoView>
    </S.DetailPressable>
  );
}
