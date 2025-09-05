"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Game } from "@/lib/api";

type GameCardProps = {
  data: Game;
};

export default function GameCard({ data }: GameCardProps) {
  return (
    <motion.div
      key={data.id}
      className="min-w-[140px] sm:min-w-[180px] lg:min-w-0 rounded-xl shadow hover:shadow-lg transition"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="relative w-full h-28 sm:h-40 lg:h-56 lg:py-40">
        <Image
          src={data.imagePath || `/${data.gameName}.png`}
          alt={data.gameName}
          fill
          className="rounded-2xl object-cover"
          priority
        />
      </div>

      <p className="text-white font-semibold truncate text-center p-2 lg:text-1xl lg:my-4 my-2">
        {data.gameName}
      </p>
    </motion.div>
  );
}
