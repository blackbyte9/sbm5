/* eslint-disable no-console */
import { PrismaClient } from '@/_generated/prisma';

import books from '../data/books.json';

const prisma = new PrismaClient();

const seedInit = async () => {
    console.log("Cleanup DB before seeding...");
    await prisma.book.deleteMany();
};

const seedBooks = async () => {
    console.log("Seeding books...");
    let cnt = 0;
    for (const book of books) {
        await prisma.book.create({
            data: book,
        });
        cnt++;
    }
    console.log("Seeded books:", cnt);
};

const seed = async () => {
    await seedInit();

    await seedBooks();
    console.log("Seeding completed.");
};

seed();
