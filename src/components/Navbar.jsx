import React from "react";
import { useId } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../shadcnUi/ui/navigation-menu";

const Navbar = () => {
  const id = useId();

  const ServicesLinks = [
    { id: id, LinkName: "Software Devlopment", Link: "/" },
  ];
  return (
    <>
      <header className="flex justify-evenly items-center">
        <div>logo</div>
        <nav>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <button legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <button legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About Us
                  </NavigationMenuLink>
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink className="p-5 w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci deleniti oribus?</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Technologies</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink className="p-5">Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Expertise</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink className="p-5">Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink className="p-5">Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            <NavigationMenuItem>
              <button legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Career
                </NavigationMenuLink>
              </button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <button legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact Us
                </NavigationMenuLink>
              </button>
            </NavigationMenuItem>
            </NavigationMenuList>{" "}
          </NavigationMenu>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
