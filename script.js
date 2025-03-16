// Create the constructor function for the books
function Book(title, author, pages, read="Not read yet"){
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

