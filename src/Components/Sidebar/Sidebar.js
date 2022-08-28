import CreateEventButton from "./CreateEventButton/CreateEventButton.js";
import "./Sidebar.css";
import SmallCalendar from "./SmallCalendar/SmalCalendar.js";

export default function Sidebar() {
	return (
		<div className="sidebar-wrapper">
            <CreateEventButton />
            <SmallCalendar />
		</div>
	);
}
