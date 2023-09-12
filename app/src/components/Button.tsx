import React from 'react';
import styled from '@emotion/native';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { colord } from 'colord';
import { disable } from '../utils/theme';

type ButtonProps = { secondary?: boolean; icon?: React.ReactNode };

const StyledButton: React.FC<
  React.PropsWithChildren<ButtonProps & TouchableOpacityProps>
> = styled(TouchableOpacity)(({ theme, disabled, secondary }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: theme.tokens.radius,
  paddingHorizontal: theme.tokens.surfacePaddingHorizontal,
  paddingVertical: theme.tokens.surfacePaddingVertical,

  backgroundColor: secondary ? 'transparent' : theme.tokens.buttonPrimary,
  borderColor: secondary
    ? theme.tokens.buttonSecondary
    : theme.tokens.buttonPrimary,

  ...(disabled
    ? {
        backgroundColor: secondary
          ? disable(theme.tokens.background)
          : disable(theme.tokens.buttonPrimary),

        borderColor: secondary
          ? disable(theme.tokens.buttonSecondary)
          : disable(theme.tokens.buttonPrimary),
      }
    : {}),

  borderWidth: 1,
}));

const ButtonText: React.FC<
  React.PropsWithChildren<ButtonProps & TouchableOpacityProps>
> = styled.Text(({ secondary, disabled, theme }) => ({
  color: secondary
    ? theme.tokens.buttonSecondaryText
    : theme.tokens.buttonPrimaryText,

  ...(disabled
    ? {
        color: secondary
          ? disable(theme.tokens.buttonSecondaryText)
          : disable(theme.tokens.buttonPrimaryText),
      }
    : {}),

  marginLeft: 10,

  ...theme.text.variations.base,
}));

export const Button: React.FC<
  React.PropsWithChildren<ButtonProps & TouchableOpacityProps>
> = ({ children, icon, secondary, disabled, ...props }) => (
  <StyledButton disabled={disabled} secondary={secondary} {...props}>
    {icon ?? null}
    <ButtonText disabled={disabled} secondary={secondary}>
      {children}
    </ButtonText>
  </StyledButton>
);
