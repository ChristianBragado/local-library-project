function findAuthorById(authors, id) {
  return authors.find(author => author.id === id);
}

function findBookById(books, id) {
  return books.find(book => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  let status = [[], []];
  books.forEach((book) => {
    book.borrows[0].returned === true ? status[1].push(book) : status[0].push(book)
  })
  return status;
}

function getBorrowersForBook(book, accounts) {
  let borrowersArray = [];
  accounts.forEach(account => {
    book.borrows.forEach(borrowed => {
      if (account.id === borrowed.id){
      account['returned']= borrowed.returned;
      borrowersArray.push(account);
    };
    })
  });
  return borrowersArray.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
