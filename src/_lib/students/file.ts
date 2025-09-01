/* eslint-disable no-console */
"use server";

import { prisma } from "../prisma";

export async function processStudentImport(file: File) {
    const students = await readFile(file);
    console.log(students?.length ? `Read ${students.length} students from file.` : 'No students found in file.');
    await prepareStudents();
    await updateStudents(students || []);
    return;
};

export async function readFile(file: File): Promise<Record<string, string>[] | void> {
    const text = await file.text();
    // Split into lines and parse CSV
    const lines = text.trim().split('\n');
    const headers = lines[0].split(';');
    const sData = lines.slice(1).map(line => {
        const values = line.split(';');
        return headers.reduce((obj, header, idx) => {
            obj[header.trim()] = values[idx]?.trim();
            return obj;
        }, {} as Record<string, string>);
    });

    return sData;
}

async function prepareStudents() {
    await prisma.student.updateMany({
        where: { status: 'ACTIVE' },
        data: { status: 'OLD' }
    });
    return;
}

async function updateStudents(students: Record<string, string>[]) {
    console.log(students);
    for (const activeStudent of students) {
        if (!activeStudent['Rufname'] || !activeStudent['Familienname']) {
            console.log('Skipping student due to missing first name or last name.');
            continue;
        }
        const dbStudent = await prisma.student.findFirst({
            where: { firstname: activeStudent['Rufname'], lastname: activeStudent['Familienname'] }
        });
        if (dbStudent) {
            await prisma.student.update({
                where: { id: dbStudent.id },
                data: { status: 'ACTIVE', course: activeStudent['Klasse'] || undefined }
            });
            console.log(`Updated student ${dbStudent.firstname} ${dbStudent.lastname}`);
        } else {
            await prisma.student.create({
                data: {
                    firstname: activeStudent['Rufname'],
                    lastname: activeStudent['Familienname'],
                    course: activeStudent['Klasse'] || undefined,
                    status: 'ACTIVE'
                }
            });
            console.log(`Created student ${activeStudent['Rufname']} ${activeStudent['Familienname']}`);
        }
    }
    return;
}
