import styled from 'styled-components/native';
import {
  WIDTH,
  Header,
  HeaderText,
  TimeText,
  DefaultFontBold,
  DefaultBorderRadius,
  DefaultText,
  DefaultLightText,
} from './GlobalStyle';

export const Modal = styled.Pressable`
  flex: 0.5;
  flex-direction: column;
  border-radius: ${DefaultBorderRadius};
  background-color: ${({theme}) => theme.color.background};
`;

export {Header, HeaderText};

export const HandleBar = styled.View`
  width: 24%;
  height: 4px;
  margin-bottom: 16px;
  background-color: ${({theme}) => theme.color.border};
  border-radius: ${DefaultBorderRadius};
`;

export const StopLineList = styled.ScrollView``;

export const ItemPressable = styled.Pressable`
  padding: 8px 16px;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.color.border};
`;

export const BusInfoView = styled.View`
  width: ${WIDTH - 120 - 16 * 2}px;
  height: 48px;
  justify-content: center;
`;

export const BusText = styled.Text`
  ${DefaultText}
  font-weight: ${DefaultFontBold};
`;

export const BusHeadingText = styled.Text`
  ${DefaultLightText}
`;

export const TimeInfoView = styled.View`
  width: 120px;
  height: 48px;
  align-items: flex-end;
`;

export {TimeText};
