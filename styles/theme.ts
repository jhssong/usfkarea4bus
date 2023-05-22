import {DefaultTheme} from 'styled-components/native';

const fontSize = {
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '18px',
  xl: '20px',
  // 값을 사용하는 용도에 맞춰 이름을 지정해줄 수도 있습니다.
  // subTitle: calRem(24) // 1.5rem;
  // title: calcRem(36), // 2.25rem;
};

const color = {
  //   brandColor: '#5CC6BA',
  //   subText: '#bababc',
  //   white: '#FDFEFE',
  //   blue: '#3498DB',
  //   transparentBrandColor: 'rgba(92, 198, 186, 0.1)',
  //   transparentBackground: 'rgba(0, 0, 0, 0.1)',

  // background: '#FEFEFE',
  background: '#F7F7F8',
  textBlack: '#000000',
  lightTextBlack: '#838C95',
  border: '#D9D9E3',
  blue: '#3AA5DC',
  orange: '#CE5C37',

  //   "whiteBackground": "#FFFFFF",
  //     "darkwhiteBackground": '#EDEDEF',
  //     "lightWhiteBackground": '#FEFEFE',
  //     "grayBackground": '#D3D3D3',

  //     "lightLine": '#B2B2B2',
  //     "darkLine": '',

  //     "orange": '#F2AE2E',
  //     "blue": '#3AA5DC',
};

const bar = {
  barBorderRadius: '10px',
};

const theme: DefaultTheme = {fontSize, color, bar};

export default theme;
