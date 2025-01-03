import { fetchBooks } from "../modules/fetchBooks";
import { renderBookList } from "../modules/renderBooks";
import { renderBookDetails } from "../modules/renderBookDetails";
import { Book } from "../interfaces/book";

let books: Book[] = [];

document.addEventListener("DOMContentLoaded", async () => {
    try {
        books = await fetchBooks();
        renderBookList(books);

        
        document.getElementById("book-list")!.addEventListener("click", (event) => {
            const target = event.target as HTMLButtonElement;
            if (target.classList.contains("view-details-btn")) {
                const bookId = parseInt(target.dataset.id!, 10);
                const selectedBook = books.find((book) => book.id === bookId);
                if (selectedBook) {
                    renderBookDetails(selectedBook); 
                    showModal(); 
                }
            }
        });

        
        document.getElementById("close-modal")!.addEventListener("click", () => {
            closeModal(); 
        });

        
        document.getElementById("search-btn")!.addEventListener("click", () => {
            const searchValue = (document.getElementById("book-search") as HTMLInputElement).value.toLowerCase();
            const filteredBooks = books.filter((book) =>
                book.title.toLowerCase().includes(searchValue)
            );
            renderBookList(filteredBooks);
        });

        
        document.getElementById("book-search")!.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                const searchValue = (document.getElementById("book-search") as HTMLInputElement).value.toLowerCase();
                const filteredBooks = books.filter((book) =>
                    book.title.toLowerCase().includes(searchValue)
                );
                renderBookList(filteredBooks);
            }
        });
    } catch (error) {
        console.error("Error fetching or displaying books:", error);
    }
});


function showModal() {
    document.getElementById("book-details-modal")!.style.display = "flex";
}


function closeModal() {
    document.getElementById("book-details-modal")!.style.display = "none";
}
