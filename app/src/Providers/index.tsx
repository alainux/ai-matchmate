import React from 'react';
import { NavigationProvider } from './NavigationProvider';
import { ThemeProvider } from './ThemeProvider';
import { AuthenticatorProvider } from './AuthenticatorProvider';

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider>
      <AuthenticatorProvider>
        <NavigationProvider>{children}</NavigationProvider>
      </AuthenticatorProvider>
    </ThemeProvider>
  );
};
