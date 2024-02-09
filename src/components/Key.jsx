/* eslint-disable react/prop-types */

import { useContext } from "react";
import { InputContext } from "../exports/exports";

function Key({ value }) {
	const { state, dispatch } = useContext(InputContext);

	return (
		<div className="key-div">
			<button type="button" className="key" onClick={(e) => dispatch({val: e.target.innerText})}>
				{value}
			</button>
		</div>
	);
}

export default Key;
