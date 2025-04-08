import dynamic from "next/dynamic";
import HeroSection from "@/sections/Home/HeroSection";

const ServicesSection = dynamic(() => import('@/sections/Home/ServicesSection'));
const TestimonialsSection = dynamic(() => import('@/sections/Home/TestimonialsSection'));
const BrandStrip = dynamic(() => import('@/sections/Home/BrandStrip'));
const ContactSection = dynamic(() => import('@/sections/Home/ContactSection'));

export const metadata = {
  title: "SherQuill Media | IT & Services Company in India | Custom IT Solutions, Web Development, IT Support, and More",
  description: "SherQuill Media specializes in IT services, custom IT solutions, web development, IT support, social media marketing, and digital branding to empower businesses and drive growth.",
  openGraph: {
    title: "SherQuill Media | Leading IT & Services Company in India",
    description: "We provide top-tier social media marketing, branding, YouTube SEO, and more.",
    url: "https://sherquillmedia.com",
    siteName: "SherQuill Media",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <TestimonialsSection />
        <BrandStrip />
        <ContactSection />
      </main>
    </div>
  );
}
