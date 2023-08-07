import { useRouter } from "next/router";
import { find } from "lodash";

import { IoMdClose } from "react-icons/io";

import { MdFilterList } from "react-icons/md";
// hooks
import useSelect from "@hooks/selectMenu/useFilter";
// constants
import { filterOptions } from "@constants/filter/options";
// Custom React Component
import Option from "./filterOptions";

import PropTypes from "prop-types";

/**
 * @typedef {Object} options
 * @property {String} text
 * @property {String} value
 */

/**
 * @typedef {Object} props
 * @property {options[]} options - Options to be generated
 */

//-----------------------

/**
 * A custom Dropdown container
 *
 * @description Renders a custom dropdown container with options
 * generated based on the array of Object provided. when an option
 * is clicked the query param gets updated and new data is fetched.
 *
 * Will also add a tag of selected option beside the dropdown.
 *
 * the default selected option will be taken from the search query
 *
 * @param {props}
 * @returns
 */
const Select = ({ options }) => {
  const { query } = useRouter();

  const { clearSelected, handleOpen, open, selected, setSelectedValue } =
    useSelect();

  return (
    <>
      <div className="relative flex items-center">
        <button
          onClick={() => clearSelected()}
          className={`mr-3 items-center rounded-md bg-gray-300 px-3 py-2 text-sm ${
            query.filter ? "flex" : "hidden"
          }`}
        >
          {query?.filter && find(filterOptions, { value: query?.filter }).text}
          <span>
            <IoMdClose className="ml-2 text-base text-gray-700" />
          </span>
        </button>
        <button
          className="inline-flex items-center rounded-md bg-gray-300 p-2 text-center  font-medium text-black transition duration-500 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
          type="button"
          onClick={handleOpen}
        >
          <span className="text-xl">
            <MdFilterList />
          </span>
        </button>

        {open && (
          <div className="absolute right-0 top-[120%] z-10 w-44 overflow-hidden rounded-lg  border bg-white  shadow-lg transition duration-500">
            <ul className="duration-400 divide-y divide-gray-100 text-sm text-gray-700 transition ">
              {options?.map((option) => (
                <Option
                  key={option.id}
                  option={option}
                  setSelectedValue={setSelectedValue}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

Select.propTypes = {
  options: PropTypes.shape({
    text: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }),
};

export default Select;
