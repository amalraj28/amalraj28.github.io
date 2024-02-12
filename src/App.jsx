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
	const operatorCode = (val) => {
		if (
			currState.text &&
			isNaN(parseInt(currState.text.toString()[currState.text.toString().length - 1]))
		) {
			return currState;
		}
		const newText = currState.equalPressed
			? currState.text + val
			: currState.upperText + currState.text + val;
		return {
			...currState,
			upperText: newText,
			clearLower: true,
			decimal: 0,
			equalPressed: false,
		};
	};
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
					currState.text === "0" || currState.clearLower
						? "" + action.val
						: currState.text + action.val,
				upperText: currState.equalPressed ? "" : currState.upperText,
				clearLower: false,
				equalPressed: false
			};

		case "=":
			return {
				...currState,
				upperText:
					currState.upperText && !currState.equalPressed
						? currState.upperText + currState.text + "="
						: currState.upperText,
				text: !currState.equalPressed
					? eval(currState.upperText + currState.text)
					: currState.text,
				clearLower: true,
				equalPressed: true,
				decimal: 0,
			};

		case "+":
		case "-":
		case "*":
		case "/":
			return operatorCode(action.val);

		case ".": {
			if (currState.equalPressed) return { ...initState, text: "0." }
			return currState.clearLower
				? {
					...currState,
					text: "0.",
					clearLower: false,
					equalPressed: false,
					decimal: 1,
				}
				: currState.decimal === 0
					? { ...currState, text: currState.text + action.val, decimal: 1 }
					: currState;
		}

		case "CE":
			return initState;

		case "bksp": {
			return currState.equalPressed
				? initState
				: currState.text.length < 2 ||
					(currState.text.length === 2 && currState.text[0] === "-")
					? { ...currState, text: "0" }
					: currState.text[currState.text.length - 1] === "."
						? { ...currState, text: currState.text.slice(0, -1), decimal: 0 }
						: { ...currState, text: currState.text.slice(0, -1) };
		}
		case "plus-minus": {
			const num = parseInt(currState.text);
			if (num === 0) return currState;
			const newText =
				Math.sign(num) === 1 ? `-${currState.text}` : currState.text.slice(1);

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
