import { createSlice } from '@reduxjs/toolkit';
import { MessageDescriptor } from 'react-intl';

const createMessagesSlice = (messages: Record<string, MessageDescriptor>) => {
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
