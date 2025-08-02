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
                    Select Student
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
                        <DialogTitle>Select Student</DialogTitle>
                        <DialogDescription>
                            Select Student in the list below.<br />
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <AllStudentsTable />
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <DialogClose asChild>
                            <Button type="submit">Select</Button>
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
