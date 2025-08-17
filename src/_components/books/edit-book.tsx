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
import { updateBook } from "@/lib/books/update";
import { Pen } from "lucide-react";

export function EditBookDialog(props: {
    onBookEdited?: () => void,
    bookData: { isbn: string, title: string }
}) {
    const handleSubmit = async (formData: FormData) => {
        const book = {
            isbn: props.bookData.isbn as string,
            name: formData.get("title") as string,
        };
        await updateBook(book);
        if (props.onBookEdited) {
            props.onBookEdited();
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
                        <DialogTitle>Edit Book</DialogTitle>
                        <DialogDescription>
                            Die ISBN kann nicht geändert werden.<br />
                            Klicke auf Speichern, wenn du fertig bist.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="isbn">ISBN</Label>
                            <Input disabled id="isbn" name="isbn" defaultValue={props.bookData.isbn} />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="title">Title</Label>
                            <Input id="title" name="title" defaultValue={props.bookData.title} />
                        </div>
                    </div>
                    <br />
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
