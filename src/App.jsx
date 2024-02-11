import { useReducer } from "react";
import "./App.css";
import Calculator from "./components/Calculator";
import { InputContext } from "./exports/exports";

const initState = {
	text: "0",
	decimal: 0,
	upperText: "",
	clearLower: false,
	equalPressed: false,
};

const reducer = (currState, action) => {
	const text = currState.text;
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
					text === "0" || currState.clearLower
						? "" + action.val
						: text + action.val,
				clearLower: false,
			};

		case "=":
			return {
				...currState,
				upperText: currState.upperText + currState.text + "=",
				text: eval(currState.upperText + currState.text),
				clearLower: true,
				equalPressed: true,
				decimal: 0,
			};

		case "+": {
			const newText = currState.text + "+";
			return { ...currState, upperText: newText, clearLower: true, decimal: 0 };
		}
		case "-": {
			const newText = currState.text + "-";
			return { ...currState, upperText: newText, clearLower: true, decimal: 0 };
		}
		case "*": {
			const newText = currState.text + "*";
			return { ...currState, upperText: newText, clearLower: true, decimal: 0 };
		}
		case "/": {
			const newText = currState.text + "/";
			return { ...currState, upperText: newText, clearLower: true, decimal: 0 };
		}

		case ".":
			return currState.decimal === 0
				? { ...currState, text: text + action.val, decimal: 1 }
				: currState;

		case "CE":
			return initState;

		case "bksp":
			return text.length < 2 || (text.length === 2 && text[0] === "-")
				? currState
				: text[text.length - 1] === "."
				? { ...currState, text: text.slice(0, -1), decimal: 0 }
				: { ...currState, text: text.slice(0, -1) };

		case "plus-minus": {
			const num = parseInt(text);
			if (num === 0) return currState;
			const newText = Math.sign(num) === 1 ? `-${text}` : text.slice(1);

			return { ...currState, text: newText };
		}

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
