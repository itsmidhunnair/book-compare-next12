import React from "react";
import { useRouter } from "next/router";

// For Pagination UI
import ReactPaginate from "react-paginate";

/**
 * Pagination Component
 *
 * @description will render the pagination component with Prev, Next and page no. buttons
 * will take the active buttons based on the url search query.
 *
 * The component increases the total page count every time the page number gets updated.
 *
 * Used React paginate for UI and page functionality
 *
 * @package react-paginate
 */
const Pagination = () => {
  const router = useRouter();

  return (
    <div className="my-10 flex max-w-7xl flex-wrap justify-center max-sm:w-full">
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        onClick={(e) =>
          // console.log(e)
          router.push({
            query: { ...router.query, page: e.nextSelectedPage + 1 },
          })
        }
        // onPageChange={(e) =>
        //   router.push({ query: { ...router.query, page: e.selected + 1 } })
        // }
        pageRangeDisplayed={7}
        pageCount={parseInt(router.query.page) + 5}
        previousLabel="< Prev"
        containerClassName="flex gap-x-3 flex-wrap  max-sm:justify-center gap-y-2"
        pageClassName="bg-gray-800 rounded-md text-white"
        pageLinkClassName="text-bold px-3"
        previousClassName="bg-gray-800 rounded-md text-white"
        previousLinkClassName="text-bold px-3 whitespace-nowrap"
        nextClassName="bg-gray-800 rounded-md text-white whitespace-nowrap"
        nextLinkClassName="text-bold px-3"
        activeClassName="bg-white border-2 border-gray-600"
        activeLinkClassName="text-gray-600"
        breakClassName="dark:text-white max-sm:hidden"
        initialPage={router.query.page && parseInt(router.query.page) - 1}
        renderOnZeroPageCount={null}
        // value={1}
        // forcePage={router.query.page - 1}
        // initialPage={0}
      />
    </div>
  );
};

export default Pagination;
