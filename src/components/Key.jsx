import PropTypes from "prop-types";
import { useContext } from "react";
import { InputContext } from "../exports/exports";

function Key({ number }) {
	const { setText } = useContext(InputContext);
	const update = (e) => {
		
		setText((prevValue) => {
			const num = +prevValue;
			const val = +e.target.innerText;

			return num * 10 + val;
		});
	};
	return (
		<div>
			<button type="button" onClick={update}>
				{number}
			</button>
		</div>
	);
}

Key.propTypes = {
	number: PropTypes.number,
};

export default Key;
