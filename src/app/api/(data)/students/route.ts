import { readStudents } from "@/lib/students/read";

export async function GET() {
    const items = await readStudents();
    return Response.json(items.sort((a, b) => (a.id ?? 0) - (b.id ?? 0)));
}
