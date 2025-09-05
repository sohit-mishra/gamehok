"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PeopleToFollow() {
  const people = [
    { id: 1, name: "John Doe", image: "/profile/user_one.jpg" },
    { id: 2, name: "Jane Smith", image: "/profile/user_two.jpg" },
    { id: 3, name: "Alex Brown", image: "/profile/user_three.jpg" },
  ];

  return (
    <div className="space-y-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 sm:space-y-0">
      {people.map((person, i) => (
        <motion.div
          key={person.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="rounded-xl shadow hover:shadow-lg transition p-3 flex sm:flex-col sm:items-center sm:text-center gap-3"
        >
          <div className="relative flex-shrink-0 w-12 h-12 sm:w-full sm:h-40 lg:h-48">
            <Image
              src={person.image}
              alt={person.name}
              fill
              className="rounded-full sm:rounded-2xl object-cover"
            />
          </div>

          <div className="flex-1 flex items-center justify-between sm:w-full">
            <p className="text-white font-medium mb-0 sm:mb-2">{person.name}</p>
            <button className="bg-[#002E14] text-white py-1 px-4 sm:py-2 sm:px-6 rounded-md hover:bg-[#0CF285] hover:text-black transition">
              Follow
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
