import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./slices/messageSlice";
import settingsReducer from "./slices/settingsSlice";
import dataReducer, { fetchDataAsync } from "./slices/dataSlice";
import connexionReducer, { fetchUserAsync } from "./slices/connexionSlice";
import allmessagesReducer, {
  fetchAllmessagesAsync,
} from "./slices/allMessagesSlice";

const store = configureStore({
  reducer: {
    message: messageReducer,
    settings: settingsReducer,
    data: dataReducer,
    connexion: connexionReducer,
    allmessages: allmessagesReducer,
  },
});

store.dispatch(fetchDataAsync());
store.dispatch(fetchUserAsync());

export default store;
