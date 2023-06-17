import styled, {css} from 'styled-components/native';
import {
  WIDTH,
  DefaultFontBold,
  DefaultBorderRadius,
  DefaultText,
} from './GlobalStyle';
import theme from './theme';

const BarTop = 24;
const BarLeft = 16;
const BarWidth = WIDTH - BarLeft * 2;
const BarHeight = 48;
const BarAreaMarginTop = `${BarHeight + BarTop * 2}px`;

const BarStyle = css`
  position: absolute;
  top: ${BarTop}px;
  left: ${BarLeft}px;
  width: ${BarWidth}px;
  height: ${BarHeight}px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: ${DefaultBorderRadius};
  background-color: ${({theme}) => theme.color.background};
`;

const BarTextStyle = css`
  width: ${BarWidth * 0.8}px;
  ${DefaultText}
`;

export const SearchBar = styled.Pressable`
  ${BarStyle};
  elevation: 4;
`;

export const SearchBarText = styled.Text`
  ${BarTextStyle};
`;

export const Modal = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.color.background};
`;

export const ModalBar = styled.View`
  ${BarStyle};
  border: 1px solid ${({theme}) => theme.color.border};
`;

export const BarTextInput = styled.TextInput.attrs(props => ({
  placeholderTextColor: theme.color.lightTextBlack,
}))`
  ${BarTextStyle};
  font-weight: ${DefaultFontBold};
`;

export const ResultScrollView = styled.ScrollView`
  margin-top: ${BarAreaMarginTop};
`;

export const ResultPressable = styled.Pressable`
  height: ${BarHeight}px;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 0.4px;
  border-bottom-color: ${({theme}) => theme.color.border};
`;

export const ResultImgView = styled.View`
  width: ${BarWidth * 0.1}px;
  height: ${BarHeight}px;
  margin-left: ${BarLeft}px;
  justify-content: center;
  align-items: center;
`;

export const ResultImg = styled.Image`
  width: 50%;
  height: 50%;
`;

export const ResultText = styled.Text`
  ${BarTextStyle};
  margin-right: ${BarLeft}px;
`;
