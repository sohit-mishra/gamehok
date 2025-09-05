"use client";

import { useState } from "react";
import Image from "next/image";

export default function Details() {
  const [activeTab, setActiveTab] = useState("Overview");
  const tabs = ["Overview", "Players", "Rules"];

  // Data for Overview cards
  const overviewData = [
    { icon: "/team.svg", title: "TEAM SIZE", value: "Solo" },
    { icon: "/tournamentDetails.svg", title: "FORMAT", value: "Single Elimination" },
    { icon: "/tournamentStart.svg", title: "TOURNAMENT STARTS", value: "Tue 24th Jan 2024, 01:00 PM" },
    { icon: "/remindertime.svg", title: "CHECK-IN", value: "10 mins before the match starts" },
  ];

  return (
    <section className="max-w-6xl mx-auto p-4">
      {/* Tabs */}
      <div className="flex gap-4 border-b border-gray-600 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 font-semibold ${
              activeTab === tab
                ? "border-b-2 border-blue-500 text-white"
                : "text-gray-400"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "Overview" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {overviewData.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-[#1E2A24] p-4 rounded-lg"
            >
              <div className="w-12 h-12 relative">
                <Image
                  src={item.icon}
                  alt={item.title}
                  fill
                  className="object-contain"
                  sizes="3rem"
                  priority
                />
              </div>
              <div>
                <p className="text-gray-400 text-sm">{item.title}</p>
                <p className="text-white font-semibold">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "Players" && (
        <div className="text-gray-300">Player information will go here.</div>
      )}

      {activeTab === "Rules" && (
        <div className="text-gray-300">Tournament rules will go here.</div>
      )}
    </section>
  );
}
