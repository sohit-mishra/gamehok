"use client";

import { useState } from "react";
import Navbar from "@/app/components/common/Navbar";
import Image from "next/image";
import HomePage from "@/app/components/home/HomePage";
import Tournament from "@/app/social/page";
import Social from "@/app/social/page";
import Chats from "@/app/social/page";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"home" | "tournament" | "social" | "chats">("home");

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <HomePage/>;
      case "tournament":
        return <Tournament data={"Tournament"}/>;
      case "social":
        return <Social data={"Social"}/>;
      case "chats":
        return <Chats data={"Chats"}/>;
      default:
        return <HomePage/>;
    }
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-6 space-y-8">
      <Navbar />

      {renderContent()}

      <div className="block md:hidden">
        <footer className="bg-[#001208] fixed bottom-0 left-0 w-full text-white py-3 px-6 rounded-t-2xl shadow-lg z-50">
          <nav className="flex justify-around items-center">
            <button
              onClick={() => setActiveTab("home")}
              className={`flex flex-col items-center text-xs ${
                activeTab === "home" ? "text-[#01A74B]" : "text-white"
              }`}
            >
              <Image src="/homepage.svg" width={20} height={20} alt="Home" />
              <span>Home</span>
            </button>

            <button
              onClick={() => setActiveTab("tournament")}
              className={`flex flex-col items-center text-xs ${
                activeTab === "tournament" ? "text-[#01A74B]" : "text-white"
              }`}
            >
              <Image src="/tournament.svg" width={20} height={20} alt="Tournament" />
              <span>My Tournament</span>
            </button>

            <button
              onClick={() => setActiveTab("social")}
              className={`flex flex-col items-center text-xs ${
                activeTab === "social" ? "text-[#01A74B]" : "text-white"
              }`}
            >
              <Image src="/social.svg" width={20} height={20} alt="Social" />
              <span>Social</span>
            </button>

            <button
              onClick={() => setActiveTab("chats")}
              className={`flex flex-col items-center text-xs ${
                activeTab === "chats" ? "text-[#01A74B]" : "text-white"
              }`}
            >
              <Image src="/chat.svg" width={20} height={20} alt="Chats" />
              <span>Chats</span>
            </button>
          </nav>
        </footer>
      </div>
    </main>
  );
}
