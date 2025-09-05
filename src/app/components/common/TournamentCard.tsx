"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Tournament } from "@/lib/api";

type TournamentCardProps = {
  data: Tournament;
};

export default function TournamentCard({ data }: TournamentCardProps) {
  const [timeLeft, setTimeLeft] = useState<string>("");

  useEffect(() => {
    const updateCountdown = () => {
      const now = Math.floor(Date.now() / 1000);
      const target =
        data.registrationEndTime > now
          ? data.registrationEndTime
          : data.tournamentStartTime;
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft("Closed");
      } else {
        const hours = Math.floor(diff / 3600);
        const minutes = Math.floor((diff % 3600) / 60);
        const seconds = diff % 60;
        setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [data.registrationEndTime, data.tournamentStartTime]);

  const now = Math.floor(Date.now() / 1000);
  const registrationStatus =
    data.registrationEndTime > now
      ? "Registration Open"
      : "Registration Closed";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
      className="rounded-md overflow-hidden shadow-xl relative"
    >
      {/* Banner Image */}
      <div className="relative w-full h-56 rounded-t-2xl overflow-hidden">
        <Image
          src={`/tournament/BGMI.png`}
          alt={data.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 48rem"
        />

        {/* Registration Status */}
        <motion.div
          className="absolute top-2 left-2 flex items-center bg-black/50 px-3 py-1 rounded-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-white font-semibold">{registrationStatus}</span>
        </motion.div>

        {/* Registered Count */}
        <motion.div
          className="absolute top-2 right-2 flex items-center bg-black/50 px-3 py-1 rounded-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Image
            src="/men.svg"
            alt={data.organizerDetails.name}
            width={24}
            height={24}
            className="rounded-full mr-2"
          />
          <span className="text-white font-semibold">
            {data.registeredCount}/{data.totalCount}
          </span>
        </motion.div>
      </div>

      {/* Info Card */}
      <motion.div
        className="py-4 px-3 rounded-b-lg bg-gradient-to-b from-[#56E293] to-[#062E17] relative"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {/* Organizer Logo */}
        <motion.div
          className="absolute -top-6 right-0 transform -translate-x-1/2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 120 }}
        >
          <Image
            src="/tournament/company.png"
            alt={data.organizerDetails.name}
            width={64}
            height={64}
            className="rounded-full border-2 border-white"
          />
        </motion.div>

        {/* Tournament Info */}
        <h3 className="text-xl text-white font-bold mt-4">{data.name}</h3>
        <p className="text-md my-2 text-gray-200">
          By {data.organizerDetails.name}
        </p>

        {/* Tags */}
        <div className="flex gap-2 my-3 flex-wrap">
          <motion.span
            className="py-2 px-4 bg-[#002E14] rounded-md font-semibold"
            whileHover={{ scale: 1.05 }}
          >
            {data.gameName}
          </motion.span>
          <motion.span
            className="py-2 px-4 bg-[#002E14] rounded-md font-semibold"
            whileHover={{ scale: 1.05 }}
          >
            {data.teamSize}
          </motion.span>
          <motion.span
            className="py-2 px-4 bg-[#002E14] rounded-md flex items-center font-semibold"
            whileHover={{ scale: 1.05 }}
          >
            Entry-{data.entryFees}
            <Image
              src="/coin.svg"
              alt="coin"
              width={21}
              height={21}
              className="ml-1"
            />
          </motion.span>
        </div>

        {/* Countdown */}
        <div className="flex items-center my-2 text-gray-200">
          <Image src="/clock.svg" alt="clock" width={24} height={24} className="mr-2" />
          <span>{timeLeft}</span>
        </div>

        {/* Prize & Navigation */}
        <motion.div
          className="flex justify-between items-center my-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex items-center">
            <Image src="/prize.svg" alt="prize" width={24} height={24} className="mr-1" />
            <span className="font-semibold text-white">Prize Pool - 1000</span>
            <Image src="/coin.svg" alt="coin" width={21} height={21} className="ml-1" />
          </div>
          <div className="relative w-6 h-6">
            <Image
              src="/leftarrow.svg"
              alt="Left Arrow"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
