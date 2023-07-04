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

        <S.TitleView>
          <S.TitleText>Gate Info</S.TitleText>
        </S.TitleView>

        {Object.keys(C.GateInfo).map(title => {
          return (
            <GateInfo
              title={title}
              MF={C.GateInfo[title].MF}
              SS={C.GateInfo[title].SS}
              key={title}
            />
          );
        })}
      </S.Modal>
    </Modal>
  );
}

export function GateInfo({title, MF, SS}) {
  return (
    <S.GateView>
      <S.GateHeaderView>
        <S.GateHeaderText>{title}</S.GateHeaderText>
      </S.GateHeaderView>

      <S.GateItemView>
        <S.GateTimeView>
          <S.GateItemText>Mon-Fri</S.GateItemText>
          <S.GateItemText style={{textAlign: 'center'}}>{MF}</S.GateItemText>
        </S.GateTimeView>
        <S.GateTimeView>
          <S.GateItemText>Sun-Sat</S.GateItemText>
          <S.GateItemText style={{textAlign: 'center'}}>{SS}</S.GateItemText>
        </S.GateTimeView>
      </S.GateItemView>
    </S.GateView>
  );
}
