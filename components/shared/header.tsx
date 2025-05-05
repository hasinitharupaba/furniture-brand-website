"use client";
import React from "react";
import Link from "next/link";
import { Button, HeaderNavigation, Logo } from "@/components/ui";
import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

export const Header = () => {
  return (
    <motion.header
      className="container"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{
        type: "tween",
        duration: 0.5,
      }}
    >
      <div className="py-5 flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>

        <nav>
          <HeaderNavigation />
        </nav>

        <div className="flex gap-4">
          <Button variant="ghost" size="icon">
            <ShoppingCart size={32} />
          </Button>
          <Button variant="default">Login</Button>
        </div>
      </div>
    </motion.header>
  );
};
