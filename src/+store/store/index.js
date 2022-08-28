import calendarReducer from "../reducers/calendarSlice.js";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";


export default configureStore({
	reducer: calendarReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
