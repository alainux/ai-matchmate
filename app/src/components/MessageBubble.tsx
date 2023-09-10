import React from 'react';
import styled from '@emotion/native';

type BubbleProps = {
  sent?: boolean;
};
const Bubble: React.FC<React.PropsWithChildren<BubbleProps>> = styled.View(
  props => ({
    backgroundColor: props.sent ? '#D1E5FF' : '#E1E1E1',
    alignSelf: props.sent ? 'flex-end' : 'flex-start',
    borderRadius: 15,
    borderBottomRightRadius: props.sent ? 0 : 15,
    borderBottomLeftRadius: !props.sent ? 0 : 15,
    marginTop: 5,
    marginRight: props.sent ? 0 : 60,
    marginLeft: !props.sent ? 0 : 60,
    padding: 10,
  }),
);

const StyledText = styled.Text(({theme}) => ({
  ...theme.text.variations.base,
}));

type Props = {
  message: string;
} & BubbleProps;

export const MessageBubble: React.FC<Props> = ({message, sent}) => {
  return (
    <Bubble sent={sent}>
      <StyledText>{message}</StyledText>
    </Bubble>
  );
};
