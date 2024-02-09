import { useContext } from "react";
import "../styles/styles.css";
import { InputContext } from "../exports/exports";

function Input() {
	const { state, dispatch } = useContext(InputContext);
	// useEffect(() => {
	// 	console.log("Input Component rendered");
	// }, [text]);

	return (
		<div className="input-div">
			<textarea
				readOnly
				type="text"
				name="number"
				className="input"
				value={state.text}
				onChange={(e) => dispatch({val: e.target.value})}
			/>
		</div>
	);
}

export default Input;
