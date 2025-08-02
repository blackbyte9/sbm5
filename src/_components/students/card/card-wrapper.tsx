'use client';

import { use } from 'react';
import { Student } from '@/_lib/students/type';
import { StudentDetailCard } from './card';
import { DetailCard } from '@/_components/detail/card';

export default function Student_({
  student,
}: {
  student: Promise<Student | null>
}) {
  const studentDetail = use(student);

  if (studentDetail === null) {
    return (
      <div className="p-4">
        <DetailCard title="Student not found">
          <div>Please select a student</div>
        </DetailCard>
      </div>
    );
  }

  return (
    <StudentDetailCard data={studentDetail} />
  );
}
