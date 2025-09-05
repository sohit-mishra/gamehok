"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="w-full fixed bg-[#001208] top-0 z-50 left-0 py-4">
      <div className="max-w-6xl mx-auto h-16 flex items-center justify-between px-4">
        <motion.div
          className="relative"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center overflow-hidden">
            <Image
              src="/men.png"
              width={48}
              height={48}
              alt="Logo"
              className="rounded-full"
            />
          </div>

          <motion.div
            className="absolute -bottom-1 -right-3 bg-[#01A74B] rounded-full p-1"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
          >
            <Image
              src="/menubar.svg"
              width={16}
              height={16}
              alt="Menu"
            />
          </motion.div>
        </motion.div>

        <div className="flex items-center">
          <motion.button
            className="bg-[#01A74B] flex items-center px-4 py-2 rounded-full text-white"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
          >
            <Image src="/ticket.svg" width={20} height={20} alt="ticket" className="mr-2" />
            245 |
            <Image src="/goldcoin.png" width={20} height={20} alt="coin" className="mx-2" />
            2456
          </motion.button>

          <motion.div
            initial={{ rotate: -45, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src="/bell.svg"
              width={24}
              height={24}
              alt="notifications"
              className="ml-4 cursor-pointer"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
