import React from 'react';
import { useTheme } from '@emotion/react';
import ImageAsset from '../../../assets/undraw_profile_image_re_ic2f.svg';
import { Step } from '../../components/stepper/Step';

export const Step1: React.FC = () => {
  const theme = useTheme();
  return (
    <Step
      title="Step 1: Complete your profile"
      image={
        <ImageAsset
          width={'100%'}
          height={200}
          fill={theme.tokens.textPrimary}
        />
      }
      text="Set up your profile by answering a few questions. This will help us find better matches for you."
    />
  );
};
