"use server";

import { prisma } from "../prisma";
import { readStudentById } from "../students/read";
import { readActiveLeasesByItem } from "./read";

export async function leaseItem(input: string, studentId: number): Promise<{ ok: boolean; message: string }> {
    'use server';
    const item = await readActiveLeasesByItem(input);
    if (item.length !== 0) {
        return {
            ok: false,
            message: `Item mit Code ${input} ist bereits ausgeliehen.`,
        };
    } else {
        const student = await readStudentById(studentId);
        if (!student) {
            return {
                ok: false,
                message: `Schüler mit ID ${studentId} existiert nicht.`,
            };
        }
        const createdLease = await prisma.borrow.create({
            data: { itemId: input, studentId: studentId, active: true },
        });
        if (!createdLease) {
            return {
                ok: false,
                message: `Fehler beim Ausleihen des Items mit Code ${input}.`,
            };
        }
        return {
            ok: true,
            message: `Item mit Code ${input} wurde an Schüler ${student?.firstname} ${student?.lastname}.`
        };
    }
}
