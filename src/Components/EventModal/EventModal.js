import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import uniqid from "uniqid";

import "./EventModal.css";
import { addEvent, deleteEvent, setSelectedEvent, setShowEventModal } from "../../+store/reducers/eventReducers.js";
import { setDaySelected } from "../../+store/reducers/calendarReducers.js";

export default function EventModal() {
	const dispatch = useDispatch();
	const [currentEvent, setCurrentEvent] = useState({
		title: "",
		description: "",
	});
	let { daySelected } = useSelector((state) => state.calendar);
	if (typeof daySelected === "string") {
		daySelected = dayjs(daySelected);
		dispatch(setDaySelected(daySelected))
	}
	let { selectedEvent } = useSelector((state) => state.event);
	if (!daySelected) {
		daySelected = dayjs();
	}

	useEffect(() => {
		if (selectedEvent) {
			setCurrentEvent(selectedEvent);
		}
	}, [selectedEvent]);

	function modalSubmitHandler(e) {
		e.preventDefault();
		const calendarEvent = {
			title: currentEvent.title,
			description: currentEvent.description,
			day: daySelected.format("DD-MM-YY"),
			id: selectedEvent ? selectedEvent.id : uniqid(),
		};
		dispatch(addEvent(calendarEvent));
		dispatch(setSelectedEvent(null));
		dispatch(setShowEventModal(false));
	}

	function eventDeleteHandler() {
		dispatch(deleteEvent(selectedEvent));
		dispatch(setSelectedEvent(null));
		dispatch(setShowEventModal(false));
	}

	return (
		<div className="event-modal-wrapper">
			<header className="event-modal-header">
				<i className="fa-solid fa-grip-lines"></i>
				<div className="event-modal-header-buttons-wrapper">
					{selectedEvent ? <i onClick={eventDeleteHandler} className="fa-solid fa-trash-can"></i> : ""}
					<i className="fa-solid fa-xmark" onClick={() => dispatch(setShowEventModal(false))}></i>
				</div>
			</header>
			<div className="event-modal-main-wrapper">
				<form className="event-modal-form">
					<input
						className="event-modal-title-input"
						type="text"
						name="title"
						value={currentEvent.title}
						placeholder="Add title"
						required
						onChange={(e) => {
							setCurrentEvent((state) => ({
								...state,
								title: e.target.value,
							}));
						}}
					/>
					<div className="text-area-input-wrapper">
						<i className="fa-regular fa-clock"></i>
						{daySelected ? daySelected.format("MMM D, YYYY") : dayjs().format("MMM D, YYYY")}
					</div>
					<div className="text-area-input-wrapper">
						<i className="fa-solid fa-bars-staggered"></i>
						<textarea
							className="modal-textarea"
							rows="6"
							cols="40"
							onChange={(e) => {
								setCurrentEvent((state) => ({
									...state,
									description: e.target.value,
								}));
							}}
							value={currentEvent.description}
						></textarea>
					</div>
					<button className="event-modal-save-button" type="submit" onClick={modalSubmitHandler}>
						Save
					</button>
				</form>
			</div>
		</div>
	);
}
