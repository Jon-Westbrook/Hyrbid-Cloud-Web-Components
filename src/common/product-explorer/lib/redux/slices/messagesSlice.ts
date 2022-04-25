import { createSlice, Slice } from '@reduxjs/toolkit';
import { MessageDescriptor } from 'react-intl';

type MessagesCollection = Record<string, MessageDescriptor>;
const createMessagesSlice = (
  messages: MessagesCollection,
): Slice<MessagesCollection> => {
  const initialState = messages;
  return createSlice({
    name: 'messages',
    initialState,
    reducers: {
      loadMessages: () => messages,
    },
  });
};

export default createMessagesSlice;
