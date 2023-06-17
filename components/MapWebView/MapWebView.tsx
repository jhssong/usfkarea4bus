import React, {useRef} from 'react';
import WebView from 'react-native-webview';
import useWebView from '../../utils/hooks/useWebView';
import {CheckWebViewErrorScript} from '../../utils/constants';

export default function MapWebView(): JSX.Element {
  let webviewRef = useRef<WebView>(null);
  const {receiveDataFromWebView} = useWebView(webviewRef);

  return (
    <WebView
      ref={webviewRef}
      allowFileAccessFromFileURLs={true}
      onMessage={receiveDataFromWebView}
      source={{uri: 'file:///android_asset/Web.bundle/index.html'}}
      injectedJavaScriptBeforeContentLoaded={CheckWebViewErrorScript}
    />
  );
}
