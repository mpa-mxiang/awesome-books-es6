export default class BookCollection {
  constructor() {
    this.bookList = JSON.parse(localStorage.getItem('bookCollection')) || [];
  }

  displayBooks = () => {
    const bookListElement = document.getElementById('bookList');
    bookListElement.innerHTML = '';
    this.bookList.forEach((book) => {
      const bookDiv = document.createElement('div');
      bookDiv.classList.add('viewBook');
      bookDiv.innerHTML = `<span>${book.title} by ${book.author}</span><button class="removeButton" data-title="${book.title}">Remove</button>`;
      bookListElement.appendChild(bookDiv);
    });
  }
  
  addBook = (title, author) => {
    const book = { title, author };
    this.bookList.push(book);
    localStorage.setItem('bookCollection', JSON.stringify(this.bookList));
    this.displayBooks();
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
  }
  
  removeBook = (title) => {
    this.bookList = this.bookList.filter((book) => book.title !== title);
    localStorage.setItem('bookCollection', JSON.stringify(this.bookList));
    this.displayBooks();
  }
  
}
