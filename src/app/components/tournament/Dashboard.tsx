"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Dashboard() {
  return (
    <section className="max-w-3xl mx-auto">
      <div className="relative w-full h-64 mb-4 rounded-2xl overflow-hidden">
        <Image
          src="/tournament/BGMI.png"
          alt="Tournament Banner"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 48rem"
          priority
        />

        <div className="absolute top-2 left-2 text-white font-bold bg-[#001208CC] px-2 py-2 rounded-full">
          <Image
            src="/backarrow.svg"
            alt="men"
            width={18}
            height={18}
            className="rounded-full mr-0"
          />
        </div>
        <div className="absolute top-2 right-2 text-white font-bold bg-[#001208CC] px-2 py-2 rounded-full">
          <Image
            src="/share.svg"
            alt="men"
            width={20}
            height={20}
            className="rounded-full mr-0"
          />
        </div>
        <div className="absolute bottom-2 left-2 text-white font-bold bg-[#001208CC] px-3 py-2 rounded-full">
          Registration Closes in 2d 15h 10m
        </div>
        <div className="absolute bottom-2 right-2 text-white font-bold bg-[#001208CC] px-3 py-2 rounded-full flex">
          <Image
            src="/men.svg"
            alt="men"
            width={24}
            height={24}
            className="rounded-full mr-2"
          />
          670/800
        </div>
      </div>

      {/* Tournament Info */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <div>
            <h1 className="text-2xl font-bold">PUBG Tournament</h1>
            <p className="text-xl text-gray-300">By Red Bull</p>
          </div>
          <div className="relative w-16 h-16">
            <Image
              src="/tournament/company.png"
              alt="Company Logo"
              fill
              className="rounded-full border-2 border-white object-cover"
            />
          </div>
        </div>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap">
          <motion.span
            className="py-2 px-4 bg-[#002E14] rounded-md font-semibold"
            whileHover={{ scale: 1.05 }}
          >
            BGMI
          </motion.span>

          <motion.span
            className="py-2 px-4 bg-[#002E14] rounded-md font-semibold flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            Entry-10
            <Image
              src="/coin.svg"
              alt="Coin"
              width={21}
              height={21}
              className="ml-1"
            />
          </motion.span>
        </div>
      </div>
    </section>
  );
}
