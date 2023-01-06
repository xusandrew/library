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

  displayBooks() {
    for (var book in books) {
      let card = document.createElement("div")

      let title = document.createElement("h2")
      title.appendChild(document.createTextNode('"' + book.title + '"'))
      card.appendChild(title)

      let author = document.createElement("p")
      author.appendChild(document.createTextNode(book.author))
      card.appendChild(author)

      let pages = document.createElement("p")
      pages.appendChild(document.createTextNode(book.pages + " pages"))
      card.appendChild(pages)

      let read_button = document.createElement("button")
      read_button.appendChild(document.createTextNode("Read"))
      card.appendChild(read_button)

      let remove_button = document.createElement("button")
      remove_button.appendChild(document.createTextNode("Remove"))
      card.appendChild(remove_button)
    }
  }
}
