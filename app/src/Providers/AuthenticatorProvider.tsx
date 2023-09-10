import React from 'react';
import {
  Authenticator,
  ThemeProvider,
  defaultDarkModeOverride,
  useTheme as useAmplifyTheme,
} from '@aws-amplify/ui-react-native';
import { useTheme } from '@emotion/react';
import merge from 'lodash/merge';
import { Logo } from '../components/Logo';

export const AuthenticatorProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const theme = useTheme();
  const amplifyTheme = useAmplifyTheme();

  const headings = amplifyTheme?.components?.heading ?? {
    '1': {},
    '2': {},
    '3': {},
    '4': {},
    '5': {},
    '6': {},
    text: {},
  };

  const mergedHeadings = merge(headings, {
    ...headings,
    '3': {
      marginBottom: theme.tokens.spacer,
    },
    text: {
      ...theme.text.variations.header,
    },
  });

  return (
    <ThemeProvider
      colorMode={'dark'}
      theme={{
        components: {
          heading: mergedHeadings,
          button: {
            containerDefault: {
              ...theme.common.surfaceDimensions,
              borderColor: theme.tokens.border,
            },
            containerPrimary: {
              ...theme.common.surfaceDimensions,
            },
            text: {
              color: theme.tokens.text,
            },
            textPrimary: {
              ...theme.text.variations.strong,
              color: theme.tokens.buttonPrimaryText,
            },
            textLink: {
              ...theme.text.variations.strong,
            },
          },
          textField: {
            fieldContainer: {
              ...theme.common.input,
              marginBottom: theme.tokens.spacer,
            },
            field: {
              ...theme.text.variations.base,
              ...theme.common.surfaceDimensions,
            },
            label: {
              ...theme.text.variations.base,
              color: theme.tokens.text,
            },
          },
          errorMessage: {
            label: {
              ...theme.text.variations.strong,
            },
            container: {
              backgroundColor: theme.tokens.buttonPrimary,
              ...theme.common.surfaceDimensions,
              marginBottom: theme.tokens.spacer,
            },
          },
        },
        tokens: {
          colors: {
            brand: {
              primary: {
                80: theme.tokens.textPrimary,
              },
            },
          },
        },
        overrides: [defaultDarkModeOverride],
      }}>
      <Authenticator.Provider>
        <Authenticator
          // eslint-disable-next-line react/no-unstable-nested-components
          Header={() => <Logo style={{ marginBottom: theme.tokens.spacer }} />}
          // eslint-disable-next-line react/no-unstable-nested-components
          Container={props => (
            <Authenticator.Container
              {...props}
              style={{ backgroundColor: theme.tokens.background }}
            />
          )}>
          {children}
        </Authenticator>
      </Authenticator.Provider>
    </ThemeProvider>
  );
};
