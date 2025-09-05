"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  const pageBack = () => {
    router.back();
  };
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          text: "Check out this page!",
          url: window.location.href,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert("Sharing is not supported in this browser.");
    }
  };

  return (
    <section className="max-w-6xl mx-auto ">
      <motion.div
        className="relative w-full h-64 mb-4 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/tournament/BGMI.png"
          alt="Tournament Banner"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 48rem"
          priority
        />

        <div
          className="absolute top-2 left-2 text-white font-bold bg-[#001208CC] px-2 py-2 rounded-full"
          onClick={pageBack}
        >
          <Image src="/backarrow.svg" alt="Back" width={18} height={18} />
        </div>
        <div
          className="absolute top-2 right-2 text-white font-bold bg-[#001208CC] px-2 py-2 rounded-full"
          onClick={handleShare}
        >
          <Image src="/share.svg" alt="Share" width={20} height={20} />
        </div>

        <div className="absolute bottom-2 left-2 text-white font-bold bg-[#001208CC] px-3 py-2 rounded-full">
          Registration Closes in 2d 15h 10m
        </div>
        <div className="absolute bottom-2 right-2 text-white font-bold bg-[#001208CC] px-3 py-2 rounded-full flex items-center">
          <Image
            src="/men.svg"
            alt="Participants"
            width={24}
            height={24}
            className="mr-2"
          />
          670/800
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <div className="flex justify-between items-center mb-3  px-4 py-2">
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

        <motion.div className="flex gap-2 flex-wrap px-4 py-0 pb-10">
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
        </motion.div>
      </motion.div>
    </section>
  );
}
