import { Book } from "../interfaces/book.js";

export function renderBookList(books: Book[]): void {
    const bookListContainer = document.getElementById("book-list")!;
    bookListContainer.innerHTML = ""; 

    books.forEach((book) => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");

        
        bookCard.style.backgroundColor = book.color; 

        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p>By ${book.author}</p>
            <p><strong>Publisher:</strong> ${book.publisher}</p> <!-- Publisher -->
            <p><strong>Year:</strong> ${book.year}</p> <!-- Year -->
            <button data-id="${book.id}" class="view-details-btn">View Details</button>
        `;
        bookListContainer.appendChild(bookCard);
    });
}
