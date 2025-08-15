"use client";

import { SortingHeader } from "@/_components/table/sorting-header";
import { ColumnDef } from "@tanstack/react-table";
import { Role, User } from "@/_lib/user/type";
import { EditUserDialog } from "../edit-user";

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: ({ column }) => SortingHeader({ column, title: "Name" }),
  },
  {
    accessorKey: "role",
    header: ({ column }) => SortingHeader({ column, title: "Role" }),
  },
  {
    accessorKey: "active",
    header: ({ column }) => SortingHeader({ column, title: "Active" }),
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
        <EditUserDialog
          userData={{
            id: row.original.id ?? "",
            name: row.original.name,
            password: "", // Password is not editable here
            role: row.original.role ?? Role.USER, // Replace "user" with a valid default Role value if needed
            active: row.original.active ?? false,
          }}
          onUserEdited={() => {
            onUserEdited();
          }}
        />
      </div>
    ),
  },
];

function onUserEdited() {
  // Refresh the page or data after a book is edited
  if (typeof window !== "undefined") {
    window.location.reload();
  }
}

