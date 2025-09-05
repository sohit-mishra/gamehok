"use client";

import Banner from "@/app/components/home/Banner";
import GameList from "@/app/components/home/GameList";
import TournamentList from "@/app/components/home/TournamentList";
import PeopleToFollow from "@/app/components/home/PeopleToFollow";

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-6 space-y-8">
      <Banner />

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white">
            Play Tournament by Games
          </h2>
          <button className="text-sm text-[#0CF285] hover:text-green-300 font-medium transition">
            View All
          </button>
        </div>
        <GameList />
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white">Compete in Battles</h2>
          <button className="text-sm text-[#0CF285] hover:text-green-300 font-medium transition">
            View All
          </button>
        </div>
        <TournamentList />
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white">People to follow</h2>
          <button className="text-sm text-[#0CF285] hover:text-green-300 font-medium transition">
            View More
          </button>
        </div>
        <PeopleToFollow />
      </section>
    </main>
  );
}
