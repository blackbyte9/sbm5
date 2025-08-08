import Link from "next/link";
import {
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuContent,
    navigationMenuTriggerStyle
} from "../ui/navigation-menu";
import { Session } from "next-auth";

export function NavBarUser({ _session, isAdmin }: { _session: Session | null, isAdmin?: boolean }) {
    return (
        <nav className="bg-green-800 text-black shadow">
            <NavigationMenu className="container mx-auto px-4 py-2" viewport={false}>
                <NavigationMenuList>
                    <NavigationMenuItem className="text-3x1 text-white font-bold px-8">
                        <NavigationMenuLink asChild>
                            <Link href="/" className="text-3x1 font-bold px-8">SBM5</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <Link href="/lease" className="px-6" >Ausleihen</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <Link href="/return" className="px-6" >Zurückgeben</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Daten</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink asChild>
                                <Link href="/books" className="px-6" >Bücher</Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                                <Link href="/items" className="px-6" >Items</Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                                <Link href="/students" className="px-6" >Schüler:innen</Link>
                            </NavigationMenuLink>
                            {isAdmin ?
                                <><hr className="my-2 h-px bg-green-400 border-0" /><NavigationMenuLink asChild>
                                    <Link href="/students">Schüler:innen importieren</Link>
                                </NavigationMenuLink></>
                                : null}
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="text-3x1 text-white font-bold px-8 text-right">
                        <NavigationMenuLink asChild>
                            <Link href="/api/auth/signout" className="text-3x1 font-bold px-8">Logout</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </nav>
    );
}
