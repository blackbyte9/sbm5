import { ItemInput } from "@/_components/items/item-input";
import StudentDetail from "@/_components/students/detail-student";

const Return = async () => {

    return (
        <div>
            <h2>Return Items</h2>
            <StudentDetail id={-1} />
            <ItemInput option={"return"} />
        </div>
    );
};

export default Return;
