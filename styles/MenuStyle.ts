import styled from 'styled-components/native';
import {Header, HeaderText, DefaultFontBold, DefaultText} from './GlobalStyle';

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

export const Modal = styled.ScrollView.attrs(props => ({
  contentContainerStyle: {
    paddingBottom: 60,
  },
}))`
  flex: 1;
  background-color: ${({theme}) => theme.color.background};
`;

export const TitleView = styled.View`
  // width: 100%;
  padding: 16px 0;
  margin: 0 24px;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.color.line};
`;

export const TitleText = styled.Text`
  text-align: center;
  color: ${({theme}) => theme.color.lightTextBlack};
  font-size: ${({theme}) => theme.fontSize.lg};
  line-height: ${({theme}) => theme.lineHegiht.lg};
`;

export const TimeInfoView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 24px;
  padding: 12px 8px;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.color.line};
`;

export const TimeHeaderView = styled.View`
  width: 40%;
`;

export const TimeHeaderText = styled.Text`
  ${DefaultText}
  font-weight: ${DefaultFontBold}
`;

export const TimeView = styled.View`
  width: 60%;
  flex-direction: column;
`;

export const TimeItemView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TimeItemRangeText = styled.Text`
  width: 50%;
  text-align: center;
  ${DefaultText}
`;

export const TimeItemText = styled.Text`
  width: 50%;
  ${DefaultText}
`;
