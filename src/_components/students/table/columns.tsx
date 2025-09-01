"use client";

import { SortingHeader } from "@/_components/table/sorting-header";
import { ColumnDef } from "@tanstack/react-table";
import { Student } from "@/_lib/students/type";
import { Button } from "@/_components/ui/button";
import { updateStudentStatus } from "@/_lib/students/update";

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

export const oldColumns: ColumnDef<Student>[] = [
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
        <Button
          variant="outline"
          size="sm"
          onClick={async () => {
            await updateStudentStatus(row.original.id, 'INACTIVE');
            window.location.reload();
          }}
        >Inactive</Button>
        <Button
          variant="outline"
          size="sm"
          onClick={async () => {
            await updateStudentStatus(row.original.id, 'TEACHER');
            window.location.reload();
          }}
        >Teacher</Button>
        <Button
          variant="outline"
          size="sm"
          onClick={async () => {
            await updateStudentStatus(row.original.id, 'ACTIVE');
            window.location.reload();
          }}
        >Active</Button>
      </div>
    ),
  }
];
