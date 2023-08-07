import Image from "next/image";
import { Rating } from "react-simple-star-rating";

/**
 * Generates cell that is to be displayed in row and column of comparison table
 */
export const getElementToDisplay = ({ key, book }) => {
  switch (key) {
    case "image":
      return (
        <Image
          src={book.image || placeHolderImg}
          alt="book_image"
          height={200}
          width={160}
        />
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
