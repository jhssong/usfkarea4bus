import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';

export default async function getCurrentLatLng() {
  const opt = {enableHighAccuracy: true, timeout: 15000, maximumAge: 0};
  const getCurrentPosition = (): Promise<GeolocationResponse> =>
    new Promise((resolve, error) =>
      Geolocation.getCurrentPosition(resolve, error, opt),
    );

  try {
    const positionValue = await getCurrentPosition();
    return {
      latitude: positionValue.coords.latitude,
      longitude: positionValue.coords.longitude,
    };
  } catch (error) {
    console.error(error);
  }
}
