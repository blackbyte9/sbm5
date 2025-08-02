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
    header: ({ column }) => SortingHeader({ column, title: "First Name" }),
  },
  {
    accessorKey: "lastname",
    header: ({ column }) => SortingHeader({ column, title: "Last Name" }),
  },
  {
    accessorKey: "course",
    header: ({ column }) => SortingHeader({ column, title: "Course" }),
  },
  {
    accessorKey: "leases",
    header: ({ column }) => SortingHeader({ column, title: "Leased items" }),
  },
];
