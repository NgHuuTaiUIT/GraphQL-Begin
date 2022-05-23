const { books, authors } = require("../static/data");
const resolvers = {
  Query: {
    books: () => books,
    authors: () => authors,
    book: (parent, args) => books.find(book => book.id == args.id),
    author: (parent, args) => authors.find(author => author.id == args.id)
  },
  Book: {
    author: (parent, args) => {
      return authors.find(author => author.id == parent.authorId);
    }
  },
  Author: {
    books: (parent, args) => {
      return books.filter(book => book.authorId === parent.id);
    }
  },
  Mutation: {
    createAuthor: (parent, args) => args,
    createBook: (parent, args) => args
  }
};

module.exports = resolvers;
