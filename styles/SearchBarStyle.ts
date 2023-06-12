import styled, {css} from 'styled-components/native';
import {
  BarTop,
  BarLeft,
  BarWidth,
  BarHeight,
  BarTextAreaWidth,
  BarTextAreaHorizontal,
  BarAreaMarginTop,
  BarImgViewSize,
  DefaultFontBold,
  DefaultBorderRadius,
  WIDTH,
} from './GlobalStyle';

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
  border-radius: ${DefaultBorderRadius}px;
  background-color: ${({theme}) => theme.color.background};
`;

const BarTextStyle = css`
  width: ${BarTextAreaWidth}px;
  height: ${BarHeight}px;
  padding: 0 ${BarTextAreaHorizontal}px;
  align-items: center;
  justify-content: center;
  line-height: ${BarHeight}px;
  color: ${({theme}) => theme.color.textBlack};
  font-size: ${({theme}) => theme.fontSize.md};
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

export const BarTextInput = styled.TextInput`
  ${BarTextStyle};
  font-weight: ${DefaultFontBold};
`;

export const ResultScrollView = styled.ScrollView`
  margin-top: ${BarAreaMarginTop}px;
`;

export const ResultPressable = styled.Pressable`
  height: ${BarHeight}px;
  flex-direction: row;
  align-items: center;
`;

export const ResultImgView = styled.View`
  width: ${BarImgViewSize}px;
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
  width: ${WIDTH - BarImgViewSize - BarLeft}px;
  border-bottom-width: 0.4px;
  border-bottom-color: ${({theme}) => theme.color.border};
`;
