function findAccountById(accounts, id) {
  const results = accounts.find((account) => 
  account.id === id )
  return results;
};

function sortAccountsByLastName(accounts) {
  return accounts.sort((account, adjacent) => account.name.last.toLowerCase() < adjacent.name.last.toLowerCase() ? -1:1);
}

//Helper Function 
function totalBorrows(account,books){
  return books.filter(book=>{
    for(let copy of book.borrows){
      if(copy.id === account.id){
        return book
      }
    }
  })
}
/////////////////////////////////

function getTotalNumberOfBorrows(account, books) {
  return (totalBorrows(account, books)).length;
}

function getBooksPossessedByAccount(account, books, authors) {
  let possessedBooks = [];

  books.forEach((book) => {
    authors.forEach((author) => {
      if(author.id === book.authorId) {
        book.borrows.forEach((bookId) => {
          if ((bookId.id === account.id) && (bookId.returned === false)) {
            const results = {...book, author : author, borrows :[bookId]};
            possessedBooks.push(results);
          }
        })
      }
    })
  })
  return possessedBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
