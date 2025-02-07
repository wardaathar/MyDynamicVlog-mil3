"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const now = new Date();
    const option: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    };

    setCurrentDateTime(now.toLocaleDateString("en-US", option) + " " + now.toLocaleTimeString("en-US", { hour12: false }));
  }, []); // ✅ Empty dependency array means it runs **only once**

  return (
    <header className="text-black bg-white body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap bg-white pt-2 flex-col md:flex-row items-center">
        <div className="flex-1 bg-white text-slate-950">
          <span>{currentDateTime}</span> {/* ✅ Time will not update again */}
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center bg-white text-black justify-center">
          <Link href="/" className="mr-5 hover:text-pink-700 transition-transform duration-300 hover:scale-105">
            Home
          </Link>
          <Link href="/about" className="mr-5 hover:text-pink-700 transition-transform duration-300 hover:scale-105">
            About
          </Link>
          <Link href="/blog" className="mr-5 hover:text-pink-700 transition-transform duration-300 hover:scale-105">
            Blog
          </Link>
          <Link href="/contact" className="mr-5 hover:text-pink-700 transition-transform duration-300 hover:scale-105">
            Contact
          </Link>
        </nav>
        <button
          className="inline-flex items-center bg-blue-700 border-0 py-1 px-3 focus:outline-none hover:bg-slate-500 rounded text-white mt-4 md:mt-0 transition-colors duration-300"
          onClick={() => window.open("https://www.linkedin.com/in/syeda-warda-2ab623344", "_blank")}
        >
          LinkedIn
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </header>
  );
}
