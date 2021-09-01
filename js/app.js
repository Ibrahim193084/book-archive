//search book 
const searchBook = () => {
    const inputField = document.getElementById('input-field')
    const searchText = inputField.value;
    //clear inputField
    inputField.value = '';
    const url = ` http://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayBook(data.docs))

}

const displayBook = (books) => {
    const booksContainer = document.getElementById('books-container')
    booksContainer.textContent = '';
    books.forEach(book => {
        console.log(book)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = ` <div class="card">
        <img src=" https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${book.title}</h5>
          <p class="card-text"> Author: ${book.author_name[0]}</p>
          <p class="card-text"> First publish: ${book.first_publish_year}</p>
        </div>
      </div>`
      booksContainer.appendChild(div)





    })
}