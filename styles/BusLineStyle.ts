import styled from 'styled-components/native';
import {
  HEIGHT,
  BarTop,
  BarLeft,
  BarWidth,
  DefaultFontBold,
  BarAreaMarginTop,
} from './GlobalStyle';

export const Modal = styled.Pressable`
  height: ${HEIGHT}px;
  background-color: ${({theme}) => theme.color.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${BarTop * 2 + 24}px;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  padding: ${BarTop}px ${BarLeft}px;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.color.border};
`;

export const HeaderText = styled.Text`
  line-height: 24px;
  color: ${({theme}) => theme.color.textBlack};
  font-size: ${({theme}) => theme.fontSize.lg};
  font-weight: ${DefaultFontBold};
`;

export const TimeText = styled.Text<{noBus?: boolean}>`
  color: ${props =>
    props.noBus
      ? ({theme}) => theme.color.lightTextBlack
      : ({theme}) => theme.color.orange};
  font-size: ${({theme}) => theme.fontSize.md};
  line-height: 24px;
`;

export const DetailList = styled.ScrollView``;

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
  width: 30%;
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
  margin-top: ${props => (props.isStart || props.isStart ? 36 : 0)}px;
  height: ${props => (props.isEnd || props.isStart ? 36 : 71)}px;
  background-color: ${({theme}) => theme.color.line};
`;

export const DetailInfoView = styled.View`
  width: 70%;
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.color.border};
`;

export const DetailInfoTextView = styled.View`
  flex-direction: column;
`;

export const DetailCampText = styled.Text`
  color: ${({theme}) => theme.color.lightTextBlack};
  font-size: ${({theme}) => theme.fontSize.sm};
`;

export const DetailNameText = styled.Text`
  color: ${({theme}) => theme.color.textBlack};
  font-size: ${({theme}) => theme.fontSize.md};
`;
