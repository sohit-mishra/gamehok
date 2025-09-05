"use client";

import { motion } from "framer-motion";

export default function HowToJoinMatch() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-3xl mx-auto px-0 py-6"
    >
      <motion.h2
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-xl font-semibold mb-4"
      >
        How to Join a Match
      </motion.h2>

      <motion.ul
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
          },
        }}
        className="list-disc text-[#BCBCBC] px-4"
      >
        {[
          "Have your game open already and on the latest version.",
          "Once the match is configured you will receive an invite in-game to join the lobby.",
          "Join the match and wait for the game to start.",
          "When eliminated, return to the match room page to be ready to join the next map in the round.",
        ].map((step, i) => (
          <motion.li
            key={i}
            variants={{
              hidden: { opacity: 0, y: 15 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
          >
            {step}
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
}
