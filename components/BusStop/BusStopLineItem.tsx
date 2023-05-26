import React, {useEffect} from 'react';
import * as Styles from '../../styles/BusStopStyle';
import * as Constants from '../../utils/constants';
import getTimeInfo from '../../utils/getTimeInfo';
import useTime from '../../utils/hooks/useTime';

export default function BusStopLineItem({
  lineData,
  itemIndex,
  openBusLineModal,
}) {
  const {timeHM} = useTime();
  const busName = lineData.busName;
  const nextStop = Constants.StopList[lineData.nextStopID].name;
  const [nowTime, nowLeft] = getTimeInfo(timeHM, lineData.nowTime);
  const [nextTime, nextLeft] = getTimeInfo(timeHM, lineData.nextTime);

  const handleItem = () => openBusLineModal(itemIndex);

  return (
    <Styles.ItemPressable onPress={handleItem}>
      <Styles.BusInfo>
        <Styles.BusNameText>{busName}</Styles.BusNameText>
        <Styles.BusHeadingText>heading to {nextStop}</Styles.BusHeadingText>
      </Styles.BusInfo>

      <Styles.TimeInfo>
        <Styles.TimeText noBus={nowTime === 'No Bus'}>
          {nowTime} {nowLeft}
        </Styles.TimeText>

        {nextTime !== 'No Bus' && (
          <Styles.TimeText>
            {nextTime} {nextLeft}
          </Styles.TimeText>
        )}
      </Styles.TimeInfo>
    </Styles.ItemPressable>
  );
}
