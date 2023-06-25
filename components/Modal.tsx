import React from 'react';
import ReactNativeModal from 'react-native-modal';
import * as S from '../../styles/BusStopStyle';
import * as C from '../../utils/constants';
import * as T from '../../utils/types';

export default function Modal({children, isVisible, closeFunction}) {
  return (
    <ReactNativeModal
      isVisible={isVisible}
      backdropOpacity={0.5}
      onBackButtonPress={closeFunction}
      onBackdropPress={closeFunction}
      style={{margin: 0, justifyContent: 'flex-end'}}>
      {children}
    </ReactNativeModal>
  );
}
