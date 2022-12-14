import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import { CalendarState } from "../store/CalendarState.js";

export const calendarSlice = createSlice({
	name: "calendar",
	initialState: CalendarState,
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
	},
});

export const {
	setNextMonth,
	setPrevMonth,
	setCurrentMonth,
	setDaySelected,
	setSmallCalendarMonthIndex,
	setShowSidebar,
} = calendarSlice.actions;

export const selectCalendar = (state) => state.calendar;

export default calendarSlice.reducer;
