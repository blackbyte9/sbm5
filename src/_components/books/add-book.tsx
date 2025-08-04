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
import { createBook } from "@/_lib/books/create";
import { FilePlus } from "lucide-react";

export function AddBookDialog() {
    const handleSubmit = async (formData: FormData) => {
        const book = {
            isbn: formData.get("isbn") as string,
            name: formData.get("title") as string,
        };
        await createBook(book);
        onBookCreated();
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>
                    <FilePlus />
                    Neues Buch
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
                        <DialogTitle>Neues Buch</DialogTitle>
                        <DialogDescription>
                            Scanne oder schreibe die ISBN des Buches (ohne Striche oder Leerzeichen).<br />
                            Gib den Titel ein.<br />
                            Klicke auf Speichern, wenn du fertig bist.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="isbn">ISBN</Label>
                            <Input id="isbn" name="isbn" defaultValue="" />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="title">Title</Label>
                            <Input id="title" name="title" defaultValue="" />
                        </div>
                    </div>
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

function onBookCreated() {
    // Refresh the page or data after a book is edited
    if (typeof window !== "undefined") {
        window.location.reload();
    }
}
