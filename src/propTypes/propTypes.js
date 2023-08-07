import PropTypes from "prop-types";

export const bookPropTyps = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    volumeInfo: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      publishedDate: PropTypes.string.isRequired,
      averageRating: PropTypes.number.isRequired,
      ratingsCount: PropTypes.number.isRequired,
      publisher: PropTypes.string.isRequired,
      imageLinks: PropTypes.shape({
        thumbnail: PropTypes.string.isRequired,
      }),
    }),
  }),
};
