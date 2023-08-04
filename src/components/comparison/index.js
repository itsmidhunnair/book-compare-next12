import { useQuery } from "@apollo/client";
import useCompare from "@hooks/useCompare";
import { find, findKey } from "lodash";
import React from "react";
import { client } from "src/graphql/client";
import { booksById } from "src/graphql/query";

const BookCompare = () => {
  const { compareList } = useCompare();

  const { data } = useQuery(booksById, {
    variables: {
      bookListId: compareList,
    },
  });
  const labels = ["", "title", "id"];
  console.log("🚀 ~ file: index.js:15 ~ BookCompare ~ data:", data?.bookList);

  return (
    <div className="dark:bg-gray-700 mt-4 p-4 rounded-md dark:text-white">
      <table class="table-auto w-full border-collapse border">
        <tbody className="text-center">
          {labels.map((label, index) => (
            <tr className="border" key={label}>
              <th>{label}</th>
              <td className="border">
                {data?.bookList[index]?.volumeInfo.title}
              </td>
              <td className="border">Malcolm Lockyer</td>
              <td className="border">1961</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookCompare;
