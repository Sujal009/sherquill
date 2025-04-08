// src/app/services/page.tsx

import { servicesData } from "@/constants/fullServices";
import Image from "next/image";

export const metadata = {
  title: "Services | SherQuill Media",
  description: "Explore our core services, including SMM, Web Development, Branding, Paid Ads, SEO, and Video Editing at SherQuill Media.",
  openGraph: {
    title: "Services | SherQuill Media",
    description: "Explore our core services including SMM, Web Development, Branding, Paid Ads, SEO, and Video Editing.",
    url: "https://sherquillmedia.com/services",
    siteName: "SherQuill Media",
    images: [
      {
        url: "/assets/sherquillmedialogo.webp",
        width: 1200,
        height: 630,
        alt: "SherQuill Media - Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | SherQuill Media",
    description: "Explore our core services including SMM, Web Development, Branding, Paid Ads, SEO, and Video Editing.",
    images: ["/assets/sherquillmedialogo.webp"],
  },
};


const ServicesPage = () => {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Our Services</h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        At SherQuill Media, we offer a broad range of services to power your brand’s success across digital, tech, and innovation.
      </p>

      {servicesData.map((category, idx) => (
        <section key={idx} className="mb-16">
          <h2 className="text-2xl font-semibold text-[#007BFF] mb-4">{category.category}</h2>
          <p className="text-gray-600 mb-6">{category.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {category.services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={48}
                  height={48}
                  className="mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
};

export default ServicesPage;
