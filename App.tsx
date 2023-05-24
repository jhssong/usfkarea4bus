import React from 'react';
import {SafeAreaView} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import MapWebView from './components/MapWebView/MapWebView';
import SearchBar from './components/SearchBar/SearchBar';
import theme from './styles/theme';
import {RecoilRoot} from 'recoil';
import BusStopInfo from './components/BusStop/BusStopInfo';

function App(): JSX.Element {
  // TODO [low] add menu for gate info
  // TODO [low] redesign osm
  return (
    <RecoilRoot>
      <SafeAreaView style={{flex: 1}}>
        <ThemeProvider theme={theme}>
          <MapWebView />
          <SearchBar />
          <BusStopInfo />
        </ThemeProvider>
      </SafeAreaView>
    </RecoilRoot>
  );
}

export default App;
