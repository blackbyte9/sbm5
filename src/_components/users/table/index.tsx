"use client";

import { DataTable } from "@/_components/table/data-table";
import { columns } from "./columns";
import { User } from "@/_lib/user/type";

interface UserTableProps<TData> {
  data: TData extends User[] ? TData : User[]
}

export function UserTable<TData extends User[]>({
  data
}: UserTableProps<TData>) {
  return (
    <DataTable columns={columns}
      data={data}
    />

  );
}
