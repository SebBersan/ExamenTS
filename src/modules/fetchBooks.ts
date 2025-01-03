import { Book } from "../interfaces/book";

export async function fetchBooks(): Promise<Book[]> {
    const response = await fetch("https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books");
    if (!response.ok) {
        throw new Error("Failed to fetch books.");
    }
    const data: Book[] = await response.json();
    return data;
}
