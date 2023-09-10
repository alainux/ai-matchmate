import * as React from 'react';
import {NavigationContainer as RNNavigationContainer} from '@react-navigation/native';

const NavigationProvider: React.FC<React.PropsWithChildren> = ({children}) => {
  return <RNNavigationContainer>{children}</RNNavigationContainer>;
};

export {NavigationProvider};
