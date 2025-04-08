// src/app/about/page.tsx
import Image from "next/image";

export const metadata = {
  title: "About | SherQuill Media",
  description: "Learn more about SherQuill Media – a creative-tech agency focused on branding, digital marketing, and software solutions.",
  openGraph: {
    title: "About | SherQuill Media",
    description: "Learn more about SherQuill Media – a creative-tech agency focused on branding, digital marketing, and software solutions.",
    url: "https://sherquillmedia.com/about",
    siteName: "SherQuill Media",
    images: [
      {
        url: "/assets/sherquillmedialogo.webp",
        width: 1200,
        height: 630,
        alt: "SherQuill Media - About Page",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | SherQuill Media",
    description: "Learn more about SherQuill Media – a creative-tech agency focused on branding, digital marketing, and software solutions.",
    images: ["/assets/sherquillmedialogo.webp"],
  },
};

const AboutPage = () => {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 text-gray-800">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About SherQuill Media</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          SherQuill Media is a results-driven creative-tech agency that blends design, strategy, and code to transform brands into digital powerhouses. Our work fuels visibility, trust, and conversions.
        </p>
        <div className="mt-8 flex justify-center">
          <Image
            src="/assets/about-illustration.webp"
            alt="Team at SherQuill Media"
            width={567}
            height={448}
            className="rounded-xl shadow-md w-full max-w-3xl h-auto"
            priority={false}
          />
        </div>
      </section>

      {/* Mission */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-[#007BFF]">Our Mission</h2>
        <p>
          To empower businesses with impactful digital strategies, creative storytelling, and innovative technology — enabling them to grow, scale, and lead in the digital age.
        </p>
      </section>

      {/* Vision */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-[#007BFF]">Our Vision</h2>
        <p>
          To become a global creative-tech agency known for delivering exceptional results, pushing boundaries, and creating lasting brand impressions.
        </p>
      </section>

      {/* Our Values */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-[#007BFF]">Our Core Values</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700">
          <li>✅ Creativity with purpose</li>
          <li>✅ Transparent communication</li>
          <li>✅ Innovation through technology</li>
          <li>✅ Client-first mindset</li>
          <li>✅ Collaborative culture</li>
          <li>✅ Measurable impact</li>
        </ul>
      </section>

      {/* Timeline or Milestones */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-[#007BFF]">How We Got Here</h2>
        <div className="space-y-6 border-l-2 border-blue-600 pl-4">
          <div>
            <h3 className="font-bold">2021 – Founded</h3>
            <p className="text-sm text-gray-600">SherQuill Media was born with the mission to bridge creative design and digital marketing for startups and SMEs.</p>
          </div>
          <div>
            <h3 className="font-bold">2022 – 50+ Brands Served</h3>
            <p className="text-sm text-gray-600">From local businesses to online brands, we scaled visibility, reach, and ROI across industries.</p>
          </div>
          <div>
            <h3 className="font-bold">2024 – SherQuill 2.0</h3>
            <p className="text-sm text-gray-600">With an expanded tech team and global mindset, we began building powerful digital products and custom software.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f9f9f9] py-12 px-6 rounded-2xl text-center shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Let&#39;s Build Something Great</h2>
        <p className="mb-6">
          Whether you&#39;re launching a startup or scaling an enterprise, SherQuill Media is your digital partner in growth and innovation.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#007BFF] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#005bb5] transition"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
};

export default AboutPage;
