"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#001208] fixed bottom-0 left-0 w-full text-white py-3 px-6 rounded-t-2xl shadow-lg z-50">
      <nav className="flex justify-around items-center">
        <a href="/" className="flex flex-col items-center text-xs hover:text-[#01A74B]">
          <Image src="/homepage.svg" width={20} height={20} alt="Home" />
          <span>Home</span>
        </a>

        <a href="/about" className="flex flex-col items-center text-xs hover:text-[#01A74B]">
          <Image src="/tournament.svg" width={20} height={20} alt="Tournament" />
          <span>My Tournament</span>
        </a>

        <a href="/contact" className="flex flex-col items-center text-xs hover:text-[#01A74B]">
          <Image src="/social.svg" width={20} height={20} alt="Social" />
          <span>Social</span>
        </a>

        <a href="/chats" className="flex flex-col items-center text-xs hover:text-[#01A74B]">
          <Image src="/chat.svg" width={20} height={20} alt="Chats" />
          <span>Chats</span>
        </a>
      </nav>
    </footer>
  );
}
