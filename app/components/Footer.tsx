import Link from "next/link";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import { FaBehance } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center py-16 bg-[#fbf3ea] text-[#434850]">
      <ul className="flex gap-8">
        <li>
          <Link
            href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAADlcIygBrdWkIsvRXQGou6FzSkvzl8IeqAU&keywords=memansa%20bajpai&origin=RICH_QUERY_SUGGESTION&position=0&searchId=b378c14d-5308-4a28-bb01-ca43e38d52df&sid=0mU&spellCorrectionEnabled=false"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-6 h-6 hover:text-gray-600" />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.instagram.com/memansabajpai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-6 h-6 hover:text-gray-600" />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.behance.net/memansabajpai"
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
