export class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
  }
  
  export class BookCollection {
    constructor() {
      let bookCollection = localStorage.getItem("bookCollection");
      this.bookList = bookCollection ? JSON.parse(bookCollection) : [];
    }
  
    // Function to add a new book to the collection
    addBook(title, author) {
      const book = new Book(title, author);
      this.bookList.push(book);
      localStorage.setItem("bookCollection", JSON.stringify(this.bookList));
    }
  
    // Function to remove a book from the collection
    removeBook(title) {
      this.bookList = this.bookList.filter((book) => book.title !== title);
      localStorage.setItem("bookCollection", JSON.stringify(this.bookList));
    }
  }
  