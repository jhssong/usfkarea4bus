import {DefaultTheme} from 'styled-components/native';

const fontSize = {
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '18px',
  xl: '24px',
};

const color = {
  background: '#F7F7F8',
  textBlack: '#000000',
  lightTextBlack: '#838C95',
  border: '#D9D9E3',
  line: '#A5A5A5',
  blue: '#3AA5DC',
  lightBlue: '#e2f4fb',
  orange: '#CE5C37',
};

const theme: DefaultTheme = {fontSize, color};

export default theme;
