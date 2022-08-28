import dayjs from "dayjs";
import { Fragment, useContext, useEffect, useState } from "react";
import GlobalContext from "../../../Context/GlobalContext.js";
import { getCurrentMonth } from "../../../Utilities/Utilities.js";

import "./SmalCalendar.css";

export default function SmallCalendar() {
	const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());
	const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
	const { monthIndex, setSmallCalendarMonthIndex, daySelected, setDaySelected } = useContext(GlobalContext);

	useEffect(() => {
		setCurrentMonth(getCurrentMonth(currentMonthIdx));
	}, [currentMonthIdx]);

	useEffect(() => {
		setCurrentMonthIdx(monthIndex);
	}, [monthIndex]);

	function setNextMonth() {
		setCurrentMonthIdx(currentMonthIdx + 1);
	}

	function setPrevMonth() {
		setCurrentMonthIdx(currentMonthIdx - 1);
	}

	function setDayClass(day) {
		const format = "DD-MM-YY";
		const thisDay = day.format(format);
		const selDay = daySelected.format(format);
		const currentDay = dayjs().format(format);
		if (thisDay === currentDay) {
			return "small-calendar-current-day";
		} else if (thisDay === selDay) {
			return "small-calendar-selected-day";
		} else return "";
	}

	return (
		<div className="small-calendar-wrapper">
			<header className="small-calendar-header">
				<span className="small-calendar-date">
					{dayjs(new Date(dayjs().year(), currentMonthIdx)).format("MMMM YYYY")}
				</span>
				<div className="small-calendar-buttons-wrapper">
					<button className="small-calendar-button" onClick={setPrevMonth}>
						<i className="fa-solid fa-chevron-left"></i>
					</button>
					<button className="small-calendar-button" onClick={setNextMonth}>
						<i className="fa-solid fa-chevron-right"></i>
					</button>
				</div>
			</header>
			<div className="small-calendar">
				{currentMonth[0].map((day, i) => (
					<span key={i} className="small-calendar-day-header">
						{day.format("dd").charAt(0)}
					</span>
				))}
				{currentMonth.map((row, i) => (
					<Fragment key={i}>
						{row.map((day, idx) => (
							<button
								className={`small-calendar-day ${setDayClass(day)}`}
								key={idx}
								onClick={() => {
									setSmallCalendarMonthIndex(currentMonthIdx);
									setDaySelected(day);
								}}
							>
								<span className="text-sm">{day.format("D")}</span>
							</button>
						))}
					</Fragment>
				))}
			</div>
		</div>
	);
}
