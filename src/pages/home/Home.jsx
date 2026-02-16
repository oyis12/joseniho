
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { usePlayerStore } from "../../store/usePlayerStore";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaEnvelope,
  FaGlobe,
  FaYoutube,
  FaHandshake
} from "react-icons/fa";
import {
  FiArrowRight,
} from "react-icons/fi";
import { 
  HiOutlineArrowLeft, 
  HiOutlineCalendar, 
  HiOutlineClock, 
  HiOutlineLocationMarker, 
  HiOutlineInformationCircle,
} from 'react-icons/hi';
import { SiTiktok } from "react-icons/si";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  LeftOutlined,
  RightOutlined,
  CalendarOutlined,
  MessageOutlined
} from "@ant-design/icons";

import sliderImg_1 from "../../../public/images/sliderImg_1.png";
import sliderImg_2 from "../../../public/images/sliderImg_2.png";
import sliderImg_3 from "../../../public/images/sliderImg_3.png";
import sliderImg_4 from "../../../public/images/sliderImg_4.png";

const heroSlides = [
  {
    image: "/images/teamplay-dark.jpeg",
    title: "Join Our Football League Today",
    subtitle: "Compete with the Best. Develop Your Skills.",
    cta: "Register Now",
  },
  {
    image: "/images/aboutImg1-dark.jpeg",
    title: "Train Like a Pro",
    subtitle: "Expert Coaches. Structured Development.",
    cta: "Learn More",
  },
  {
    image: "/images/hero-dark.jpeg",
    title: "Unleash Your Potential",
    subtitle: "Become a Confident, Disciplined Athlete.",
    cta: "Get Started",
  },
];

const slides = [
  {
    title: "Coaches",
    description: "Meet our qualified and passionate coaches dedicated to developing young talent on and off the pitch.",
    image: sliderImg_2,
  },
  {
    title: "Awards",
    description: "We Celebrate achievements, milestones, and outstanding performances across all teams.",
    image: sliderImg_1,
  },
  {
    title: "Our Teams",
    description: "Discover our age group teams, built to nurture skill, teamwork, and competitive excellence",
    image: sliderImg_4,
  },
  {
    title: "Rules",
    description: "We have clear guidelines that promote discipline, fairness, safety, and respect for everyone involved.",
    image: sliderImg_3,
  },
];

/* ================= ARROWS ================= */
const NextArrow = ({ onClick }) => (
  <div onClick={onClick} className="absolute right-2 md:-right-10 top-1/2 -translate-y-1/2 z-20 bg-[#1f2226] w-10 h-10 mr-10 flex items-center justify-center cursor-pointer hover:bg-[#1C1F42] transition text-white">
    <RightOutlined />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div onClick={onClick} className="absolute left-2 md:-left-10 top-1/2 -translate-y-1/2 z-20 bg-[#1f2226] w-10 h-10 ml-10 flex items-center justify-center cursor-pointer hover:bg-[#1C1F42] transition text-white">
    <LeftOutlined />
  </div>
);

