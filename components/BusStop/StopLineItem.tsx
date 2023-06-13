import React from 'react';
import * as S from '../../styles/BusStopStyle';
import * as C from '../../utils/constants';
import useTime from '../../utils/hooks/useTime';
import getTimeInfo from '../../utils/getTimeInfo';

export default function StopLineItem({lineData, itemIndex, openBusLineModal}) {
  const {timeHM} = useTime();
  const busName = lineData.busName;
  const nextStop = C.StopList[lineData.nextStopID].name;
  const isNoBus = lineData.nowTime === 'No Bus';
  const now = getTimeInfo(timeHM, lineData.nowTime);
  const next = getTimeInfo(timeHM, lineData.nextTime);

  const handleItem = () => openBusLineModal(itemIndex);

  return (
    <S.ItemPressable onPress={handleItem}>
      <S.BusInfoView>
        <S.BusText>{busName}</S.BusText>
        <S.BusHeadingText>heading to {nextStop}</S.BusHeadingText>
      </S.BusInfoView>

      <S.TimeInfoView>
        <S.TimeText noBus={isNoBus}>{now}</S.TimeText>
        {!isNoBus && <S.TimeText>{next}</S.TimeText>}
      </S.TimeInfoView>
    </S.ItemPressable>
  );
}
