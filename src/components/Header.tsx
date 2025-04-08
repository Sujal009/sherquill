// src/components/Header.tsx

"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#007BFF] text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          SherQuill Media
        </Link>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center space-x-0 md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-[#007BFF] md:bg-transparent px-6 md:px-0 py-4 md:py-0`}
        >
          <Link href="/" className="block py-2 md:py-0 hover:underline">
            Home
          </Link>
          <Link href="/about" className="block py-2 md:py-0 hover:underline">
            About
          </Link>
          <Link href="/services" className="block py-2 md:py-0 hover:underline">
            Services
          </Link>
          <Link href="/portfolio" className="block py-2 md:py-0 hover:underline">
            Portfolio
          </Link>
          <Link href="/contact" className="block py-2 md:py-0 hover:underline">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
