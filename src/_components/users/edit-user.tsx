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
import { updateUser } from "@/lib/user/update";
import { Pen } from "lucide-react";
import { Switch } from "../ui/switch";
import { Role } from "@/_lib/user/type";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";

export function EditUserDialog(props: {
    onUserEdited?: () => void,
    userData: { id: string, name: string, password: string, role: Role, active: boolean }
}) {
    const handleSubmit = async (formData: FormData) => {
        const user = {
            id: props.userData.id,
            name: props.userData.name as string,
            password: "", // required by User type but not editable here
            role: formData.get("role") as Role,
            active: formData.get("active") === "on" ? true : false,
        };
        await updateUser(user);
        if (props.onUserEdited) {
            props.onUserEdited();
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>
                    <Pen />
                    Bearbeiten
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
                        <DialogTitle>Edit User</DialogTitle>
                        <DialogDescription>
                            Der Name kann nicht geändert werden.<br />
                            Klicke auf Speichern, wenn du fertig bist.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="name">Name</Label>
                            <Input disabled id="name" name="name" defaultValue={props.userData.name} />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="role">Rolle</Label>
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Rolle wählen" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Rollen</SelectLabel>
                                        <SelectItem value="USER">Benutzer</SelectItem>
                                        <SelectItem value="ADMIN">Administrator</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Input id="role" name="role" defaultValue={props.userData.role} />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="active">Aktiv</Label>
                            <Switch id="active" name="active" defaultChecked={props.userData.active} />
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Abbrechen</Button>
                        </DialogClose>
                        <DialogClose asChild>
                            <Button type="submit">Speichern</Button>
                        </DialogClose>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
