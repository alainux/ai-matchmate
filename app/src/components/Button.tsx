import React from 'react';
import styled from '@emotion/native';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

type ButtonProps = { secondary?: boolean; icon?: React.ReactNode };

const StyledButton: React.FC<
  React.PropsWithChildren<ButtonProps & TouchableOpacityProps>
> = styled(TouchableOpacity)(({ theme, secondary }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: theme.tokens.radius,
  paddingHorizontal: theme.tokens.surfacePaddingHorizontal,
  paddingVertical: theme.tokens.surfacePaddingVertical,
  backgroundColor: secondary
    ? theme.tokens.buttonSecondary
    : theme.tokens.buttonPrimary,
}));

const ButtonText: React.FC<
  React.PropsWithChildren<ButtonProps & TouchableOpacityProps>
> = styled.Text(({ secondary, theme }) => ({
  color: secondary
    ? theme.tokens.buttonSecondaryText
    : theme.tokens.buttonPrimaryText,
  marginLeft: 10,
  fontFamily: 'Lexend-Regular',
}));

export const Button: React.FC<
  React.PropsWithChildren<ButtonProps & TouchableOpacityProps>
> = ({ children, icon, secondary, ...props }) => (
  <StyledButton secondary={secondary} {...props}>
    {icon ?? null}
    <ButtonText secondary={secondary}>{children}</ButtonText>
  </StyledButton>
);
