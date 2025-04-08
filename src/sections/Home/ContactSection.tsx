import Link from "next/link";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-16 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-10">
        {/* Logo & CTA */}
        <div>
          <h3 className="text-2xl font-bold text-blue-600 mb-2">SherQuill Media</h3>
          <p className="mb-4">Want to talk about your project?</p>
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Schedule A Call
          </Link>
          <div className="mt-6 flex items-center">
            <Image
              src="/assets/clutch-rating.png"
              alt="Clutch Rating"
              width={100}
              height={24}
              className="h-6 w-auto mr-2"
            />
            <span className="font-semibold">4.9</span>
            <span className="text-yellow-500 ml-1">★★★★★</span>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Social Media Marketing</li>
            <li>Video Editing</li>
            <li>YouTube SEO</li>
            <li>Branding</li>
            <li>Web Design</li>
            <li>Paid Ads Management</li>
          </ul>
        </div>

        {/* Technologies */}
        <div>
          <h4 className="font-semibold mb-4">Technologies</h4>
          <ul className="space-y-2 text-sm">
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>React</li>
            <li>WordPress</li>
            <li>TypeScript</li>
            <li>Framer Motion</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="md:col-span-2">
          <h4 className="font-semibold mb-4">Connect with us</h4>
          <div className="text-sm space-y-3">
            <div className="flex items-start gap-2">
              <span className="text-lg">🇺🇸</span>
              <p>
                123 Avenue, San Francisco CA 94103 – USA<br />
                <MdPhone className="inline mr-1" /> +1 555 0123 456
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-lg">🇮🇳</span>
              <p>
                5th Floor, Unity Tower, Pal, Surat 395009 – India<br />
                <MdPhone className="inline mr-1" /> +91 83203 51977
              </p>
            </div>
            <p>
              <MdEmail className="inline mr-1" />{" "}
              <Link href="mailto:sherquillmedia@gmail.com" className="text-blue-600 hover:underline">
                sherquillmedia@gmail.com
              </Link>
            </p>
          </div>

          {/* Social Media */}
          <div className="flex gap-4 mt-6 text-gray-600 text-xl">
            <Link href="https://www.facebook.com/sherquillmedia" aria-label="Facebook" target="_blank">
              <FaFacebook className="hover:text-blue-600" />
            </Link>
            <Link href="https://www.instagram.com/sherquill_media/" aria-label="Instagram" target="_blank">
              <FaInstagram className="hover:text-pink-500" />
            </Link>
            <Link href="https://www.linkedin.com/company/sherquillmedia" aria-label="LinkedIn" target="_blank">
              <FaLinkedin className="hover:text-blue-700" />
            </Link>
            <Link href="https://www.youtube.com/@sherquillmedia" aria-label="YouTube" target="_blank">
              <FaYoutube className="hover:text-red-600" />
            </Link>
            <Link href="https://wa.me/918320351977" aria-label="WhatsApp" target="_blank">
              <FaWhatsapp className="hover:text-green-500" />
            </Link>
          </div>
        </div>
      </div>

      {/* Hiring CTA */}
      <div className="bg-white mt-16 py-6 text-center border-t" />
    </footer>
  );
};

export default Footer;
