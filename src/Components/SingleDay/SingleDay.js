import dayjs from "dayjs";

import "./SingleDay.css";

export default function SingleDay({ day, rowIndex }) {
	function getCurrentDay() {
		return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? "current-day" : "";
	}
	return (
		<div className="single-day-wrapper">
			<header className="single-day">
				{rowIndex === 0 && <p className="day-header">{day.format("ddd").toUpperCase()}</p>}
				<p className={`${getCurrentDay()}`}>{day.format("DD")}</p>
			</header>
		</div>
	);
}
