import useCompare from "@hooks/useCompare";
import { useRouter } from "next/router";
import React from "react";
import { MdCompare } from "react-icons/md";

const CompareLabel = () => {
  const { compareList } = useCompare();
  const { push } = useRouter();
  if (compareList.length === 0) {
    return null;
  }
  return (
    <button
      className="relative border-2 rounded-md p-1 border-gray-900"
      onClick={() => push("/compare")}
    >
      <div className="aspect-square w-5 rounded-full text-center text-white text-sm font-bold bg-gray-900 absolute -right-2 -top-2">
        {compareList.length}
      </div>
      <MdCompare className="dark:text-white text-4xl" />
    </button>
  );
};

export default CompareLabel;
