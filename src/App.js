import { useContext, useEffect, useState } from "react";

import Header from "./Components/Header/Header.js";
import ContextWrapper from "./Context/ContextWrapper.js";
import Calendar from "./Components/Calendar/Calendar.js";
import dayjs from "dayjs";

import "./App.css";
import GlobalContext from "./Context/GlobalContext.js";

function App() {
	const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
	const { monthIndex } = useContext(GlobalContext);

	useEffect(() => {
		setCurrentMonth(getCurrentMonth(monthIndex));
	}, [monthIndex]);

	function getCurrentMonth(month = dayjs().month()) {
		month = Math.floor(month);
		const year = dayjs().year();
		const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
		let currentMonthCount = 0 - firstDayOfTheMonth;
		const daysMatrix = new Array(5).fill([]).map(() => {
			return new Array(7).fill(null).map(() => {
				currentMonthCount++;
				return dayjs(new Date(year, month, currentMonthCount));
			});
		});
		return daysMatrix;
	}

	return (
		<>
			<ContextWrapper>
				<Header />
				<Calendar month={currentMonth} />
			</ContextWrapper>
		</>
	);
}

export default App;
