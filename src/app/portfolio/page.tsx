import React from "react";

export const metadata = {
  title: "Portfolio | SherQuill Media",
  description: "Discover our work with over 15+ brands across various industries. See what SherQuill Media can do for your business.",
  openGraph: {
    title: "Portfolio | SherQuill Media",
    description: "Discover our work with over 15+ brands across various industries. See what SherQuill Media can do for your business.",
    url: "https://sherquillmedia.com/portfolio",
    siteName: "SherQuill Media",
    images: [
      {
        url: "/assets/sherquillmedialogo.webp",
        width: 1200,
        height: 630,
        alt: "SherQuill Media - Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | SherQuill Media",
    description: "Discover our work with over 15+ brands across various industries.",
    images: ["/assets/sherquillmedialogo.webp"],
  },
};


export default function PortfolioPage() {
    return (
      <div className="p-10">
        <h1 className="text-3xl font-bold mb-4">Our Work</h1>
        <p>A showcase of our successful campaigns and designs.</p>
      </div>
    );
  }