import { useDispatch } from "react-redux";
import { setShowEventModal } from "../../../+store/reducers/calendarSlice.js";
import "./CreateEventButton.css";

export default function CreateEventButton() {
	const dispatch= useDispatch()

	return (
		<button className="create-event-button" onClick={() => dispatch(setShowEventModal(true))}>
			<img className="create-button-logo" src="/Images/plus.svg" alt="" />
			<span className="create-button-text">Create</span>
			<i className="fa-solid fa-caret-down"></i>
		</button>
	);
}
