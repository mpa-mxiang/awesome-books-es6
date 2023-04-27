import { Book, BookCollection } from "./modules/book.js";
import { displayBooks, addBook, removeBook } from "./modules/bookCollection.js";

// Create a new instance of the BookCollection class
const myBookCollection = new BookCollection();

// Add event listener for form submission
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  addBook(myBookCollection, title, author);
});

// Add event listener for remove button clicks (using event delegation)
const bookListElement = document.getElementById("bookList");
bookListElement.addEventListener("click", (e) => {
  if (e.target.classList.contains("removeButton")) {
    const title = e.target.dataset.title;
    removeBook(myBookCollection, title);
  }
});

// Display the initial book collection
displayBooks(myBookCollection);
