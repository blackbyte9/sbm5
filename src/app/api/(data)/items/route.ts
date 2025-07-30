import { readItems } from "@/lib/items/read";

export async function GET() {
    const items = await readItems();
    return Response.json(items.sort((a, b) => a.id.localeCompare(b.id)));
}
