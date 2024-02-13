var popupOverlay = document.querySelector(".popup-overlay")
var popupBox = document.querySelector(".popup-box")
var popupButton = document.querySelector(".add-button")

popupButton.addEventListener('click',function(){
    popupOverlay.style.display = 'block';
    popupBox.style.display = 'block';
})


//select cancel button
var cancelPopup = document.getElementById("cancel-popup")

cancelPopup.addEventListener('click',function(e){
    e.preventDefault();
    popupOverlay.style.display = 'none';
    popupBox.style.display = 'none';
})

//select add button
var container = document.querySelector(".container");
var addBook = document.getElementById("add-book");
var bookTitle = document.getElementById("book-title");
var bookAuthor = document.getElementById("book-author");
var bookDesc = document.getElementById("short-desc");

addBook.addEventListener('click',function(e){
    e.preventDefault();
    popupOverlay.style.display = 'none';
    popupBox.style.display = 'none';
    var div = document.createElement("div");
    div.setAttribute("class","books-container");
    div.innerHTML = `<h2>${bookTitle.value}</h2>
    <h5>${bookAuthor.value}</h5>
      <p>${bookDesc.value}</p>
      <button onclick="deleteBook(event)">Delete</button>`;
    container.append(div);
})

function deleteBook(event){
    event.target.parentElement.remove();
}