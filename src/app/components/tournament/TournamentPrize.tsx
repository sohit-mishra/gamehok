"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Prize = {
  position: string;
  amount: number;
};

const prizes: Prize[] = [
  { position: "1st Prize", amount: 1000 },
  { position: "2nd Prize", amount: 500 },
  { position: "3rd Prize", amount: 200 },
  { position: "4th Prize", amount: 100 },
  { position: "5th Prize", amount: 100 },
];

export default function TournamentPrize() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-3xl mx-auto py-6 space-y-0 rounded-md"
    >
    
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center justify-between px-6 py-4 shadow-sm bg-[linear-gradient(270deg,#4D5A53_0%,#182920_100%)]"
      >
        <h2 className="text-lg md:text-xl font-semibold text-white">
          Total Tournament Prize
        </h2>

        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-white">2000</span>
          <Image
            src="/prizecoin.svg"
            alt="Prize Coin"
            width={32}
            height={32}
            className="w-8 h-8"
          />
        </div>
      </motion.div>

      
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
          },
        }}
        className="rounded-md"
      >
        {prizes.map((prize, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.02 }}
            className="flex items-center justify-between px-6 py-4 shadow-sm bg-[#192920] mb-1 rounded-md"
          >
            <div className="flex items-center gap-2">
              <Image
                src="/prizetrophy.svg"
                alt="Trophy"
                width={28}
                height={28}
                className="w-7 h-7"
              />
              <span className="text-base font-medium text-white">
                {prize.position}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-white">
                {prize.amount}
              </span>
              <Image
                src="/prizecoin.svg"
                alt="Prize Coin"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
