const myLibrary = [];
const addBook = document.querySelector(".add");
const submitBook = document.querySelector(".submit")
const dialog = document.querySelector("dialog");

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const state = document.getElementById("state");

const shelf = document.querySelector(".shelf");
const pile = document.querySelector(".pile");

addBook.addEventListener('click',()=>{
    dialog.show();
});

submitBook.addEventListener('click',()=>{
   let newBook = new Book(title.value, author.value, pages.value, state.checked);

   addBookToLibrary(newBook);

});


function Book(title, author, pages, state){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.state = state;
    this.info = function() {
        return title + " by " + author + ", " + pages + ", " + state;
    }
}

function addBookToLibrary(book) {
    
    myLibrary.push(book)
    toShelf(book);
}

function toShelf(book){
    const addShelf = document.createElement("div");
    const author = addShelf.appendChild(document.createElement("h4"));
    const title = addShelf.appendChild(document.createElement("h3"));

    addShelf.style.width = book.pages/5 + "px";
    addShelf.style.height = Math.floor(Math.random() * 100) + 250 + "px";
    addShelf.style.backgroundColor = randomHsl();
    addShelf.className = "books"
    title.textContent = book.title;
    author.textContent = book.author;

    if(book.state === true){ shelf.appendChild(addShelf);} else{
        pile.appendChild(addShelf);
    }

}

function randomHsl(){
    return( 'hsla(' +(Math.floor(Math.random()*360)) +', ' + ( 0.5 + (Math.random()/2)).toFixed(2)*100 + '%, ' + 25 +'%, ' + 0.5 + ')');
}

// initializing library

const hobbit = new Book("The Hobbit","J.R.R. Tolkien","295", true);

const achilles = new Book("Song of Achilles","Madeline Miller","416", true);

const naruto = new Book("Naruto Volume 01","Masashi Kishimoto","192", false);


function addStartBooks() {
    addBookToLibrary(hobbit);
    addBookToLibrary(achilles);
    addBookToLibrary(naruto);
}

addStartBooks();

console.log(myLibrary);