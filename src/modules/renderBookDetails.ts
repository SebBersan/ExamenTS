import { Book } from "../interfaces/book";

export function renderBookDetails(book: Book): void {
    const bookDetailsContainer = document.getElementById("book-details")!;
    bookDetailsContainer.style.display = "block";
    bookDetailsContainer.innerHTML = `
        <h2 class="detail-title">${book.title}</h2>
        <p class="detail-author"><strong>Author:</strong> ${book.author}</p>
        <p class="detail-publisher"><strong>Publisher:</strong> ${book.publisher}</p>
        <p class="detail-year"><strong>Year:</strong> ${book.year}</p>
        <p class="detail-pages"><strong>Pages:</strong> ${book.pages}</p>
        <p class="detail-audience"><strong>Audience:</strong> ${book.audience}</p>
        <p class="detail-plot"><strong>Plot:</strong> ${book.plot}</p>
    `;
}