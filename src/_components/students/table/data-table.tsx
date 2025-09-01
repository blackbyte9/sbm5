"use client";

import { columns, oldColumns } from "@/_components/students/table/columns";
import { DataTable } from "@/_components/table/data-table";
import { Student } from "@/_lib/students/type";

interface LeaseTableProps<TData> {
  data: TData extends Student[] ? TData : Student[]
}

export function StudentTable<TData extends Student[]>({
  data,
}: LeaseTableProps<TData>) {
  return (
    <DataTable columns={columns}
      data={data}
      rowClickHandler={(row) => {
        const original = row.original as Record<string, unknown>;
        return `/students/${(original as { id: string }).id}`; // Adjust the path as needed
      }} />

  );
}

export function OldStudentTable<TData extends Student[]>({
  data,
}: LeaseTableProps<TData>) {
  return (
    <DataTable columns={oldColumns}
      data={data}
      rowClickHandler={(row) => {
        const original = row.original as Record<string, unknown>;
        return `/students/${(original as { id: string }).id}`; // Adjust the path as needed
      }} />

  );
}
