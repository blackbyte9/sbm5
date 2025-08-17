import { Suspense } from 'react';
import Leases from './table/table-wrapper';
import { readActiveLeasesByStudent } from '@/lib/leases/read';

export function LeasesByStudentTable(props: {
  id: number,
}) {
  const leases = readActiveLeasesByStudent(props.id);

  return (
    <Suspense fallback={<div>Laden...</div>}>
      <Leases leases={leases} />
    </Suspense>
  );
}
