import React from "react";
import { SiQuickbooks } from "react-icons/si";
import PropTypes from "prop-types";

/**
 * Main brand logo component
 *
 * @description Can be used in homepage, headers etc. where a large brand logo is to be displayed.
 *
 * @param {{mode:"dark"|"light"}} mode - dark or light in which bg the logo is to be displayed
 * @default {mode:dark} - "Logo will be diplayed in white color (suitable for dark background)"
 */
const HeaderLogo = ({ mode }) => {
  return (
    <div className="pb-3 flex items-center justify-center">
      <SiQuickbooks
        className={`text-5xl text-gray-800 ${
          mode === "dark" && "dark:text-gray-50"
        }`}
      />
      <span
        className={`pl-2 text-2xl font-black text-gray-800 ${
          mode === "dark" && "dark:text-gray-50"
        }`}
      >
        Quick Books
      </span>
    </div>
  );
};

HeaderLogo.defaultProps = {
  mode: "dark",
};

HeaderLogo.propTypes = {
  mode: PropTypes.oneOf(["dark", "light"]),
};

export default HeaderLogo;
