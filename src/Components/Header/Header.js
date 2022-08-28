import "./Header.css";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { setNextMonth, setPrevMonth, setCurrentMonth } from "../../+store/reducers/calendarSlice.js";

export default function Header() {
	const dispatch = useDispatch();
	const monthIndex = useSelector((state) => state.monthIndex);

	function setToday() {
		dispatch(setCurrentMonth(monthIndex === dayjs().month() ? monthIndex + Math.random() : dayjs().month()));
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
				<button
					className="left-arrow arrow-button header-button"
					type="button"
					onClick={() => dispatch(setPrevMonth())}
				>
					<i className="fa-solid fa-chevron-left"></i>
				</button>
				<button
					className="right-arrow arrow-button header-button"
					type="button"
					onClick={() => dispatch(setNextMonth())}
				>
					<i className="fa-solid fa-chevron-right"></i>
				</button>
				<div className="current-month">{dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}</div>
			</div>
		</div>
	);
}
