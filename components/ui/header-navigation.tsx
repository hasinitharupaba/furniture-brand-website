import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";



import { Button } from "@/components/ui";
import Link from "next/link";

const headerLinks = [
  {
    type: "link",
    title: "Home",
    link: "/",
  },
  {
    type: "dropdown",
    title: "Products",
    link: "/",
    productCategories: [
      {
        title: "",
        link: "",
      },
    ],
  },
  {
    type: "link",
    title: "About us",
    link: "/",
  },
  {
    type: "link",
    title: "Contact us",
    link: "/",
  },
];

export const HeaderNavigation = () => {
  return (
    <div className="flex items-center">
      {headerLinks.map((items, index) => (
        <div key={index}>
          {items.type === "dropdown" ? (
            <NavigationMenu className="w-full">
              <NavigationMenuList className="w-full">
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                  <NavigationMenuContent className="w-full">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam accusantium maiores at magnam nostrum similique
                    voluptatibus ad, corporis amet minus quaerat explicabo dolor
                    rerum earum. Quibusdam earum nihil amet ut!
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          ) : (
            <div className="flex">
              <Link href={items.link}>
                <Button variant="link">{items.title}</Button>
              </Link>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
