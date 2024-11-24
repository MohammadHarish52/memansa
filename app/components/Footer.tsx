import Link from "next/link";
import { Instagram, Twitter } from "lucide-react";
import { FaBehance } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center py-16 bg-[#fefff2] text-black">
      <ul className="flex gap-8">
        <li>
          <Link
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="w-6 h-6 hover:text-gray-600" />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-6 h-6 hover:text-gray-600" />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaBehance className="w-6 h-6 hover:text-gray-600" />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
