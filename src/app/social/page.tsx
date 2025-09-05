"use client";

import { motion } from "framer-motion";

interface UnderConstructionProps {
  data?: string;
}

export default function UnderConstruction({ data }: UnderConstructionProps) {
  console.log(data)
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <motion.div
        initial={{ opacity: 1, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold mb-4">Under Construction: {data}</h1>
        <p className="text-lg md:text-xl mb-6">
          We're working hard to bring you something amazing!
        </p>
      </motion.div>
    </div>
  );
}
