import { createSlice } from "@reduxjs/toolkit";
import { GlobalState } from "../store/GlobalState.js";

export const calendarSlice = createSlice({
	name: "calendar",
	initialState: GlobalState,
	reducers: {
		setNextMonth: (state) => {
			state.monthIndex += 1;
		},
		setPrevMonth: (state) => {
			state.monthIndex -= 1;
		},
		setCurrentMonth: (state, action) => {
			state.monthIndex = action.payload;
		},
		setDaySelected: (state, action) => {
			state.daySelected = action.payload;
		},
		setSmallCalendarMonthIndex: (state, action) => {
			state.smallCalendarMonthIndex = action.payload;
		},
		setShowSidebar: (state) => {
			state.showSidebar = !state.showSidebar;
		},
		setShowEventModal: (state, action) => {
			state.showEventModal = action.payload;
		},
	},
});

export const {
	setNextMonth,
	setPrevMonth,
	setCurrentMonth,
	setDaySelected,
	setSmallCalendarMonthIndex,
	setShowSidebar,
	setShowEventModal,
} = calendarSlice.actions;

export const selectCalendar = (state) => state.calendar;

export default calendarSlice.reducer;
