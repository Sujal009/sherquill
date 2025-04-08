import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SherQuill Media | IT & Services Company",
  description: "Empowering businesses with IT solutions, branding, and development services.",

  icons: {
    icon: "favicon/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#007BFF" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="SherQuill Media | IT & Services Company" />
        <meta property="og:description" content="Empowering businesses with IT solutions, branding, and development services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sherquillmedia.com" />
        <meta property="og:image" content="https://sherquillmedia.com/sherquillmedialogo.webp" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SherQuill Media | IT & Services Company" />
        <meta name="twitter:description" content="Empowering businesses with IT solutions, branding, and development services." />
        <meta name="twitter:image" content="https://sherquillmedia.com/sherquillmedialogo.webp" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ✅ Google Tag Manager Script in body */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id=GTM-PN95LK4W' + dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PN95LK4W');
          `}
        </Script>

        {/* ✅ Google Tag Manager (noscript) fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PN95LK4W"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
