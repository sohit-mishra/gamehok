"use client";

import TournamentList from "@/app/components/home/TournamentList";
import HowToJoinMatch from "@/app/components/tournament/HowToJoinMatch";
import OrganiserDetails from "@/app/components/tournament/OrganiserDetails";
import RoundsandSchedule from "@/app/components/tournament/RoundsandSchedule";
import TournamentPrize from "@/app/components/tournament/TournamentPrize";
import Dashboard from "@/app/components/tournament/Dashboard";
import Details from "@/app/components/tournament/Details";

export default function TournamentPage() {

  return (
    <main className="max-w-6xl mx-auto px-1 py-0 space-y-8">
      <section>
        <Dashboard/>
      </section>

       <section>
        <Details/>
      </section>

   

      <section>
        <TournamentPrize />
      </section>

      <section>
        <RoundsandSchedule  />
      </section>

      <section>
        <HowToJoinMatch />
      </section>

      <section>
        <OrganiserDetails />
      </section>

      <section className="mb-20">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white mb-5">
            More tournaments for you
          </h2>
        </div>
        <TournamentList />
      </section>

      <div className="fixed bottom-0 left-0 right-0 w-full z-50 bg-[#001208] shadow-[0_-2px_4px_0_rgba(255,255,255,0.25)] md:hidden py-2 px-4">
        <button className="w-full bg-[#01B752] text-white py-4 rounded-lg">
          Join Tournament
        </button>
      </div>
    </main>
  );
}
