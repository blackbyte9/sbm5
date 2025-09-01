import { OldStudentsTable } from "@/_components/students/show-student";
import StudentUploadFile from "@/_components/students/upload";

const Students = async () => {
    return (
        <div>
            <h2>Schüler importieren</h2>
            <div className="p-4">
                <StudentUploadFile />
            </div>
            <OldStudentsTable />
        </div>
    );
};

export default Students;
