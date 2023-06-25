import React, {Component, useCallback} from 'react';
import {Alert, Linking} from 'react-native';
import {useSetRecoilState} from 'recoil';
import {selectedCampState} from '../../stores/atom';
import ReactNativeModal from 'react-native-modal';
import * as S from '../../styles/MenuStyle';
import * as C from '../../utils/constants';
import * as T from '../../utils/types';

const supportedURL = 'https://google.com';

const unsupportedURL = 'slack://open?team=123456';

export default function Menu({isVisible, closeFunction}) {
  const setSelectedCamp = useSetRecoilState(selectedCampState);

  function moveToCamp(id: string) {
    setSelectedCamp(id);
    closeFunction();
  }

  return (
    <ReactNativeModal
      isVisible={isVisible}
      animationIn="slideInLeft"
      animationOut="slideOutLeft"
      backdropOpacity={0.5}
      onBackButtonPress={closeFunction}
      onBackdropPress={closeFunction}
      style={{flex: 1, margin: 0}}>
      <S.Modal>
        <S.MenuItem>
          <S.MenuText>Move to Camp</S.MenuText>
        </S.MenuItem>

        <CampSelection moveToCamp={moveToCamp} />

        <Feedback />

        <S.MenuItem>
          <S.MenuText>About</S.MenuText>
        </S.MenuItem>
      </S.Modal>
    </ReactNativeModal>
  );
}

const CampSelection = ({moveToCamp}) => {
  return (
    <>
      {Object.keys(C.CampList).map(id => {
        return (
          <S.MenuItem onPress={() => moveToCamp(id)} key={id}>
            <S.MenuSubText>ㄴ Camp {C.CampList[id]}</S.MenuSubText>
          </S.MenuItem>
        );
      })}
    </>
  );
};

const Feedback = () => {
  const email = 'jhssong02@gmail.com';
  const subject = `[UsfkArea4] Feedback`;
  const body = ``;

  let url = `mailto:${email}?subject=${subject}&body=${body}`;

  async function sendEmail() {
    const isValid = await Linking.canOpenURL(url);

    if (isValid) await Linking.openURL(url);
    // TODO if user didn't set default email app, then how?
    else await Linking.openURL(url);
  }

  return (
    <S.MenuItem onPress={sendEmail}>
      <S.MenuText>Feedback</S.MenuText>
    </S.MenuItem>
  );
};
