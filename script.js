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
    const read = document.querySelector('#read').checked;
    bookId += 1;
    const bookObject = new Book(title, author, pages, read, bookId);
    addBookToLibrary(bookObject)
    
    
})
//create and display book cards 
const bodyContainer = document.querySelector('.body-contaner');
console.log(bodyContainer)
function createBookElements(bookObject){
        const bookCard = document.createElement('div');
        bookCard.setAttribute('class', 'book-card')
        const titleDiv = document.createElement('div');
        const authDiv = document.createElement('div');
        const pageDiv = document.createElement('div');
        const removeBtn = document.createElement('button');
        const readBtn = document.createElement('button');
        bookCard.append(titleDiv, authDiv, pageDiv, removeBtn, readBtn);
        bookCard.setAttribute('data-id', bookObject.id);
        titleDiv.textContent = bookObject.title;
        authDiv.textContent = `By ${bookObject.author}`
        pageDiv.textContent = `${bookObject.pages} pages`;
        removeBtn.textContent = "Remove book";
        if (bookObject.read == true) {
            readBtn.setAttribute('data-read', true)
            readBtn.textContent = "Read"
        }else{
            readBtn.setAttribute('data-read', false)
            readBtn.textContent = "Not Read"
        }
        bodyContainer.appendChild(bookCard);

        //add delete-book functionality to the code
        removeBtn.addEventListener('click', (e)=>{
            let currentId = e.target.getAttribute('data-id');
            //remove from array memory
            myLibrary.splice(myLibrary.findIndex(book => book.id == currentId), 1);
            //remove from DOM tree
            let currentBookCard = e.target.parentElement
            bodyContainer.removeChild(currentBookCard)
        })

        //change readButton state
        readBtn.addEventListener('click', (e)=>{
            let currentState = e.target.getAttribute('data-read');
            let currentId = e.target.parentElement.getAttribute('data-id');
            const objectWithTargetId = myLibrary.find(book => book.id == currentId);
            if(currentState == "true"){
                readBtn.textContent = "Not read";
                readBtn.dataset.read = false
                objectWithTargetId.read = false;

            }else{
                readBtn.textContent = "Read";
                readBtn.dataset.read = true
                objectWithTargetId.read = true;
            }
        })
}

//add book to library 
function addBookToLibrary(bookObject){
    formElement.reset();
    popupScreen.setAttribute('style',"display: none");
    myLibrary.push(bookObject);
    createBookElements(bookObject);
}






// Book.prototype.info = function(){
//     let readResult = read ? "read alredy" : "not read yet"
//     return(`${title} by ${author}, ${pages} pages, ${readResult}`)
// }

