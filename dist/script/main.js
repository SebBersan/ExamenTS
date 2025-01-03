var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { fetchBooks } from "../modules/fetchBooks";
import { renderBookList } from "../modules/renderBooks";
import { renderBookDetails } from "../modules/renderBookDetails";
let books = [];
document.addEventListener("DOMContentLoaded", () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        books = yield fetchBooks();
        renderBookList(books);
        document.getElementById("book-list").addEventListener("click", (event) => {
            const target = event.target;
            if (target.classList.contains("view-details-btn")) {
                const bookId = parseInt(target.dataset.id, 10);
                const selectedBook = books.find((book) => book.id === bookId);
                if (selectedBook) {
                    renderBookDetails(selectedBook);
                    showModal();
                }
            }
        });
        document.getElementById("close-modal").addEventListener("click", () => {
            closeModal();
        });
        document.getElementById("search-btn").addEventListener("click", () => {
            const searchValue = document.getElementById("book-search").value.toLowerCase();
            const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(searchValue));
            renderBookList(filteredBooks);
        });
        document.getElementById("book-search").addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                const searchValue = document.getElementById("book-search").value.toLowerCase();
                const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(searchValue));
                renderBookList(filteredBooks);
            }
        });
    }
    catch (error) {
        console.error("Error fetching or displaying books:", error);
    }
}));
function showModal() {
    document.getElementById("book-details-modal").style.display = "flex";
}
function closeModal() {
    document.getElementById("book-details-modal").style.display = "none";
}
