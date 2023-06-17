import React from 'react';
import * as S from '../../styles/BusStopStyle';
import * as C from '../../utils/constants';
import * as T from '../../utils/types';
import useTime from '../../utils/hooks/useTime';
import getTimeInfo from '../../utils/getTimeInfo';

export default function StopLineItem(props: T.StopLineItemProps) {
  const {lineData, itemIndex, openBusLineModal} = props;
  const {timeHM} = useTime();
  const busName: string = C.BusList[lineData.camp];
  const heading = `heading to ${C.StopList[lineData.nextStopID].name}`;
  const isNoBus = lineData.nowTime === 'No Bus';
  const now = getTimeInfo(timeHM, lineData.nowTime);
  const next = getTimeInfo(timeHM, lineData.nextTime);

  const handleItem = () => openBusLineModal(itemIndex);

  return (
    <S.ItemPressable onPress={handleItem}>
      <S.BusInfoView>
        <S.BusText>{busName}</S.BusText>
        <S.BusHeadingText>{heading}</S.BusHeadingText>
      </S.BusInfoView>

      <S.TimeInfoView>
        <S.TimeText noBus={isNoBus}>{now}</S.TimeText>
        {!isNoBus && <S.TimeText>{next}</S.TimeText>}
      </S.TimeInfoView>
    </S.ItemPressable>
  );
}
