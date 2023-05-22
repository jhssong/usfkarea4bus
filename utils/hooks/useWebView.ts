import React from 'react';
import {useEffect, useState} from 'react';
import {WebView, WebViewMessageEvent} from 'react-native-webview';
import {useRecoilState} from 'recoil';
import CampLatLng from '../../data/CampLatLng';
import StopLatLng from '../../data/StopLatLng';
import {selectedStopState} from '../../stores/atom';
import getCurrentLatLng from '../getCurrentLatLng';

type webViewData = {
  type: string;
  data: any; // TODO [WebView/low] need type for CampLatLng
};

export default function useWebView(webviewRef: React.RefObject<WebView<{}>>) {
  const [selectedStop, setSelectedStop] = useRecoilState(selectedStopState);
  const [webviewActivated, setWebViewActivated] = useState<boolean>(false);

  function receiveDataFromWebView(event: WebViewMessageEvent) {
    const data: string = event.nativeEvent.data;
    if (data === 'WebView Activated') {
      setWebViewActivated(true);
    } else setSelectedStop(data);
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

    if (typeof nearestStop === 'string') setSelectedStop(nearestStop);
  }

  // initalize map config
  useEffect(() => {
    if (webviewActivated === false) return;
    sendDataToWebView({
      type: 'map',
      data: {CampLatLng, StopLatLng},
    });
  }, [webviewActivated]);

  useEffect(() => {
    if (selectedStop === null) return;
    sendDataToWebView({
      type: 'stop',
      data: selectedStop,
    });
  }, [selectedStop]);

  return {receiveDataFromWebView, getNearestStop};
}
