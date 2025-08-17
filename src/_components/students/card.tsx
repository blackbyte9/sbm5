import { DetailCard } from "../detail/card";
import { StudentTitle } from "./title";
import { readStudentById } from "@/lib/students/read";

export async function StudentDetailCard({ params }: { params: { id: string | string[] } }) {
    const { id } = await params;

    const student = await readStudentById(+id);
    if (!student) {
        return <div>Schüler nicht gefunden</div>;
    }
    const title = await StudentTitle(
        student.id ?? 0,
        student.firstname ?? undefined,
        student.lastname ?? undefined,
        student.course ?? undefined
    );

    return (
        <div className="p-4">
            <DetailCard title={title}>
                <div>Vorname: {student.firstname}</div>
                <div>Nachname: {student.lastname}</div>
                <div>Klasse: {student.course}</div>
            </DetailCard>
        </div>
    );
}
