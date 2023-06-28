import styled from 'styled-components/native';
import {
  Header,
  HeaderText,
  DefaultFontBold,
  DefaultBorderRadius,
  DefaultText,
  DefaultLightText,
} from './GlobalStyle';

export const MenuModal = styled.View`
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

export {Header, HeaderText};

export const Modal = styled.Pressable`
  flex: 1;
  background-color: ${({theme}) => theme.color.background};
`;

export const ItemView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
`;

export const ItemTextHeader = styled.Text`
  color: ${({theme}) => theme.color.textBlack};
  font-size: ${({theme}) => theme.fontSize.lg};
  line-height: ${({theme}) => theme.lineHegiht.lg};
  font-weight: ${DefaultFontBold};
  padding-left: 16px;
`;

export const ItemTextBold = styled.Text`
  ${DefaultText}
  font-weight: ${DefaultFontBold}
`;

export const ItemText = styled.Text`
  ${DefaultText}
`;
