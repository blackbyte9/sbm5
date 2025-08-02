"use server";

import { PrismaClient } from '@/lib/prisma/client';
import { Book } from './type';

const prisma = new PrismaClient();

export async function createBook(book: Book): Promise<Book | null> {

    return await prisma.book.create({
        data: book,
    });
}
