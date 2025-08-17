"use server";

import bcrypt from "bcryptjs";
import { prisma } from "../prisma";
import { User } from "./type";

export async function updateUser(user: User): Promise<User | null> {

    // Password is not updated here, as it is not part of the userData in the edit form.
    // If you want to update the password, you need to handle it separately.
    const retUser = await prisma.user.update(
        {
            where: { id: user.id }, // Use the unique identifier 'id'
            data: {
                role: user.role,
                active: user.active,
            },
        }
    );

    return {
        id: retUser.id,
        name: retUser.name,
        role: retUser.role,
        active: retUser.active,
        password: retUser.password,
    } as User | null;
}

export async function updatePassword(user: User): Promise<User | null> {
    const hash = await bcrypt.hash(user.password, 10);
    const retUser = await prisma.user.update(
        {
            where: { id: user.id }, // Use the unique identifier 'id'
            data: {
                password: hash,
            },
        }
    );

    return {
        id: retUser.id,
        name: retUser.name,
        role: retUser.role,
        active: retUser.active,
        password: retUser.password,
    } as User | null;
}
