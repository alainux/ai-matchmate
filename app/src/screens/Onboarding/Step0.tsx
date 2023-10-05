import React from 'react';
import { useTheme } from '@emotion/react';
import ImageAsset from '../../../assets/undraw_love_it_0v4l.svg';
import { Step } from '../../components/stepper/Step';

export const Step0: React.FC = () => {
  const theme = useTheme();
  return (
    <Step
      title="Welcome"
      image={
        <ImageAsset
          width={'100%'}
          height={200}
          fill={theme.tokens.textPrimary}
        />
      }
      text="Welcome to AI MatchMate! Our app uses AI to understand your
      personality, ensuring more meaningful connections. By chatting with
      our AI, we refine your profile and enhance our matching process. Dive
      in and experience a new way of finding matches!"
    />
  );
};
