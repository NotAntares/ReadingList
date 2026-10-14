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

Book.prototype.toggleRead = function() { 
    console.log(this.read)
    this.read = !this.read;
    console.log(this.read)
};

function addBookToLibrary(title, author, pagecount, read) {
    let newBook = new Book(title, author, pagecount, read, crypto.randomUUID());
    myLibrary.push(newBook);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);
addBookToLibrary("Song of Achilles", "Madeline Miller", 416, true);
addBookToLibrary("Naruto Volume 01", "Masashi Kishimoto", 192, false);
// console.log(myLibrary);

const getRandomInteger = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min)) + min
}


function displayLibrary() {
    for (let i = 0; i < myLibrary.length; i++) {
        // console.log(book);
        const book = document.createElement("div");
        const title = book.appendChild(document.createElement("h3"));
        const author = book.appendChild(document.createElement("h4"));
        title.textContent = myLibrary[i].title;
        author.textContent = myLibrary[i].author; 
        book.style.width = myLibrary[i].pagecount/6 +"px";
        book.style.height = getRandomInteger(25,36) + "vh";
        book.style.backgroundColor = ( 'hsla(' +(Math.floor(Math.random()*360)) +', ' + ( 0.5 + (Math.random()/2)).toFixed(2)*100 + '%, ' + 40 +'%, ' + 0.5 + ')');
        book.onclick = myLibrary[i].toggleRead.bind(myLibrary[i]);
        if (myLibrary[i].read === true) {
            finished.appendChild(book);
            console.log("read")
        } else {
            shame.appendChild(book);
        }
    }
}

displayLibrary();