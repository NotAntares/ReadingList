const myLibrary = [];
const finished = document.querySelector(".shelf");
const shame = document.querySelector(".pile");
const submit = document.querySelector(".submit")

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const state = document.getElementById("state");


function Book(title, author, pagecount, read, id) {
    this.title = title;
    this.author = author;
    this.pagecount = pagecount;
    this.read = read;
    this.id = id;
}

Book.prototype.toggleRead = function() { 
    console.log(this.id)
    this.read = !this.read;
    const book = document.querySelector(`[data-id="${this.id}"]`);
    
    if(this.read == true){
        finished.appendChild(book);
        book.querySelectorAll("button")[1].textContent = getDate();
    }
    else{
        shame.appendChild(book);
        book.querySelectorAll("button")[1].textContent = "tbr";
    }
};

Book.prototype.deleteBook = function() {
    const book = document.querySelector(`[data-id="${this.id}"]`);
    book.remove();
    myLibrary.splice(myLibrary.findIndex(book => book.id === this.id), 1);
    console.log(myLibrary);
}

function addBookToLibrary(title, author, pagecount, read) {
    let newBook = new Book(title, author, pagecount, read, crypto.randomUUID());
    myLibrary.push(newBook);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);
addBookToLibrary("Song of Achilles", "Madeline Miller", 416, true);
addBookToLibrary("Naruto Volume 01", "Masashi Kishimoto", 192, false);
// console.log(myLibrary);


submit.onclick= () => {
    console.log("submit")
    addBookToLibrary(title.value, author.value, pages.value, state.value)
    const a = myLibrary.length -1;
    displayBook(a)
}

const getRandomInteger = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min)) + min
}

function displayLibrary(){
    for (let i = 0; i < myLibrary.length; i++){
        displayBook(i)
    }
}


function getDate() {
    const month = new Date().getMonth()+1;
    const year = new Date().getFullYear();
    return month + "/" + year;
}

function displayBook(i) {
        // console.log(book);
        const book = document.createElement("div");
        const deleteButton = book.appendChild(document.createElement("button"));
        const info = book.appendChild(document.createElement("article"));
        const title = info.appendChild(document.createElement("h3"));
        const author = info.appendChild(document.createElement("h4"));
        const toggle = book.appendChild(document.createElement("button"));
        deleteButton.textContent = "X";
        title.textContent = myLibrary[i].title;
        author.textContent = myLibrary[i].author; 
        book.style.width = myLibrary[i].pagecount/6 +"px";
        book.style.height = getRandomInteger(25,36) + "vh";
        book.style.backgroundColor = ( 'hsla(' +(Math.floor(Math.random()*360)) +', ' + ( 0.5 + (Math.random()/2)).toFixed(2)*100 + '%, ' + 40 +'%, ' + 0.5 + ')');
        toggle.onclick = myLibrary[i].toggleRead.bind(myLibrary[i]);
        deleteButton.onclick = myLibrary[i].deleteBook.bind(myLibrary[i]);
        book.dataset.id = myLibrary[i].id;
        if (myLibrary[i].read === true) {
            finished.appendChild(book);
            toggle.textContent = "fin";
            console.log("read")
        } else {
            shame.appendChild(book);
            toggle.textContent = "tbr";
        }
    
};

displayLibrary();