import { useSelector } from "react-redux";
import CreateEventButton from "./CreateEventButton/CreateEventButton.js";
import "./Sidebar.css";
import SmallCalendar from "./SmallCalendar/SmallCalendar.js";

export default function Sidebar() {
	const showSideBar = useSelector((state) => state.showSidebar);

	function setHideSideBarClass() {
		if (!showSideBar) {
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
