import { useSelector } from "react-redux";
import CreateEventButton from "./CreateEventButton/CreateEventButton.js";
import "./Sidebar.css";
import SmallCalendar from "./SmallCalendar/SmallCalendar.js";

export default function Sidebar() {
	const {showSidebar} = useSelector((state) => state.calendar);


	function setHideSideBarClass() {
		if (!showSidebar) {
			return "hide-sidebar";
		} else return "";
	}

	return (
		<div className={`sidebar-wrapper ${setHideSideBarClass()}`}>
			<CreateEventButton />
			<SmallCalendar />
		</div>
	);
}
