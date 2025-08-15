import { readUsers } from '@/lib/user/read';
import { Suspense } from 'react';
import Books from './table/table-wrapper';

export default function AllUsersTable() {
  const users = readUsers();

  return (
    <Suspense fallback={<div>Laden...</div>}>
      <Books users={users} />
    </Suspense>
  );
}
