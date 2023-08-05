import { useQuery } from "@apollo/client";
import Loader from "@components/common/loader";
import { compareLabels } from "@constants/compare.const";
import useCompare from "@hooks/useCompare";
import Image from "next/image";
import React from "react";
import { booksById } from "src/graphql/query";
import { flatArrayOfBooks } from "src/helpers/flatenObj";

/**
 * To update data of this component
 *
 * Just update
 * -> compare.const.js from @src/constants -- For updating the left most side label column
 * -> flatArrayOfBooks of flatenObj from @src/helpes/flatenObj/index -- For adding the item data in the cells
 *
 * Both must be updated in order to display the data in the table, also the key from the flatArrayOfBooks func.
 * must match with the compare.const.js array of obj's id.
 *
 */
const BookCompare = () => {
  const { compareList } = useCompare();

  const { data } = useQuery(booksById, {
    variables: {
      bookListId: compareList,
    },
  });

  if (!data) {
    return <Loader />;
  }

  if (data && data.bookList.length === 0) {
    return <div>Please Add some to compare list</div>;
  }

  const books = flatArrayOfBooks(data.bookList);
  console.log(
    "🚀 ~ file: index.js:28 ~ BookCompare ~ data.bookList:",
    data.bookList
  );

  return (
    <div className="dark:bg-gray-700 mt-4 p-4 rounded-md dark:text-white">
      <table class="table-auto w-full border-collapse border">
        <tbody className="text-center">
          {compareLabels.map((label, index) => (
            <tr className="border" key={label.id}>
              <th className="bg-gray-800">{label.text}</th>
              {books.map((book) =>
                label.id === "image" ? (
                  <td className="border" key={label.id + book.id}>
                    <Image
                      src={book.image}
                      alt="book_image"
                      height={200}
                      width={200}
                    />
                  </td>
                ) : (
                  <td className="border" key={label.id + book.id}>
                    {book[label.id]}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookCompare;
