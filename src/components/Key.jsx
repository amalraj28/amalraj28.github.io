/* eslint-disable react/prop-types */

import { useContext } from "react";
import { InputContext } from "../exports/exports";

function Key({ value, name = "" }) {
  const { dispatch } = useContext(InputContext);

  return (
    <div className="key-div">
      <button
        type="button"
        className="key"
        onClick={(e) =>
          dispatch({ val: name === "" ? e.target.innerText : name })
        }
      >
        {value}
      </button>
    </div>
  );
}

export default Key;
