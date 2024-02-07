import { useContext } from "react";
import "../styles/styles.css";
import { InputContext } from "../exports/exports";

function Input() {
	const { text, setText } = useContext(InputContext);

	return (
		<div className="input-div">
			<input
				type="text"
				name="number"
				className="input"
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
		</div>
	);
}

export default Input;
