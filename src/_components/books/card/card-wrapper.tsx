'use client';
import type { Book } from '@/_lib/books/type';
import { use } from 'react';
import { BookDetailCard } from './card';
import { DetailCard } from '@/_components/detail/card';

export default function Book_({
  book,
}: {
  book: Promise<Book | null>
}) {
  const bookDetail = use(book);

  if (bookDetail === null) {
    return (
      <div className="p-4">
        <DetailCard title="Book not found">
          <div>Please select a book</div>
        </DetailCard>
      </div>
    );
  }

  return (
    <BookDetailCard data={bookDetail} />
  );
}
