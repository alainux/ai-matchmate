import React from 'react';
import styled from '@emotion/native';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { colord } from 'colord';
import { disable } from '../utils/theme';

export type ButtonProps = { secondary?: boolean; icon?: React.ReactNode } &  TouchableOpacityProps;

const StyledButton: React.FC<
  React.PropsWithChildren<ButtonProps>
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
> = styled.Text(({ secondary, disabled, icon, theme }) => ({
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

  ...(icon ? { marginLeft: 10 } : {}),

  ...theme.text.variations.base,
}));

export const Button: React.FC<
  React.PropsWithChildren<ButtonProps & TouchableOpacityProps>
> = ({ children, icon, secondary, disabled, ...props }) => (
  <StyledButton disabled={disabled} secondary={secondary} {...props}>
    {icon ?? null}
    <ButtonText disabled={disabled} icon={icon} secondary={secondary}>
      {children}
    </ButtonText>
  </StyledButton>
);
