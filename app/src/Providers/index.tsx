import React from 'react';
import { NavigationProvider } from './NavigationProvider';
import { ThemeProvider } from './ThemeProvider';

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <NavigationProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </NavigationProvider>
  );
};
