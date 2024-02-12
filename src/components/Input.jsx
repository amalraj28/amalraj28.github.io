/* eslint-disable react/prop-types */
import { useContext } from "react";
import "../styles/styles.css";
import { InputContext } from "../exports/exports";
// import { propTypes } from "prop-types";

function Input({ upper = false }) {
  const { state, dispatch } = useContext(InputContext);
  // console.log(upper)
  return (
    <div className="input-div">
      <textarea
        readOnly
        type="text"
        name="number"
        className="input"
        value={upper ? state.upperText : state.text}
        onChange={(e) => dispatch({ val: e.target.value })}
      />
    </div>
  );
}

// Input.propTypes = { upper: PropTypes.objectOf(proptypes.any) };

export default Input;
