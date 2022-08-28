import dayjs from "dayjs";
import { useEffect, useState } from "react";

import "./SingleDay.css";

export default function SingleDay({ day, rowIndex }) {
	const [isCurrentDay, setIsCurrentDay] = useState(false);

    let dayClassName = "";


	useEffect(() => {
		if (day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")) {
			setIsCurrentDay(true);
            console.log(dayjs(), day);
		}
	}, []);

	if (isCurrentDay) {
		dayClassName = "current-day";
	}
	return (
		<div className="single-day-wrapper">
			<header className="single-day">
				{rowIndex === 0 && <p>{day.format("ddd").toUpperCase()}</p>}
				<p className={dayClassName}>{day.format("DD")}</p>
			</header>
		</div>
	);
}
