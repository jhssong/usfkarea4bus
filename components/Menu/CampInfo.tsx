import React from 'react';
import Modal from '../Modal';
import * as S from '../../styles/MenuStyle';
import * as C from '../../utils/constants';
import * as T from '../../utils/types';

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
            <TimeInfo title={title} data={C.GateInfo[title]} key={title} />
          );
        })}

        <S.TitleView>
          <S.TitleText>Barber Shop</S.TitleText>
        </S.TitleView>

        {Object.keys(C.BarberShopInfo).map(title => {
          return (
            <TimeInfo
              title={title}
              data={C.BarberShopInfo[title]}
              key={title}
            />
          );
        })}
      </S.Modal>
    </Modal>
  );
}

function TimeInfo({title, data}) {
  return (
    <S.TimeInfoView>
      <S.TimeHeaderView>
        <S.TimeHeaderText>{title}</S.TimeHeaderText>
      </S.TimeHeaderView>

      <S.TimeView>
        {Object.keys(data).map(timeRange => {
          return (
            <S.TimeItemView key={timeRange}>
              <S.TimeItemRangeText>{timeRange}</S.TimeItemRangeText>
              <S.TimeItemText>{data[timeRange]}</S.TimeItemText>
            </S.TimeItemView>
          );
        })}
      </S.TimeView>
    </S.TimeInfoView>
  );
}
