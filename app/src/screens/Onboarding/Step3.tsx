import React from 'react';
import { useTheme } from '@emotion/react';
import ImageAsset from '../../../assets/undraw_couple_re_94tl.svg';
import { Step } from '../../components/stepper/Step';

export const Step3: React.FC = () => {
  const theme = useTheme();
  return (
    <Step
      title="Step 3: Receive your matches"
      image={
        <ImageAsset
          width={'100%'}
          height={200}
          fill={theme.tokens.textPrimary}
        />
      }
      text="Your matches will show up in the Matches tab. You can then contact them to get to know them better."
    />
  );
};
