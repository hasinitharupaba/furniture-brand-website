import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui";
import Link from "next/link";
import { Armchair } from "lucide-react";

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
        title: "Sofa",
        link: "/products/sofa",
      },
      {
        title: "Low Chair",
        link: "/products/low-chair",
      },
      {
        title: "Bar Chair",
        link: "/products/bar-chair",
      },
      {
        title: "Side Chair",
        link: "/products/side-chair",
      },
    ],
  },
  {
    type: "link",
    title: "About us",
    link: "/about",
  },
  {
    type: "link",
    title: "Contact us",
    link: "/contact",
  },
];

export const HeaderNavigation = () => {
  return (
    <div className="flex items-center space-x-4">
      {headerLinks.map((items, index) => (
        <div key={index}>
          {items.type === "dropdown" ? (
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>{items.title}</NavigationMenuTrigger>
                  <NavigationMenuContent className="p-4 w-full">
                    <ul className="flex flex-col">
                      {items.productCategories?.map((item, idx) => (
                        <li key={idx}>
                          <Link href={item.link}>
                            <Button variant="link" className="w-full font-normal justify-start hover:bg-brand-100">
                              <Armchair strokeWidth={1.5} />
                              {item.title}
                            </Button>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          ) : (
            <Link href={items.link}>
              <Button variant="link">{items.title}</Button>
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};
