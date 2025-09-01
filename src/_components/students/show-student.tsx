import { Suspense } from 'react';
import { readOldStudents, readStudents } from '@/lib/students/read';
import Students, { OldStudents } from './table/table-wrapper';

export default function AllStudentsTable() {
  const students = readStudents();

  return (
    <Suspense fallback={<div>Laden...</div>}>
      <Students students={students} />
    </Suspense>
  );
}

export function OldStudentsTable() {
  const students = readOldStudents();

  return (
    <Suspense fallback={<div>Laden...</div>}>
      <OldStudents students={students} />
    </Suspense>
  );
}
