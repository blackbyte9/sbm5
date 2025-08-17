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
import { createStudent } from "@/lib/students/create";
import { FilePlus } from "lucide-react";
import AllStudentsTable from "./show-student";

export function SelectStudentDialog() {
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
                    Schüler auswählen
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px]">
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        const formData = new FormData(e.currentTarget);
                        handleSubmit(formData);
                    }}
                >
                    <DialogHeader>
                        <DialogTitle>Schüler auswählen</DialogTitle>
                        <DialogDescription>
                            Wähle einen Schüler aus der Liste.<br />
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <AllStudentsTable />
                    </div>
                    <br />
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Abbruch</Button>
                        </DialogClose>
                        <DialogClose asChild>
                            <Button type="submit">Auswählen</Button>
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
