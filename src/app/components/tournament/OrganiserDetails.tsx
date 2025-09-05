"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function OrganiserDetails() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-3xl mx-auto bg-[#182920] rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
    >
   
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-[linear-gradient(270deg,#4D5A53_0%,#182920_100%)] px-6 py-3"
      >
        <h2 className="text-lg md:text-xl font-semibold text-white">
          Organiser’s Details and Contact
        </h2>
      </motion.div>

     
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="bg-black text-white px-4 py-6 space-y-0"
      >
      
        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.5 }}
          className="flex items-start justify-between"
        >
          <div className="flex items-center gap-0">
            <div className="w-12 h-12 flex items-center justify-center rounded-full font-bold">
              <Image
                src="/prizecoin.svg"
                alt="Gamehok Esports Logo"
                width={36}
                height={36}
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Gamehok Esports</h3>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#002E14] hover:bg-[#019944] text-white px-4 py-2 rounded-lg"
          >
            Follow
          </motion.button>
        </motion.div>

       
        <motion.p
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.5 }}
          className="text-sm leading-relaxed text-gray-300 lg:w-[400px] py-4 px-2"
        >
          This is the in-house organiser of this platform. You can follow our
          page on this platform for regular updates.
        </motion.p>

        
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid grid-cols-2 gap-2 px-1"
        >
          {[
            {
              href: "tel:+919890987754",
              icon: "/phone.svg",
              text: "9890987754",
              align: "text-left",
            },
            {
              href: "mailto:Support@gamehok.com",
              icon: "/email.svg",
              text: "Support@gamehok.com",
              align: "justify-end",
            },
            {
              href: "https://wa.me/919890987754",
              icon: "/whatsapp.svg",
              text: "9890987754",
              align: "text-left",
            },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              variants={{ hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.4 }}
              className={`flex items-center gap-2 ${item.align} hover:text-[#01B752]`}
            >
              <Image src={item.icon} alt="Icon" width={25} height={25} />
              {item.text}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
