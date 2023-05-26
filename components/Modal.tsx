import React from 'react';
import ReactNativeModal from 'react-native-modal';

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
