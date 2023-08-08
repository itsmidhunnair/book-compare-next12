import useCompare from "@hooks/useCompare";
import { useRouter } from "next/router";
import React from "react";
import { MdCompare } from "react-icons/md";

/**
 * Compare page button with label (counter)
 *
 * @description Renders a button with compare icon and counter (the size of compare list)
 * which on click redirects to the Comparison page.
 *
 */
const CompareLabel = () => {
  const { compareList } = useCompare();
  const { push } = useRouter();

  if (compareList.length === 0) {
    return null;
  }

  return (
    <button
      className="relative border-2 rounded-md p-1 border-gray-800"
      aria-label="compare"
      onClick={() => push("/compare")}
    >
      <div className="aspect-square w-5 rounded-full text-center text-white text-sm font-bold bg-gray-800 absolute -right-2 -top-2">
        {compareList.length}
      </div>
      <MdCompare className="dark:text-white text-4xl" />
    </button>
  );
};

export default CompareLabel;
