/* eslint-disable no-unused-vars */

export enum Role {
    USER = "USER",
    ADMIN = "ADMIN",
};

export type User = {
    id?: string;
    name: string;
    password: string;
    role?: Role;
    active?: boolean;
};
