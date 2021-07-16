"use strict"; 

let addBook = document.querySelector("#add-book")
let books = document.querySelector("#books")
let deleteBook = document.querySelector(".book-del")
let bookie = document.querySelector(".book")
let bookshelf = document.querySelector("#bookshelf")
let modalMain = document.querySelector("#modal")
let totalBook = document.querySelector(".total-books") 
let readBook = document.querySelector(".read-books") 


let modal = document.createElement("div")
let modalContent = document.createElement("div")
let close = document.createElement("span")
let form = document.createElement("form")
let h2 = document.createElement("h2")
let bookDetails = document.createElement("div")
let bookNameLabel = document.createElement("label")
let bookNameInput = document.createElement("input")

let auhtorNameLabel = document.createElement("label")
let authorNameInput = document.createElement("input")

let submit = document.createElement("button")
let totalBooksCount = 0 
let readBooksCount = 0

bookie.remove()


addBook.addEventListener("click", () => { 


    bookNameInput.type = "text"
    authorNameInput.type = "text"
    submit.type = "button"

    modalMain.appendChild(modal)

    modal.appendChild(modalContent)
    modalContent.appendChild(close)
    modalContent.appendChild(form)

    form.appendChild(h2)
    form.appendChild(bookDetails)

    bookDetails.appendChild(bookNameLabel)
    bookDetails.appendChild(bookNameInput)
    bookDetails.appendChild(auhtorNameLabel)
    bookDetails.appendChild(authorNameInput)
    bookDetails.appendChild(submit)

    modal.classList.add("modal")
    modalContent.classList.add("modal-content")
    close.classList.add("close")
    bookDetails.classList.add("book-details")
    bookNameInput.classList.add("input-details")
    authorNameInput.classList.add("input-details")
    submit.classList.add("submit-details")

    bookNameLabel.textContent = "Book Name: "
    auhtorNameLabel.textContent = "Author Name: "
    submit.textContent = "Submit"
    h2.textContent = "Book Details"
    close.innerHTML = "&times;" 
    h2.style.textAlign = "center"
    close.addEventListener("click", () => {
        modal.remove();
    })

    submit.addEventListener("click", () => {  
        modal.remove()
        newBook(); 
        bookNameInput.value = null
        authorNameInput.value = null
       
    }) 
})  

 function newBook(){ 
    let book = document.createElement("div") 
    let bookTitle = document.createElement("div")
    let bookName = document.createElement("h2")
    let bookAuthor = document.createElement("h2") 
    let bookContent = document.createElement("div")
    let bookBody = document.createElement("div")
    let readButton = document.createElement("button")
    let deleteButton = document.createElement("button") 
    
    books.appendChild(book)

    book.appendChild(bookTitle)
    bookTitle.appendChild(bookName)
    bookTitle.appendChild(bookAuthor)

    book.appendChild(bookContent)
    bookContent.appendChild(bookBody)
     
    bookBody.appendChild(readButton)
    bookBody.appendChild(deleteButton)
      
    book.classList.add("book")
    bookTitle.classList.add("book-title")
    bookAuthor.classList.add("book-author")

    bookContent.classList.add("book-content")
    bookBody.classList.add("book-body")
    readButton.classList.add("book-read")
    deleteButton.classList.add("book-del")
      
    bookName.textContent = bookNameInput.value || "No name"
    bookAuthor.textContent = authorNameInput.value || "Anonymous"
    readButton.textContent = "Read"
    deleteButton.textContent = "Delete"   
    readButton.addEventListener("click", () => { 
            readButton.classList.toggle("book-unread") 
            bookBody.classList.toggle("book-body-read")
            readBook.textContent = `Read Books: ${readBooksCount += 1}`
    }) 
    
    
    deleteButton.addEventListener("click", () => {
        let confirmdel = confirm("Are you sure to delete '" + bookName.textContent + "' ?")
        if(confirmdel == true){
            book.remove()
            totalBook.textContent = `Total books: ${totalBooksCount -=  1}`
            readBook.textContent = `Read Books: ${readBooksCount -= 1}`
        }
    }) 
    totalBook.textContent = `Total books: ${totalBooksCount +=  1}`

 }
