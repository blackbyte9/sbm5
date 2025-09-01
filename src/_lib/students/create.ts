"use server";
import { prisma } from "../prisma";
import { Student } from "./type";

export interface NewStudent {
    firstname: string;
    lastname: string;
    course: string | null;
    idOld: number | null;
}

export async function createStudent(student: NewStudent): Promise<Student | null> {

    return await prisma.student.create({
        data: student,
    });
}
