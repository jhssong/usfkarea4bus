import styled from 'styled-components/native';
import {
  Header,
  HeaderText,
  TimeText,
  DefaultLightText,
  DefaultText,
} from './GlobalStyle';

export const Modal = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.color.background};
`;

export {Header, HeaderText, TimeText};

export const DetailList = styled.ScrollView.attrs(props => ({
  contentContainerStyle: {
    paddingVertical: 60,
  },
}))``;

export const DetailPressable = styled.Pressable<{isPoint: boolean}>`
  height: 70px;
  flex-direction: row;
  align-items: center;
  background-color: ${props =>
    props.isPoint
      ? ({theme}) => theme.color.lightBlue
      : ({theme}) => theme.color.background};
`;

export const LineView = styled.View`
  width: 24%;
  height: 71px;
  align-items: center;
`;

export const LinePoint = styled.Image`
  position: absolute;
  top: 26px;
  width: 16px;
  height: 16px;
  z-index: 10;
  background-color: transparent;
`;

export const BusLine = styled.View<{isStart: boolean; isEnd: boolean}>`
  width: 4px;
  margin-top: ${props => (props.isStart ? 36 : 0)}px;
  height: ${props => (props.isEnd || props.isStart ? 36 : 71)}px;
  background-color: ${({theme}) => theme.color.line};
`;

export const InfoView = styled.View`
  width: 76%;
  height: 100%;
  padding: 14px 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.color.border};
`;

export const InfoTextView = styled.View`
  flex-direction: column;
`;

export const CampText = styled.Text`
  ${DefaultLightText}
`;

export const NameText = styled.Text`
  ${DefaultText}
`;
