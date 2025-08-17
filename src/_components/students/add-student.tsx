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
import { createStudent } from "@/lib/students/create";
import { FilePlus } from "lucide-react";

export function AddStudentDialog() {
    const handleSubmit = async (formData: FormData) => {
        const student = {
            firstname: formData.get("firstname") as string,
            lastname: formData.get("lastname") as string,
            course: formData.get("course") as string,
            id: undefined
        };
        await createStudent(student);
        onStudentCreated();
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>
                    <FilePlus />
                    Schüler hinzufügen
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
                        <DialogTitle>Neuer Schüler</DialogTitle>
                        <DialogDescription>
                            Name und Klasse eingeben.<br />
                            Klicke auf Speichern, wenn du fertig bist.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="firstname">Vorname</Label>
                            <Input id="firstname" name="firstname" defaultValue="" />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="lastname">Nachname</Label>
                            <Input id="lastname" name="lastname" defaultValue="" />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="course">Klasse</Label>
                            <Input id="course" name="course" defaultValue="" />
                        </div>
                    </div>
                    <br />
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Abbruch</Button>
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

function onStudentCreated() {
    // Refresh the page or data after a book is edited
    if (typeof window !== "undefined") {
        window.location.reload();
    }
}
