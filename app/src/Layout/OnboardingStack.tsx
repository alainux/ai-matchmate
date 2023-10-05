import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Step0 } from '../screens/Onboarding/Step0';
import { Step1 } from '../screens/Onboarding/Step1';
import { Step2 } from '../screens/Onboarding/Step2';
import { Step3 } from '../screens/Onboarding/Step3';
import { Step4 } from '../screens/Onboarding/Step4';

export type OnboardingStackParamList = {
  Step0: undefined;
  Step1: undefined;
  Step2: undefined;
  Step3: undefined;
  Step4: undefined;
};

const Stack = createStackNavigator<OnboardingStackParamList>();

const OnboardingStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Step0"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Step0" component={Step0} />
      <Stack.Screen name="Step1" component={Step1} />
      <Stack.Screen name="Step2" component={Step2} />
      <Stack.Screen name="Step3" component={Step3} />
      <Stack.Screen name="Step4" component={Step4} />
    </Stack.Navigator>
  );
};

export default OnboardingStack;
