function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books") // Fetch data from API
    .then(response => response.json()) // Convert response to JSON
    .then(data => renderBooks(data)) // Pass data to renderBooks()
    .catch(error => console.error("Error fetching books:", error)); // Handle errors
}



function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});



document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});






fetch("https://anapioficeandfire.com/api/books")
  .then(response => response.json())
  .then(books => {
    console.log("The 5th book:", books[4].name); // Index starts at 0
});


fetch("https://anapioficeandfire.com/api/characters/1031")
  .then(response => response.json())
  .then(character => {
    console.log("1031st Character:", character.name || "Unknown");
});


fetch("https://anapioficeandfire.com/api/books")
  .then(response => response.json())
  .then(books => {
    const totalPages = books.reduce((sum, book) => sum + book.numberOfPages, 0);
    console.log("Total Pages of all books:", totalPages);
});






