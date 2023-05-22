import React from 'react';
import ReactNativeModal from 'react-native-modal';

export default function ModalView({children, isVisible, closeFunction}) {
  return (
    <ReactNativeModal
      isVisible={isVisible}
      backdropOpacity={0.5}
      onBackButtonPress={closeFunction}
      style={{margin: 0}}>
      {children}
    </ReactNativeModal>
  );
}
