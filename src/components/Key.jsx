/* eslint-disable react/prop-types */

import { useContext } from "react";
import { InputContext } from "../exports/exports";

function Key({ value }) {
	const { setText } = useContext(InputContext);
	const update = (e) => {
		!isNaN(e.target.innerText) &&
			e.target.innerText.length &&
			setText((prevValue) => {
				const num = +prevValue;
				const val = +e.target.innerText;
				return num * 10 + val;
			});
	};

	return (
		<div className="key-div">
			<button type="button" className="key" onClick={update}>
				{value}
			</button>
		</div>
	);
}

export default Key;
