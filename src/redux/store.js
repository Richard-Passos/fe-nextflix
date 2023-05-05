/* Logic */
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import favMediasSlice from "./favMediasSlice";
import themeSlice from "./themeSlice";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const persistConfigs = [
  {
    key: "fav-medias",
    storage,
  },
  {
    key: "app-theme",
    storage,
  },
];

const { favMedias, appTheme } = {
  favMedias: persistReducer(persistConfigs[0], favMediasSlice),
  appTheme: persistReducer(persistConfigs[1], themeSlice),
};

const store = configureStore({
  reducer: {
    favMedias,
    appTheme,
  },
  middleware: [thunk],
});
const persistor = persistStore(store);

export { store, persistor };
