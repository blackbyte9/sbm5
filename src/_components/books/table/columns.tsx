"use client";

import { SortingHeader } from "@/_components/table/sorting-header";
import { ColumnDef } from "@tanstack/react-table";
import { Book } from "@/_lib/books/type";
import { EditBookDialog } from "../edit-book";

export const columns: ColumnDef<Book>[] = [
  {
    accessorKey: "isbn",
    header: ({ column }) => SortingHeader({ column, title: "ISBN" }),
  },
  {
    accessorKey: "name",
    header: ({ column }) => SortingHeader({ column, title: "Title" }),
  },
  {
    accessorKey: "itemCount",
    header: ({ column }) => SortingHeader({ column, title: "Items" }),
  },
  {
    accessorKey: "leasedCount",
    header: ({ column }) => SortingHeader({ column, title: "Leased items" }),
  },
  {
    id: "actions",
    header: "",
    cell: ({ row }) => (
      <div
        className="flex gap-2"
        onClick={e => {
          // Prevent row click event when clicking inside actions
          e.stopPropagation();
        }}
      >
        <EditBookDialog
          bookData={{ isbn: row.original.isbn, title: row.original.name }}
          onBookEdited={() => {
            onBookEdited();
          }}
        />
      </div>
    ),
  },
];

function onBookEdited() {
  // Refresh the page or data after a book is edited
  if (typeof window !== "undefined") {
    window.location.reload();
  }
}

