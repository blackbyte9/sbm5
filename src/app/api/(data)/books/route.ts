
import { readBooks } from "@/_lib/books/read";

export async function GET() {
    const books = await readBooks();
    return Response.json(books.sort((a, b) => a.isbn.localeCompare(b.isbn)));
}
