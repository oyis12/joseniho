import { useState, useEffect } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaTimes,
  FaCommentDots,
  FaSnapchatGhost,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

const SocialMediaFloatingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const socialLinks = [
    // {
    //   name: "Facebook",
    //   icon: <FaFacebook size={22} />,
    //   url: "http://fb.com/veekitesglobal",
    //   bg: "bg-blue-600 hover:bg-blue-700",
    // },
    {
      name: "Instagram",
      icon: <FaInstagram size={22} />,
      url: "https://www.instagram.com/joseniho_football_league?igsh=MTB2cW5tZW15bXVlMQ%3D%3D&utm_source=qr",
      bg: "bg-pink-500 hover:bg-pink-600",
    },
    // {
    //   name: "LinkedIn",
    //   icon: <FaLinkedin size={22} />,
    //   url: "https://www.linkedin.com/company/veekitesglobal/",
    //   bg: "bg-blue-700 hover:bg-blue-800",
    // },
    // {
    //   name: "TikTok",
    //   icon: <SiTiktok size={22} />,
    //   url: "https://vm.tiktok.com/ZMSwFQtUQ/",
    //   bg: "bg-black hover:bg-gray-800",
    // },
  ];

  return (
    <div
      className="fixed right-6 top-[60%] -translate-y-1/2 z-50 flex flex-col items-center space-y-3"
      onMouseEnter={() => !isMobile && setIsOpen(true)}
      onMouseLeave={() => !isMobile && setIsOpen(false)}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="flex flex-col items-center space-y-3 mb-3"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {socialLinks.map((link, idx) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${link.bg} text-white rounded-full p-3 shadow-lg cursor-pointer`}
                title={link.name}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    delay: idx * 0.05,
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  },
                }}
                exit={{
                  opacity: 0,
                  y: 20,
                  scale: 0.8,
                  transition: { duration: 0.15 },
                }}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-gray-800 text-white rounded-full p-4 shadow-lg hover:bg-gray-700 cursor-pointer flex items-center justify-center"
        title="Social Media Links"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {isOpen ? <FaTimes size={24} /> : <FaCommentDots size={24} />}
      </motion.button>
    </div>
  );
};

export default SocialMediaFloatingMenu;
