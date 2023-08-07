import React from "react";
import { useRouter } from "next/router";

import { isEmpty, size } from "lodash";

import { client } from "src/graphql/client";
import { searchBooks } from "src/graphql/query";

import SearchBar from "@components/search/SearchBar";
import BookCard from "@components/Listing/BookCard";
import Loader from "@components/common/loader";
import Select from "@components/common/selectMenu/filterMenu";
import Pagination from "@components/common/pagination/Pagination";
import ScrollToTopBtn from "@components/common/scrollToTop/ScrollToTopBtn";

import { filterOptions } from "@constants/filter/options";

const Books = (props) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <>
      <div className="container mx-auto max-w-7xl pt-10">
        <SearchBar />
        {props.data && (
          <div className="flex items-center justify-between gap-y-2 border-b-2 px-3 py-7 max-sm:flex-col">
            <span className="text-xl font-medium text-gray-800 dark:text-white max-sm:text-base">
              Search Results for {`"${router.query.search}"`}
            </span>
            <Select options={filterOptions} />
            {/* <Select
              handleOpen={handleOpen}
              open={open}
              setSelectedValue={setSelectedValue}
              options={filterOptions}
            /> */}
          </div>
        )}
        <div className="mt-10 flex max-w-7xl flex-wrap justify-center gap-4">
          {props.data ? (
            size(props.data.books) > 0 ? (
              props.data.books.map((book) => (
                <BookCard book={book} key={book.id} />
              ))
            ) : (
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                No Books Found
              </h3>
            )
          ) : (
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              {props.msg}
            </h3>
          )}
        </div>
        {size(props?.data?.books) > 0 && (
          <>
            <Pagination />
            <ScrollToTopBtn />
          </>
        )}
      </div>
    </>
  );
};

export default Books;

export async function getServerSideProps(context) {
  const { query } = context;

  if (!isEmpty(query)) {
    const { data } = await client.query({
      query: searchBooks,
      variables: {
        input: {
          index:
            parseInt(query.page) > 1
              ? parseInt(query.page) * 10 - 9
              : parseInt(query.page),
          search: query.search,
          filter: query.filter,
        },
      },
      fetchPolicy: "no-cache",
    });
    console.log("🚀 ~ file: index.js:87 ~ getServerSideProps ~ data:", data);
    return {
      props: {
        data,
      },
    };
  } else {
    return {
      props: {
        msg: "Search For Any Books...",
      },
    };
  }
}
