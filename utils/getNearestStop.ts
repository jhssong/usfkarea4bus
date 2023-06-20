import {StopLatLng} from '../utils/constants';
import getCurrentLatLng from './getCurrentLatLng';

// TODO add requestAuthorization function at config page
export default async function getNearestStop() {
  let nearestStop: string | null = null,
    minDistance: number | null = null,
    latitude = 0,
    longitude = 0;

  const data = await getCurrentLatLng();
  if (data !== null) {
    latitude = data.latitude;
    longitude = data.longitude;
  } else {
    // TODO alert or toast that permission is denied
    return 'CH1';
  }

  for (let [stopNum, stopCoord] of Object.entries(StopLatLng)) {
    const [x, y] = stopCoord;
    const distance =
      Math.pow(Math.abs(latitude - x), 2) +
      Math.pow(Math.abs(longitude - y), 2);

    if (minDistance === null) minDistance = distance;

    if (distance < minDistance) {
      minDistance = distance;
      nearestStop = stopNum;
    }
  }

  if (typeof nearestStop === 'string') return nearestStop;
}
