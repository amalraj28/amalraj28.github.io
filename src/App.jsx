import { useState } from "react";
import "./App.css";
import Calculator from "./components/Calculator";
import { InputContext } from "./exports/exports";

function App() {
	const [text, setText] = useState(0);
	return (
		<div>
			<InputContext.Provider value={{ text, setText }}>
				<Calculator />
			</InputContext.Provider>
		</div>
	);
}

export default App;
