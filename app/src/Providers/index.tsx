import React from 'react';
import {NavigationProvider} from './Navigation';

export const Providers: React.FC<React.PropsWithChildren> = ({children}) => {
  return <NavigationProvider>{children}</NavigationProvider>;
};
