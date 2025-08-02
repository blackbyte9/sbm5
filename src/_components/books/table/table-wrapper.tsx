'use client';
import { Book } from '@/_lib/books/type';
import { use } from 'react';
import { BookTable } from '.';

export default function Books({
  books,
}: {
  books: Promise<Book[]>
}) {
  const allBooks = use(books);

  return (
    <BookTable data={allBooks} />
  );
}
