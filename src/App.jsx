import { useReducer } from "react";
import "./App.css";
import Calculator from "./components/Calculator";
import { InputContext } from "./exports/exports";

const initState = {
	text: "0",
	decimal: 0,
};

const reducer = (currState, action) => {
	switch (action.val) {
		case "1":
		case "2":
		case "3":
		case "4":
		case "5":
		case "6":
		case "7":
		case "8":
		case "9":
		case "0":
			return {
				...currState,
				text:
					currState.text === "0"
						? "" + action.val
						: currState.text + action.val,
			};

		case ".":
			return currState.decimal === 0
				? { text: currState.text + action.val, decimal: 1 }
				: currState;

		case "CE":
			return initState;

		case "bksp":
			if (currState.text.length < 2) return initState;
			return currState.text.charAt(currState.text.length - 1) === "."
				? { ...currState, text: currState.text.slice(0, -1), decimal: 0 }
				: { ...currState, text: currState.text.slice(0, -1) };

		default:
			return currState;
	}
};

function App() {
	const [state, dispatch] = useReducer(reducer, initState);
	return (
		<div>
			<InputContext.Provider value={{ state, dispatch }}>
				<Calculator />
			</InputContext.Provider>
		</div>
	);
}

export default App;
