import "./Header.css";
import dayjs from "dayjs";
import { useContext } from "react";
import GlobalContext from "../../Context/GlobalContext.js";

export default function Header() {
	const { monthIndex, setMonthIndex } = useContext(GlobalContext);

	function setNextMonth() {
		setMonthIndex(monthIndex + 1);
	}

	function setPrevMonth() {
		setMonthIndex(monthIndex - 1);
	}

	function setToday() {
		setMonthIndex(monthIndex === dayjs().month() ? monthIndex + Math.random() : dayjs().month());
	}

	return (
		<div className="navbar-wrapper">
			<div className="navbar-left-menu">
				<button type="button" className="hide-sidebar-button header-button">
					<i className="fa-solid fa-bars"></i>
				</button>
				<div className="navbar-logo-wrapper">
					<img className="navbar-logo" src="/Images/Google-Calendar-Logo.png" alt="logo" />
					<div className="calendar-heading">Calendar</div>
				</div>
				<button type="button" className="today-button header-button" onClick={setToday}>
					Today
				</button>
				<button className="left-arrow arrow-button header-button" type="button" onClick={setPrevMonth}>
					<i className="fa-solid fa-chevron-left"></i>
				</button>
				<button className="right-arrow arrow-button header-button" type="button" onClick={setNextMonth}>
					<i className="fa-solid fa-chevron-right"></i>
				</button>
				<div className="current-month">{dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}</div>
			</div>
		</div>
	);
}
