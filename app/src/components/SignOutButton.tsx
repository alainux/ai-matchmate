import React from 'react';

import { Button } from './Button';
import { useAuthenticator } from '@aws-amplify/ui-react-native';
import { UseAuthenticatorSelector } from '@aws-amplify/ui-react-core/dist/types/Authenticator/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@emotion/react';

// retrieves only the current value of 'user' from 'useAuthenticator'
const userSelector: UseAuthenticatorSelector = context => [context.user];

export const SignOutButton: React.FC = () => {
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
      }>
      Sign out
    </Button>
  );
};
