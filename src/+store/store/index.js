import calendarReducer from "../reducers/calendarSlice.js";
import { configureStore } from "@reduxjs/toolkit";


export default configureStore({
	reducer: calendarReducer,
});
