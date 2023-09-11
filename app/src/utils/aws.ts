import { UseAuthenticatorSelector } from '@aws-amplify/ui-react-core/dist/types/Authenticator/hooks';

// retrieves only the current value of 'user' from 'useAuthenticator'
export const userSelector: UseAuthenticatorSelector = context => [context.user];
