import '@emotion/react';

declare module '@emotion/react' {
  type ThemeTextVariation = {
    lineHeight: number;
    fontSize: number;
    fontFamily: string;
  };
  export interface Theme {
    baseUnit: number;
    text: {
      variations: {
        base: ThemeTextVariation;
        header: ThemeTextVariation;
      };
    };
    colors: {
      primary: string;
      secondary: string;
      error: string;
      background: string;
      textPrimary: string;
      textSecondary: string;
      border: string;
    };
  }
}
