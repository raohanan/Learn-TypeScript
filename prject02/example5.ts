// Objects with types defined and then assignability.

type Author = {
  firstName: string;
  lastName: string;
};
type Book = {
  author: Author;
  name: string;
  pages?: number;
};

const book: Book = {
  author: {
    firstName: "Abdul",
    lastName: "hanan",
  },
  name: "prince",
  pages: 10,
};
