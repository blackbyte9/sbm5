"use client";

import { DataTable } from "@/_components/table/data-table";
import { Lease } from "@/_lib/leases/type";
import { columns } from "./columns";

interface LeaseTableProps<TData> {
  data: TData extends Lease[] ? TData : Lease[]
}

export function LeaseTable<TData extends Lease[]>({
  data,
}: LeaseTableProps<TData>) {
  return (
    <DataTable columns={columns}
      data={data}
      rowClickHandler={(row) => {
        const original = row.original as Record<string, unknown>;
        return `/items/${(original as { item: string }).item}`; // Adjust the path as needed
      }} />

  );
}
