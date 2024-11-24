"use client";
import React, { useState } from "react";
import { Facebook, Instagram, Mail } from "lucide-react";

const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:your-email@example.com?subject=Contact from ${formData.name}&body=${formData.message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full p-10 bg-[#fefff2] text-black">
      <h1 className="text-5xl font-serif mb-8">Contact</h1>
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded bg-[#f0f0e9]"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded bg-[#f0f0e9]"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded h-32 bg-[#f0f0e9]"
        />
        <button
          type="submit"
          className="w-full p-3 bg-[#242425] text-white rounded hover:bg-gray-800 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default page;
