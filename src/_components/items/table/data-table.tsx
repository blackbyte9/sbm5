"use client";

import { Item } from "@/_lib/items/type";
import { columns } from "./columns";
import { DataTable } from "@/_components/table/data-table";

interface ItemTableProps<TData> {
  data: TData extends Item[] ? TData : Item[]
}

export function ItemTable<TData extends Item[]>({
  data,
}: ItemTableProps<TData>) {
  return (
    <DataTable columns={columns}
      data={data}
      rowClickHandler={(row) => {
        const original = row.original as Record<string, unknown>;
        return `/items/${(original as { id: string }).id}`;
      }} />

  );
}
