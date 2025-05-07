"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { PopularFurniture } from "@/components/shared/popular-furniture";

const stats = [
  {
    title: "18K+",
    description: "Happy customers",
  },
  {
    title: "200+",
    description: "Product variations built",
  },
  {
    title: "95%",
    description: "Positive feedback",
  },
];

const categories = [
  {
    title: "Chair",
    link: "",
  },
  {
    title: "Low Chair",
    link: "",
  },
  {
    title: "Bar Chair",
    link: "",
  },
  {
    title: "Club Chair",
    link: "",
  },
  {
    title: "Ottoman",
    link: "",
  },
  {
    title: "Sofa",
    link: "",
  },
  {
    title: "Side Chair",
    link: "",
  },
  {
    title: "Recliner",
    link: "",
  },
];

export default function HeroStats() {
  return (
    <div className="container">
      <motion.div
        className="flex flex-col gap-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          type: "tween",
          delay: 0.5,
          duration: 0.5,
        }}
      >
        <h2 className="text-[40px] font-semibold">Popular furniture</h2>
        <div className="flex justify-between gap-20 w-full">
          <PopularFurniture />

          <div className="flex flex-col justify-between items-end w-full max-w-[600px]">
            <div className="flex gap-6 justify-between w-full">
              {stats.map((item, index) => (
                <div className="flex flex-col gap-2 max-w-[120px]" key={index}>
                  <h4 className="font-semibold text-[40px]">{item.title}</h4>
                  <span className="text-[#595C5F]">{item.description}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-end gap-1 max-w-[500px]">
              {categories.map((item, index) => (
                <Link href={item.link} key={index}>
                  <div className="border border-gray-400 hover:border-black w-max rounded-full px-4 py-1">
                    <span className="font-semibold text-md">{item.title}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
