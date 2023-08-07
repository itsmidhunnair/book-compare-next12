import React from "react";
import Error from "next/error";
import Image from "next/image";

import { useQuery } from "@apollo/client";

import { MdDeleteForever } from "react-icons/md";

import Loader from "@components/common/loader";

import useCompare from "@hooks/useCompare";

import { compareLabels } from "@constants/compare.const";

import { booksById } from "src/graphql/query";

import { flatArrayOfBooks } from "src/helpers/flatenObj";

import { getElementToDisplay } from "src/helpers/bookCompare";

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
  const { compareList, clearCompareList } = useCompare();

  const { data, error } = useQuery(booksById, {
    variables: {
      bookListId: compareList,
    },
  });

  if (error) {
    return (
      <Error
        statusCode={error.graphQLErrors[0].extensions.code}
        title={error.graphQLErrors[0].extensions.msg}
      />
    );
  }

  if (!data) {
    return <Loader />;
  }

  if (data && data.bookList.length === 0) {
    return <div>Please Add some to compare list</div>;
  }

  const books = flatArrayOfBooks(data.bookList);

  return (
    <div className="dark:bg-gray-700 mt-20 p-4 rounded-md dark:text-white max-w-7xl mx-auto">
      <button
        onClick={() => {
          clearCompareList();
        }}
        className="mb-3 p-2 border rounded-md float-right flex items-center"
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
                    {getElementToDisplay({ key: label.key, book: book })}
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
