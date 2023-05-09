import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MapWebView from './components/MapWebView/MapWebView';

function App(): JSX.Element {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MapWebView />
    </SafeAreaView>
  );
}

export default App;
