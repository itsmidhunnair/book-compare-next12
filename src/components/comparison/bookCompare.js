import React from "react";
import Error from "next/error";

import { useQuery } from "@apollo/client";

import { MdDeleteForever } from "react-icons/md";

import Loader from "@components/common/loader";

import useCompare from "@hooks/useCompare";

import { compareLabels } from "@constants/compare.const";

import { booksById } from "src/graphql/query";

import { flatArrayOfBooks } from "src/helpers/flatenObj";

import { getElementToDisplay } from "src/helpers/bookCompare";
import NoBookToCompare from "./noBooks/noBooksToCompare";

/**
 *
 ** Book Comparison Page Table Component
 *
 * To update data of this component
 *
 * Just update
 * -> compare.const.js from @src/constants -- For updating the left most side label column
 * -> flatArrayOfBooks of flatenObj from @src/helpes/flatenObj/index -- For adding the item data in the cells
 *
 * Both must be updated in order to display the data in the table,
 * also the key from the flatArrayOfBooks func. must match with the
 * compare.const.js array of obj's id.
 *
 */
const BookCompare = () => {
  const { compareList, clearCompareList, removeCompareItem } = useCompare();

  const { data, error, loading } = useQuery(booksById, {
    variables: {
      bookListId: compareList,
    },
  });

  /**
   * If any error is found then this is returned
   */
  if (error) {
    return (
      <Error
        statusCode={error.graphQLErrors[0].extensions.code}
        title={error.graphQLErrors[0].extensions.msg}
      />
    );
  }

  /**
   * rendered untill data is not fetched and there is no error
   */
  if (loading) {
    return <Loader />;
  }

  /**
   * rendered when data fetching is complete but there is no data
   */
  if (data && data.bookList.length === 0) {
    return <NoBookToCompare />;
  }

  /**
   * creates array of single level object from nested level
   */
  const books = flatArrayOfBooks(data.bookList);

  return (
    <div className="dark:bg-gray-700 mt-20 p-4 rounded-md dark:text-white max-w-7xl mx-auto">
      <button
        aria-label="removeall"
        onClick={() => {
          clearCompareList();
        }}
        className="mb-3 p-2 border rounded-md float-right flex items-center bg-red-900"
      >
        <MdDeleteForever className="text-lg" />
        <span>Remove all</span>
      </button>
      <div className="max-md:overflow-x-auto w-full">
        <table class="md:table-fixed w-full border-collapse border">
          <tbody className="text-center">
            {compareLabels.map((label, index) => (
              <tr className="border odd:bg-gray-600" key={label.key}>
                <th className="bg-gray-800 p-2">{label.text}</th>
                {books.map((book) => (
                  <td className="border p-1" key={label.key + book.id}>
                    {getElementToDisplay({
                      key: label.key,
                      book: book,
                      removeCompareItem,
                    })}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookCompare;
