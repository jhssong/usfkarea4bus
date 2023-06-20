export default function getTimeInfo(timeHM: string, busTime: string): string {
  if (busTime.length === 0) return ''; // for TMP

  if (busTime === 'x') return 'No Bus';

  const comingTime = `${busTime.slice(0, 2)}:${busTime.slice(2, 4)}`;

  const timeH = Number(timeHM.slice(0, 2));
  const timeM = Number(timeHM.slice(2, 4));
  const busTimeH = Number(busTime.slice(0, 2));
  const busTimeM = Number(busTime.slice(2, 4));

  let leftHour = 0,
    leftMin = 0;

  if (busTimeH > timeH && busTimeM > timeM) {
    leftHour = busTimeH - timeH;
    leftMin = busTimeM - timeM;
  } else if (busTimeH > timeH && busTimeM <= timeM) {
    leftHour = busTimeH - timeH - 1;
    leftMin = 60 - (timeM - busTimeM);
  } else if (busTimeH == timeH) {
    leftMin = busTimeM - timeM;
  } else return 'No Bus';

  let leftTime = '';

  if (leftMin === 60) leftTime = `(${leftHour + 1}h)`;
  if (leftMin === 0) leftTime = `(now)`;
  else if (leftHour != 0) leftTime = `(${leftHour}h ${leftMin}m)`;
  else leftTime = `(${leftMin}m)`;

  return `${comingTime} ${leftTime}`;
}
