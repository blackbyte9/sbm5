"use client";

import * as React from "react";
import { Input } from "@/_components/ui/input";
import { returnItem } from "@/_lib/leases/update";
import { useRouter } from "next/navigation";
import { leaseItem } from "@/_lib/leases/create";

interface ItemInputProps {
    placeholder?: string;
}

type OptionType = "return" | "lease";

interface ItemInputProps {
    placeholder?: string;
    option: OptionType;
    student?: number; // Optional, if needed for leaseItem function}
}

export function ItemInput({ placeholder, option, student }: ItemInputProps) {
    const [value, setValue] = React.useState("");
    const router = useRouter();

    const handleChange = async (input: EventTarget & HTMLInputElement) => {

        const match = input.value.match(/^(RSV)\d{0,7}$/);
        const outputDiv = document.getElementById("output");
        if (match || input.value.match(/^(RS)$/) || input.value.match(/^(R)$/)) {
            if (!input.value.match(/^(RSV)\d{7}$/)) {
                return;
            }
            const inId = input.value;
            if (option === "return") {
                const result = await returnItem(inId);
                if (result.ok) {
                    setValue(`Item with code ${inId} has been returned.`);
                    if (outputDiv) {
                        outputDiv.style.backgroundColor = "lightgreen"; // Change background color to light green
                    }
                    setTimeout(() => {
                        router.push(`/return/${result.student}`);
                    }, 1500);
                } else {
                    setValue(result.message);
                    if (outputDiv) {
                        outputDiv.style.backgroundColor = "lightcoral"; // Change background color to light coral
                    }
                    setTimeout(() => {
                        setValue("");
                        if (outputDiv) {
                            outputDiv.style.backgroundColor = ""; // Reset background color
                        }
                    }, 1500);
                }
            } else if (option === "lease") {
                if (!student || student <= 0) {
                    setValue("Schüler muss gültig sein, um ein Item auszuleihen.");
                    if (outputDiv) {
                        outputDiv.style.backgroundColor = "lightcoral"; // Change background color to light coral
                    }
                    setTimeout(() => {
                        setValue("");
                        if (outputDiv) {
                            outputDiv.style.backgroundColor = ""; // Reset background color
                        }
                    }, 1500);
                    return;
                }
                const result = await leaseItem(inId, student ?? 0);
                if (result.ok) {
                    setValue(`Item mit Code ${inId} an ${student} ausgeliehen.`);
                    if (outputDiv) {
                        outputDiv.style.backgroundColor = "lightgreen"; // Change background color to light green
                    }
                    setValue(result.message);
                    setTimeout(() => {
                        setValue("");
                        if (outputDiv) {
                            outputDiv.style.backgroundColor = ""; // Reset background color
                        }
                        router.refresh();
                    }, 1500);
                    return;
                }
            }
            setTimeout(() => {
                setValue("");
                if (outputDiv) {
                    outputDiv.style.backgroundColor = ""; // Reset background color
                }
            }, 1500);
            input.value = ""; // Clear the input field
        } else {
            setValue("Ungültige Eingabe. Item Code muss mit 'RSV' beginnen und danach aus 7 Ziffern bestehen.");
            if (outputDiv) {
                outputDiv.style.backgroundColor = "lightcoral"; // Change background color to light coral
            }
            setTimeout(() => {
                setValue("");
                if (outputDiv) {
                    outputDiv.style.backgroundColor = ""; // Reset background color
                }
            }, 1500);
            input.value = ""; // Clear the input field
        }
    };

    return (
        <div className="w-full max-w-md mx-auto">
            <Input
                type="text"
                onChange={e => handleChange(e.target)}
                placeholder={placeholder || "ID scannen..."}
                className="text-base"
            />
            <div id="output" className="mt-4 p-2 border rounded bg-muted">
                <pre className="whitespace-pre-wrap break-words">{value}</pre>
            </div>
        </div>
    );
}
