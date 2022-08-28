import { useEffect, useState } from "react";

import Header from "./Components/Header/Header.js";
import Calendar from "./Components/Calendar/Calendar.js";
import { getCurrentMonth } from "./Utilities/Utilities.js";

import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar.js";
import { useSelector } from "react-redux";
import EventModal from "./Components/EventModal/EventModal.js";

function App() {
	const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
	const { monthIndex, showEventModal } = useSelector((state) => state);

	useEffect(() => {
		setCurrentMonth(getCurrentMonth(monthIndex));
	}, [monthIndex]);

	return (
		<>
			{showEventModal && <EventModal />}

			<Header />
			<div className="main-wrapper">
				<Sidebar />
				<Calendar month={currentMonth} />
			</div>
		</>
	);
}

export default App;
