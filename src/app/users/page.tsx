
import AllUsersTable from "@/_components/users/show-user";
import { auth, checkAdminRole } from "@/_lib/auth";

const Users = async () => {
    const session = await auth();
    const isAdmin = await checkAdminRole(session?.user?.id ?? "");
    return (
        <div>
            <h2>Users</h2>
            {isAdmin ?
                <><div className="flex justify-end mb-4">
                </div><AllUsersTable /></>
                : <p>You do not have permission to view this page.</p>}
        </div>
    );
};

export default Users;
