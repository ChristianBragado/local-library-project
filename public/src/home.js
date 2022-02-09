function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books
  .filter((book)=> book.borrows[0].returned === false)     .length;
}

function getMostCommonGenres(books) {
 const genres = books.reduce((acc,book) => {
   book.genre in acc ? acc[book.genre]++ : acc[book.genre] = 1
   return acc},[])
  return Object.entries(genres).map(type=>({name:type[0],count:type[1]}))
  .sort((genre1,genre2)=>genre1.count>genre2.count?-1:1).slice(0,5)
}

function getMostPopularBooks(books) {
  return books.sort((bookA, bookB) => bookB.borrows.length - bookA.borrows.length).slice(0, 5).map((book) => ({ name: book.title, count: book.borrows.length }));
}

// HELPER FUNCTION //
function sortSlice(array) {
  return array.sort((countA, countB) => countB.count - countA.count).slice(0, 5);
}
//////////////////////

function getMostPopularAuthors(books, authors) {
  let names = {}
  books.forEach((book) => {
    authors.forEach((author) => {
      if (book.authorId === author.id) {
      names[`${author.name.first} ${author.name.last}`] = book.borrows.length
      }
    })
  })

  const array1 = Object.keys(names).map(var1 => ({ name : var1, count: names[var1] }))

  return sortSlice(array1);
};

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
