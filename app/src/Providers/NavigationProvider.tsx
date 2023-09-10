import React from 'react';
import { NavigationContainer as RNNavigationContainer } from '@react-navigation/native';

export const NavigationProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => <RNNavigationContainer>{children}</RNNavigationContainer>;
