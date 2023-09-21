import styled from '@emotion/native';
import { useTheme } from '@emotion/react';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native';
import { MessageBubble } from '../components/MessageBubble';
import { API } from 'aws-amplify';
import { useAuthenticator } from '@aws-amplify/ui-react-native';
import { userSelector } from '../utils/aws';
import {
  Message,
  MessagesByProfileIdAndCreatedAtQuery,
  SendChatMessageMutation,
  SenderType,
} from '../types/graphql';
import { GraphQLQuery } from '@aws-amplify/api';
import { sendChatMessage } from '../graphql/mutations';

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
  const { user } = useAuthenticator(userSelector);
  const theme = useTheme();
  const messageLogRef = useRef<ScrollView>(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [chatlog, setChatlog] = useState<Array<Message | null>>([]);
  const [aiTyping, setAITyping] = useState(false);
  const [traits, setTraits] = useState({});

  const fetchMessages = async (id: string) => {
    setLoading(true);
    try {
      const result = await API.graphql<
        GraphQLQuery<MessagesByProfileIdAndCreatedAtQuery>
      >({
        query: `query GetMessages($profileId: ID!) {
          messagesByProfileIdAndCreatedAt(profileId: $profileId, sortDirection: DESC, limit: 10) {
            items {
              id
              content
              metadata
              sender
              createdAt
            }
          }
        }`,
        variables: {
          profileId: id
        },
      });
      const traits =
        result?.data?.messagesByProfileIdAndCreatedAt?.items?.[0]?.profile
          ?.traits ?? '{}';
      const messages =
        result?.data?.messagesByProfileIdAndCreatedAt?.items ??
        ([] as Message[]);

      if (!messages) {
        return;
      }

      setTraits(JSON.parse(traits));
      setChatlog(messages.reverse());
      scrollToEnd();
    } catch (e) {
      console.log('error fetching messages', { id }, e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user?.attributes?.sub) {
      fetchMessages(user.attributes.sub);
    }
  }, []);

  const sendMessageMutation = async (message: string) => {
    setAITyping(true);
    try {
      const response = await API.graphql<GraphQLQuery<SendChatMessageMutation>>(
        {
          query: sendChatMessage,
          variables: {
            userId: user?.attributes?.sub,
            message: message,
            currentProfile: JSON.stringify(traits),
            history: JSON.stringify(chatlog.slice(-10)),
          },
        },
      );

      const reponseJSON = JSON.parse(
        response.data?.sendChatMessage ?? '{}',
      );
      
      return reponseJSON as {
        nextMessage: string;
        profile: Record<string, any>;
      };
    } catch (e) {
      console.log('error sending message', e);
    } finally {
      setAITyping(false);
    }
  };

  const scrollToEnd = () => messageLogRef.current?.scrollToEnd({ animated: false });
  const appendMessageToChatlog = ({ content, sender}: Message) => {
    setChatlog(chatlog => [
      ...chatlog,
      { content, sender } as Message,
    ]);
    
    scrollToEnd();
  }

  const onPressSend = async () => {
    setMessage('');

    appendMessageToChatlog({ content: message, sender: SenderType.USER } as Message);
    const res = await sendMessageMutation(message);
    appendMessageToChatlog({ content: res?.nextMessage, sender: SenderType.AI } as Message);
    
    if (res?.profile) {
      setTraits({
        ...traits,
        ...res?.profile,
      });
    }
  }

  if (loading) {
    return (
      <ChatContainer>
        <ActivityIndicator />
      </ChatContainer>
    );
  }

  return (
    <ChatContainer>
      <MessageLog showsVerticalScrollIndicator={false} ref={messageLogRef}>
        {chatlog.length <= 9 && <MessageBubble message={'Hello 👋! This is the beginning of your conversation. Start by introducing yourself and sharing what you like.'} sent={false} />}

        {chatlog.map(
          (chat, index) =>
            chat && (
              <MessageBubble
                key={index}
                message={chat?.content}
                sent={chat.sender === SenderType.USER}
              />
            ),
        )}

        {aiTyping && (
          <MessageBubble key={chatlog.length} message={'...'} sent={false} />
        )}
      </MessageLog>

      <InputArea>
        <ChatInput value={message} onChangeText={setMessage} />
        <TouchableOpacity
          onPress={onPressSend}>
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
