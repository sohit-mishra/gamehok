"use client";

import Navbar from "@/app/components/common/Navbar";
import Footer from "@/app/components/common/Footer";
import HomePage from "@/app/components/home/HomePage";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-6 space-y-8">
      <Navbar />
      <HomePage />
      <div className="block md:hidden">
        <Footer />
      </div>
    </main>
  );
}
