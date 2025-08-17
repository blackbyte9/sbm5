"use client";

import { Button } from "@/_components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/_components/ui/dialog";
import { Input } from "@/_components/ui/input";
import { Label } from "@/_components/ui/label";
import { updatePassword } from "@/lib/user/update";
import { Pen } from "lucide-react";
import { Role } from "@/_lib/user/type";

export function EditPasswordDialog(props: {
    onPasswordEdited?: () => void,
    userData: { id: string, name: string, password: string, role: Role, active: boolean }
}) {
    const handleSubmit = async (formData: FormData) => {
        const user = {
            id: props.userData.id,
            name: props.userData.name as string,
            password: formData.get("password") as string,
        };
        await updatePassword(user);
        if (props.onPasswordEdited) {
            props.onPasswordEdited();
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>
                    <Pen />
                    Passwort ändern
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        const formData = new FormData(e.currentTarget);
                        handleSubmit(formData);
                    }}
                >
                    <DialogHeader>
                        <DialogTitle>Passwort ändern</DialogTitle>
                        <DialogDescription>
                            Achtung als Admin kannst du das Passwort eines Benutzers ändern.
                            <br />
                            Klicke auf Speichern, wenn du fertig bist.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="name">Name</Label>
                            <Input disabled id="name" name="name" defaultValue={props.userData.name} />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="password">Passwort</Label>
                            <Input
                                id="password"
                                name="password"
                                defaultValue=""
                                required
                            />
                        </div>
                    </div>
                    <br />
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Abbrechen</Button>
                        </DialogClose>
                        <DialogClose asChild>
                            <Button
                                type="submit"
                            >
                                Speichern
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
