import { useState } from "react";
import Key from "./Key";
import Input from "./Input";
import { InputContext } from "../exports/exports";

function Calculator() {
	const [text, setText] = useState(0);
	return (
		<div>
			<InputContext.Provider value={{text, setText}}>
				<Input />
				<Key number={1}/>
			</InputContext.Provider>
		</div>
	);
}

export default Calculator;
