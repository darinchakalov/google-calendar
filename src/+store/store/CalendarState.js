import dayjs from "dayjs";

export const CalendarState = {
	monthIndex: dayjs().month(),
	smallCalendarMonthIndex: 0,
	daySelected: null,
	showSidebar: true,
};
