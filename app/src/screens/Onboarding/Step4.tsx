import React from 'react';
import { useTheme } from '@emotion/react';
import ImageAsset from '../../../assets/undraw_develop_app_re_bi4i.svg';
import { Step } from '../../components/stepper/Step';

export const Step4: React.FC = () => {
  const theme = useTheme();
  return (
    <Step
      title="You're all set!"
      image={
        <ImageAsset
          width={'100%'}
          height={200}
          fill={theme.tokens.textPrimary}
        />
      }
      text="Important: You are using beta software. This is a preview of the app and it is intended for testing and gathering feedback."
    />
  );
};
