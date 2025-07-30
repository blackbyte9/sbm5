
import { readUsers } from "@/_lib/user/read";

export async function GET() {
    const users = await readUsers();
    return Response.json(users.sort((a, b) => a.name.localeCompare(b.name)));
}

