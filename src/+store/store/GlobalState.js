import dayjs from "dayjs";

export const GlobalState = {
	monthIndex: dayjs().month(),
	smallCalendarMonthIndex: 0,
	daySelected: null,
	showEventModal: false,
	savedEvents: {},
	selectedEvent: null,
	labels: [],
	filteredEvents: [],
	showSidebar: true,
};
