import { createSlice } from '@reduxjs/toolkit';
import messages from '../../../locales/messages';

const initialState = {};

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    loadMessages: () => messages,
  },
});

export const { loadMessages } = messagesSlice.actions;

export default messagesSlice.reducer;
