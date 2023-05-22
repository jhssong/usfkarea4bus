import StopLatLng from '../data/StopLatLng';
import getCurrentLatLng from './getCurrentLatLng';

// TODO [WebView/low] add requestAuthorization function at config page
export default async function getNearestStop() {
  let nearestStop,
    minDistance,
    latitude: number = 0,
    longitude: number = 0;

  const data = await getCurrentLatLng();
  if (data) {
    latitude = data.latitude;
    longitude = data.longitude;
  }

  for (let [stopNum, stopCoord] of Object.entries(StopLatLng)) {
    const [x, y] = stopCoord;
    const distance =
      Math.pow(Math.abs(latitude - x), 2) +
      Math.pow(Math.abs(longitude - y), 2);
    if (typeof minDistance === 'undefined') minDistance = distance;
    else if (distance < minDistance) {
      minDistance = distance;
      nearestStop = stopNum;
    }
  }

  if (typeof nearestStop === 'string') return nearestStop;
}
