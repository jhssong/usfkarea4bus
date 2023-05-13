import {useRef, useEffect, useState} from 'react';
import WebView, {WebViewMessageEvent} from 'react-native-webview';
import campLatLng from '../../assets/data/campLatLng';
import stopLatLng from '../../assets/data/stopLatLng';
import getCurrentLatLng from '../../utils/getCurrentLatLng';

type webViewData = {
  type: string;
  data: any; // TODO need type for campLatLng
};

const checkWebViewError = `
window.onerror = function(message, sourcefile, lineno, colno, error) {
  alert("Message: " + message + " - Source: " + sourcefile + " Line: " + lineno + ":" + colno);
  return true;
};
true;
`;

export default function MapWebView(): JSX.Element {
  const [webviewActivated, setWebViewActivated] = useState<boolean>(false);
  const [nearestStop, setNearestStop] = useState<string>();
  let webviewRef = useRef<WebView>(null);

  function receiveDataFromWebView(event: WebViewMessageEvent) {
    const data: string = event.nativeEvent.data;
    if (data === 'WebView Activated') {
      setWebViewActivated(true);
    }
    console.log(data);
  }

  function sendDataToWebView(data: webViewData) {
    if (webviewRef.current === null) return;
    webviewRef.current.postMessage(JSON.stringify(data));
  }

  async function getNearestStop() {
    let nearestStop,
      minDistance,
      latitude: number = 0,
      longitude: number = 0;

    const data = await getCurrentLatLng();
    if (data) {
      latitude = data.latitude;
      longitude = data.longitude;
    }

    for (let [stopNum, stopCoord] of Object.entries(stopLatLng)) {
      const [x, y] = stopCoord;
      const distance =
        Math.pow(Math.abs(latitude - x), 2) + Math.pow(Math.abs(longitude - y), 2);
      if (typeof minDistance === 'undefined') minDistance = distance;
      else if (distance < minDistance) {
        minDistance = distance;
        nearestStop = stopNum;
      }
    }

    if (typeof nearestStop === 'string') setNearestStop(nearestStop);
    else throw new Error('Invalid Type');
  }

  // TODO add requestAuthorization function at config page, before then lib will be check permission automatically

  // initalize map config
  useEffect(() => {
    if (webviewActivated) {
      getNearestStop();
      console.log('send map Data');
      sendDataToWebView({
        type: 'map',
        data: {campLatLng, stopLatLng},
      });
    }
  }, [webviewActivated]);

  useEffect(() => {
    if (nearestStop !== undefined) {
      console.log('send stop data');
      sendDataToWebView({
        type: 'stop',
        data: nearestStop,
      });
    }
  }, [nearestStop]);

  return (
    <WebView
      ref={webviewRef}
      allowFileAccessFromFileURLs={true}
      onMessage={receiveDataFromWebView}
      source={{uri: 'file:///android_asset/Web.bundle/index.html'}}
      injectedJavaScriptBeforeContentLoaded={checkWebViewError}
    />
  );
}
