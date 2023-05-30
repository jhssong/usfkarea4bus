import styled from 'styled-components/native';
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
  ${DefaultTextStyle}
`;
