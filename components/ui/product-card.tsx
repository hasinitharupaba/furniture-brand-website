import Image from "next/image";
import { Button } from "@/components/ui";
import { ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  title: string;
  price: string;
  image: string;
}

export function ProductCard({ title, price, image }: ProductCardProps) {
  return (
    <div
      className={cn("min-w-[150px] bg-white rounded-[20px] hover:bg-brand-100")}
    >
      <div className="p-4 flex flex-col gap-4">
        <Image
          src={image}
          width={300}
          height={300}
          className="w-full h-auto max-h-[200px]"
          alt=""
        />
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-medium">{title}</h3>
          <span className="text-2xl font-bold">{price}</span>
        </div>
      </div>

      <Button className="h-14 rounded-b-[20px] rounded-t-none w-full">
        <ShoppingCart />
        Buy now
      </Button>
    </div>
  );
}
