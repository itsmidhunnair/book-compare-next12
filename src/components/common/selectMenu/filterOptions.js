import PropTypes from "prop-types";

/**
 * @typedef {Object} props
 * @property {import("./filterMenu").options} option
 * @property {Function} setSelectedValue - Function to change State variable when an option is clicked
 */

/**
 * Options Component for Custom Dropdown Element
 *
 * @description renders a select option when an object with text and value is provided,
 * when user clicks on the option the the provided state variable gets updated
 *
 * @param {props}
 */
const Option = ({ option, setSelectedValue }) => {
  return (
    <>
      <li>
        <button
          className="block w-full px-4 py-2 text-left hover:bg-gray-100"
          value={option.value}
          onClick={(e) => {
            setSelectedValue(e);
          }}
        >
          {option.text}
        </button>
      </li>
    </>
  );
};

Option.propType = {
  option: PropTypes.shape({
    text: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }),
  setSelectedValue: PropTypes.func.isRequired,
};

export default Option;
