import styled from 'styled-components/native';
import {
  HEIGHT,
  BarTop,
  BarLeft,
  DefaultFontBold,
  DefaultBorderRadius,
  WIDTH,
} from './GlobalStyle';

export const Modal = styled.Pressable`
  height: ${HEIGHT * 0.5}px;
  border-radius: ${DefaultBorderRadius}px;
  background-color: ${({theme}) => theme.color.background};
`;

export const Header = styled.View`
  height: ${BarTop * 3 + 32}px;
  justify-content: center;
  align-items: center;
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

export const HandleBar = styled.View`
  width: 24%;
  height: 4px;
  margin-bottom: ${BarTop}px;
  align-self: center;
  background-color: ${({theme}) => theme.color.border};
  border-radius: ${DefaultBorderRadius}px;
`;

export const StopLineList = styled.ScrollView``;

export const ItemPressable = styled.Pressable`
  padding: ${BarTop}px ${BarLeft}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.color.border};
`;

export const InfoView = styled.View`
  height: 48px;
  justify-content: center;
`;

export const BusText = styled.Text`
  width: ${WIDTH - 120}px;
  line-height: 24px;
  color: ${({theme}) => theme.color.textBlack};
  font-size: ${({theme}) => theme.fontSize.md};
  font-weight: ${DefaultFontBold};
`;

export const BusHeadingText = styled.Text`
  color: ${({theme}) => theme.color.lightTextBlack};
  font-size: ${({theme}) => theme.fontSize.sm};
`;

export const TimeText = styled.Text<{noBus?: boolean}>`
  width: 120px;
  line-height: 24px;
  color: ${props =>
    props.noBus
      ? ({theme}) => theme.color.lightTextBlack
      : ({theme}) => theme.color.orange};
  font-size: ${({theme}) => theme.fontSize.md};
`;
