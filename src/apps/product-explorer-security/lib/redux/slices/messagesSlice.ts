import { createSlice } from '@reduxjs/toolkit';
import messages from '../../../locales/messages';
import { MessageDescriptor } from 'react-intl';

export const initialState: Record<string, MessageDescriptor> = messages;

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    loadMessages: () => messages,
  },
});

export const { loadMessages } = messagesSlice.actions;

export default messagesSlice.reducer;
