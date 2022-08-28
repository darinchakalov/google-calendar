import { createContext } from "react";

const GlobalContext = createContext({
	monthIndex: 0,
	setMonthIndex: (index) => {},
	smallCalendarMonthIndex: 0,
	setSmallCalendarMonthIndex: (index) => {},
	daySelected: null,
	setDaySelected: (day) => {},
	showEventModal: false,
	setShowEventModal: () => {},
	dispatchCalEvent: ({ type, payload }) => {},
	savedEvents: [],
	selectedEvent: null,
	setSelectedEvent: () => {},
	setLabels: () => {},
	labels: [],
	updateLabel: () => {},
	filteredEvents: [],
});

export default GlobalContext