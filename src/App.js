import { useContext, useEffect, useState } from "react";

import Header from "./Components/Header/Header.js";
import Calendar from "./Components/Calendar/Calendar.js";
import {getCurrentMonth} from './Utilities/Utilities.js'

import "./App.css";
import GlobalContext from "./Context/GlobalContext.js";
import Sidebar from "./Components/Sidebar/Sidebar.js";

function App() {
	const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
	const { monthIndex } = useContext(GlobalContext);

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
