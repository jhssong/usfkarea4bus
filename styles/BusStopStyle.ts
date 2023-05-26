import styled, {css} from 'styled-components/native';
import {
  BarAreaMarginTop,
  BarImgStyle,
  BarLeft,
  BarTop,
  BarWidth,
  DefaultTextStyle,
  DefaultLightTextStyle,
  HEIGHT,
} from './GlobalStyle';

/**
 * Common Style
 */

export const Modal = styled.Pressable<{full: boolean}>`
  height: ${props => (props.full ? HEIGHT : HEIGHT * 0.4)}px;
  border-radius: ${props =>
    props.full ? 0 : ({theme}) => theme.bar.barBorderRadius};
  background-color: ${({theme}) => theme.color.background};
`;

export const Header = styled.Pressable<{full: boolean}>`
  margin-top: ${props => (props.full ? BarAreaMarginTop - 50 + BarTop : 0)}px;
  justify-content: center;
  padding: 16px ${BarLeft}px 16px
    ${props => (props.full ? BarLeft + 10 : BarLeft)}px;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.color.border};
`;

export const HandleBar = styled.View`
  width: 15%;
  height: 5px;
  margin: 0 0 20px 0;
  align-self: center;
  background-color: ${({theme}) => theme.color.border};
  border-radius: ${({theme}) => theme.bar.barBorderRadius};
`;

export const HeaderText = styled.Text<{full: boolean}>`
  color: ${({theme}) => theme.color.textBlack};
  font-size: ${props =>
    props.full
      ? ({theme}) => theme.fontSize.xl
      : ({theme}) => theme.fontSize.lg};
  font-weight: 600;
`;

/**
 * Style for BackImg.tsx
 */

export const BackPressable = styled.Pressable`
  position: absolute;
  top: ${BarTop}px;
  left: ${BarLeft}px;
  width: ${BarWidth * 0.1}px;
  height: ${BarWidth * 0.1}px;
  flex-direction: row;
  align-items: center;
`;

export const BackImage = styled.Image`
  ${BarImgStyle};
`;

/**
 * Style for TimeHeader.tsx
 */

export const TimeHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px ${BarLeft}px;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.color.border};
`;

export const TimePickerPressable = styled.Pressable``;

export const CheckBoxPressable = styled.Pressable`
  flex-direction: row;
  align-items: center;
`;

export const TimeHeaderText = styled.Text`
  ${DefaultLightTextStyle}
`;

/**
 * Style for StopLineItem.tsx
 */

export const StopLineList = styled.ScrollView``;

export const ItemPressable = styled.Pressable`
  padding: 10px ${BarLeft}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.color.border};
`;

export const ItemBusInfo = styled.View`
  height: 48px;
  justify-content: center;
`;

export const ItemBusText = styled.Text`
  color: ${({theme}) => theme.color.textBlack};
  font-size: ${({theme}) => theme.fontSize.md};
  font-weight: 600;
`;

export const BusHeadingText = styled.Text`
  color: ${({theme}) => theme.color.lightTextBlack};
  font-size: ${({theme}) => theme.fontSize.sm};
`;

export const TimeInfo = styled.View`
  height: 48px;
  justify-content: center;
`;

export const TimeText = styled.Text<{noBus?: boolean}>`
  color: ${props =>
    props.noBus
      ? ({theme}) => theme.color.lightTextBlack
      : ({theme}) => theme.color.orange};
  font-size: ${({theme}) => theme.fontSize.md};
  line-height: 24px;
`;

/**
 * Style for LineDetail.tsx
 */

export const DetailList = styled.ScrollView``;

export const DetailPressable = styled.Pressable`
  height: 48px;
  flex-direction: row;
  align-items: center;
`;

export const BusLineView = styled.View`
  margin: 0 5% 0 15%;
  align-items: center;
`;

export const BusLine = styled.View`
  width: 4px;
  height: 100%;
  background-color: ${({theme}) => theme.color.blue};
`;

export const BusLineBlock = styled.View`
  top: 24px;
  width: 15px;
  height: 15px;
  background-color: black;
  z-index: 1;
`;

export const DetailInfoView = styled.View`
  width: 80%;
  height: 100%;
  padding: 0 16px 0 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.color.border};
`;

export const DetailNameText = styled.Text`
  ${DefaultTextStyle}
`;
