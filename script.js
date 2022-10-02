const popupScreen = document.querySelector(".fullscreen-container");
//create main button functionality - trigger pop-up / closing
    const buttonElement = document.querySelector('.btn-primary');
    buttonElement.addEventListener('click', ()=>{
        popupScreen.setAttribute('style',"display:flex")  
    })
    const closePopUpElement = document.querySelector('#close-page');
    closePopUpElement.addEventListener('click', ()=>{
        popupScreen.setAttribute('style',"display: none")
    })
//create book prototype constructor
function Book(title, author, pages, read, id){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
}
//create form functionality = get the user's input and create an object;
let bookId = 0;
let myLibrary = [];
const formElement = document.querySelector('#book-form');
formElement.addEventListener('submit', (e)=>{
    e.preventDefault();
    const title = document.querySelector('#book-name').value;
    const author = document.querySelector('#book-author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read').value;
    bookId += 1;
    const bookObject = new Book(title, author, pages, read, bookId);
    addBookToLibrary(bookObject)
    
    
})
//add book to library and create a book card 
function addBookToLibrary(bookObject){
    formElement.reset();
    popupScreen.setAttribute('style',"display: none");
    myLibrary.push(bookObject);
}




// Book.prototype.info = function(){
//     let readResult = read ? "read alredy" : "not read yet"
//     return(`${title} by ${author}, ${pages} pages, ${readResult}`)
// }

