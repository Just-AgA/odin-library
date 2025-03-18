// Create the constructor function for the books
function Book(title, author, pages, read="Not read yet"){
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Adding method to toggle the read status
Book.prototype.toggleStatus = function(bookId) {
    const book = myLibrary.find(book => book.id === bookId);

    if (book) {
        book.read = (book.read === "Read") ? "Not read yet" : "Read";
    }

    renderLibrary();
}

// Create array to hold all the books
const myLibrary = []

// Create function that creates new books and adds them to the array myLibrary
function addBookToLibrary(title, author,pages,read){
    myLibrary.push(new Book(title, author, pages, read));
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295);
addBookToLibrary("Harry Potter", "J.Rowling", 358, "Read");
addBookToLibrary("Harry Potter", "J.Rowling", 358, "Read");

//Create functionality to add new books to the array
const dialog = document.querySelector("dialog");
const addBook = document.querySelector(".add-book");

addBook.addEventListener("click", ()=>{
    dialog.showModal();
})

const closeModal = document.querySelector(".close-modal");
closeModal.addEventListener("click", ()=> {
    dialog.close();
})

