import Link from "next/link";
import {
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuContent,
} from "../ui/navigation-menu";

export function NavBarGuest() {
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
                        <NavigationMenuTrigger>Daten</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink asChild>
                                <Link href="/books" className="px-6" >Bücher</Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                                <Link href="/items" className="px-6" >Items</Link>
                            </NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="text-3x1 text-white font-bold px-8 text-right">
                        <NavigationMenuLink asChild>
                            <Link href="/api/auth/signin" className="text-3x1 font-bold px-8">Login</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </nav>
    );
}
