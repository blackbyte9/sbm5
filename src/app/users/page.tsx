
import AllUsersTable from "@/_components/users/show-user";
import { auth, checkAdminRole } from "@/_lib/auth";

const Users = async () => {
    const session = await auth();
    const isAdmin = await checkAdminRole(session?.user?.id ?? "");
    return (
        <div>
            <h2>Benutzer</h2>
            {isAdmin ?
                <><div className="flex justify-end mb-4">
                </div><AllUsersTable /></>
                : <p>Keine Berechtigung, diese Seite zu besuchen.</p>}
        </div>
    );
};

export default Users;
