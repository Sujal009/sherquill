"use client";

import { useState } from "react";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setFormData({ name: "", email: "", phone: "", message: "" });
      setStatus("Message sent successfully!");
    } else {
      setStatus("Something went wrong. Try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="w-full p-3 border rounded-xl"
        onChange={handleChange}
        value={formData.name}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className="w-full p-3 border rounded-xl"
        onChange={handleChange}
        value={formData.email}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Your Phone Number"
        className="w-full p-3 border rounded-xl"
        onChange={handleChange}
        value={formData.phone}
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows={4}
        className="w-full p-3 border rounded-xl"
        onChange={handleChange}
        value={formData.message}
        required
      />
      <button
        type="submit"
        className="bg-[#007BFF] text-white py-3 px-6 rounded-xl hover:bg-blue-600 transition"
      >
        Send Message
      </button>
      {status && <p className="text-sm text-gray-600 mt-2">{status}</p>}
    </form>
  );
};

export default ContactForm;
