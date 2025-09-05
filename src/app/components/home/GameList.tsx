"use client";

import { getGames, Game } from "@/lib/api";
import { useEffect, useState } from "react";
import GameCard from "@/app/components/common/GameCard";
import { motion } from "framer-motion";

export default function GameList() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getGames();
        setGames(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load games.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p className="text-gray-400">Loading games...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }


  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="
        flex gap-4 overflow-x-auto pb-2
        sm:grid sm:overflow-visible sm:grid-cols-2 lg:grid-cols-3
      "
    >
      {games.map((game, i) => (
        <motion.div
          key={game.id}
          variants={cardVariant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <GameCard data={game} />
        </motion.div>
      ))}
    </div>
  );
}
