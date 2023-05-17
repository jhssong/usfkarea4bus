import {Dimensions} from 'react-native';
import styled, {css} from 'styled-components/native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const BarTop = HEIGHT * 0.02;
const BarLeft = WIDTH * 0.02;
const BarWidth = WIDTH - BarLeft * 2;

const defaultViewStyle = css`
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

const defaultSearchBarTextStyle = css`
  width: 80%;
  margin: 0;
  padding: 0;
  color: ${({theme}) => theme.color.textBlack};
  font-size: ${({theme}) => theme.fontSize.md};
  line-height: 30px;
`;

export const BarPressable = styled.Pressable`
  ${defaultViewStyle};
  elevation: 4;
`;

export const BarImgPressable = styled.Pressable`
  width: 10%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
export const BarImg = styled.Image`
  width: 16px;
  height: 16px;
`;

export const BarText = styled.Text`
  ${defaultSearchBarTextStyle};
`;

export const BarTextInput = styled.TextInput`
  ${defaultSearchBarTextStyle};
`;

export const ModalBar = styled.View`
  ${defaultViewStyle};
  border: 1px solid ${({theme}) => theme.color.border};
`;

export const ModalView = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.color.background};
`;

export const ResultScrollView = styled.ScrollView`
  margin-top: ${50 + HEIGHT * 0.04}px;
  background-color: ${({theme}) => theme.color.background};
`;

export const ResultPressable = styled.Pressable`
  flex-direction: row;
  align-itmes: center;
  padding: 14px 0 14px ${4 + BarLeft}px;
  align-items: center;
  border-bottom-width: 2px;
  border-bottom-color: ${({theme}) => theme.color.border};
  background-color: ${({theme}) => theme.color.background};
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
  ${defaultSearchBarTextStyle};
  margin-left: ${4 + BarLeft}px;
`;
