"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  return (
    <div className="w-11/12 mx-auto">
      <NavigationMenu viewport={false} className="list-none">
        <NavigationMenuItem>
          <NavigationMenuLink>Home</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink>My Todos</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
