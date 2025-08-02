"use client";

import { SortingHeader } from "@/_components/table/sorting-header";
import { Item } from "@/_lib/items/type";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Item>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => SortingHeader({ column, title: "ID" }),
  },
  {
    accessorKey: "isbn",
    header: ({ column }) => SortingHeader({ column, title: "ISBN" }),
  },
  {
    accessorKey: "status",
    header: ({ column }) => SortingHeader({ column, title: "Status" }),
  },
  {
    accessorKey: "leased",
    header: ({ column }) => SortingHeader({ column, title: "Leased" }),
  },
];
