/**
 * Custom Hook made to handle the scroll interactions
 *
 * @function scrollToTop() - when called, scrolls the page to the max top
 *
 */
const useScrollTo = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return { scrollToTop };
};

export default useScrollTo;
