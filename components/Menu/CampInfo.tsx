import React from 'react';
import Modal from '../Modal';
import * as S from '../../styles/MenuStyle';
import * as C from '../../utils/constants';
import * as T from '../../utils/types';
import {Text} from 'react-native';

export default function CampInfo(props) {
  const {isVisible, closeFunction} = props;
  return (
    <Modal isVisible={isVisible} closeFunction={closeFunction}>
      <S.Modal>
        <S.Header>
          <S.HeaderText>Camp Information</S.HeaderText>
        </S.Header>
        <S.ItemTextHeader>Gate Info</S.ItemTextHeader>
        <S.ItemView>
          <S.ItemTextBold>Walker/Gate4</S.ItemTextBold>
          <S.ItemText>1900-1900</S.ItemText>
        </S.ItemView>
      </S.Modal>
    </Modal>
  );
}
