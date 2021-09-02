//search book 
const searchBook = () => {
    const inputField = document.getElementById('input-field')
    const searchText = inputField.value;
    //clear inputField
    inputField.value = '';
    const url = ` https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayBook(data.docs))

}

const displayBook = (docs) => {
  console.log(docs)
    const booksContainer = document.getElementById('books-container')
    booksContainer.textContent = '';
    const resutlFound = document.getElementById('found-result')
    resutlFound.textContent = '';
    docs.forEach(doc => {
        console.log(doc)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `<div class="card" style = "height: 600px; width: 450px margin: 5px; padding:5px">
        <img src=" https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">${doc.title}</h5>
          <p class="card-text"><span class = "fw-bold">Author:</span> ${doc.author_name[0]}</p>
          <p class="card-text"><span class = "fw-bold">Publish Year:</span> ${doc.first_publish_year}</p>
          <p class="card-text"><span class = "fw-bold"> Publisher:</span> ${doc.publisher}</p>
        </div>
      </div>`
      booksContainer.appendChild(div)
      resutlFound.innerHTML = `<p class ="text-white fw-bold text-center">${docs.length} result found</p>`
    })
}