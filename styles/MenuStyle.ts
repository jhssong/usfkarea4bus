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

export const Modal = styled.View`
  flex: 1;
  width: 60%;
  padding: 24px;
  background-color: ${({theme}) => theme.color.background};
`;

export const MenuItem = styled.Pressable`
  padding-bottom: 24px;
`;

export const MenuText = styled.Text`
  ${DefaultText}
`;

export const MenuSubText = styled.Text`
  ${DefaultText}
  font-size: 14px;
  padding-left: 8px;
`;

export {HeaderText};
