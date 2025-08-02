"use server";
import { prisma } from "../prisma";
import { Student } from "./type";

export async function createStudent(student: Student): Promise<Student | null> {

    return await prisma.student.create({
        data: student,
    });
}
