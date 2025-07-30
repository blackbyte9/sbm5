/* eslint-disable no-console */
import { PrismaClient, Role } from '@/_generated/prisma';
import books from '../data/books.json';
import users from '../data/users.json';

const prisma = new PrismaClient();

const seedInit = async () => {
    console.log("Cleanup DB before seeding...");
    await prisma.book.deleteMany();
    await prisma.user.deleteMany();
    console.log("DB cleanup completed.");
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

const seedUsers = async () => {
    console.log("Seeding users...");
    let cnt = 0;
    for (const user of users) {
        await prisma.user.create({
            data: {
                ...user,
                role: user.role as Role,
            },
        });
        cnt++;
    }
    console.log("Seeded users:", cnt);
};

const seed = async () => {
    await seedInit();

    await seedBooks();
    await seedUsers();
    console.log("Seeding completed.");
};

seed();
