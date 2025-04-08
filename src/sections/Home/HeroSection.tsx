"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-[#f4f8fb] text-[#333333] py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Empowering Brands with <span className="text-[#007BFF]">IT & Creative Solutions</span>
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            At SherQuill Media, we specialize in web development, branding, SEO, and social media strategies tailored to grow your business.
          </p>
          <div className="flex gap-4">
            <Link
              href="/contact"
              className="bg-[#FF6F00] text-white px-6 py-3 rounded-2xl font-semibold shadow hover:bg-orange-600 transition"
            >
              Get in Touch
            </Link>
            <Link
              href="/portfolio"
              className="border border-[#007BFF] text-[#007BFF] px-6 py-3 rounded-2xl font-semibold hover:bg-[#007BFF] hover:text-white transition"
            >
              View Portfolio
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1"
        >
          <Image 
            src="assets/hero-illustration.svg"
            alt="Creative IT services"
            width={600} height={400}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
