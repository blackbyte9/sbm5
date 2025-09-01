import { Student as PrismaStudent } from "@/_generated/prisma";

export type Student = PrismaStudent & {
    leases?: number;
};
