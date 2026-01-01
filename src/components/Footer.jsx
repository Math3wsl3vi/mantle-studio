import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const socialLinks = [
  { href: "https://medium.com", icon: <FaLinkedinIn /> },
  { href: "https://discord.com", icon: <FaGithub /> },
  { href: "https://twitter.com", icon: <FaInstagram /> },
  { href: "https://youtube.com", icon: <FaX /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#1d1d1f] py-4 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          Mantle Studio 2026. All rights reserved
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
