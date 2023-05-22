import React from 'react';
import {useRef} from 'react';
import WebView from 'react-native-webview';
import {CheckWebViewErrorScript} from '../../utils/constants';
import useWebView from '../../utils/hooks/useWebView';

export default function MapWebView(): JSX.Element {
  let webviewRef = useRef<WebView>(null);
  const {receiveDataFromWebView} = useWebView(webviewRef);

  // TODO [WebView/low] add requestAuthorization function at config page, before then lib will be check permission automatically

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
