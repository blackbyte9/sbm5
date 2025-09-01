"use server";
import { prisma } from "../prisma";
import { Student } from "./type";

export async function readStudents(): Promise<Student[]> {
  const dbStudents = await prisma.student.findMany({
    where: {
      status: { in: ['ACTIVE', 'TEACHER'] },
    },
    include: {
      Borrow: {
        where: {
          active: true,
        },
      },
    },
  });
  return dbStudents.map(({ id, firstname, lastname, course, status, idOld, Borrow }) => ({
    id,
    firstname,
    lastname,
    course,
    status,
    idOld,
    leases: Borrow.length
  }));
}

export async function readStudentById(id: number): Promise<Student | null> {
  const dbStudent = await prisma.student.findUnique({
    where: { id: +id },
  });
  // Map DB fields to Student type
  return dbStudent
    ? {
      id: dbStudent.id,
      firstname: dbStudent.firstname,
      lastname: dbStudent.lastname,
      course: dbStudent.course,
      status: dbStudent.status,
      idOld: dbStudent.idOld
    }
    : null;
}

export async function readOldStudents(): Promise<Student[]> {
  const dbStudents = await prisma.student.findMany({
    where: {
      status: 'OLD',
    },
    include: {
      Borrow: {
        where: {
          active: true,
        },
      },
    },
  });
  return dbStudents.map(({ id, firstname, lastname, course, status, idOld, Borrow }) => ({
    id,
    firstname,
    lastname,
    course,
    status,
    idOld,
    leases: Borrow.length
  }));
}
