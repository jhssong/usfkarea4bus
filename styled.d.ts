import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    fontSize: {
      // xs: string;
      sm: string;
      md: string;
      lg: string;
      // xl: string;
    };

    lineHegiht: {
      // xs: string;
      sm: string;
      md: string;
      lg: string;
      // xl: string;
    };

    color: {
      background: string;
      textBlack: string;
      lightTextBlack: string;
      border: string;
      line: string;
      blue: string;
      lightBlue: string;
      orange: string;
    };
  }
}
