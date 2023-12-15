import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./slices/messageSlice";
import settingsReducer from "./slices/settingsSlice";
import dataReducer, { fetchDataAsync } from "./slices/dataSlice";
import connexionReducer from "./slices/connexionSlice";

const store = configureStore({
  reducer: {
    message: messageReducer,
    settings: settingsReducer,
    data: dataReducer,
    connexion: connexionReducer,
  },
});

store.dispatch(fetchDataAsync());

export default store;
