import React from 'react';
import WebView from 'react-native-webview';


export default function MapWebView(): JSX.Element {
    return (
        <WebView
            allowFileAccessFromFileURLs={true}
            source={{ uri: 'file:///android_asset/Web.bundle/index.html' }}
        />
    )
}