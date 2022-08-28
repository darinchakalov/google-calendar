import { Fragment } from "react";
import SingleDay from "../SingleDay/SingleDay.js";

import './Calendar.css'

export default function Calendar({ month }) {
	return (
		<div className="calendar-wrapper">
			{month.map((row, i) => (
				<Fragment key={i}>
					{row.map((day, index) => (
						<SingleDay day={day} key={index} rowIndex={i} />
					))}
				</Fragment>
			))}
		</div>
	);
}
