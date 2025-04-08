"use client";

import Image from "next/image";

const brandLogos = [
  {
    name: "Hairfree & Hairgrow",
    src: "/assets/brands/hairfree.png",
  },
  {
    name: "Vacationam",
    src: "/assets/brands/vacationam.png",
  },
  {
    name: "Urban Aesthetics",
    src: "/assets/brands/urban-aesthetics.png",
  },
  {
    name: "Hairfree India",
    src: "/assets/brands/hairfree-india.png",
  },
  {
    name: "Manav Institute",
    src: "/assets/brands/manav.png",
  },
];

const BrandStrip = () => {
  return (
    <section className="bg-[#F9FAFB] py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-lg font-semibold text-gray-600 mb-6">
          Trusted by 15+ brands across industries
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-center">
          {brandLogos.map((brand, index) => (
            <div key={index} className="flex justify-center">
              <Image
                src={brand.src}
                alt={brand.name}
                width={100}
                height={60}
                className="object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandStrip;
