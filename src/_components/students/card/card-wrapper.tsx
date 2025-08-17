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
        <DetailCard title="Schüler nicht gefunden">
          <div>Bitte einen Schüler auswählen</div>
        </DetailCard>
      </div>
    );
  }

  return (
    <StudentDetailCard data={studentDetail} />
  );
}
