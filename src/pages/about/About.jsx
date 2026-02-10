import React, { useState } from "react";
import { Progress, Button, Collapse } from "antd";
import {
  UsergroupAddOutlined,
  TrophyOutlined,
  CheckCircleOutlined,
  StarOutlined,
  HistoryOutlined,
  BulbOutlined,
  EyeOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  const [activeTab, setActiveTab] = useState("History");
  const [activeYear, setActiveYear] = useState("2025");

  // Mission, Vision, and History Data Structure
  const tabData = {
    History: {
      icon: <HistoryOutlined />,
      years: ["2025", "2026"],
      content: {
        "2025": "Founded as a local youth initiative in Abuja with just few players and a passion for the game.",
        "2026": "Joseniho Kids Football League continues to evolve as a premier sports hub.",
      },
      image: "/images/bg-ms2.jpeg",
    },
    Mission: {
      icon: <BulbOutlined />,
      title: "Our Mission",
      content: "At our core, we are dedicated to shaping the future of young footballers. We believe in creating a vibrant and secure environment where talent can flourish. Through top-notch training and exhilarating competition. Our commitment includes instilling essential values like teamwork, discipline, respect, and resilience traits that extend far beyond the field.",
      image: "/images/p1.jpeg",
    },
    Vision: {
      icon: <EyeOutlined />,
      title: "Our Vision",
      content: "Our vision is to be at the forefront of children's football leagues and sports management in Nigeria and across Africa. We strive to be recognized as a leader in nurturing young talent, crafting not just exceptional players but remarkable individuals ready to thrive in any arena.",
      image: "/images/trophy_lift.jpeg",
    },
  };

  const coaches = [
    { name: "Dr Victor Isereke", bio: "Chairman/Covener", image: "/images/Victor_isereke.jpeg" },
    { name: "Temidayo Faleyimu", bio: "LOC chairman", image: "/images/Temidayo_faleyimu.jpeg" },
    { name: "Pascal Inyang", bio: "Member planning committee", image: "/images/Pascal_Inyang.jpeg" },
    { name: "Keiphas Augustine", bio: "Match Commissioner", image: "/images/forth.jpeg" },
  ];

  const stats = [
    { icon: <UsergroupAddOutlined />, value: "12K+", label: "Active Players" },
    { icon: <TrophyOutlined />, value: "48+", label: "Winning Records" },
    { icon: <CheckCircleOutlined />, value: "98%", label: "Satisfaction Rate" },
    { icon: <StarOutlined />, value: "4.7", label: "User Ratings" },
  ];

  const faqsLeft = [
    { key: "1", label: "Who are the coaches at Joseninho Kids Football League?", children: "Our coaches are experienced football professionals and trained mentors passionate about youth development." },
    { key: "2", label: "How do I know which service is right for my child?", children: "Our coaches assess each player’s skill level and recommend programs that best support their development." },
    { key: "3", label: "What qualifications do your coaches have?", children: "Our coaching team consists of certified and experienced football coaches with backgrounds in grassroots development." },
  ];

  const faqsRight = [
    { key: "4", label: "How do coaches support player development?", children: "Coaches focus on technical skills, tactical understanding, physical conditioning, and mental strength." },
    { key: "5", label: "Do coaches work with different age groups?", children: "Yes. Our coaches are trained to work with various age categories, adapting training methods to suit each stage." },
    { key: "6", label: "Is player safety a priority during training?", children: "Absolutely. Coaches are trained in first aid and injury prevention to ensure a safe environment." },
  ];

  return (
    <div className="bg-gray-50">
      {/* ================= HERO ================= */}
      <section className="relative h-[50vh] w-full">
        <div className='absolute inset-0 -top-16 bg-[url("/images/bg-subanner.jpg")] bg-cover bg-center'></div>
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-center">ABOUT JOSENIHO KIDS FOOTBALL LEAGUE</h1>
          <div className="mt-4 flex justify-center items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest">
            <span className="text-gray-400">
              <Link to="/">Home</Link>
            </span>
            <span className="text-[#e2e619]">/ About Us</span>
          </div>
        </div>
      </section>

      {/* ================= ABOUT TOP SECTION ================= */}
      <section className="bg-white py-16 md:py-24 overflow-hidden ">
        <div className="max-w-7xl mx-auto px-6">
          {/* Removed gap-12 and added items-center to keep original compact height */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            
            {/* LEFT TEXT BOX - Touching the image */}
            <div className="bg-blue-50/50 p-8 lg:rounded-l-2xl lg:rounded-r-none rounded-2xl">
              <span className="inline-block mb-4 text-xs font-bold uppercase tracking-widest text-[#97991b] border border-[#97991b] bg-orange-50 px-3 py-1">
                Who we are
              </span>
              <h2 className="text-3xl md:text-4xl font-black leading-tight text-slate-900 mb-6">
                Dedicated professionals shaping disciplined athletes
              </h2>
              <p className="text-slate-600 text-justify mb-6">
                Joseniho Kids Football League is a vibrant kids football initiative nestled in the heart of Abuja, where we are passionate about nurturing, developing, 
                and celebrating the incredible talent of young footballers. Tailored for players aged 6 to 15, our league provides a dynamic and engaging environment that combines fun with competition, enabling children to master the fundamentals of football while developing essential life skills such as confidence, discipline, and teamwork.
              </p>

              <p className="text-slate-600 text-justify mb-6">
                Joseniho Kids Football League promises an exhilarating and fulfilling experience for every participant. Our program harmoniously combines skill development with the
                 values of sportsmanship and mentorship, all within a supportive community. Here, football transcends mere play, it becomes a powerful platform for personal growth, character development, and the creation of cherished memories that will last a lifetime.
              </p>
              
              <div className="flex flex-wrap gap-8">
                <div className="flex items-center gap-4">
                  <Progress type="circle" percent={87} width={65} strokeColor="#FB5724" />
                  <p className="text-sm font-bold text-slate-700 w-24">Player Development</p>
                </div>
                <div className="flex items-center gap-4">
                  <Progress type="circle" percent={92} width={65} strokeColor="#2141a5" />
                  <p className="text-sm font-bold text-slate-700 w-24">Growth Strategy</p>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE BOX - Touching the text box */}
            <div className="relative">
              <img 
                src="/images/twentyfive.jpeg" 
                alt="Training" 
                className="w-full h-1/2 object-cover lg:rounded-r-2xl lg:rounded-l-none rounded-2xl shadow-2xl" 
              />
              
              {/* EXPERIENCE BADGE - Precisely overlapping in the middle */}
              {/* <div className="absolute hidden lg:flex bg-white h-24 w-24 left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl rounded-full flex flex-col items-center justify-center border-4 border-gray-50 z-10">
                <p className="text-xl font-black text-orange-600">25+</p>
                <p className="text-[10px] font-bold uppercase text-gray-400 text-center">Experience</p>
              </div> */}
            </div>
          </div>

          {/* ================= UPDATED MISSION & VISION TABS ================= */}
          <div className="mt-24">
            {/* Tab Triggers */}
            <div className="flex border-b border-gray-200 mb-8 overflow-x-auto">
              {Object.keys(tabData).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex items-center gap-2 px-6 py-4 font-bold uppercase tracking-widest text-xs transition-all relative whitespace-nowrap ${
                    activeTab === tab ? "text-blue-900 bg-white" : "text-slate-400 hover:text-blue-600"
                  }`}
                >
                  <span className="text-lg">{tabData[tab].icon}</span>
                  Our {tab}
                  {activeTab === tab && (
                    <motion.div layoutId="activeTabBorder" className="absolute bottom-0 left-0 right-0 h-1 bg-[#1C1F42]" />
                  )}
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="bg-white p-6 md:p-10 shadow-xl rounded-2xl border border-gray-100">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeTab === "History" && (
                    <div className="flex flex-wrap gap-3 mb-8">
                      {tabData.History.years.map((year) => (
                        <button
                          key={year}
                          onClick={() => setActiveYear(year)}
                          className={`flex items-center gap-2 px-4 py-2 text-xs font-black transition-all rounded ${
                            activeYear === year ? "bg-[#1C1F42] text-white" : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                          }`}
                        >
                          <CalendarOutlined /> {year}
                        </button>
                      ))}
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-10 items-center">
                    <img 
                      src={tabData[activeTab].image} 
                      className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" 
                      alt={activeTab} 
                    />
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 uppercase mb-4">
                        {activeTab === "History" ? "Our Journey Through Time" : tabData[activeTab].title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {activeTab === "History" ? tabData.History.content[activeYear] : tabData[activeTab].content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TEAM SECTION ================= */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 mb-16 items-end">
            <div>
              <span className="text-[#97991b] font-bold uppercase tracking-widest text-xs">The Experts</span>
              <h3 className="text-4xl font-black text-white mt-2 leading-tight">Meet our team shaping modern football excellence</h3>
            </div>
            <div className="flex flex-col items-start lg:items-end">
              <p className="text-gray-400 mb-6 max-w-md">Our staff consists of seasoned professionals dedicated to training the next generation of football stars.</p>
              {/* <Link to="/contact" className="h-12 px-10 py-3 font-bold uppercase bg-[#97991b] text-white transition-colors hover:bg-[#868818]">Contact Us</Link> */}
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
                             Contact Us
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coaches.map((coach, i) => (
              <div key={i} className="group bg-slate-800 border border-slate-700 overflow-hidden transition-all hover:-translate-y-2 cursor-pointer">
                <img src={coach.image} className="w-full h-80 object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500" alt={coach.name} />
                <div className="p-6">
                  <h4 className="text-white font-bold text-lg">{coach.name}</h4>
                  <p className="text-[#97991b] text-xs font-bold uppercase mt-1 tracking-tighter">{coach.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STATS & FAQ ================= */}
      <section className="bg-white py-20 px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, i) => (
              <div key={i} className="text-center border-r border-gray-100 last:border-0">
                <div className="text-[#97991b] text-3xl mb-2">{stat.icon}</div>
                <h4 className="text-3xl font-black text-slate-900">{stat.value}</h4>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-blue-600 font-bold text-xs uppercase">Common Questions</span>
              <h3 className="text-3xl font-black text-slate-900 mt-2">Coach & Program FAQs</h3>
              <Collapse accordion items={faqsLeft} className="mt-8 bg-transparent border-none" expandIconPosition="end" />
            </div>
            <div className="lg:pt-16">
              <Collapse accordion items={faqsRight} className="bg-transparent border-none" expandIconPosition="end" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;