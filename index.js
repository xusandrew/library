class Book {
  constructor(name, author, pages, read) {
    this.name = name
    this.author = author
    this.pages = pages
    this.read = read
  }
}

class Library {
  constructor() {
    this.books = []
  }

  addBook(Book) {
    this.books.push(Book)
  }
}
