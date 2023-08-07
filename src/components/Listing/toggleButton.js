import useCompare from "@hooks/useCompare";
import React from "react";
import { CgRemove } from "react-icons/cg";
import { MdCompare } from "react-icons/md";

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

export default CompareToggleButton;
