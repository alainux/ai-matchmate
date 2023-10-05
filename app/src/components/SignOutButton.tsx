import React from 'react';

import { Button, ButtonProps } from './Button';
import { useAuthenticator } from '@aws-amplify/ui-react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@emotion/react';
import { userSelector } from '../utils/aws';

export const SignOutButton: React.FC<ButtonProps> = (props) => {
  const { signOut } = useAuthenticator(userSelector);
  const theme = useTheme();
  return (
    <Button
      secondary
      onPress={signOut}
      icon={
        <FontAwesomeIcon
          icon={faSignOut}
          color={theme.tokens.buttonSecondaryText}
        />
      }
      {...props}>
      Sign out
    </Button>
  );
};
