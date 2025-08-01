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
                    Add Item
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
                        <DialogTitle>New Item</DialogTitle>
                        <DialogDescription>
                            Scan or write the Id of the Item (from the label ... starting with RSV...).<br />
                            Click save when you&apos;re done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="id">Item Id</Label>
                            <Input id="id" name="id" defaultValue="" />
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <DialogClose asChild>
                            <Button type="submit">Save changes</Button>
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
