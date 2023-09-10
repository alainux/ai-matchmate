// app/src/screens/ChatScreen.tsx
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import styled from '@emotion/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {theme} from '../utils/theme';
import {MessageBubble} from '../components/MessageBubble';

const ChatContainer = styled.View({
  flex: 1,
  padding: 10,
  backgroundColor: theme.colors.background,
});

const MessageLog = styled.ScrollView({
  flex: 1,
  marginBottom: 10,
});

const InputArea = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: 'white',
  borderRadius: 25,
  paddingHorizontal: 10,
  paddingVertical: 5,
});

const ChatInput = styled.TextInput(({theme}) => ({
  flex: 1,
  borderWidth: 0,
  borderColor: 'transparent',
  borderRadius: 25,
  padding: 10,
  ...theme.text.variations.base,
}));

export const ChatScreen: React.FC = () => {
  const [message, setMessage] = useState('');

  // Sample chat log tailored for AI MatchMate application
  const chatLog = [
    {
      message:
        'Hello! Welcome to AI MatchMate. Ready to find your perfect match?',
      sent: false,
    },
    {message: "Hi! Yes, I'm curious to see how this works.", sent: true},
    {
      message:
        "Great! Just answer a few questions and I'll find the best matches for you.",
      sent: false,
    },
    {message: "Sounds interesting. Let's do it!", sent: true},
    {
      message: 'Awesome! First, tell me about your favorite hobbies.',
      sent: false,
    },
    {message: 'I love reading, hiking, and listening to music.', sent: true},
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
    {message: 'Alright, take your time.', sent: true},
    {
      message:
        "Great news! I've found a few potential matches for you. Check them out in the 'Matches' tab.",
      sent: false,
    },
    {message: 'Thanks! Excited to see my matches.', sent: true},
  ];

  return (
    <ChatContainer>
      <MessageLog showsVerticalScrollIndicator={false}>
        {chatLog.map((chat, index) => (
          <MessageBubble key={index} message={chat.message} sent={chat.sent} />
        ))}
      </MessageLog>

      <InputArea>
        <ChatInput
          value={message}
          onChangeText={setMessage}
          placeholder="Type a message"
        />
        <TouchableOpacity
          onPress={() => {
            // TODO: Handle sending the message here
            setMessage(''); // Reset the input field
          }}>
          <FontAwesomeIcon
            icon={faPaperPlane}
            size={20}
            color={theme.colors.primary}
          />
        </TouchableOpacity>
      </InputArea>
    </ChatContainer>
  );
};
