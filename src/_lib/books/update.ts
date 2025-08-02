"use server";

import { prisma } from "../prisma";
import { Book } from "./type";

export async function updateBook(book: Book): Promise<Book | null> {

    return await prisma.book.update(
        {
            where: { isbn: book.isbn },
            data: {
                name: book.name,
            },
        }
    );
}
