"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    // { name: "Portfolio", href: "/portfolio" }, // Uncomment when needed
    { name: "Blogs", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) =>
    pathname === href ? "text-white border-b-2 border-white pb-1" : "text-white hover:text-gray-200";

  return (
    <header className="bg-[#007BFF] text-white px-6 py-2 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/sherquillmedialogo.webp"
            alt="SherQuill Logo"
            width={90}
            height={15}
            className="h-auto w-auto md:w-[90px] md:h-[15px] sm:w-[85px] sm:h-[13px]"
            layout="intrinsic"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-base font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={isActive(link.href)}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden mt-4 flex flex-col gap-4 text-base font-medium px-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={isActive(link.href)}
              onClick={() => setMenuOpen(false)} // Close menu after clicking
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
