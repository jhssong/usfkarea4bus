import React from 'react';
import ReactNativeModal from 'react-native-modal';

export default function Modal(props) {
  const {
    children,
    isVisible,
    animationIn = 'slideInUp',
    animationOut = 'slideOutDown',
    closeFunction,
  } = props;

  return (
    <ReactNativeModal
      isVisible={isVisible}
      animationIn={animationIn}
      animationOut={animationOut}
      backdropOpacity={0.5}
      onBackButtonPress={closeFunction}
      onBackdropPress={closeFunction}
      style={{margin: 0, justifyContent: 'flex-end'}}>
      {children}
    </ReactNativeModal>
  );
}
