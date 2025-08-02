"use server";

import { prisma } from "../prisma";
import { Item, Status } from "./type";

export async function createItem(book: string, id: string): Promise<Item | null> {

    const item = {
        isbn: book as string,
        id: id as string,
        status: Status.NEW, // Use the Status enum for the status property
    };
    const created = await prisma.item.create({
        data: item,
    });
    // Map the Prisma result to your local Item type
    return {
        ...created,
        status: created.status as Status,
    };
}
