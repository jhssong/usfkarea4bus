import React from 'react';
import * as Styles from '../../styles/BusStopStyle';

export default function BusStopLineItem({LineData}) {
  const busName = LineData.busName;
  const nextStop = LineData.nextStop;
  const time = LineData.time;
  const nowTime = getColonTime(LineData.nowTime);
  const nextTime = getColonTime(LineData.nextTime);
  const nowLeft = getLeftTime(time, nowTime);
  const nextLeft = getLeftTime(time, nextTime);
  // TODO [med] add BusLine Route Modal
  return (
    <Styles.ItemPressable>
      <Styles.BusInfo>
        <Styles.BusNameText>{busName}</Styles.BusNameText>
        <Styles.BusHeadingText>heading to {nextStop}</Styles.BusHeadingText>
      </Styles.BusInfo>

      <Styles.TimeInfo>
        <Styles.TimeText noBus={nowTime === 'No Bus'}>
          {nowTime} {nowLeft}
        </Styles.TimeText>

        {nextTime !== 'No Bus' && (
          <Styles.TimeText noBus={false}>
            {nextTime} {nextLeft}
          </Styles.TimeText>
        )}
      </Styles.TimeInfo>
    </Styles.ItemPressable>
  );
}

function getColonTime(busTime: string): string {
  if (busTime === 'No Bus') return 'No Bus';
  return busTime.slice(0, 2) + ':' + busTime.slice(2, 4);
}

function getLeftTime(time: string, busTime: string): string {
  if (busTime === 'No Bus') return '';
  const timeH = Number(time.slice(0, 2));
  const timeM = Number(time.slice(2, 4));
  const busTimeH = Number(busTime.slice(0, 2));
  const busTimeM = Number(busTime.slice(3, 5));

  let leftHour = 0,
    leftMin = 0,
    res = '';

  if (busTimeH > timeH && busTimeM > timeM) {
    leftHour = busTimeH - timeH;
    leftMin = busTimeM - timeM;
  } else if (busTimeH > timeH && busTimeM <= timeM) {
    leftHour = busTimeH - timeH - 1;
    leftMin = 60 - (timeM - busTimeM);
  } else if (busTimeH == timeH) {
    leftMin = busTimeM - timeM;
  }

  if (leftMin === 60) res = `(${leftHour + 1}h)`;
  if (leftMin === 0) res = `(now)`;
  else if (leftHour != 0) res = `(${leftHour}h ${leftMin}m)`;
  else res = `(${leftMin}m)`;

  return res;
}
