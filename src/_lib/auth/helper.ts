"use server";

import { signIn as nSignIn, signOut as nSignOut } from "@/_lib/auth";

export async function signIn() {
    await nSignIn();
}

export async function signOut(options?: { redirect?: boolean }) {
    await nSignOut(options);
}
