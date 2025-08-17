"use client";

import { SortingHeader } from "@/_components/table/sorting-header";
import { Lease } from "@/_lib/leases/type";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Lease>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "item",
    header: ({ column }) => SortingHeader({ column, title: "Item" }),
  },
  {
    accessorKey: "Active",
    header: ({ column }) => SortingHeader({ column, title: "Aktiv" }),
    cell: ({ row }) => {
      const active = row.original.active;
      return active ? "Yes" : "No";
    }
  },
  {
    accessorKey: "leased",
    header: ({ column }) => SortingHeader({ column, title: "Ausgeliehen" }),
    cell: ({ row }) => {
      const leased = row.getValue("leased");
      return new Date(leased as string).toLocaleDateString("de-DE", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      });
    }
  },
  {
    accessorKey: "returned",
    header: ({ column }) => SortingHeader({ column, title: "Zurückgegeben" }),
    cell: ({ row }) => {
      const returned = row.getValue("returned");
      if (row.original.active) {
        return "Not returned";
      }
      return returned ? new Date(returned as string).toLocaleDateString("de-DE", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      }) : "Not returned";
    }
  }
];
