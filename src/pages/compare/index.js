import HeaderLogo from "@components/common/headerLogo";
import BookCompare from "@components/comparison";
import React from "react";

const Page = () => {
  return (
    <div className="m-4 divide-y-2">
      <div className="py-2">
        <HeaderLogo />
      </div>
      <div><BookCompare/></div>
    </div>
  );
};

export default Page;
