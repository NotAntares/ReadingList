const myLibrary = [];
const finished = document.querySelector(".shelf");
const shame = document.querySelector(".pile");

function Book(title, author, pagecount, read, id) {
    this.title = title;
    this.author = author;
    this.pagecount = pagecount;
    this.read = read;
    this.id = id;
}

function addBookToLibrary(title, author, pagecount, read) {
    let newBook = new Book(title, author, pagecount, read, crypto.randomUUID());
    myLibrary.push(newBook);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);
addBookToLibrary("Song of Achilles", "Madeline Miller", 416, true);
addBookToLibrary("Naruto Volume 01", "Masashi Kishimoto", 192, false);
// console.log(myLibrary);

function displayLibrary() {
    for (let i = 0; i < myLibrary.length; i++) {
        // console.log(book);
        const book = document.createElement("div");
        const title = book.appendChild(document.createElement("h3"));
        const author = book.appendChild(document.createElement("h4"));
        title.textContent = myLibrary[i].title;
        author.textContent = myLibrary[i].author;
        if (myLibrary[i].read === true) {
            finished.appendChild(book);
            console.log("read")
        } else {
            shame.appendChild(book);
        }
    }
}

displayLibrary();