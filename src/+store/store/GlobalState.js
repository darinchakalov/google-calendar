import dayjs from "dayjs";

export const GlobalState = {
	monthIndex: dayjs().month(),
	// setMonthIndex: (index) => {},
	smallCalendarMonthIndex: 0,
	// setSmallCalendarMonthIndex: (index) => {},
	daySelected: null,
	// setDaySelected: (day) => {},
	showEventModal: false,
	// setShowEventModal: () => {},
	// dispatchCalEvent: ({ type, payload }) => {},
	savedEvents: [],
	selectedEvent: null,
	// setSelectedEvent: () => {},
	// setLabels: () => {},
	labels: [],
	// updateLabel: () => {},
	filteredEvents: [],
};
