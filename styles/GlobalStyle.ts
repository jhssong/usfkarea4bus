import {Dimensions} from 'react-native';
import styled, {css} from 'styled-components/native';

export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;

export const BarTop = 16;
export const BarLeft = 8;
export const BarWidth = WIDTH - BarLeft * 2;
export const BarHeight = 48;

export const BarTextAreaWidth = BarWidth * 0.8;
export const BarTextAreaHorizontal = BarWidth * 0.01;
export const BarImgViewSize = BarWidth * 0.1;

export const BarAreaMarginTop = BarHeight + BarTop * 2;

export const DefaultBorderRadius = 10;
export const DefaultFontBold = 600;
