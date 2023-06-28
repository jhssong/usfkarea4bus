import React from 'react';
import Modal from '../Modal';
import * as S from '../../styles/MenuStyle';
import * as C from '../../utils/constants';
import * as T from '../../utils/types';

export default function About(props) {
  const {isVisible, closeFunction} = props;
  return (
    <Modal isVisible={isVisible} closeFunction={closeFunction}>
      <S.Modal>
        <S.Header>
          <S.HeaderText>About</S.HeaderText>
        </S.Header>
      </S.Modal>
    </Modal>
  );
}
