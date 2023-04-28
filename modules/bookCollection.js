import { Book } from "./book.js";

// Function to display all books saved in the collection
export const displayBooks = (myBookCollection) => {
  const bookListElement = document.getElementById('bookList');
  bookListElement.innerHTML = '';
  this.bookList.forEach((book) => {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('viewBook');
    bookDiv.innerHTML = `<span>${book.title} by ${book.author}</span><button class="removeButton" data-title="${book.title}">Remove</button>`;
    bookListElement.appendChild(bookDiv);
  });
}


// Function to add a new book to the collection
export const addBook = (myBookCollection, title, author) => {
  const book = { title, author };
  this.bookList.push(book);
  localStorage.setItem('bookCollection', JSON.stringify(this.bookList));
  this.displayBooks();
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
}

// Function to remove a book from the collection
export const removeBook = (myBookCollection, title) => {
  this.bookList = this.bookList.filter((book) => book.title !== title);
  localStorage.setItem('bookCollection', JSON.stringify(this.bookList));
  this.displayBooks();
};
