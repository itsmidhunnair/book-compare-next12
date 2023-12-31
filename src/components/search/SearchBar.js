import React from "react";
import { useRouter } from "next/router";
// Hook
import useSearch from "@hooks/useSearch";
// Custom Component
import HeaderLogo from "@components/common/headerLogo";
import CompareButton from "@components/search/compareLabel";

/**
 * Search Bar Component
 *
 * @description Renders search bar where user can enter the book name and on submit
 * the text is set in the query params and based on it the data is displayed in the page,
 *
 * If a page is reloaded after the search the search term is bought back to input field
 * from the query params
 *
 * All functionality is handled by useSearch() (custom hook)
 *
 */
const SearchBar = () => {
  const { submitSearch } = useSearch();
  const { query } = useRouter();
  return (
    <>
      <div className="mb-3 max-sm:hidden">
        <HeaderLogo />
      </div>
      <div className="flex items-center justify-center gap-x-3">
        <form className="max-w-4xl flex-1" onSubmit={submitSearch}>
          <label
            htmlFor="default-search"
            className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                aria-hidden="true"
                className="h-5 w-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="search"
              name="search"
              id="default-search"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Search for Books..."
              required
              defaultValue={query.search}
            />
            <button
              type="submit"
              className="dark:hover: absolute bottom-2.5 right-2.5 rounded-lg bg-gray-700 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-gray-800 dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            >
              Search
            </button>
          </div>
        </form>
        <CompareButton />
      </div>
    </>
  );
};

export default SearchBar;
