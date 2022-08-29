import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDaySelected, setSelectedEvent, setShowEventModal } from "../../+store/reducers/calendarSlice.js";

import "./SingleDay.css";

export default function SingleDay({ day, rowIndex }) {
	const [dayEvents, setDayEvents] = useState();
	const { savedEvents } = useSelector((state) => state);
	const dispatch = useDispatch();

	useEffect(() => {
		const events = Array.from(Object.values(savedEvents)).filter((evt) => evt.day === day.format("DD-MM-YY"));
		setDayEvents(events);
	}, [savedEvents, day]);

	function eventSectionClickHandler() {
		dispatch(setDaySelected(day));
		dispatch(setShowEventModal(true));
	}

	function eventClickHandler(event) {
		dispatch(setSelectedEvent(event))
	}

	function getCurrentDay() {
		return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? "current-day" : "";
	}
	return (
		<div className="single-day-wrapper">
			<header className="day-header">
				{rowIndex === 0 && <p>{day.format("ddd").toUpperCase()}</p>}
				<p className={`${getCurrentDay()}`}>{day.format("DD")}</p>
			</header>
			<div className="day-event-section" onClick={eventSectionClickHandler}>
				{dayEvents?.map((evt, idx) => (
					<div key={idx} className="single-event" onClick={() => eventClickHandler(evt)}>
						{evt.title}
					</div>
				))}
			</div>
		</div>
	);
}
