import BookCollection from './modules/bookCollection.js';
import changePage from './modules/nav.js';
import bookData from './modules/storage.js';

const myBookCollection = new BookCollection();
myBookCollection.displayBooks();

const form = document.querySelector('#book-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  myBookCollection.addBook(title, author);
});

const pageLinks = document.querySelectorAll('[data-section]');
pageLinks.forEach((link) => {
  link.onclick = (event) => {
    event.preventDefault();
    changePage(link.dataset.section);
  };
});

// pre-fill the form with saved data
if (bookData.title && bookData.author) {
  document.getElementById('title').value = bookData.title;
  document.getElementById('author').value = bookData.author;
}