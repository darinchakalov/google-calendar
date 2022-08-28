import { combineReducers } from "redux";
import calendarReducer from "./calendarReducer.js";

const allReducers = combineReducers({
    calendar: calendarReducer
})


export default allReducers