"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/Projects", label: "Projects" },
    { href: "/About", label: "About" },
    { href: "/Contact", label: "Contact" },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -10 },
    open: { opacity: 1, x: 0 },
  };

  const handleToggle = () => {
    console.log("Button clicked");
    setIsOpen(!isOpen);
    console.log("isOpen:", !isOpen);
  };

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-[#90b4aa] text-[#fefff2] relative">
      <div className="font-thin text-xl font-['Caveat']">Memansa</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="hover:text-gray-600">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger Button */}
      <motion.button
        onClick={handleToggle}
        className="md:hidden z-50"
        aria-label="Toggle menu"
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="absolute top-16 right-0 left-0 bg-[#90b4aa] md:hidden shadow-lg z-40 text-[#fefff2]"
          >
            <motion.ul className="flex flex-col items-start p-4">
              {navLinks.map((link) => (
                <motion.li
                  key={link.href}
                  className="w-full"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    href={link.href}
                    className="block py-3 px-4 hover:bg-gray-100 rounded-md w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
