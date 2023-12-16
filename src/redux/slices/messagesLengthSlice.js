import { createSlice } from "@reduxjs/toolkit";

const messagesLengthSlice = createSlice({
  name: "msglength",
  initialState: {
    messagesLength: 0,
  },
  reducers: {
    updateLength: (state) => (state += 1),
  },
});

export const { updateLength } = messagesLengthSlice.actions;
export default messagesLengthSlice.reducer;
