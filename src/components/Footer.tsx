// src/components/Footer.tsx

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#333] text-white py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Navigation Links */}
        <div className="flex gap-6 text-sm md:text-base">
          <Link href="/" className="hover:text-[#FF6F00] transition">Home</Link>
          <Link href="/about" className="hover:text-[#FF6F00] transition">About</Link>
          <Link href="/services" className="hover:text-[#FF6F00] transition">Services</Link>
          <Link href="/blogs" className="hover:text-[#FF6F00] transition">Blogs</Link>
          <Link href="/contact" className="hover:text-[#FF6F00] transition">Contact</Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a href="https://www.facebook.com/sherquillmedia" target="_blank" rel="noopener noreferrer" className="hover:text-[#40E0D0]">
            <Facebook />
          </a>
          <a href="https://www.instagram.com/sherquill_media/" target="_blank" rel="noopener noreferrer" className="hover:text-[#40E0D0]">
            <Instagram />
          </a>
          <a href="https://www.linkedin.com/company/sherquillmedia" target="_blank" rel="noopener noreferrer" className="hover:text-[#40E0D0]">
            <Linkedin />
          </a>
          <a href="https://x.com/sherquillmedia" target="_blank" rel="noopener noreferrer" className="hover:text-[#40E0D0]">
            <Twitter />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} SherQuill Media. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
