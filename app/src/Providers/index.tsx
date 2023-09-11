import React from 'react';
import { AuthenticatorProvider } from './AuthenticatorProvider';
import { NavigationProvider } from './NavigationProvider';
import { ThemeProvider } from './ThemeProvider';

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider>
      <AuthenticatorProvider>
        <NavigationProvider>{children}</NavigationProvider>
      </AuthenticatorProvider>
    </ThemeProvider>
  );
};
