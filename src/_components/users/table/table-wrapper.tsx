'use client';

import { use } from 'react';
import { UserTable } from '.';
import { User } from '@/_lib/user/type';

export default function Users({
  users,
}: {
  users: Promise<User[]>
}) {
  const allUsers = use(users);

  return (
    <UserTable data={allUsers} />
  );
}
