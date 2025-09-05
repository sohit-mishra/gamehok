"use client";

import { motion } from "framer-motion";

const roundsData = [
  {
    title: "Qualifiers",
    round: "Round 1",
    format: "Single Elimination",
    note: "Top 4 to next round",
    date: "3rd Aug, 10:00 pm",
  },
  {
    title: "Qualifiers",
    round: "Round 1",
    format: "Single Elimination",
    note: "Top 4 to next round",
    date: "3rd Aug, 10:00 pm",
  },
  {
    title: "Qualifiers",
    round: "Round 1",
    format: "Single Elimination",
    note: "Top 4 to next round",
    date: "3rd Aug, 10:00 pm",
  },
];

export default function RoundsandSchedule() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-5xl mx-auto px-0 py-6"
    >
      <motion.h2
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-xl md:text-2xl font-semibold mb-6"
      >
        Rounds and Schedule
      </motion.h2>

      <div className="flex flex-wrap gap-4 justify-start">
        {roundsData.map((round, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className={`
              flex flex-col justify-between p-4 shadow-sm border-b mt-0 md:mt-10 border-[#3C4B43]
              w-full sm:w-[48%] ${index === 2 ? "sm:w-full sm:max-w-[48%]" : ""}
            `}
          >
            <div className="flex justify-between items-start mb-2">
              <p className="text-xl font-bold text-white">
                {round.title}{" "}
                <span className="text-gray-300 font-normal">({round.round})</span>
              </p>
              <p className="text-sm text-gray-300">
                <span className="bg-[linear-gradient(270deg,#311A61_0%,#1C192E_100%)] px-2 py-1 rounded">
                  {round.format}
                </span>
              </p>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-300">
              <p>{round.note}</p>
              <p>{round.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
