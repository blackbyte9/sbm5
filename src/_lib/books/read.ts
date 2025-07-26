import { prisma } from '@/_lib/prisma';
import { Book } from "./type";

export async function readBooks(): Promise<Book[]> {
  const dbBooks = await prisma.book.findMany();

  // Map DB fields to Book type
  return dbBooks.map(({ isbn, name }) => ({ isbn, name }));
}
