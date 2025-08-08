import { auth } from "@/_lib/auth";
import { NavBarUser } from "./navbar-user";
import { NavBarGuest } from "./navbar-guest";

export async function NavBar() {
  const session = await auth();
  if (!session) {
    return <NavBarGuest />;
  }
  return <NavBarUser _session={session} isAdmin={true} />;

}
