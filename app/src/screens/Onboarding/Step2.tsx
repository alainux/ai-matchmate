import React from 'react';
import { useTheme } from '@emotion/react';
import ImageAsset from '../../../assets/undraw_texting_re_l11n.svg';
import { Step } from '../../components/stepper/Step';

export const Step2: React.FC = () => {
  const theme = useTheme();
  return (
    <Step
      title="Step 2: Interact with the AI"
      image={
        <ImageAsset
          width={'100%'}
          height={200}
          fill={theme.tokens.textPrimary}
        />
      }
      text="As you chat with your AI, it will learn more about you and your personality. This will help us find better matches for you."
    />
  );
};
