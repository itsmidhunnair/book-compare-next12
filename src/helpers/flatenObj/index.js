/**
 * To make a single level object out of the nested object received from book API
 *
 * Provide array of Books (Object)
 *
 */
export const flatArrayOfBooks = (books = []) => {
  return books.map((book) => ({
    id: book.id,
    image: book.volumeInfo.imageLinks.thumbnail,
    title: book.volumeInfo.title,
    authors: book.volumeInfo.authors.join(", "),
  }));
};
