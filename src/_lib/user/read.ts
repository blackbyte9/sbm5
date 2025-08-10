import { prisma } from '@/_lib/prisma';
import { User } from "./type";

export async function readUsers(): Promise<User[]> {
  const dbUsers = await prisma.user.findMany();
  if (!dbUsers) {
    return [];
  }
  return dbUsers.map(({ password, name, role, active, id }) => ({
    id,
    password,
    name,
    role: role as import("./type").Role,
    active
  }));
}

export async function readActiveUsers(): Promise<User[]> {
  const dbUsers = await prisma.user.findMany({
    where: { active: true },
    select: {
      id: true,
      password: true,
      name: true,
      role: true,
      active: true
    }
  });
  if (!dbUsers) {
    return [];
  }
  return dbUsers.map(({ password, name, role, active, id }) => ({
    id,
    password,
    name,
    role: role as import("./type").Role,
    active
  }));
}

export async function readUserById(id: string): Promise<User | null> {
  const dbUser = await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      password: true,
      name: true,
      role: true,
      active: true
    }
  });
  if (!dbUser) {
    return null;
  }
  return {
    id: dbUser.id,
    password: dbUser.password,
    name: dbUser.name,
    role: dbUser.role as import("./type").Role,
    active: dbUser.active
  };
}
