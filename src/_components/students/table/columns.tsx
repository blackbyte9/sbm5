"use client";

import { SortingHeader } from "@/_components/table/sorting-header";
import { ColumnDef } from "@tanstack/react-table";
import { Student } from "@/_lib/students/type";

export const columns: ColumnDef<Student>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "firstname",
    header: ({ column }) => SortingHeader({ column, title: "Vorname" }),
  },
  {
    accessorKey: "lastname",
    header: ({ column }) => SortingHeader({ column, title: "Nachname" }),
  },
  {
    accessorKey: "course",
    header: ({ column }) => SortingHeader({ column, title: "Klasse" }),
  },
  {
    accessorKey: "leases",
    header: ({ column }) => SortingHeader({ column, title: "Anzahl ausgeliehen" }),
  },
];
