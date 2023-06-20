import React from 'react';
import {SafeAreaView} from 'react-native';
import {RecoilRoot} from 'recoil';
import {ThemeProvider} from 'styled-components/native';
import MapWebView from './components/MapWebView/MapWebView';
import SearchBar from './components/SearchBar/SearchBar';
import StopInfo from './components/BusStop/StopInfo';
import theme from './styles/theme';

function App(): JSX.Element {
  // TODO redesign osm
  return (
    <RecoilRoot>
      <SafeAreaView style={{flex: 1}}>
        <ThemeProvider theme={theme}>
          <MapWebView />
          <SearchBar />
          <StopInfo />
        </ThemeProvider>
      </SafeAreaView>
    </RecoilRoot>
  );
}

export default App;
