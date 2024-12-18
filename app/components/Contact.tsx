"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Contact = () => {
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
    const mailtoLink = `mailto:memansabajpai@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="w-full flex flex-col md:flex-row bg-[#fbf3ea]">
      {/* Left side - Form Content */}
      <div className="w-full  flex flex-col justify-center items-center px-8 md:px-16 lg:px-24 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-thin text-[#434850] tracking-tight leading-tight mb-8 font-sans">
            CONTACT
          </h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-24 h-0.5 bg-[#90b4aa] mt-6 mb-8 origin-left"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 bg-transparent border-b border-[#90b4aa] focus:outline-none focus:border-[#434850] text-[#434850] placeholder-[#90b4aa]"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-transparent border-b border-[#90b4aa] focus:outline-none focus:border-[#434850] text-[#434850] placeholder-[#90b4aa]"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 bg-transparent border-b border-[#90b4aa] focus:outline-none focus:border-[#434850] text-[#434850] placeholder-[#90b4aa] h-32 resize-none"
              />
              <button
                type="submit"
                className="w-full p-3 border border-[#90b4aa] bg-[#90b4aa] text-[#fefff2] hover:bg-[#a3bcb5] hover:text-[#fefff2] transition duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
