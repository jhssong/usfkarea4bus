import React, {useEffect} from 'react';
import * as S from '../../styles/BusStopStyle';
import * as C from '../../utils/constants';
import * as T from '../../utils/types';
import useTime from '../../utils/hooks/useTime';
import getTimeInfo from '../../utils/getTimeInfo';

export default function StopLineItem(props: T.StopLineItemProps) {
  const {lineData, openBusLineModal} = props;
  const {timeHM} = useTime();

  const busName: string = C.BusList[lineData.busID];
  const heading = `heading to ${C.StopList[lineData.nextStopID].name}`;

  const isNoBus = lineData.nowTime === 'x';
  const now = getTimeInfo(timeHM, lineData.nowTime);
  const next = getTimeInfo(timeHM, lineData.nextTime);

  return (
    <S.ItemPressable onPress={openBusLineModal}>
      <S.BusInfoView>
        <S.BusText>{busName}</S.BusText>
        <S.BusHeadingText>{heading}</S.BusHeadingText>
      </S.BusInfoView>

      <S.TimeInfoView>
        <S.TimeText noBus={isNoBus}>{now}</S.TimeText>
        {!isNoBus && <S.TimeText noBus={next === 'No Bus'}>{next}</S.TimeText>}
      </S.TimeInfoView>
    </S.ItemPressable>
  );
}
