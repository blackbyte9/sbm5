import { ItemInput } from "@/_components/items/item-input";
import { LeaseTable } from "@/_components/leases/table/data-table";
import StudentDetail from "@/_components/students/detail-student";
import { readLeasesByStudent } from "@/lib/leases/read";

export default async function Page({ params }: { params: Promise<{ id: number }> }) {
    const { id } = await params;
    const leases = await readLeasesByStudent(+id);

    return (
        <div>
            <StudentDetail id={id} />
            <ItemInput option={"lease"} student={+id} />
            <br />
            <LeaseTable data={leases ?? []} />
        </div>
    );
};
