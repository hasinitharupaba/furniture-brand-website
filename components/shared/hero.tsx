"use client";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { AvatarGroup, Button, HeroCarousel } from "@/components/ui";

export const Hero = () => {
  return (
    <section className="container">
      <div className="flex justify-between w-full pt-20">
        <motion.div
          className="flex flex-col gap-10 p-10 border rounded-3xl border-[#C0C0C0] max-w-[730px] h-max"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1], // smooth cubic-bezier
          }}
        >
          <motion.div
            className="flex flex-col gap-4"
            initial={{ y: 80 }}
            animate={{ y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
            }}
          >
            <h1 className="text-6xl leading-[120%] font-bold capitalize">
              Find Your dream home furniture
            </h1>
            <span className="text-base text-gray-700">
              Discover timeless pieces crafted for comfort, style, and everyday
              living. From cozy corners to statement spaces, we help you design
              the life you love.
            </span>
          </motion.div>

          <motion.div
            className="flex gap-2"
            initial={{ y: 80 }}
            animate={{ y: 0 }}
            transition={{
              type: "tween",
              duration: 0.5,
            }}
          >
            <Button>Shop now</Button>
            <Button variant="link">
              <span>Customise</span>
              <ChevronRight />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col relative justify-end ml-4"
          initial={{ y: 80 }}
          animate={{ y: 0 }}
          transition={{
            type: "tween",
            duration: 0.5,
          }}
        >
          <HeroCarousel />
          <div className="absolute bottom-20 -left-16">
            <div className="bg-white px-4 py-3 rounded-[12px] w-max flex items-center gap-2">
              <AvatarGroup
                avatars={[
                  {
                    image:
                      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
                    fallback: "CN",
                  },
                  {
                    image:
                      "https://images.unsplash.com/photo-1632765854612-9b02b6ec2b15?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
                    fallback: "VC",
                  },
                  {
                    image:
                      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fHBvcnRyYWl0fGVufDB8fDB8fHww",
                    fallback: "NJ",
                  },
                  { fallback: "JS" }, // No image, fallback only
                  { fallback: "TS" },
                ]}
                maxDisplay={3}
              />
              <span className="text-base font-semibold">
                Check <br /> Reviews
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
