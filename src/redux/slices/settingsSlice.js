import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    open: false,
    userInfo: {
      email: "",
      password: "",
    },
  },
  reducers: {
    toggleSettings: (state) => {
      state.open = !state.open;
    },
    updateUserInfo: (state, action) => {
      state.userInfo = {
        email: action.payload.email,
        password: action.payload.password,
      };
    },
  },
});

export const { toggleSettings, updateUserInfo } = settingsSlice.actions;
export default settingsSlice.reducer;
