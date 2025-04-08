"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Riya Patel",
    role: "Founder, Urban Aesthetics",
    feedback:
      "SherQuill Media transformed our Instagram strategy. Engagement shot up by 30% in just one month!",
  },
  {
    name: "Vikram Joshi",
    role: "Marketing Head, Vacationam",
    feedback:
      "Their video editing and paid ad strategies helped us reach more relevant audiences and drive sales.",
  },
  {
    name: "Manisha Khunt",
    role: "CMO, Hairfree & Hairgrow",
    feedback:
      "From social media to SEO, SherQuill has been our go-to team. Professional, creative, and impactful.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#333] mb-12">
          What Our Clients Say
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#F9FAFB] shadow-xl rounded-2xl p-6 border border-gray-100"
            >
              <p className="text-[#333] italic mb-4">“{t.feedback}”</p>
              <div className="font-semibold text-[#007BFF]">{t.name}</div>
              <div className="text-sm text-[#666]">{t.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
