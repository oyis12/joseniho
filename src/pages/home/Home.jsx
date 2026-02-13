import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Table } from "antd";
import { usePlayerStore } from "../../store/usePlayerStore";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaEnvelope,
  FaGlobe,
  FaYoutube 
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Row, Col, Typography, Divider, Button } from "antd";
import {
  LeftOutlined,
  RightOutlined,
  CalendarOutlined,
  MessageOutlined,
} from "@ant-design/icons";

import sliderImg_1 from "../../../public/images/sliderImg_1.png";
import sliderImg_2 from "../../../public/images/sliderImg_2.png";
import sliderImg_3 from "../../../public/images/sliderImg_3.png";
import sliderImg_4 from "../../../public/images/sliderImg_4.png";

import small_img_1 from "../../../public/images/small_img_1.jpg";
import small_img_2 from "../../../public/images/small_img_2.jpg";
import small_img_3 from "../../../public/images/small_img_3.jpg";
import small_img_4 from "../../../public/images/small_img_4.jpg";
import { usePlayerStore } from "../../store/usePlayerStore";

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

//const { Title, Text, Link } = Typography;

/* ================= ARROWS (FIXED) ================= */
const NextArrow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="
        absolute right-2 md:-right-10
        top-1/2 -translate-y-1/2
        z-20 bg-[#1f2226]
        w-10 h-10 mr-10
        flex items-center justify-center
        cursor-pointer hover:bg-[#1C1F42]! transition

      "
    >
      <RightOutlined />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="
        absolute left-2 md:-left-10
        top-1/2 -translate-y-1/2
        z-20 bg-[#1f2226]
        w-10 h-10 ml-10
        flex items-center justify-center
        cursor-pointer hover:bg-[#1C1F42]! transition
      "
    >
      <LeftOutlined />
    </div>
  );
};
/* ================================================ */

const Home = () => {
  const [current, setCurrent] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);
  const { aboutText } = usePlayerStore();
  const [selectedTeam, setSelectedTeam] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const posts = [
    {
      id: 1,
      title: "Great memories...",
      image: "/images/award_press.jpeg",
      date: "27 June, 2020",
      comments: 89,
      excerpt:
        "Great memories are created not only on the pitch but through the smiles, cheers, and shared energy of everyone present. The finale came alive through the spirit of the community that filled the stands.",
      featured: true,
    },
    {
      id: 2,
      title: "The true magic of the finale...",
      image: "/images/coach1.jpeg",
      date: "27 June, 2020",
      comments: 89,
      excerpt:
        "The true magic of the finale extended beyond the game itself — captured in every smile, every cheer, and every moment shared among supporters and guests.",
      featured: true,
    },
    {
      id: 3,
      title: "The finale was more than a game...",
      image: "/images/inmatch_g.jpeg",
      date: "27 June, 2020",
      comments: 89,
    },
    {
      id: 4,
      title: "The most lasting memories are built together...",
      image: "/images/YFA_team.jpeg",
      date: "27 June, 2020",
      comments: 89,
    },
  ];

  const featuredPosts = posts.filter((p) => p.featured);
  const smallPosts = posts.filter((p) => !p.featured);

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
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
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

  const slides = [
    {
      title: "Coaches",
      description:
        "Meet our qualified and passionate coaches dedicated to developing young talent on and off the pitch.",
      image: sliderImg_2,
    },
    {
      title: "Awards",
      description:
        "We Celebrate achievements, milestones, and outstanding performances across all teams.",
      image: sliderImg_1,
    },
    {
      title: "Our Teams",
      description:
        "Discover our age group teams, built to nurture skill, teamwork, and competitive excellence",
      image: sliderImg_4,
    },
    {
      title: "Rules",
      description:
        "We have clear guidelines that promote discipline, fairness, safety, and respect for everyone involved.",
      image: sliderImg_3,
    },
  ];

  const textContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    },
  };

  const textItem = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const sectionVariant = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const { fixtures } = usePlayerStore();

  return (
    <div>
      <div className="-top-16 relative w-full overflow-hidden h-[90vh] sm:h-[85vh] md:h-[90vh] bg-black">
        <AnimatePresence>
          <motion.div
            key={current}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{ zIndex: 1 }}
          >
            {/* BACKGROUND IMAGE */}
            <div
              className="absolute inset-0 bg-cover bg-center scale-105"
              style={{
                backgroundImage: `url(${heroSlides[current].image})`,
              }}
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/55" />

            {/* CONTENT */}
            <motion.div
              className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 lg:px-32 text-white max-w-3xl"
              variants={textContainer}
              initial="hidden"
              animate="show"
            >
              <motion.h1
                variants={textItem}
                className="text-3xl md:text-5xl font-bold mb-4"
              >
                {heroSlides[current].title}
              </motion.h1>

              <motion.p
                variants={textItem}
                className="text-lg md:text-2xl mb-6 text-slate-200"
              >
                {heroSlides[current].subtitle}
              </motion.p>

              <Link
                to="/contact"
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
    group w-fit curosor-pointer
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
                  {heroSlides[current].cta}
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
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* INDICATOR */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-md px-6 z-20">
          <div className="flex justify-between items-center text-white text-sm mb-3">
            <span className="font-semibold">
              {String(current + 1).padStart(2, "0")}
            </span>
            <span className="opacity-60">
              {String(heroSlides.length).padStart(2, "0")}
            </span>
          </div>

          <div className="flex gap-3">
            {heroSlides.map((_, i) => (
              <div
                key={i}
                onClick={() => setCurrent(i)}
                className={`flex-1 cursor-pointer transition-all duration-500 ${
                  current === i
                    ? "h-1 bg-orange-500"
                    : "h-0.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

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
                        </motion.div>

                        {/* VS TEXT */}
                        <div className="text-xl font-black text-gray-400">
                          VS
                        </div>

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

      <div className="">
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

        <section className="py-16 bg-white max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold  uppercase text-[#1C1F42]">
              News & Media Gallery
            </h2>
            {/* <Link
              to="/blog"
              className="
    relative inline-flex items-center gap-2
    bg-[#97991b] text-white
    px-7 py-3 text-sm font-semibold
    rounded-full
    overflow-hidden
    group
  "
            >
              <span className="relative z-10">View All</span>
              <span className="relative z-10 group-hover:translate-x-1 transition">
                →
              </span>

          
              <span
                className="
    absolute right-0 top-0 h-full w-5
    bg-[#1C1F42]
    clip-path-[polygon(100%_0,0_50%,100%_100%)]
  "
              />
            </Link> */}

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
                        <span className="flex items-center gap-1">
                          <MessageOutlined className="text-red-500" />
                          {post.comments} Comments
                        </span>
                      </div>

                      <p className="text-gray-600 text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    <Link
                      to="/team/media"
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
                        <span className="flex items-center gap-1">
                          <MessageOutlined className="text-red-500" />
                          {smallPosts[index].comments} Comments
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
