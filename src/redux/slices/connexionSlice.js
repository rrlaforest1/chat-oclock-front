import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUserInfos } from "../../helpers/user";
import { jwtDecode } from "jwt-decode";

export const verifyUser = createAsyncThunk("data/getUserInfos", async (id) => {
  const data = await getUserInfos({ userId: id });
  console.log("connectionSlice data", data);
  return data;
});

const connexionSlice = createSlice({
  name: "connexion",
  initialState: {
    user: null,
    isLoggedIn: false,
  },
  reducers: {
    authState: async (state, action) => {
      // debugger;
      console.log("authState");

      const token = localStorage.getItem("authToken");
      const decodedtoken = jwtDecode(token);
      console.log("token", token);
      console.log("decodedtoken", decodedtoken);

      // state.user = { name: "toto" };

      // if (!token) {
      //   state.user = null;
      //   state.isLoggedIn = false;
      //   return;
      // }
      state.user = { name: "toto" };
      console.log(state.user);

      // const user = verifyUser(decodedtoken._id);
      // console.log(user);
      // state.user = user;
      // state.user = decodedtoken;
      // console.log("state.user", state.user);
      // state.isLoggedIn = true;
    },
  },
});

export const { authState } = connexionSlice.actions;
export default connexionSlice.reducer;
