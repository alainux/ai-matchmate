import React from 'react';
import {ThemeProvider as EThemeProvider} from '@emotion/react';
import {theme} from '../utils/theme';

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <EThemeProvider theme={theme}>{children}</EThemeProvider>;
};
