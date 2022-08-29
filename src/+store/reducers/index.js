import { combineReducers } from "redux";
import calendarReducer from "./calendarReducers.js";
import eventReducers from "./eventReducers.js";

const rootReducer = combineReducers({
	calendar: calendarReducer,
	event: eventReducers,
});

export default rootReducer;
