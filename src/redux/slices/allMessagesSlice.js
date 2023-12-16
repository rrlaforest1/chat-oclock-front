import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import myApi from "../../service/service";

export const fetchAllmessagesAsync = createAsyncThunk(
  "data/getMessages",
  async () => {
    const data = await myApi.getMessages();
    return data;
  }
);

const allmessagesSlice = createSlice({
  name: "allmessages",
  initialState: {
    status: "",
    messages: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllmessagesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllmessagesAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.messages = action.payload;
      })
      .addCase(fetchAllmessagesAsync.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error;
      });
  },
});

export default allmessagesSlice.reducer;
