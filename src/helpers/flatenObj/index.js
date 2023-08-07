/**
 * To make a single level object out of the nested object received from book API
 *
 * Provide array of Books (Object)
 *
 */
export const flatArrayOfBooks = (books = []) => {
  return books.map((book) => ({
    id: book.id,
    image: book.volumeInfo.imageLinks?.thumbnail,
    title: book.volumeInfo?.title,
    subtitle: book.volumeInfo?.subtitle,
    authors: book.volumeInfo?.authors.join(", "),
    ratings: book.volumeInfo?.averageRating,
    ratingsCount: book.volumeInfo.ratingsCount,
    pageCount: book.volumeInfo?.pageCount,
    publisher: book.volumeInfo?.publisher,
    publishedDate: book.volumeInfo?.publishedDate,
    amount:
      book.saleInfo?.listPrice &&
      `${book.saleInfo.listPrice?.amount} ${book.saleInfo.listPrice?.currencyCode}`,
  }));
};
