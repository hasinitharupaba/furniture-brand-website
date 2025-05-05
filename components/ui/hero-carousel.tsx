"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { SvgMaskWrapper } from "@/components/ui";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

interface HeroCarouselProps {
  title?: string;
}

const carouselData = [
  {
    title: "Versatile Avela Chair",
    price: "$180",
    image: "/chairs/avela-chair.png",
  },
  {
    title: "Maroa Chair",
    price: "$180",
    image: "/chairs/maroa-chair.png",
  },
  {
    title: "Lunor Chair",
    price: "$180",
    image: "/chairs/rattan-chair.png",
  },
];

export function HeroCarousel({}: HeroCarouselProps) {
  return (
    <>
      <Carousel
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 3000 })]}
        className="max-w-[600px]"
      >
        <CarouselContent>
          {carouselData.map((item, index) => (
            <CarouselItem key={index}>
              <SvgMaskWrapper>
                <div className="flex flex-col gap-1">
                  <span className="text-white text-xl font-semibold">
                    {item.title}
                  </span>
                  <span className="text-white text-2xl font-bold">
                    {item.price}
                  </span>
                </div>
              </SvgMaskWrapper>

              <div className="relative bottom-10">
                <Image
                  src={item.image}
                  width={500}
                  height={500}
                  alt=""
                  className="w-[500px] h-auto"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
}
