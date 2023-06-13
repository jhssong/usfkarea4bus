import {DefaultTheme} from 'styled-components/native';

const fontSize = {
  sm: '12px',
  md: '16px',
  lg: '20px',
};

const lineHegiht = {
  sm: '18px',
  md: '24px',
  lg: '30px',
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

const theme: DefaultTheme = {fontSize, lineHegiht, color};

export default theme;
