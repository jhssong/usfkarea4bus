import React from 'react';
import {useEffect, useState} from 'react';
import {WebView, WebViewMessageEvent} from 'react-native-webview';
import {useRecoilState} from 'recoil';
import CampLatLng from '../../data/CampLatLng';
import StopLatLng from '../../data/StopLatLng';
import {selectedStopState} from '../../stores/atom';

type LatLng = {[key: string]: number[]};

type webViewData = {
  type: string;
  data: string | {[key: string]: LatLng};
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

  // initalize map config
  useEffect(() => {
    if (webviewActivated === false) return;
    sendDataToWebView({
      type: 'map',
      data: {CampLatLng, StopLatLng},
    });
  }, [webviewActivated]);

  // pan to selectedStop
  useEffect(() => {
    if (selectedStop === null) return;
    sendDataToWebView({
      type: 'stop',
      data: selectedStop,
    });
  }, [selectedStop]);

  return {receiveDataFromWebView};
}
