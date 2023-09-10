import React from 'react';
import styled from '@emotion/native';

type BubbleProps = {
  sent?: boolean;
};
const Bubble: React.FC<React.PropsWithChildren<BubbleProps>> = styled.View(
  props => ({
    backgroundColor: props.sent
      ? props.theme.tokens.backgroundLighter
      : props.theme.tokens.buttonPrimary,

    alignSelf: props.sent ? 'flex-end' : 'flex-start',

    borderRadius: props.theme.tokens.radius,

    borderBottomRightRadius: props.sent ? 0 : props.theme.tokens.radius,
    borderBottomLeftRadius: !props.sent ? 0 : props.theme.tokens.radius,

    paddingHorizontal: props.theme.tokens.surfacePaddingHorizontal,
    paddingVertical: props.theme.tokens.surfacePaddingVertical,

    marginBottom: props.theme.tokens.spacer,

    marginRight: props.sent ? 0 : 60,
    marginLeft: !props.sent ? 0 : 60,
  }),
);

const StyledText = styled.Text(({ theme }) => ({
  color: theme.tokens.buttonPrimaryText,
  ...theme.text.variations.base,
}));

type Props = {
  message: string;
} & BubbleProps;

export const MessageBubble: React.FC<Props> = ({ message, sent }) => {
  return (
    <Bubble sent={sent}>
      <StyledText>{message}</StyledText>
    </Bubble>
  );
};
