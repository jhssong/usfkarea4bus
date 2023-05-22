import styled, {css} from 'styled-components/native';
import {BarLeft, HEIGHT, WIDTH} from './GlobalStyle';

export const ModalContainer = styled.Pressable`
  height: ${HEIGHT}px;
  flex-direction: column-reverse;
`;

export const ModalView = styled.Pressable`
  height: ${HEIGHT * 0.5}px;
  background-color: ${({theme}) => theme.color.background};
`;

export const Header = styled.View`
  justify-content: center;
  padding: 16px ${BarLeft}px;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.color.border};
`;

export const HeaderText = styled.Text`
  color: ${({theme}) => theme.color.textBlack};
  font-size: ${({theme}) => theme.fontSize.lg};
  font-weight: 600;
`;

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

export const ItemPressable = styled.Pressable`
  padding: 6px ${BarLeft}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BusInfo = styled.View`
  flex-direction: column;
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
  align-items: flex-end;
`;

export const TimeText = styled.Text`
  color: ${({theme}) => theme.color.orange};
  font-size: ${({theme}) => theme.fontSize.md};
`;
