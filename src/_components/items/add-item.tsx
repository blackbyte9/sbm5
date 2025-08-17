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
import { createItem } from "@/lib/items/create";
import { FilePlus } from "lucide-react";

export function AddItemDialog(props: {
    isbn: string,
}) {
    const handleSubmit = async (formData: FormData, isbn: string) => {
        await createItem(isbn, formData.get("id") as string);
        onItemCreated();
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>
                    <FilePlus />
                    Neues Item
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        const formData = new FormData(e.currentTarget);
                        handleSubmit(formData, props.isbn);
                    }}
                >
                    <DialogHeader>
                        <DialogTitle>Neues Item</DialogTitle>
                        <DialogDescription>
                            Scan oder schreibe die ID des Items (vom Label ... die ID beginnt mit RSV...).<br />
                            Klicke auf Speichern, wenn du fertig bist.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="id">Item ID</Label>
                            <Input id="id" name="id" defaultValue="" />
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

function onItemCreated() {
    // Refresh the page or data after a book is edited
    if (typeof window !== "undefined") {
        window.location.reload();
    }
}
