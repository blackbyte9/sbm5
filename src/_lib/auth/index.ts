import NextAuth, { User, NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from 'zod';
import { readActiveUsers } from "../user/read";
import bcrypt from "bcryptjs";

export const BASE_PATH = "/api/auth";

export interface AuthUser extends User {
    id: string;
}

async function getUser(username: string, password: string): Promise<AuthUser | null> {
    const users = readActiveUsers();
    const user = (await users).find(
        (user) => user.name === username && bcrypt.compareSync(password, user.password)
    );
    if (user?.id === 'undefined') {
        return null;
    }
    else {
        return user ? { id: user.id ?? "", name: user.name, email: user.name } : null;
    }
}

const authOptions: NextAuthConfig = {
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials): Promise<AuthUser | null> {
                if (!credentials) {
                    return null; // Return null if no credentials are provided
                }
                const parsedCredentials = z
                    .object({
                        username: z.string().min(4).max(128),
                        password: z.string().min(6).max(128)
                    }).safeParse(credentials);

                if (parsedCredentials.success) {
                    const { username, password } = parsedCredentials.data;

                    const user = await getUser(username, password);

                    return user
                        ? {
                            id: user.id
                        }
                        : null;
                }
                return null; // Return null if credentials are invalid or not provided
            }
        }),
    ],
    basePath: BASE_PATH,
    secret: process.env.NEXTAUTH_SECRET,
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
