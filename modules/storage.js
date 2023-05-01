const typedTitle = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const books = document.getElementById('book-form');
const bookData = JSON.parse(localStorage.getItem('bookData')) || {};
const savedData = JSON.parse(localStorage.getItem('bookData'));

if (savedData) {
  authorInput.value = savedData.author;
  typedTitle.value = savedData.title;
}
books.addEventListener('input', (event) => {
  if (event.target.id === typedTitle.id) {
    bookData.title = event.target.value;
  } else if (event.target.id === authorInput.id) {
    bookData.author = event.target.value;
  }
  localStorage.setItem('bookData', JSON.stringify(bookData));
});

books.addEventListener('submit', () => {
  bookData.title = '';
  bookData.author = '';
  localStorage.setItem('bookData', JSON.stringify(bookData));
});

export default bookData;