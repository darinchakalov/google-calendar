import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDaySelected } from "../../+store/reducers/calendarReducers.js";
import { setSelectedEvent, setShowEventModal } from "../../+store/reducers/eventReducers.js";

import "./SingleDay.css";

export default function SingleDay({ day, rowIndex }) {
	const [dayEvents, setDayEvents] = useState();
	const { savedEvents } = useSelector((state) => state.event);
	const dispatch = useDispatch();

	useEffect(() => {
		if (savedEvents) {
			const events = Array.from(Object.values(savedEvents)).filter((evt) => evt.day === day.format("DD-MM-YY"));
			setDayEvents(events);
		}
	}, [savedEvents, day]);

	function dateClickHandler() {
		dispatch(setDaySelected(day));
		dispatch(setSelectedEvent(null));
		dispatch(setShowEventModal(true));
	}

	function eventClickHandler(event) {
		dispatch(setDaySelected(day));
		dispatch(setShowEventModal(true));
		dispatch(setSelectedEvent(event));
	}

	function getCurrentDay() {
		return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? "current-day" : "";
	}
	return (
		<div className="single-day-wrapper">
			<header className="day-header">
				{rowIndex === 0 && <p className="day-of-the-week">{day.format("ddd").toUpperCase()}</p>}
				<p className={`day-of-the-month ${getCurrentDay()}`} onClick={dateClickHandler}>
					{day.format("DD")}
				</p>
			</header>
			<div className="day-event-section">
				{dayEvents?.map((evt, idx) => (
					<div key={idx} className="single-event" onClick={() => eventClickHandler(evt)}>
						{evt.title}
					</div>
				))}
			</div>
		</div>
	);
}
