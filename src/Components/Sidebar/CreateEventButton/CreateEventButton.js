import "./CreateEventButton.css";

export default function CreateEventButton() {
	return (
		<button className="create-event-button">
			<img className="create-button-logo" src="/Images/plus.svg" alt="" />
			<span className="create-button-text">Create</span>
			<i className="fa-solid fa-caret-down"></i>
		</button>
	);
}
