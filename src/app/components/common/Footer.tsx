"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#001208] fixed bottom-0 left-0 w-full text-white py-3 px-6 rounded-t-2xl shadow-lg z-50">
      <nav className="flex justify-around items-center">
        <Link href="/" className="flex flex-col items-center text-xs hover:text-[#01A74B]">
          <Image src="/homepage.svg" width={20} height={20} alt="Home" />
          <span>Home</span>
        </Link>

        <Link href="/about" className="flex flex-col items-center text-xs hover:text-[#01A74B]">
          <Image src="/tournament.svg" width={20} height={20} alt="Tournament" />
          <span>My Tournament</span>
        </Link>

        <Link href="/contact" className="flex flex-col items-center text-xs hover:text-[#01A74B]">
          <Image src="/social.svg" width={20} height={20} alt="Social" />
          <span>Social</span>
        </Link>

        <Link href="/chats" className="flex flex-col items-center text-xs hover:text-[#01A74B]">
          <Image src="/chat.svg" width={20} height={20} alt="Chats" />
          <span>Chats</span>
        </Link>
      </nav>
    </footer>
  );
}
