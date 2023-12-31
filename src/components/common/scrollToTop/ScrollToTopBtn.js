import React from "react";
import { BiArrowToTop } from "react-icons/bi";

import { scrollToTop } from "src/helpers/handleScroll/scroll";
/**
 * Scroll to Top Button
 *
 * @description Renders a page scroll to top button UI component.
 * The button will be placed at bottom right side of the screen
 *
 * When clicked will take the user to top of the screen
 *
 */
const ScrollToTopBtn = () => {
  return (
    <button
      onClick={scrollToTop}
      aria-label="scroll"
      className={`fixed bottom-10 right-10 rounded-md bg-gray-700 p-1 dark:bg-white max-md:bottom-5 max-md:right-5`}
    >
      <BiArrowToTop className="text-3xl text-white dark:text-gray-800" />
    </button>
  );
};

export default ScrollToTopBtn;
