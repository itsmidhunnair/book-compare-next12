const { gql } = require("@apollo/client");

/**
 * Graphql Query to fetch books based on search term
 *
 * Page no., sort, filter etc along with search term can be provided
 *
 */
const searchBooks = gql`
  query fetchSearchedBooks($input: BooksInput) {
    books(input: $input) {
      id
      saleInfo {
        listPrice {
          amount
          currencyCode
        }
      }
      volumeInfo {
        authors
        averageRating
        description
        imageLinks {
          thumbnail
        }
        pageCount
        publishedDate
        publisher
        ratingsCount
        subtitle
        title
      }
    }
  }
`;

/**
 * Graphql query to get specific book details based on the book id
 */
const book = gql`
  query Book($bookId: ID!) {
    book(id: $bookId) {
      id
      saleInfo {
        listPrice {
          amount
          currencyCode
        }
      }
      volumeInfo {
        authors
        averageRating
        description
        imageLinks {
          thumbnail
        }
        pageCount
        publishedDate
        publisher
        ratingsCount
        subtitle
        title
      }
    }
  }
`;

export { searchBooks, book };
