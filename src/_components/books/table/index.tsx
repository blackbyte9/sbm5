"use client";

import { DataTable } from "@/_components/table/data-table";
import { columns } from "./columns";
import { Book } from "@/_lib/books/type";

interface BookTableProps<TData> {
  data: TData extends Book[] ? TData : Book[]
}

export function BookTable<TData extends Book[]>({
  data
}: BookTableProps<TData>) {
  return (
    <DataTable columns={columns}
      data={data}
      rowClickHandler={(row) => {
        const original = row.original as Record<string, unknown>;
        return `/books/${(original as { isbn: string }).isbn}`;
      }} />

  );
}
