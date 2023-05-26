import styled from 'styled-components/native';
import {
  BarAreaMarginTop,
  BarLeft,
  BarTop,
  BarWidth,
  HEIGHT,
  WIDTH,
} from './GlobalStyle';
import {BarImg} from './SearchBarStyle';

export const ModalContainer = styled.Pressable`
  height: ${HEIGHT}px;
  flex-direction: column-reverse;
`;

export const ModalView = styled.Pressable<{full: boolean}>`
  height: ${props => (props.full ? HEIGHT : HEIGHT * 0.4)}px;
  border-radius: ${props =>
    props.full ? 0 : ({theme}) => theme.bar.barBorderRadius};
  background-color: ${({theme}) => theme.color.background};
`;

export const Header = styled.Pressable<{full: boolean}>`
  margin-top: ${props => (props.full ? BarAreaMarginTop - 50 + BarTop : 0)}px;
  justify-content: center;
  padding: 16px ${BarLeft}px;
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
  margin-left: ${props => (props.full ? 10 : 0)}px;
  color: ${({theme}) => theme.color.textBlack};
  font-size: ${props =>
    props.full
      ? ({theme}) => theme.fontSize.xl
      : ({theme}) => theme.fontSize.lg};
  font-weight: 600;
`;

export const BackImgPressable = styled.Pressable`
  position: absolute;
  top: ${BarTop}px;
  left: ${BarLeft}px;
  width: ${BarWidth * 0.1}px;
  height: ${BarWidth * 0.1}px;
  flex-direction: row;
  align-items: center;
`;

export const BackImg = BarImg;

export const SubHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 6px ${BarLeft}px;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.color.border};
`;

export const CheckBoxPressable = styled.Pressable`
  flex-direction: row;
  align-items: center;
`;

export const CheckBoxText = styled.Text`
  color: ${({theme}) => theme.color.lightTextBlack};
  font-size: ${({theme}) => theme.fontSize.md};
`;

export const TimePickerPressable = styled.Pressable``;

export const TimePickerText = styled.Text`
  color: ${({theme}) => theme.color.lightTextBlack};
  font-size: ${({theme}) => theme.fontSize.md};
`;

export const BusStopLineList = styled.ScrollView``;

export const ItemPressable = styled.Pressable`
  padding: 10px ${BarLeft}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.color.border};
`;

export const BusInfo = styled.View`
  height: 48px;
  justify-content: center;
`;

export const BusNameText = styled.Text`
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

export const StopList = styled.ScrollView``;

export const LineDetail = styled.Pressable`
  height: 100px;
  padding: 0 16px;
  flex-direction: row;
`;

export const BusLine = styled.View`
  width: 4px;
  height: 100%;
  margin-left: ${BarLeft + 30}px;
  background-color: ${({theme}) => theme.color.blue};
`;

export const LineDetailText = styled.Text`
  color: ${({theme}) => theme.color.textBlack};
  font-size: ${({theme}) => theme.fontSize.md};
`;
