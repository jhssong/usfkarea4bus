# UsfkArea4Bus 개발 일지

## WebView CORS 문제 (23.05.10.)

### Problem

```
Access to script at 'file:///C:.../UsfkArea4Bus/html/Web.bundle/index.js' from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, isolated-app, chrome-extension, chrome, https, chrome-untrusted.
```

index.html 파일에서 index.js를 불러올 때 CORS 문제가 발생했다. CORS는 브라우저가 웹에서 로컬 파일에 접근하지 못하도록 하기 위해 자신의 출처와 동일한 리소스만 불러올 수 있게하는 정책이다.
이를 해결하기 위해 찾아본 결과 아래의 해결책을 얻었다.

### Solution

https://github.com/react-native-webview/react-native-webview/issues/570

```
if anyone comes here, here is the code that worked for me
allowUniversalAccessFromFileURLs= {true} for IOS
```

[react-native-webview allowUniversalAccessFromFileURLS](https://github.com/react-native-webview/react-native-webview/blob/master/docs/Reference.md#allowUniversalAccessFromFileURLs) 설명을 보면 다음과 같이 적혀 있다.

```
Boolean that sets whether JavaScript running in the context of a file scheme URL should be allowed to access content from any origin. Including accessing content from other file scheme URLs. The default value is false.
```

나는 단순히 파일만 불러올 수 있으면 되기에 `allowFileAccessFromFileURLs`를 사용하였다.

```
<WebView
    allowFileAccessFromFileURLs={true}
    source={{ uri: 'file:///android_asset/Web.bundle/index.html' }}
/>
```

CORS 문제 없이 정상적으로 잘 작동한다.

## 새로운 문제(날짜)

### Problem

```
Error Code
```

### Solution

```
Solution Code
```
