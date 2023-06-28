import React, {useState} from 'react';
import {Alert, Linking} from 'react-native';
import {useSetRecoilState} from 'recoil';
import {selectedCampState} from '../../stores/atom';
import * as S from '../../styles/MenuStyle';
import * as C from '../../utils/constants';
import * as T from '../../utils/types';
import Modal from '../Modal';
import CampInfo from './CampInfo';
import About from './About';

export default function Menu({isVisible, closeFunction}) {
  const setSelectedCamp = useSetRecoilState(selectedCampState);
  const [infoVisible, setInfoVisible] = useState<boolean>(false);
  const [aboutVisible, setAboutVisble] = useState<boolean>(false);

  function moveToCamp(id: string) {
    setSelectedCamp(id);
    closeFunction();
  }

  const openCampInfoModal = () => setInfoVisible(prev => !prev);
  const closeCampInfoModal = () => setInfoVisible(prev => !prev);

  const openAboutModal = () => setAboutVisble(prev => !prev);
  const closeAboutModal = () => setAboutVisble(prev => !prev);

  return (
    <Modal
      isVisible={isVisible}
      animationIn="slideInLeft"
      animationOut="slideOutLeft"
      closeFunction={closeFunction}>
      <S.MenuModal>
        <CampSelection moveToCamp={moveToCamp} />

        <S.MenuItem onPress={openCampInfoModal}>
          <S.MenuText>Camp Information</S.MenuText>
        </S.MenuItem>
        <CampInfo isVisible={infoVisible} closeFunction={closeCampInfoModal} />

        <Feedback />

        <S.MenuItem onPress={openAboutModal}>
          <S.MenuText>About</S.MenuText>
        </S.MenuItem>
        <About isVisible={aboutVisible} closeFunction={closeAboutModal} />
      </S.MenuModal>
    </Modal>
  );
}

const CampSelection = ({moveToCamp}) => {
  return (
    <>
      <S.MenuItem>
        <S.MenuText>Move to Camp</S.MenuText>
      </S.MenuItem>

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
    const openURL = async () => await Linking.openURL(url);

    if (isValid) openURL;
    else {
      // TODO if user didn't set default email app, then how?
      Alert.alert('Error', 'Check your default Email App', [
        {text: 'Cancel'},
        {text: 'Open URL', onPress: openURL},
      ]);
    }
  }

  return (
    <S.MenuItem onPress={sendEmail}>
      <S.MenuText>Feedback</S.MenuText>
    </S.MenuItem>
  );
};
