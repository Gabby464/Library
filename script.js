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

//create form functionality = get the user's input;


// let myLibrary = [];

// function Book(title, author, pages, read, info){
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
// }
// Book.prototype.info = function(){
//     let readResult = read ? "read alredy" : "not read yet"
//     return(`${title} by ${author}, ${pages} pages, ${readResult}`)
// }

// function addBookToLibrary(){
// myLibrary.push
// }