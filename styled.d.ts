import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    fontSize: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };

    color: {
      background: string;
      textBlack: string;
      placeholderTextBlack: string;
      border: string;
      blue: string;
      //   secondary: string;
    };

    bar: {
      barBorderRadius: string;
    };
  }
}
