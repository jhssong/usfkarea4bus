import {Dimensions} from 'react-native';
import styled, {css} from 'styled-components/native';

export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;

export const BarTop = HEIGHT * 0.02;
export const BarLeft = WIDTH * 0.04;
export const BarWidth = WIDTH - BarLeft * 2;
export const BarAreaMarginTop = 50 + HEIGHT * 0.04;

export const BarImgStyle = css`
  width: 50%;
  height: 50%;
`;

export const DefaultTextStyle = css`
  color: ${({theme}) => theme.color.textBlack};
  font-size: ${({theme}) => theme.fontSize.md};
`;

export const DefaultLightTextStyle = css`
  color: ${({theme}) => theme.color.lightTextBlack};
  font-size: ${({theme}) => theme.fontSize.md};
`;
