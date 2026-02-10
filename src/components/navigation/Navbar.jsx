import React, { useState, useEffect } from "react";
import {
  SunOutlined,
  MoonOutlined,
  DownOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import { motion, AnimatePresence } from "framer-motion";
import { Spin as Hamburger } from "hamburger-react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  /* ================= HELPERS ================= */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") !== "light",
  );
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => {
      const next = !prev;
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "The League", path: "/about" },
    {
      label: "Team",
      path: "/team",
      children: [
        { label: "Coaches", path: "/team/coaches" },
        { label: "Players", path: "/team/players" },
        { label: "Media", path: "/team/media" },
      ],
    },
    { label: "Programs", path: "/program" },
    // { label: "Match Schedule", path: "/schedule" },
    {
      label: "More",
      isMore: true,
      children: [
        { label: "Blog", path: "/blog" },
        { label: "Contacts", path: "/contact" },
      ],
    },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        // Removed pt-4 here to ensure it always touches the top
        className="fixed top-0 left-0 right-0 z-100 flex justify-center pointer-events-none"
      >
        <motion.nav
          animate={{
            width: scrolled ? "100%" : "80%",
            // borderRadius: scrolled ? "0px" : "0px 0px 12px 12px", // Only round bottom corners
            height: scrolled ? "75px" : "68px",
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="bg-white shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex items-center justify-between px-6  overflow-visible pointer-events-auto"
        >
          {/* LOGO */}
        {/* LOGO */}
<div
  onClick={() => navigate("/")}
  className="relative flex items-center shrink-0 cursor-pointer"
>
  <motion.div
    animate={{
      y: scrolled ? 0 : 8, // pushes logo slightly outside nav when top
    }}
    transition={{ duration: 0.4 }}
    className="relative"
  >
    <motion.img
      src="/images/logo2.png"
      alt="clublogo"
      animate={{
        height: scrolled ? 70 : 120, // 👈 BIG when top, smaller when scroll
      }}
      transition={{ duration: 0.4 }}
      className="w-auto object-contain drop-shadow-xl"
    />
  </motion.div>
</div>


          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-1 lg:gap-4 cursor-pointer">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative group cursor-pointer"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => !item.children && navigate(item.path)}
                  className={`flex items-center gap-1.5 px-3 py-2 text-[13px] font-bold uppercase tracking-wider cursor-pointer transition-colors hover:text-[#e2e619] ${
                    location.pathname === item.path
                      ? "text-yellow-500"
                      : "text-black"
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <DownOutlined
                      className={`text-[10px] transition-transform duration-300 ${activeDropdown === item.label ? "rotate-180" : ""}`}
                    />
                  )}
                  {item.isMore && <EllipsisOutlined className="text-lg" />}
                </button>

                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-0 w-48 bg-white border border-white/10 rounded-b-lg shadow-2xl py-2 backdrop-blur-xl cursor-pointer"
                    >
                      {item.children.map((child) => (
                        <div
                          key={child.path}
                          onClick={() => {
                            navigate(child.path);
                            setActiveDropdown(null);
                          }}
                          className="px-4 py-2.5 text-[12px] text-black uppercase font-bold hover:bg-[#e2e619] hover:text-white cursor-pointer! transition-all"
                        >
                          {child.label}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-full hover:bg-white/5 text-black transition-colors cursor-pointer"
            >
              {darkMode ? <SunOutlined /> : <MoonOutlined />}
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="md:hidden flex items-center gap-2 cursor-pointer">
            <button onClick={toggleTheme} className="p-2 text-black">
              {darkMode ? <SunOutlined /> : <MoonOutlined />}
            </button>
            <Hamburger
              toggled={isOpen}
              toggle={setIsOpen}
              size={20}
              color="black"
            />
          </div>
        </motion.nav>
      </motion.header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 26, stiffness: 220 }}
            className="fixed inset-0 z-90 bg-white pt-24 px-6 flex flex-col gap-5 overflow-y-auto"
          >
            {menuItems.map((item) => (
              <div key={item.label} className="border-b border-white/10 pb-3">
                {/* MAIN ITEM */}
                <button
                  className={`w-full flex items-center justify-between 
              text-[14px] font-semibold uppercase tracking-wider
              transition-colors
              ${
                location.pathname === item.path
                  ? "text-[#e2e619]"
                  : "text-black"
              }`}
                  onClick={() => {
                    if (!item.children) {
                      navigate(item.path);
                      setIsOpen(false);
                    } else {
                      setActiveDropdown(
                        activeDropdown === item.label ? null : item.label,
                      );
                    }
                  }}
                >
                  {item.label}
                  {item.children && (
                    <DownOutlined
                      className={`text-[11px] transition-transform duration-300 ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {/* SUB MENU */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="mt-3 ml-3 flex flex-col gap-2"
                    >
                      {item.children.map((child) => (
                        <span
                          key={child.path}
                          onClick={() => {
                            navigate(child.path);
                            setIsOpen(false);
                          }}
                          className="text-[13px] font-medium uppercase tracking-wide
                               text-black hover:text-[#e2e619]
                               transition-colors cursor-pointer"
                        >
                          {child.label}
                        </span>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
