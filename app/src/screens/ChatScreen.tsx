import styled from '@emotion/native';
import { useTheme } from '@emotion/react';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { MessageBubble } from '../components/MessageBubble';


const ChatContainer = styled.View(({ theme }) => ({
  flex: 1,
  ...theme.common.container,
}));

const MessageLog = styled.ScrollView({
  flex: 1,
  marginBottom: 10,
});

const InputArea = styled.View(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  ...theme.common.input,
  paddingHorizontal: theme.common.surfaceDimensions.paddingHorizontal,
}));

const ChatInput = styled.TextInput(({ theme }) => ({
  flex: 1,
  borderWidth: 0,
  borderColor: 'transparent',
  backgroundColor: 'transparent',
  ...theme.text.variations.base,
  color: theme.common.input.color,
  paddingVertical: theme.common.surfaceDimensions.paddingVertical,
}));

export const ChatScreen: React.FC = () => {
  const theme = useTheme();
  const [message, setMessage] = useState('');

  // Sample chat log tailored for AI MatchMate application
  const chatLog = [
    {
      message:
        'Hello! Welcome to AI MatchMate. Ready to find your perfect match?',
      sent: false,
    },
    { message: "Hi! Yes, I'm curious to see how this works.", sent: true },
    {
      message:
        "Great! Just answer a few questions and I'll find the best matches for you.",
      sent: false,
    },
    { message: "Sounds interesting. Let's do it!", sent: true },
    {
      message: 'Awesome! First, tell me about your favorite hobbies.',
      sent: false,
    },
    { message: 'I love reading, hiking, and listening to music.', sent: true },
    {
      message: 'Noted. And what qualities are you looking for in a match?',
      sent: false,
    },
    {
      message:
        "I'd like someone with a good sense of humor, kind, and shares similar interests.",
      sent: true,
    },
    {
      message: 'Got it! Give me a moment to process this information.',
      sent: false,
    },
    { message: 'Alright, take your time.', sent: true },
    {
      message:
        "Great news! I've found a few potential matches for you. Check them out in the 'Matches' tab.",
      sent: false,
    },
    { message: 'Thanks! Excited to see my matches.', sent: true },
  ];

  return (
    <ChatContainer>
      <MessageLog showsVerticalScrollIndicator={false}>
        {chatLog.map((chat, index) => (
          <MessageBubble key={index} message={chat.message} sent={chat.sent} />
        ))}
      </MessageLog>

      <InputArea>
        <ChatInput value={message} onChangeText={setMessage} />
        <TouchableOpacity
          onPress={() => {
            // TODO: Handle sending the message here
            setMessage(''); // Reset the input field
          }}>
          <FontAwesomeIcon
            icon={faPaperPlane}
            size={20}
            color={theme.common.input.color}
          />
        </TouchableOpacity>
      </InputArea>
    </ChatContainer>
  );
};
