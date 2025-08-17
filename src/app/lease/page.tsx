import StudentDetail from "@/_components/students/detail-student";
import { SelectStudentDialog } from "@/_components/students/select-student";

const Lease = async () => {

    return (
        <div>
            <h2>Ausleihen</h2>
            <StudentDetail id={-1} />
            <div className="flex justify-end mb-4">
                <SelectStudentDialog />
            </div>
        </div>
    );
};

export default Lease;
