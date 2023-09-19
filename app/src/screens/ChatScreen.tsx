import styled from '@emotion/native';
import { useTheme } from '@emotion/react';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { MessageBubble } from '../components/MessageBubble';
import { API } from 'aws-amplify';
import { messagesByProfileId } from '../graphql/queries';
import { useAuthenticator } from '@aws-amplify/ui-react-native';
import { userSelector } from '../utils/aws';
import { Message, MessagesByProfileIdQuery, SenderType } from '../types/graphql';
import { GraphQLQuery } from '@aws-amplify/api';


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
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [chatlog, setChatlog] = useState<Array<Message | null>>([]);

  const fetchMessages = async (id: string) => {
    setLoading(true);
    try {
      const result = await API.graphql<GraphQLQuery<MessagesByProfileIdQuery>>({
        query: messagesByProfileId,
        variables: {
          profileId: id,
        },
      });

      const messages = result?.data?.messagesByProfileId?.items;

      if (!messages) {
        console.log(
          'no messages found for user',
          { id },
          JSON.stringify(result, null, 4),
        );
        return;
      }

      console.log({ id }, JSON.stringify(messages, null, 4));

      setChatlog(messages);
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
  },[]);

  if (loading) {
    return (
      <ChatContainer>
        <ActivityIndicator />
      </ChatContainer>
    );
  }

  return (
    <ChatContainer>
      <MessageLog showsVerticalScrollIndicator={false}>
        {chatlog.map((chat, index) => chat && (
          <MessageBubble key={index} message={chat?.content} sent={chat.sender === SenderType.USER} />
        ))}
      </MessageLog>

      <InputArea>
        <ChatInput value={message} onChangeText={setMessage} />
        <TouchableOpacity
          onPress={() => {
            // TODO: Handle sending the message here
            setChatlog(chatlog => [...chatlog, { content: message, sender: SenderType.USER } as Message]);
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
