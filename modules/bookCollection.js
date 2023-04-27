import { Book } from "./book.js";

// Function to display all books saved in the collection
export const displayBooks = (myBookCollection) => {
  const bookListElement = document.getElementById("bookList");
  bookListElement.innerHTML = "";
  myBookCollection.bookList.forEach((book) => {
    const bookDiv = document.createElement("div");
    bookDiv.innerHTML = `<h2>${book.title}</h2><p>${book.author}</p><button class="removeButton" data-title="${book.title}">Remove</button>`;
    bookListElement.appendChild(bookDiv);
  });
};

// Function to add a new book to the collection
export const addBook = (myBookCollection, title, author) => {
  myBookCollection.addBook(title, author);
  displayBooks(myBookCollection);
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
};

// Function to remove a book from the collection
export const removeBook = (myBookCollection, title) => {
  myBookCollection.removeBook(title);
  displayBooks(myBookCollection);
};
