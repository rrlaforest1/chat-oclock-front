import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import myApi from "../../service/service";

export const fetchUserAsync = createAsyncThunk(
  "data/getUserInfos",
  async () => {
    const data = await myApi.getUserInfos();
    return data;
  }
);

const connexionSlice = createSlice({
  name: "connexion",
  initialState: {
    status: "",
    user: null,
    isLoggedIn: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserAsync.fulfilled, (state, action) => {
        console.log("SUCCEEDED");
        state.status = "succeeded";
        state.user = action.payload;
        if (action.payload) {
          state.isLoggedIn = true;
        } else {
          state.isLoggedIn = false;
        }
      })
      .addCase(fetchUserAsync.rejected, (state, action) => {
        state.status = "rejected";
        state.isLoggedIn = false;
        state.error = action.error;
      });
  },
});

export default connexionSlice.reducer;
