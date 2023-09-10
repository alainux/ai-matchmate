import '@emotion/react';
import { ThemeType } from './utils/theme';

declare module '@emotion/react' {
  type ThemeTextVariation = {
    lineHeight: number;
    fontSize: number;
    fontFamily: string;
  };
  export interface Theme extends ThemeType {}
}
