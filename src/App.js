import Header from "./Components/Header/Header.js";
import "./App.css";
import ContextWrapper from "./Context/ContextWrapper.js";

function App() {
	return (
		<>
			<ContextWrapper>
				<Header />
			</ContextWrapper>
		</>
	);
}

export default App;
