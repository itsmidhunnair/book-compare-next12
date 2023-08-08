import React from "react";

import { CgRemove } from "react-icons/cg";
import { MdCompare } from "react-icons/md";

import useCompare from "@hooks/useCompare";

import PropTypes from "prop-types";
/**
 * Compare button present on each card of books in listing page
 *
 * if a id is present in state then remove button is displayed else
 * add to compare button is displayed
 *
 * @param {{id:String}} book.id
 *
 * @returns {JSX.Element}
 */
const CompareToggleButton = ({ id }) => {
  const { addCompareItem, removeCompareItem, compareList } = useCompare();

  return compareList.includes(id) ? (
    <button
      key={id}
      onClick={() => removeCompareItem(id)}
      className={
        "compareBtn dark:border-red-800 dark:hover:bg-red-800 dark:focus:ring-red-900 dark:text-white disabled:bg-slate-600"
      }
    >
      <span className="pr-4">Remove</span>
      <CgRemove />
    </button>
  ) : (
    <button
      key={id}
      onClick={() => addCompareItem(id)}
      className={
        "compareBtn dark:border-blue-600 dark:hover:bg-blue-600 dark:focus:ring-blue-800 dark:text-white disabled:bg-slate-600"
      }
    >
      <span className="pr-4">Add to Compare</span>
      <MdCompare />
    </button>
  );
};

CompareToggleButton.propType = {
  id: PropTypes.string.isRequired,
};
export default CompareToggleButton;
