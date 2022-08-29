import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "../reducers/index.js";
import { persistReducer, persistStore } from "redux-persist";
import storageSession from "reduxjs-toolkit-persist/lib/storage/session";

import storage from "redux-persist/lib/storage";

const persistConfig = {
	key: "calendar",
	storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export const persistor = persistStore(store);
