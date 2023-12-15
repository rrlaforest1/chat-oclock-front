import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../../helpers/api";

export const fetchDataAsync = createAsyncThunk("data/fetchData", async () => {
  const data = await fetchData();
  return data.data;
});

const dataSlice = createSlice({
  name: "data",
  initialState: {
    status: "",
    data: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDataAsync.fulfilled, (state, action) => {
        console.log("SUCCEEDED");
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchDataAsync.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error;
      });
  },
});

export default dataSlice.reducer;
