# UsfkArea4Bus 개발 일지

## WebView CORS 문제 (23.05.10)

### Problem

```
Access to script at 'file://.../UsfkArea4Bus/html/Web.bundle/index.js' from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, isolated-app, chrome-extension, chrome, https, chrome-untrusted.
```

index.html 파일에서 index.js를 불러올 때 CORS 문제가 발생했다. CORS는 브라우저가 웹에서 로컬 파일에 접근하지 못하도록 하기 위해 자신의 출처와 동일한 리소스만 불러올 수 있게하는 정책이다.
이를 해결하기 위해 찾아본 결과 아래의 해결책을 얻었다.

### Solution

```
if anyone comes here, here is the code that worked for me
allowUniversalAccessFromFileURLs= {true} for IOS
```

[Issues #570](https://github.com/react-native-webview/react-native-webview/issues/570)를 참고하여 해당 props를
react-native-webview의 Reference.md 파일에서 [allowUniversalAccessFromFileURLS](https://github.com/react-native-webview/react-native-webview/blob/master/docs/Reference.md#allowUniversalAccessFromFileURLs) 확인해보니 다음과 같이 적혀 있다.

```bash
Boolean that sets whether JavaScript running in the context of a file scheme URL should be allowed to access content from any origin. Including accessing content from other file scheme URLs. The default value is false.
```

나는 단순히 파일만 불러올 수 있으면 되기에 `allowFileAccessFromFileURLs`를 사용하였다.

```js
<WebView
  allowFileAccessFromFileURLs={true}
  source={{uri: 'file:///android_asset/Web.bundle/index.html'}}
/>
```

이후 CORS 문제 없이 정상적으로 잘 작동하였다.

---

## styled-components 설치 문제 (23.05.13)

### Problem

[공식문서](https://styled-components.com/docs/basics#installation)에서 알려준 방법대로 설치를 진행하니 아래와 같은 문제가 발생하였다.

```bash
$ npm install styled-components
npm ERR! Cannot read properties of null (reading 'edgesOut')

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\jhssong\AppData\Local\npm-cache\_logs\2023-05-14T07_00_21_747Z-debug-0.log
```

### Solution

[Issue #3998](https://github.com/styled-components/styled-components/issues/3998)를 보니 현재 버전 이슈가 존재했다. 그래서 stable한 @5.3.1 버전을 설치하니 정상적으로 설치되었다.

### Problem

이후 [공식문서](https://styled-components.com/docs/api#typescript)에서 알려주는 typescript 설정 방법대로 설치를 진행하니 이번엔 다음과 같은 문제가 발생하였다.

```
Could not find a declaration file for module 'styled-components/native'. 'c:/.../UsfkArea4Bus/node_modules/styled-components/native/dist/styled-components.native.cjs.js' implicitly has an 'any' type.
```

### Solution

해당 오류와 관련된 [공식문서](https://styled-components.com/docs/faqs#missing-declarations-for-styledcomponentsnative)를 찾아보았지만 도움이 되지 않았고, 많은 검색 끝에도 정확한 해답을 찾지 못해서 Chat GPT에게 질문하였다.

If the previous solution didn't work for you, there might be a few other things you can try:

1. Ensure that you have installed the latest version of `@types/styled-components-native`. You can do this by running the following command:

   ```bash
   $ npm install --save-dev @types/styled-components-native@latest
   ```

2. Check if you have any conflicting dependencies installed in your project. Conflicting dependencies can cause issues with the types of modules.

3. Make sure that your `tsconfig.json` file is correctly configured to include the `node_modules` folder. You can add the following line to your `tsconfig.json` file:

   ```json
   "include": ["node_modules/**/*"]
   ```

   This will ensure that TypeScript can find the type definitions for the packages installed in your `node_modules` folder.

4. Try running `npm rebuild` or `yarn install` to rebuild your project's dependencies.

5. If none of the above solutions work, you could try manually creating a declaration file for `styled-components/native`. To do this, create a new file called `styled-components-native.d.ts` in the root of your project and add the following contents:

   ```typescript
   declare module 'styled-components/native' {
     import {StyledComponent} from 'styled-components';
     import {ComponentType} from 'react';

     export interface ThemeProps<T> {
       theme?: T;
     }

     export interface DefaultTheme {
       // Define your default theme properties here
     }

     export function useTheme(): DefaultTheme;

     export function withTheme<P extends {theme?: T}, T = DefaultTheme>(
       component: StyledComponent<P, {}, T> | ComponentType<P>,
     ): StyledComponent<P, {}, T>;

     export function isStyledComponent(component: any): boolean;

     export default function styled<
       T extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
     >(
       tag: T,
       options?: object,
     ): StyledComponent<
       React.ComponentPropsWithRef<T>,
       JSX.IntrinsicElements[T] & ThemeProps<DefaultTheme>,
       DefaultTheme
     >;

     // Add additional declarations here if needed
   }
   ```

   This should define the necessary types for `styled-components/native` and resolve the error message.

   I hope one of these solutions works for you. If not, let me know and I'll see if I can help further.

이 중에서 3번 방법을 이용하니 해결되었다.

---

## TextInput focus 시 키보드 이벤트 (23.05.25)

### Problem

TextInput이 focus될 경우 자동적으로 키보드가 떠야하는데 focus 되었음에도 불구하고 키보드가 뜨지 않았다.

### Solution

깃허브 이슈들을 검색해보다가 어떤 한 [코멘트](https://github.com/software-mansion/react-native-screens/issues/472#issuecomment-1239494850)를 보고 코드를 다시 짜봤는데 작동되었다.

```ts
let textInputRef = useRef<TextInput>(null);

useEffect(() => {
    if (textInputRef.current === null) return;
    setTimeout(() => {
      textInputRef.current?.blur();
      textInputRef.current?.focus();
    }, 100);
}, [textInputRef.current]);

return (
  <Styles.BarTextInput
    ref={textInputRef}
    ...
  />
)
```

결론적으론 blur()를 먼저 하고 focus()를 해야한다는건데 아직 명확한 이유는 모르겠다. 나중에 react native를 깊게 다룰 기회가 있다면 한번 공부해보고 싶다.

---

## 새로운 문제(날짜)

### Problem

```
Error Code
```

### Solution

```
Solution Code
```

---

## 새로운 문제(날짜)

### Problem

```
Error Code
```

### Solution

```
Solution Code
```

---
