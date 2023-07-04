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

export const TitleView = styled.View`
  width: 100%;
  padding: 8px 16px;
`;

export const TitleText = styled.Text`
  color: ${({theme}) => theme.color.lightTextBlack};
  font-size: ${({theme}) => theme.fontSize.lg};
  line-height: ${({theme}) => theme.lineHegiht.lg};
`;

export const GateView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
`;

export const GateHeaderView = styled.View`
  width: 50%;
`;

export const GateHeaderText = styled.Text`
  ${DefaultText}
  font-weight: ${DefaultFontBold}
`;

export const GateItemView = styled.View`
  width: 50%;
  flex-direction: column;
`;

export const GateTimeView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const GateItemText = styled.Text`
  width: 50%;
  ${DefaultText}
`;
