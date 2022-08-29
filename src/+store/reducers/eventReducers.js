import { createSlice } from "@reduxjs/toolkit";
import { EventsState } from "../store/EventsState.js";
import { GlobalState } from "../store/CalendarState.js";

export const eventSlice = createSlice({
	name: "event",
	initialState: EventsState,
	reducers: {
		setShowEventModal: (state, action) => {
			state.showEventModal = action.payload;
		},
		addEvent: (state, action) => {
			state.savedEvents[action.payload.id] = action.payload;
		},
		deleteEvent: (state, action) => {
			delete state.savedEvents[action.payload.id];
		},
		setSelectedEvent: (state, action) => {
			state.selectedEvent = action.payload;
		},
	},
});

export const { setShowEventModal, addEvent, deleteEvent, setSelectedEvent } = eventSlice.actions;

export default eventSlice.reducer;
