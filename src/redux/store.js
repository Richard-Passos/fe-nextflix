/* Logic */
import { configureStore } from "@reduxjs/toolkit";
import favMediasSlice from "./favMediasSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const persistConfig = {
  key: "favorites",
  storage,
};

const persistedReducer = persistReducer(persistConfig, favMediasSlice);

const store = configureStore({
  reducer: {
    favMedias: persistedReducer,
  },
  middleware: [thunk],
});
const persistor = persistStore(store);

export { store, persistor };
