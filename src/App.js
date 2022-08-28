import { useEffect, useState } from "react";

import Header from "./Components/Header/Header.js";
import Calendar from "./Components/Calendar/Calendar.js";
import { getCurrentMonth } from "./Utilities/Utilities.js";

import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar.js";
import { useSelector } from "react-redux";

function App() {
	const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
	const monthIndex = useSelector((state) => state.monthIndex);

	useEffect(() => {
		setCurrentMonth(getCurrentMonth(monthIndex));
	}, [monthIndex]);

	return (
		<>
			<Header />
			<div className="main-wrapper">
				<Sidebar />
				<Calendar month={currentMonth} />
			</div>
		</>
	);
}

export default App;
