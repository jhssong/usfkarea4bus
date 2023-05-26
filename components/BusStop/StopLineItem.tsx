import React from 'react';
import * as Styles from '../../styles/BusStopStyle';
import {StopList} from '../../utils/constants';
import useTime from '../../utils/hooks/useTime';
import getTimeInfo from '../../utils/getTimeInfo';

export default function StopLineItem({lineData, itemIndex, openBusLineModal}) {
  const busName = lineData.busName;
  const nextStop = StopList[lineData.nextStopID].name;
  const {timeHM} = useTime();
  const isNoBus = lineData.nowTime === 'No Bus';
  const now = getTimeInfo(timeHM, lineData.nowTime);
  const next = getTimeInfo(timeHM, lineData.nextTime);

  const handleItem = () => openBusLineModal(itemIndex);

  return (
    <Styles.ItemPressable onPress={handleItem}>
      <Styles.ItemBusInfo>
        <Styles.ItemBusText>{busName}</Styles.ItemBusText>
        <Styles.BusHeadingText>heading to {nextStop}</Styles.BusHeadingText>
      </Styles.ItemBusInfo>

      <Styles.TimeInfo>
        <Styles.TimeText noBus={isNoBus}>{now}</Styles.TimeText>

        {!isNoBus && <Styles.TimeText>{next}</Styles.TimeText>}
      </Styles.TimeInfo>
    </Styles.ItemPressable>
  );
}