const Home = () => {
  const [current, setCurrent] = useState(0);
  const { aboutText, news, fixtures } = usePlayerStore();
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const breakingNews = news.filter((p) => p.tag?.toLowerCase() === "breaking news");
  const featuredPosts = news.filter((p) => p.featured);
  const smallPosts = news.filter((p) => !p.featured);

  const iconVariants = {
    hover: { 
      scale: 1.2, 
      color: "#97991b",
      transition: { type: "spring", stiffness: 300 } 
    }
  };

    const desktopSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 },  },
      { breakpoint: 1024, settings: { slidesToShow: 2 }, },
      { breakpoint: 640, settings: { slidesToShow: 1, arrows: false, dots: true } },
    ],
  };

  const mobileSettings = {
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    swipeToSlide: true,
  };


  const textContainer = { show: { transition: { staggerChildren: 0.2, delayChildren: 0.4 } } };
  const textItem = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
  const sectionVariant = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };

  return (
    <div className="bg-white">
      <AnimatePresence mode="wait">
        {!selectedPost ? (
          <motion.div key="home-content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            
            {/* HERO SECTION */}
            <div className="-top-16 relative w-full overflow-hidden h-[89vh] sm:h-[85vh] md:h-[90vh] bg-black">
              <AnimatePresence>
                <motion.div key={current} className="absolute inset-0 w-full h-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.2, ease: "easeInOut" }}>
                  <div className="absolute inset-0 bg-cover bg-center scale-105" style={{ backgroundImage: `url(${heroSlides[current].image})` }} />
                  <div className="absolute inset-0 bg-black/55" />
                  <motion.div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 lg:px-32 text-white max-w-3xl" variants={textContainer} initial="hidden" animate="show">
                    <motion.h1 variants={textItem} className="text-3xl md:text-5xl font-bold mb-4">{heroSlides[current].title}</motion.h1>
                    <motion.p variants={textItem} className="text-lg md:text-2xl mb-6 text-slate-200">{heroSlides[current].subtitle}</motion.p>
                    <Link to="/contact" className="relative inline-flex items-center gap-4 border border-[#97991b] text-[#97991b] px-6 py-1 text-sm font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_8px_25px_rgba(151,153,27,0.35)] hover:-translate-y-0.5 group w-fit cursor-pointer">
                      <span className="absolute inset-0 bg-[#97991b] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                      <span className="relative z-10 transition-colors duration-300 group-hover:text-white">{heroSlides[current].cta}</span>
                      <span className="relative z-10 w-8 h-8 bg-[#97991b] text-white rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:text-[#97991b] group-hover:translate-x-1">→</span>
                    </Link>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* INDICATOR DOTS */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-md px-6 z-20">
                <div className="flex justify-between items-center text-white text-sm mb-3">
                  <span className="font-semibold">{String(current + 1).padStart(2, "0")}</span>
                  <span className="opacity-60">{String(heroSlides.length).padStart(2, "0")}</span>
                </div>
                <div className="flex gap-3">
                  {heroSlides.map((_, i) => (
                    <div key={i} onClick={() => setCurrent(i)} className={`flex-1 cursor-pointer transition-all duration-500 ${current === i ? "h-1 bg-orange-500" : "h-0.5 bg-white/40 hover:bg-white/70"}`} />
                  ))}
                </div>
              </div>
            </div>

            {/* BREAKING NEWS TICKER - INTEGRATED FROM OLD CODE */}
            {breakingNews.length > 0 && (
              <div 
                className="sticky top-0 z-50 bg-[#97991b] h-18 flex items-center overflow-hidden border-b-4 border-orange-500 shadow-2xl"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="bg-black text-white px-8 h-full flex items-center font-black italic tracking-tighter z-10 shadow-[5px_0_15px_rgba(0,0,0,0.5)]">
                  BREAKING NEWS
                </div>
                <div className="flex-1 overflow-hidden flex items-center">
                  <motion.div 
                    className="flex whitespace-nowrap gap-32 items-center"
                    animate={isPaused ? { x: undefined } : { x: ["100%", "-100%"] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                  >
                    {breakingNews.map((news) => (
                      <div key={news.id} className="flex items-center gap-6 text-white font-bold uppercase text-sm tracking-wide">
                        <span className="text-yellow-400">●</span>
                        <span>{news.title}</span>
                        <button 
                          onClick={() => setSelectedPost(news)}
                          className="bg-white text-[#97991b] cursor-pointer px-4 py-2 rounded-full text-xs font-black uppercase hover:bg-[#97991b] hover:border-orange-500 border-2 hover:text-white transition"
                        >
                          READ MORE
                        </button>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            )}

            {/* FEATURED TEAMS SECTION */}

      <motion.section
        variants={sectionVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-16"
      >
        {/* LEFT: FIXTURES */}
        <div className="lg:col-span-3">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold uppercase text-[#1C1F42]">
              Featured Teams
            </h2>

            <Link
              to="/"
              className="
              relative inline-flex items-center gap-4
              border border-[#97991b]
              text-[#97991b]
              px-6 py-1 text-sm font-semibold
              rounded-full
              overflow-hidden
              transition-all duration-300
              hover:shadow-[0_8px_25px_rgba(151,153,27,0.35)]
              hover:-translate-y-0.5
              group
            "
            >
              {/* BACKGROUND FILL ANIMATION */}
              <span
                className="
                  absolute inset-0
                  bg-[#97991b]
                  -translate-x-full
                  group-hover:translate-x-0
                  transition-transform duration-300 ease-out
                "
              />

              {/* TEXT */}
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                All Teams
              </span>

              {/* ARROW */}
              <span
                className="
                    relative z-10
                    w-8 h-8
                    bg-[#97991b]
                    text-white
                    rounded-full
                    flex items-center justify-center
                    transition-all duration-300
                    group-hover:bg-white
                    group-hover:text-[#97991b]
                    group-hover:translate-x-1
                  "
              >
                →
              </span>
            </Link>
          </div>

          <div className="max-w-7xl mx-auto px-6 py-12">
            <AnimatePresence mode="wait">
              {!selectedTeam ? (
                /* ================= FIXTURES LIST ================= */
                <motion.div
                  key="fixtures"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  {fixtures.map((match) => (
                    <div
                      key={match.id}
                      className="group relative h-72 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white p-6"
                    >
                      <div className="flex items-center justify-between h-full">
                        {/* HOME TEAM */}
                        <motion.div
                          layoutId={`team-card-${match.home.id}`}
                          className="flex flex-col items-center gap-4 w-1/3 cursor-pointer"
                          onClick={() => setSelectedTeam(match.home)}
                        >
                          <motion.img
                            layoutId={`team-img-${match.home.id}`}
                            src={match.home.logo}
                            alt={match.home.name}
                            className="h-24 w-24 object-contain"
                          />
                          <span className="text-sm font-semibold text-center">
                            {match.home.name}
                          </span>
                         <button
                            onClick={() => setSelectedTeam(match.home)}
                            className="relative inline-flex items-center gap-3 border border-[#97991b] text-[#97991b] px-4 py-1 text-xs font-bold rounded-full overflow-hidden transition-all duration-300"
                         >
                            <span className="absolute inset-0 bg-[#97991b] -translate-x-full  transition-transform duration-300 ease-out" />
                            <span className="relative z-10 transition-colors duration-300  cursor-pointer">
                                Learn more
                            </span>
                             <span className="relative z-10 w-6 h-6 bg-[#97991b] text-white rounded-full flex items-center justify-center">
                             <FiArrowRight size={12} />
                             </span>
                          </button>
                        </motion.div>

                        {/* VS TEXT */}
                        {/* <div className="text-xl font-black text-gray-400">
                          VS
                        </div> */}

                        {/* AWAY TEAM */}
                        <motion.div
                          layoutId={`team-card-${match.away.id}`}
                          className="flex flex-col items-center gap-4 w-1/3 cursor-pointer"
                          onClick={() => setSelectedTeam(match.away)}
                        >
                          <motion.img
                            layoutId={`team-img-${match.away.id}`}
                            src={match.away.logo}
                            alt={match.away.name}
                            className="h-24 w-24 object-contain"
                          />
                          <span className="text-sm font-semibold text-center">
                            {match.away.name}
                          </span>
                         <button
                            onClick={() => setSelectedTeam(match.away)}
                            className="relative inline-flex items-center gap-3 border border-[#97991b] text-[#97991b] px-4 py-1 text-xs font-bold rounded-full overflow-hidden transition-all duration-300"
                         >
                            <span className="absolute inset-0 bg-[#97991b] -translate-x-full transition-transform duration-300 ease-out" />
                            <span className="relative z-10 transition-colors  cursor-pointer">
                                Learn more
                            </span>
                             <span className="relative z-10 w-6 h-6 bg-[#97991b] text-white rounded-full flex items-center justify-center">
                             <FiArrowRight size={12} />
                             </span>
                          </button>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              ) : (
                /* ================= TEAM DETAILS VIEW ================= */
                <motion.div
                  key="team-details"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 40 }}
                  className="py-10"
                >
                  {/* BACK BUTTON */}
                  <button
                    onClick={() => setSelectedTeam(null)}
                    className="mb-10 text-sm font-bold uppercase hover:text-blue-600 transition"
                  >
                    ← Back to Fixtures
                  </button>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* LOGO */}
                    <div className="lg:col-span-4">
                      <motion.img
                        layoutId={`team-img-${selectedTeam.id}`}
                        src={selectedTeam.logo}
                        alt={selectedTeam.name}
                        className="w-full max-h-100 object-contain"
                      />
                    </div>

                    {/* DETAILS */}
                    <div className="lg:col-span-8">
                      <h2 className="text-5xl font-black uppercase mb-8">
                        {selectedTeam.name}
                      </h2>

                      {/* Core info grid */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                        {selectedTeam.founded && (
                          <div>
                            <p className="text-xs text-gray-400 uppercase mb-1">
                              Founded
                            </p>
                            <p className="font-bold text-lg">
                              {selectedTeam.founded}
                            </p>
                          </div>
                        )}
                        {selectedTeam.stadium && (
                          <div>
                            <p className="text-xs text-gray-400 uppercase mb-1">
                              Stadium
                            </p>
                            <p className="font-bold text-lg">
                              {selectedTeam.stadium}
                            </p>
                          </div>
                        )}
                        {selectedTeam.coach && (
                          <div>
                            <p className="text-xs text-gray-400 uppercase mb-1">
                              Coach
                            </p>
                            <p className="font-bold text-lg">
                              {selectedTeam.coach}
                            </p>
                          </div>
                        )}
                        {selectedTeam.league && (
                          <div>
                            <p className="text-xs text-gray-400 uppercase mb-1">
                              League
                            </p>
                            <p className="font-bold text-lg">
                              {selectedTeam.league}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* About Section */}
                      {selectedTeam.about && (
                        <div className="mb-4">
                          <h3 className="text-2xl font-black mb-2">About</h3>
                          <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                            {selectedTeam.about}
                          </p>
                        </div>
                      )}

                      {/* Mission Section */}
                      {selectedTeam.mission && (
                        <div className="mt-4">
                          <h3 className="text-2xl font-black mb-2">Mission</h3>
                          <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                            {selectedTeam.mission}
                          </p>
                        </div>
                      )}

                      {/* Social Icons */}
                      {selectedTeam.social && (
                        <div className="mt-6">
                          <h3 className="text-2xl font-black mb-4">
                            Connect with Us
                          </h3>

                          <motion.div
                            className="flex gap-6"
                            initial="hidden"
                            animate="visible"
                            variants={{
                              visible: {
                                transition: { staggerChildren: 0.15 },
                              },
                            }}
                          >
                            {Object.entries(selectedTeam.social).map(
                              ([key, value]) => {
                                if (!value) return null;

                                let IconComponent;
                                let color = "text-gray-800";

                                switch (key.toLowerCase()) {
                                  case "instagram":
                                    IconComponent = FaInstagram;
                                    color = "text-pink-500";
                                    break;
                                  case "twitter":
                                    IconComponent = FaTwitter;
                                    color = "text-blue-400";
                                    break;
                                  case "facebook":
                                    IconComponent = FaFacebookF;
                                    color = "text-blue-700";
                                    break;
                                  case "email":
                                    IconComponent = FaEnvelope;
                                    color = "text-gray-800";
                                    break;
                                  case "website":
                                    IconComponent = FaGlobe;
                                    color = "text-green-600";
                                    break;
                                  case "tiktok":
                                    IconComponent = SiTiktok;
                                    color = "text-black";
                                    break;
                                  case "youtube":
                                    IconComponent = FaYoutube;
                                    color = "text-red-600";
                                    break;
                                  default:
                                    return null;
                                }

                                // Determine href
                                let href = "#";
                                if (key === "email") href = `mailto:${value}`;
                                else if (key === "website")
                                  href = `https://${value}`;
                                else if (key === "tiktok")
                                  href = `https://www.tiktok.com/@${value}`;
                                else if (key === "youtube")
                                  href = `https://www.youtube.com/${value}`;
                                else
                                  href = `https://${key}.com/${value.replace("@", "")}`;

                                return (
                                  <motion.a
                                    key={key}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variants={{
                                      hidden: { opacity: 0, y: 20 },
                                      visible: { opacity: 1, y: 0 },
                                    }}
                                    whileHover={{ scale: 1.3, rotate: 10 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`${color} text-2xl`}
                                  >
                                    <IconComponent />
                                  </motion.a>
                                );
                              },
                            )}
                          </motion.div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.section>


   {/* ABOUT US SECTION */}
      <section className="relative h-120 w-full overflow-hidden mb-5">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/images/about-bg.jpg')] bg-cover bg-right" />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-[#020617]/90 via-[#020617]/70 to-transparent" />

        {/* Content Wrapper */}
        <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full items-center">
            {/* LEFT CONTENT */}
            <div className="text-white max-w-xl">
              <h2 className=" text-3xl md:text-4xl lg:text-3xl uppercase tracking-wide mb-3 opacity-90">
                About Us
              </h2>

              {/* <h2 className="text-3xl md:text-4xl lg:text-3xl font-bold mb-6 leading-tight">
                About JOSENIHO Kids Football League
              </h2> */}

              <p className="text-gray-300 leading-relaxed mb-8">
                {aboutText.length > 300
                  ? aboutText.slice(0, 300) + "....."
                  : aboutText}
              </p>

              <Link
                to="/about"
                className="
    relative inline-flex items-center gap-4
    border border-[#97991b]
    text-[#97991b]
    px-6 py-1 text-sm font-semibold
    rounded-full
    overflow-hidden
    transition-all duration-300
    hover:shadow-[0_8px_25px_rgba(151,153,27,0.35)]
    hover:-translate-y-0.5
    group
  "
              >
                {/* BACKGROUND FILL ANIMATION */}
                <span
                  className="
      absolute inset-0
      bg-[#97991b]
      -translate-x-full
      group-hover:translate-x-0
      transition-transform duration-300 ease-out
    "
                />

                {/* TEXT */}
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  Learn More
                </span>

                {/* ARROW */}
                <span
                  className="
      relative z-10
      w-8 h-8
      bg-[#97991b]
      text-white
      rounded-full
      flex items-center justify-center
      transition-all duration-300
      group-hover:bg-white
      group-hover:text-[#97991b]
      group-hover:translate-x-1
    "
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

   <div>
          {/* ================= DESKTOP SLIDER ================= */}
        <div className="hidden md:flex bg-[#1C1F42] h-120 items-center justify-center text-white py-12 overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-6 w-full">
            <Slider {...desktopSettings}>
              {slides.map((slide, index) => (
                <div key={index} className="px-3">
                  <div className="flex flex-col items-center text-center p-6">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="h-28 w-auto object-contain mb-4"
                    />

                    <h3 className="text-lg font-bold">{slide.title}</h3>
                    <p className="text-sm text-gray-400 max-w-xs">
                      {slide.description}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
          {/* ================= MOBILE SLIDER ================= */}
        <div className="md:hidden bg-[#1C1F42] text-white py-12 overflow-hidden">
          <div className="px-4">
            <Slider {...mobileSettings}>
              {slides.map((slide, index) => (
                <div key={index} className="px-2">
                  <div className="flex flex-col items-center text-center p-6">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="h-20 w-auto object-contain mb-4"
                    />

                    <h3 className="text-base font-semibold">{slide.title}</h3>

                    <p className="text-xs text-gray-400 mt-2 max-w-xs">
                      {slide.description}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
       <div>
          <div
            className='
            bg-[url("/images/bg_bannerArea.jpg")]
            py-16 md:py-20
            bg-fixed bg-cover bg-center
            flex justify-center items-center
            text-center flex-col text-white
            px-6 sm:px-10 md:px-20
          '
          >
            <div className="max-w-4xl mx-auto">
              <p className="text-2xl sm:text-3xl md:text-4xl">
                Looking for a good team?{" "}
                <span className="block font-bold uppercase text-4xl sm:text-5xl md:text-7xl mt-2">
                  Join Our League!
                </span>
              </p>

              <p className="mt-4 text-xs sm:text-sm md:text-base text-gray-200">
                We are building a community of dedicated teams committed to
                growth, discipline, and excellence. With a well organised
                fixtures, qualified officials, and a focus on development and
                fair play, this is the perfect platform to showcase your skills
                and be a part of an exciting football experience.
              </p>
            </div>
          </div>
        </div>

        {/* PARTNERS SECTION WHICH SHOULD BE A VERY BEAUTIFUL SLIDER SHOWCASING OUR PARTNERS (LOGOS + SHORT DESCRIPTION) */}
  
{/* PARTNERS SECTION */}
        <section className="py-12 bg-slate-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-8">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-[#97991b] font-black uppercase tracking-widest text-xs"
              >
                Our Network
              </motion.span>
              <h2 className="text-2xl md:text-3xl font-black text-[#1C1F42] uppercase mt-1">
                Official Partners
              </h2>
              <div className="w-16 h-1 bg-[#97991b] mx-auto mt-3 rounded-full" />
            </div>

            <Slider 
              {...{
                dots: false,
                infinite: true,
                speed: 4000,
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 0,
                cssEase: "linear",
                pauseOnHover: true,
                arrows: false,
                responsive: [
                  { breakpoint: 1024, settings: { slidesToShow: 3 } },
                  { breakpoint: 768, settings: { slidesToShow: 2 } },
                  { breakpoint: 480, settings: { slidesToShow: 1 } },
                ],
              }}
            >
              {[
                { name: "TANTITA Security Service Limited", desc: "Official Partner", logo: "/images/partner.jpeg" },
                // { name: "Gatorade", desc: "Hydration Partner", logo: "/images/partner.jpeg" },
                // { name: "Grassroot Soccer", desc: "Youth Development", logo: "/images/partner.jpeg" },
                // { name: "Global Health", desc: "Medical Support", logo: "/images/partner.jpeg" },
                // { name: "TechBall", desc: "Data & Analytics", logo: "/images/partner.jpeg" },
              ].map((partner, index) => (
                <div key={index} className="px-3">
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm transition-all duration-300 flex flex-col items-center text-center group"
                  >
                    {/* Removed grayscale, set opacity high (80%) to keep it clean but vibrant */}
                    <div className="h-16 w-full flex items-center justify-center mb-4 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="max-h-full max-w-[120px] object-contain"
                        onError={(e) => { e.target.src = "https://via.placeholder.com/150?text=Logo" }}
                      />
                    </div>
                    
                    {/* Title - ensures original color and no wrap */}
                    <h4 className="text-sm font-bold text-[#1C1F42] mb-0.5 truncate w-full px-1">
                      {partner.name}
                    </h4>
                    
                    {/* Description - tight tracking and ellipsis to prevent box breaking */}
                    <p className="text-[10px] text-[#97991b] font-medium uppercase tracking-tighter whitespace-nowrap overflow-hidden text-ellipsis w-full">
                      {partner.desc}
                    </p>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </div>
        </section>


      <section className="py-16 bg-white max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold  uppercase text-[#1C1F42]">
              News & Media Gallery
            </h2>

            <Link
              to="/blog"
              className="
                relative inline-flex items-center gap-4
                border border-[#97991b]
                text-[#97991b]
                px-6 py-1 text-sm font-semibold
                rounded-full
                overflow-hidden
                transition-all duration-300
                hover:shadow-[0_8px_25px_rgba(151,153,27,0.35)]
                hover:-translate-y-0.5
                group
              "
            >
              {/* BACKGROUND FILL ANIMATION */}
              <span
                className="
                  absolute inset-0
                  bg-[#97991b]
                  -translate-x-full
                  group-hover:translate-x-0
                  transition-transform duration-300 ease-out
                "
              />

              {/* TEXT */}
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                View All
              </span>

              {/* ARROW */}
              <span
                className="
                  relative z-10
                  w-8 h-8
                  bg-[#97991b]
                  text-white
                  rounded-full
                  flex items-center justify-center
                  transition-all duration-300
                  group-hover:bg-white
                  group-hover:text-[#97991b]
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <React.Fragment key={post.id}>
                {/* BIG LEFT */}
                <div className="md:col-span-2 bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col md:flex-row h-[300px]">
                  <div className="md:w-1/1 overflow-hidden ">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-80 w-full object-cover hover:scale-105 transition duration-500"
                    />
                  </div>

                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-3">{post.title}</h3>

                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <span className="flex items-center gap-1">
                          <CalendarOutlined className="text-red-500" />
                          {post.date}
                        </span>
                        {/* <span className="flex items-center gap-1">
                          <MessageOutlined className="text-red-500" />
                          {post.comments} Comments
                        </span> */}
                      </div>

                      <p className="text-gray-600 text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    <Link
                      to="/blog"
                      className="mt-6 w-10 h-10 bg-[#97991b]! text-white flex items-center justify-center rounded hover:bg-red-700 transition"
                    >
                      ↗
                    </Link>
                  </div>
                </div>

                {/* SMALL RIGHT (MATCHING INDEX) */}
                {smallPosts[index] && (
                  <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
                    <div className="overflow-hidden">
                      <img
                        src={smallPosts[index].image}
                        alt={smallPosts[index].title}
                        className="h-48 w-full object-cover hover:scale-105 transition duration-500"
                      />
                    </div>

                    <div className="p-5">
                      <h4 className="font-semibold mb-2 text-gray-900">
                        {smallPosts[index].title}
                      </h4>

                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <CalendarOutlined className="text-red-500" />
                          {smallPosts[index].date}
                        </span>
                        {/* <span className="flex items-center gap-1">
                          <MessageOutlined className="text-red-500" />
                          {smallPosts[index].comments} Comments
                        </span> */}
                      </div>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </section>

   </div>

          </motion.div>
        ) : (

    <motion.div 
      key="news-detail" 
      className="min-h-screen bg-slate-50 py-12 md:py-20" 
      initial={{ opacity: 0, x: 100 }} 
      animate={{ opacity: 1, x: 0 }} 
      exit={{ opacity: 0, x: -100 }}
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Back Button */}
        <button 
          className="mb-8 flex items-center gap-2 font-bold text-[#1C1F42] hover:text-[#97991b] transition-colors group"
        >
        </button>
      <button
          onClick={() => setSelectedPost(null)}
          className="flex items-center cursor-pointer gap-2 font-black uppercase text-xs text-[#1C1F42] hover:text-[#97991b] mb-8 transition-colors" >
          <HiOutlineArrowLeft /> Back to Feed
       </button>
                       

        {/* Main Content Container (Shadow removed per request) */}
        <div className="bg-white rounded-3xl overflow-hidden border border-slate-200">
          
          <div className="p-8 md:p-16">
            {/* Header Area */}
            <div className="mb-8">
              <span className="bg-red-700 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block">
                {selectedPost.tag}
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-[#1C1F42] leading-tight">
                {selectedPost.title}
              </h1>
            </div>

            {/* Editorial Content: Image floating inside text */}
            <div className="block">
              {/* The Image Float Box */}
              <div className="float-left mr-8 mb-6 w-full md:w-1/2">
                <div className="rounded-2xl overflow-hidden border border-slate-100">
                   <img 
                    src={selectedPost.image} 
                    className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700" 
                    alt={selectedPost.title} 
                  />
                </div>
                <p className="mt-2 text-xs text-gray-400 italic">Featured Image: {selectedPost.title}</p>
              </div>

              <div className="text-lg text-gray-600 leading-relaxed whitespace-pre-line prose prose-slate">
                {selectedPost.content || selectedPost.excerpt}

                {selectedPost.links && (
                  <div className="mt-6">
                    <a
                      href={selectedPost.links}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 font-semibold hover:underline"
                    >
                      ▶ Watch the official kickoff match
                    </a>
                  </div>
                )}
            </div>
                          
              {/* Clearfix to ensure the bottom section stays below the floated image */}
              <div className="clear-both"></div>
            </div>
          </div>

          {/* Bottom Section: Opening Ceremony Details */}
          <div className="bg-slate-50 p-8 md:p-12 border-t border-slate-200">
            <div className="flex items-center gap-3 mb-10">
              <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-sm">
                <HiOutlineInformationCircle className="text-2xl text-[#1C1F42]" />
              </div>
              <h3 className="text-xl font-bold text-[#1C1F42] uppercase tracking-widest">
                Opening Ceremony Details
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
              {/* Date Item */}
              <motion.div whileHover="hover" className="flex items-center gap-5 cursor-default group">
                <motion.div variants={iconVariants} className="text-4xl text-slate-300">
                  <HiOutlineCalendar />
                </motion.div>
                <div>
                  <p className="text-[10px] font-black uppercase text-[#97991b] mb-1 tracking-widest">Event Date</p>
                  <p className="text-lg font-bold text-[#1C1F42]">{selectedPost.date || 'TBA'}</p>
                </div>
              </motion.div>

              {/* Time Item */}
              <motion.div whileHover="hover" className="flex items-center gap-5 cursor-default group">
                <motion.div variants={iconVariants} className="text-4xl text-slate-300">
                  <HiOutlineClock />
                </motion.div>
                <div>
                  <p className="text-[10px] font-black uppercase text-[#97991b] mb-1 tracking-widest">Start Time</p>
                  <p className="text-lg font-bold text-[#1C1F42]">{selectedPost.time || '2:00 PM'}</p>
                </div>
              </motion.div>

              {/* Venue Item */}
              <motion.div whileHover="hover" className="flex items-center gap-5 cursor-default group">
                <motion.div variants={iconVariants} className="text-4xl text-slate-300">
                  <HiOutlineLocationMarker />
                </motion.div>
                <div>
                  <p className="text-[10px] font-black uppercase text-[#97991b] mb-1 tracking-widest">Location</p>
                  <p className="text-sm font-bold text-[#1C1F42]">{selectedPost.venue || 'ACE football pitch,Gwarimpa, 3rd Avenue Abuja'}</p>
                </div>
              </motion.div>

            {/* Partner Logo */}
              <motion.div whileHover="hover" className="flex items-center gap-5 cursor-default group">
                <motion.div variants={iconVariants} className="text-4xl text-slate-300">
                  <FaHandshake />
                </motion.div>
                <div>
                   <div className="h-16 w-full items-center justify-center mb-4">
                    <p className="text-[10px] font-black uppercase text-[#97991b] mb-2 tracking-widest">Partner</p>
                      <img 
                        src="/images/partner.jpeg"
                        className="max-h-full max-w-[120px] object-contain"
                        onError={(e) => { e.target.src = "https://via.placeholder.com/150?text=Logo" }}
                      />
                    </div>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </motion.div>

        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;