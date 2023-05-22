import styled, {css} from 'styled-components/native';
import {BarAreaMarginTop, BarLeft, BarTop, BarWidth} from './GlobalStyle';

const defaultBarStyle = css`
  position: absolute;
  top: ${BarTop}px;
  left: ${BarLeft}px;
  width: ${BarWidth}px;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: ${({theme}) => theme.bar.barBorderRadius};
  background-color: ${({theme}) => theme.color.background};
`;

const defaultBarTextStyle = css`
  width: 80%;
  margin: 0;
  padding: 0;
  color: ${({theme}) => theme.color.textBlack};
  font-size: ${({theme}) => theme.fontSize.md};
`;

export const BarPressable = styled.Pressable`
  ${defaultBarStyle};
  elevation: 4;
`;

export const BarImgPressable = styled.Pressable`
  width: 10%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
export const BarImg = styled.Image`
  width: 40%;
  height: 40%;
`;

export const BarText = styled.Text`
  ${defaultBarTextStyle};
`;

export const BarTextInput = styled.TextInput`
  ${defaultBarTextStyle};
`;

export const ModalBar = styled.View`
  ${defaultBarStyle};
  border: 1px solid ${({theme}) => theme.color.border};
`;

export const ModalView = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.color.background};
`;

export const ResultScrollView = styled.ScrollView`
  margin-top: ${BarAreaMarginTop}px;
`;

export const ResultPressable = styled.Pressable`
  flex-direction: row;
  padding: 14px ${4 + BarLeft}px;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.color.border};
`;

export const ResultImgView = styled.View`
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background-color: ${({theme}) => theme.color.blue};
`;

export const ResultImg = styled.Image`
  width: 12px;
  height: 12px;
`;

export const ResultText = styled.Text`
  ${defaultBarTextStyle};
  margin-left: ${4 + BarLeft}px;
`;
