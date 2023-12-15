import { createSlice } from "@reduxjs/toolkit";

const messageData = [
  { author: "Maria", content: "Hello!" },
  { author: "Elena", content: "Hi Maria!" },
  { author: "Maria", content: "How are you?" },
  { author: "Elena", content: "Awesome! You?" },
  { author: "Maria", content: "rony@test.com" },
  { author: "Elena", content: "Abc123" },
];

const messageSlice = createSlice({
  name: "message",
  initialState: messageData,
  reducers: {
    write: (state, action) => {
      const { author, content } = action.payload;
      state.push({ author, content });
    },
  },
});

export const { write } = messageSlice.actions;
export default messageSlice.reducer;
