import { GlobalState } from "../store/index.js";

function calendarReducer(state = GlobalState, action) {
	switch (action.type) {
		case "SET_NEXT_MONTH":
			console.log(state);
			return { ...state, monthIndex: state.monthIndex + 1 };
		case "SET_PREV_MONTH":
			return { ...state, monthIndex: state.monthIndex - 1 };
		default:
			return state;
	}
}

export default calendarReducer;
