"use client";

import { useEffect, useState } from "react";
import { getTournaments, Tournament } from "@/lib/api";
import TournamentCard from "../common/TournamentCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import Link from "next/link";
import "swiper/css"; 

export default function TournamentList() {
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getTournaments();
        setTournaments(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load tournaments.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <p className="text-gray-400">Loading tournaments...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <Swiper
      spaceBetween={16}
      grabCursor={true}
      loop={true}
      speed={600}
      slidesPerView={1.1}
      breakpoints={{
        640: { slidesPerView: 1.5 },  
        1024: { slidesPerView: 3.2 }, 
        1280: { slidesPerView: 3 }, 
      }}
      className="py-4"
    >
      {tournaments.map((tournament) => (
        <SwiperSlide key={tournament.id} className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full max-w-sm"
          >
            <Link 
              href={`/tournament/${tournament.id}`} 
              className="block w-full"
            >
              <TournamentCard data={tournament} />
            </Link>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
