import styled from '@emotion/native';
import { useTheme } from '@emotion/react';
import React from 'react';
import { View } from 'react-native';
import { OnboardingStackParamList } from '../../Layout/OnboardingStack';
import { Logo } from '../../components/Logo';
import StepperActions from '../../components/stepper/StepperActions';
import { useNavigationStepper } from '../../hooks/useNavigationStepper';
import { useNavigation } from '../../hooks/useNavigation';

interface StepProps {
  title: string;
  text: string;
  image: React.ReactNode;
}

const Container = styled.View(({ theme }) => ({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  ...theme.common.container,
}));

const Title = styled.Text(({ theme }) => ({
  ...theme.text.variations.header,
  color: theme.tokens.textPrimary,
}));

const Text = styled.Text(({ theme }) => ({
  ...theme.text.variations.base,
  color: theme.tokens.text,
  marginBottom: theme.tokens.spacer,
}));

export const Step: React.FC<StepProps> = ({
  title,
  text,
  image,
}) => {
  const theme = useTheme();
  const navigation = useNavigation();
  const stepper = useNavigationStepper<OnboardingStackParamList>();
  return (
    <Container>
      <Logo />

      <View style={{ flex: 1, justifyContent: 'center', width: '100%' }}>
        <Title>{title}</Title>

        <View
          style={{
            backgroundColor: 'white',
            ...theme.common.surfaceDimensions,
            marginTop: theme.tokens.spacer,
            marginBottom: theme.tokens.spacer,
          }}>
          {image}
        </View>

        <Text>{text}</Text>
      </View>
      <StepperActions
        canGoBack={stepper.canGoBack}
        canGoNext={stepper.canGoNext}
        onBack={stepper.goBack}
        onNext={stepper.goNext}
        onDone={() => navigation.navigate('TabsLayout', { initialRouteName: 'Profile' } )}
      />
    </Container>
  );
};
