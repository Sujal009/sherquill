import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact | SherQuill Media",
  description: "Get in touch with SherQuill Media for digital marketing, web design, and creative solutions. Let’s build something impactful together.",
  openGraph: {
    title: "Contact | SherQuill Media",
    description: "Get in touch with SherQuill Media for digital marketing, web design, and creative solutions.",
    url: "https://sherquillmedia.com/contact",
    siteName: "SherQuill Media",
    images: [
      {
        url: "/assets/sherquillmedialogo.webp",
        width: 1200,
        height: 630,
        alt: "SherQuill Media - Contact",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | SherQuill Media",
    description: "Get in touch with SherQuill Media for digital marketing, web design, and creative solutions.",
    images: ["/assets/sherquillmedialogo.webp"],
  },
};



const ContactPage = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 text-center">
        Get In Touch
      </h1>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Contact Info */}
        <div className="space-y-6 text-gray-700">
          <p className="text-lg">
            Have questions or a project in mind? Let’s talk and make something great together.
          </p>

          <div>
            <p className="font-semibold">📞 Phone:</p>
            <a
              href="tel:+918320351977"
              className="text-[#007BFF] hover:underline block"
            >
              +91 8320351977
            </a>
          </div>

          <div>
            <p className="font-semibold">📧 Email:</p>
            <a
              href="mailto:sherquillmedia@gmail.com"
              className="text-[#007BFF] hover:underline block"
            >
              sherquillmedia@gmail.com
            </a>
          </div>

          <div>
            <p className="font-semibold">📍 Address:</p>
            <p>304, ABC Building, Ring Road, Surat, Gujarat, India</p>
          </div>
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactPage;
