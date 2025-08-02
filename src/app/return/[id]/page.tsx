import { ItemInput } from "@/_components/items/item-input";
import { LeasesByStudentTable } from "@/_components/leases/show-lease";
import StudentDetail from "@/_components/students/detail-student";

export default async function Page({ params }: { params: { id: number } }) {
    const { id } = await params;

    return (
        <div>
            <StudentDetail id={id} />
            <ItemInput option={"return"} />
            <br />
            <LeasesByStudentTable id={+id} />
        </div>
    );
};
