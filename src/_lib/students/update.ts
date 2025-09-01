"use server";

import { Student } from "./type";
import { prisma } from "../prisma";
import { StudentStatus } from "@/_generated/prisma";

export async function updateStudent(student: Student): Promise<Student | null> {

    return await prisma.student.update(
        {
            where: { id: student.id },
            data: {
                firstname: student.firstname,
                lastname: student.lastname,
                course: student.course,
            },
        }
    );
}

export async function updateStudentStatus(id: number, status: StudentStatus): Promise<Student | null> {
    return await prisma.student.update(
        {
            where: { id: id },
            data: {

                status: status,
            },
        }
    );
}
