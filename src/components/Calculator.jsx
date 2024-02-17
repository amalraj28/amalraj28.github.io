import Key from "./Key";
import Input from "./Input";
import "../styles/styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusMinus } from "@fortawesome/free-solid-svg-icons";

function Calculator() {
  return (
    <div className="table">
      <table>
        <tbody>
          <tr className="text-row" id="upper-text">
            <td className="text-field" colSpan={4}>
              <Input upper={true} />
            </td>
          </tr>
          <tr className="text-row" id="lower-text">
            <td className="text-field" colSpan={4}>
              <Input />
            </td>
          </tr>
          <tr>
            <td>
              <Key value="" />
            </td>
            <td>
              <Key value="CE" />
            </td>
            <td>
              <Key value="bksp" />
            </td>
            <td>
              <Key value="+" />
            </td>
          </tr>
          <tr>
            <td>
              <Key value="1" />
            </td>
            <td>
              <Key value="2" />
            </td>
            <td>
              <Key value="3" />
            </td>
            <td>
              <Key value="-" />
            </td>
          </tr>
          <tr>
            <td>
              <Key value="4" />
            </td>
            <td>
              <Key value="5" />
            </td>
            <td>
              <Key value="6" />
            </td>
            <td>
              <Key value="*" />
            </td>
          </tr>
          <tr>
            <td>
              <Key value="7" />
            </td>
            <td>
              <Key value="8" />
            </td>
            <td>
              <Key value="9" />
            </td>
            <td>
              <Key value="/" />
            </td>
          </tr>
          <tr>
            <td>
              <Key
                value={<FontAwesomeIcon icon={faPlusMinus} />}
                name="plus-minus"
              />
            </td>
            <td>
              <Key value="0" />
            </td>
            <td>
              <Key value="." />
            </td>
            <td>
              <Key value="=" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Calculator;
