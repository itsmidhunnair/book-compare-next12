import Image from "next/image";
import { MdRemoveCircleOutline } from "react-icons/md";
import { Rating } from "react-simple-star-rating";

/**
 * @typedef {Object} param
 * @property {string} param.key - Key of label using which value can be fetched from book object
 * @property {Object} param.book - book object where all the data of book is store and can be accessed with key
 * @property {string} param.book.id - id of each book
 * @property {string} param.book.image - image of book
 * @property {string} param.book.ratings - ratings rated for a book
 * @property {string} param.book.ratingsCount - no. of reviews on a book
 * @property {Function} removeCompareItem - function using which an object can be removed from compare list
 *
 */

/**
 * Generates cell that is to be displayed in row and column of comparison table
 *
 * A switch case is present which based on the key returns respective element
 *
 * if key is image an image tag is returned with src prop, similarly for ratings
 * and by default text is returned.
 *
 * @param {param} params
 */
export const getElementToDisplay = ({ key, book, removeCompareItem }) => {
  switch (key) {
    case "image":
      return (
        <>
          <button
            aria-label="remove"
            onClick={() => {
              removeCompareItem(book.id);
            }}
            className="mb-3 p-2 border rounded-md float-right flex items-center bg-red-900"
          >
            <MdRemoveCircleOutline />
          </button>
          <Image
            src={book.image || placeHolderImg}
            alt="book_image"
            height={200}
            width={160}
          />
        </>
      );
    case "ratings":
      return book.ratings ? (
        <>
          <Rating
            size={18}
            allowFraction={true}
            initialValue={book.ratings}
            readonly={true}
          />
          <span className="text-xs">({book.ratingsCount})</span>
        </>
      ) : (
        "NA"
      );
    default:
      return book[key] || "NA";
  }
};
