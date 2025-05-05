"use client";

import { cn } from "@/lib/utils";
import { type UseEmblaCarouselType } from "embla-carousel-react";
import React, {
  ComponentPropsWithRef,
  useCallback,
  useEffect,
  useState,
} from "react";

type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

type CarouselApi = UseEmblaCarouselType[1];

export const useDotButton = (
  emblaApi: CarouselApi | undefined
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: CarouselApi) => {
    if (!emblaApi) return null;
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: CarouselApi) => {
    if (!emblaApi) return null;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

type PropType = ComponentPropsWithRef<"button">;

export const DotButton: React.FC<
  PropType & {
    isActive?: boolean;
    index?: number;
  }
> = (props) => {
  const { className, isActive, ...restProps } = props;

  return (
    <button
      type="button"
      className={cn(
        "border-offwhite flex h-3 w-3 cursor-pointer items-center justify-center rounded-full  bg-white border border-black shadow-lg backdrop-blur-[2px] hover:bg-black",
        {
          "h-6 pb-1 bg-black": isActive,
        },
        className
      )}
      {...restProps}
    ></button>
  );
};
