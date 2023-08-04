import Image from "next/image";
import { Rating } from "react-simple-star-rating";
import React from "react";
import placeHolderImg from "@public/assets/img/No-Image-Placeholder.png";
import { MdCompare } from "react-icons/md";
import { CgRemove } from "react-icons/cg";
import useCompare from "@hooks/useCompare";

/**
 * @typedef {Object} book
 * @property {Object} book.volumeInfo
 * @property {String} book.volumeInfo.title
 * @property {String} book.volumeInfo.description
 * @property {String} book.volumeInfo.publishedDate
 * @property {String} book.volumeInfo.averageRating
 * @property {String} book.volumeInfo.ratingsCount
 * @property {String} book.volumeInfo.publisher
 * @property {Object} book.volumeInfo.imageLinks
 * @property {String} book.volumeInfo.imageLinks.thumbnail
 */

/**
 * @typedef {Object} props
 * @property {book} book
 */

/**
 * Product Card
 *
 * @description Renders card for individual book items.
 * If image is not received then a placeholder image is automatically set.
 *
 * It has an Add to compare button which on click creates an array consisiting of the book id.
 *
 * @param {props}
 */
const BookCard = ({ book }) => {
  const { addCompareItem, compareList } = useCompare();
  console.log(
    "🚀 ~ file: BookCard.js:41 ~ BookCard ~ compareList:",
    compareList
  );

  return (
    <div className="w-80 rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
      <div className="group relative h-72 w-full">
        <Image
          className="rounded-t-lg object-contain pt-7 transition-all duration-500 group-hover:scale-110"
          src={book?.volumeInfo?.imageLinks?.thumbnail || placeHolderImg}
          alt=""
          layout="fill"
        />
      </div>
      <div className="p-5">
        <span className="h-15 relative inline-block overflow-hidden">
          <h5 className="title_underline mb-6 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {book?.volumeInfo?.title}
          </h5>
        </span>
        <p className="mb-5 h-[84px] overflow-clip text-ellipsis text-sm font-normal text-gray-700 dark:text-gray-400">
          {book?.volumeInfo?.description}
        </p>
        <p className="mt-3 overflow-clip text-ellipsis text-sm font-normal italic text-gray-700 dark:text-gray-400">
          <span>Published Date: </span>
          <span className="text-blue-500">
            {book?.volumeInfo?.publishedDate}
          </span>
        </p>
        <hr className="my-1" />
        <div className="my-2 flex items-center">
          <Rating
            size={18}
            allowFraction={true}
            initialValue={book?.volumeInfo?.averageRating}
            readonly={true}
          />
          {book?.volumeInfo?.ratingsCount && (
            <span className="pl-1 text-[11px] text-gray-500">
              ({book?.volumeInfo?.ratingsCount})
            </span>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            key={book.id}
            onClick={() => addCompareItem(book.id)}
            className={`inline-flex items-center rounded-lg border-2 px-3 py-2 text-center text-sm font-medium hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 ${
              compareList.includes(book.id)
                ? "dark:border-red-800 dark:hover:bg-red-800 dark:focus:ring-red-900"
                : "dark:border-blue-600 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
            } dark:text-white disabled:bg-slate-600`}
          >
            {compareList.includes(book.id) ? (
              <>
                <span className="pr-4">Remove</span>
                <CgRemove />
              </>
            ) : (
              <>
                <span className="pr-4">Add to Compare</span>
                <MdCompare />
              </>
            )}
          </button>
          <span className="text-xs italic text-gray-500">
            {book?.volumeInfo?.publisher}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
