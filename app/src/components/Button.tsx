import React from 'react';
import styled from '@emotion/native';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

type ButtonProps = {secondary?: boolean; icon?: React.ReactNode};

const StyledButton: React.FC<
  React.PropsWithChildren<ButtonProps & TouchableOpacityProps>
> = styled(TouchableOpacity)(({theme, secondary}) => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: theme.baseUnit * 2,
  paddingHorizontal: theme.baseUnit * 4,
  paddingVertical: theme.baseUnit * 2,
  backgroundColor: secondary ? 'white' : theme.colors.primary,
  borderWidth: secondary ? 1 : 0,
  borderColor: secondary ? theme.colors.primary : 'transparent',
}));

const ButtonText: React.FC<
  React.PropsWithChildren<ButtonProps & TouchableOpacityProps>
> = styled.Text(({secondary, theme}) => ({
  color: secondary ? theme.colors.primary : 'white',
  marginLeft: 10,
  fontFamily: 'Lexend-Regular',
}));

export const Button: React.FC<
  React.PropsWithChildren<ButtonProps & TouchableOpacityProps>
> = ({children, icon, secondary, ...props}) => (
  <StyledButton secondary={secondary} {...props}>
    {icon ?? null}
    <ButtonText secondary={secondary}>{children}</ButtonText>
  </StyledButton>
);
