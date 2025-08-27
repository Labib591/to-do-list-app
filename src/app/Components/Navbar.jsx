"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {

  const { data: session } = useSession();

  return (
    <div className="w-full border-b shadow-sm bg-white">
      <div className="w-11/12 mx-auto flex items-center justify-between py-3">
        {/* Logo */}
        <h1 className="text-xl font-bold text-primary">iManage</h1>

        {/* Navigation Menu */}
        <NavigationMenu viewport={false}>
          <ul className="flex items-center gap-6">
            <NavigationMenuItem>
              <NavigationMenuLink className="text-sm font-medium hover:text-primary transition-colors">
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink className="text-sm font-medium hover:text-primary transition-colors">
                My Todos
              </NavigationMenuLink>
            </NavigationMenuItem>

            {
              session? (
                <NavigationMenuItem>
                  <Link href="/api/auth/signout">
                    <Button className="text-sm font-medium hover:text-primary transition-colors">
                      Logout
                    </Button>
                  </Link>
                </NavigationMenuItem>
              ) : (
                <><NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/auth/login"><Button variant="outline" size="sm">
                  Login
                </Button></Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/auth/register"><Button size="sm">Register</Button></Link>
              </NavigationMenuLink>
            </NavigationMenuItem></>
              )
            }
          </ul>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default Navbar;
