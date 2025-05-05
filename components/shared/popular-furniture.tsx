"use client";
import { ProductCard } from "../ui/product-card";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "@/components/ui/carousel";

const products = [
  {
    title: "Maroa Chair",
    price: "$120",
    image: "/chairs/maroa-chair.png",
  },
  {
    title: "Lunor Chair",
    price: "$120",
    image: "/chairs/lunor-chair.png",
  },
  {
    title: "Rattan Chair",
    price: "$120",
    image: "/chairs/rattan-chair.png",
  },
  {
    title: "Avela Chair",
    price: "$180",
    image: "/chairs/avela-chair.png",
  },
];

export const PopularFurniture = () => {
  return (
    <section className="container">
      <Carousel
        opts={{ loop: true, align: "start" }}
        className="max-w-[800px] pl-10"
      >
        <CarouselContent className="">
          {products.map((item, index) => (
            <CarouselItem className="basis-1/3" key={index}>
              <ProductCard
                title={item.title}
                price={item.price}
                image={item.image}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselDots className="-lg:translate-y-1/2 absolute top-1/2 lg:translate-x-0 flex flex-col gap-1 -ml-10" />
      </Carousel>
    </section>
  );
};
