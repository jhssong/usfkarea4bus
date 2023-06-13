import {Dimensions} from 'react-native';
import styled, {css} from 'styled-components/native';

export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;

export const BarTop = 24;
export const BarLeft = 16;
export const BarWidth = WIDTH - BarLeft * 2;
export const BarHeight = 48;

export const DefaultFontBold = 600;
export const DefaultBorderRadius = '10px';

export const Header = styled.View`
  width: 100%;
  padding: 16px 8px;
  justify-content: center;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.color.border};
`;

export const HeaderText = styled.Text`
  color: ${({theme}) => theme.color.textBlack};
  font-size: ${({theme}) => theme.fontSize.lg};
  line-height: ${({theme}) => theme.lineHegiht.lg};
  font-weight: ${DefaultFontBold};
`;

export const TimeText = styled.Text<{noBus?: boolean}>`
  color: ${props =>
    props.noBus
      ? ({theme}) => theme.color.lightTextBlack
      : ({theme}) => theme.color.orange};
  font-size: ${({theme}) => theme.fontSize.md};
  line-height: ${({theme}) => theme.lineHegiht.md};
`;

export const DefaultText = css`
  color: ${({theme}) => theme.color.textBlack};
  font-size: ${({theme}) => theme.fontSize.md};
  line-height: ${({theme}) => theme.lineHegiht.md};
`;

export const DefaultLightText = css`
  color: ${({theme}) => theme.color.lightTextBlack};
  font-size: ${({theme}) => theme.fontSize.sm};
  line-height: ${({theme}) => theme.lineHegiht.sm};
`;
