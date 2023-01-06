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
        const container = document.getElementById("library")

        this.books.forEach(book => {
            let card = document.createElement("div")
            card.classList.add("card")

            let name = document.createElement("h2")
            name.appendChild(document.createTextNode('"' + book.name + '"'))
            name.classList.add("name")
            card.appendChild(name)

            let author = document.createElement("p")
            author.appendChild(document.createTextNode(book.author))
            author.classList.add("author")
            card.appendChild(author)

            let pages = document.createElement("p")
            pages.appendChild(document.createTextNode(book.pages + " pages"))
            pages.classList.add("pages")
            card.appendChild(pages)

            let read_button = document.createElement("button")
            read_button.appendChild(
                document.createTextNode(book.read ? "Read" : "Not read")
            )
            read_button.classList.add("read")
            card.appendChild(read_button)

            let remove_button = document.createElement("button")
            remove_button.appendChild(document.createTextNode("Remove"))
            remove_button.classList.add("remove")
            card.appendChild(remove_button)

            container.appendChild(card)
        })
    }
}

var myLibrary = new Library()

myLibrary.addBook(new Book("book 1", "Me", 4, true))
myLibrary.addBook(new Book("book 2", "You", 5, false))
myLibrary.addBook(new Book("book 3", "to", 7, true))
myLibrary.addBook(new Book("book 4", "do", 1232, true))
myLibrary.displayBooks()
