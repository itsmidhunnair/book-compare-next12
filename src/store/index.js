import { configureStore } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./slice";

// ------------------------------------------------
/**
 * This file defines the Redux store for our application.
 *
 * We use the `persistStore` function from the `redux-persist` library to persist the store to local storage.
 * This allows the user's state to be saved even if they close the browser or refresh the page.
 *
 ** The `persistStore` function takes in the store object and returns a new version of the store with persistence added.
 *
 * We export the persisted store so it can be used throughout the application.
 */
// ------------------------------------------------

/**
 * Config for Redux Persist
 */
const persistConfig = {
  key: "compare",
  storage,
};

// Persisie
const persistedReducer = persistReducer(persistConfig, rootReducer);

const makeStore = () => {
  const store = configureStore({
    reducer: persistedReducer,
  });
  store.__persistor = persistStore(store);
  return store;
};

export const wrapper = createWrapper(makeStore);
