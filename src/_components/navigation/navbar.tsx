import { auth, checkAdminRole } from "@/_lib/auth";
import { NavBarUser } from "./navbar-user";
import { NavBarGuest } from "./navbar-guest";

export async function NavBar() {
  const session = await auth();
  const isAdmin = await checkAdminRole(session?.user?.id ?? "");
  if (!session) {
    return <NavBarGuest />;
  }
  return <NavBarUser isAdmin={isAdmin} />;

}
