import React from "react";
import { Progress, Button, Collapse } from "antd";
import {
  UsergroupAddOutlined,
  TrophyOutlined,
  CheckCircleOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const Coaches = () => {
  const coaches = [
    {
      name: "Dr Victor Isereke",
      role: "Chairman/Covener",
      image: "/images/Victor_isereke.jpeg",
      experience: "12 Years Experience",
      bio: "UEFA-certified coach focused on player development, discipline, and tactical intelligence.",
    },
    {
      name: "Temidayo Faleyimu",
      role: "LOC chairman",
      image: "/images/Temidayo_faleyimu.jpeg",
      experience: "8 Years Experience",
      bio: "Specialist in youth fitness, agility training, and match preparation.",
    },
    {
      name: "Pascal Inyang",
      role: "Member planning committee",
      image: "/images/Pascal_Inyang.jpeg",
      experience: "10 Years Experience",
      bio: "Expert in ball control, passing accuracy, and modern football techniques.",
    },
    {
      name: "Keiphas Augustine",
      role: "Match Commissioner",
      image: "/images/forth.jpeg",
      experience: "9 Years Experience",
      bio: "Former professional goalkeeper training young keepers with confidence and focus.",
    },
  ];

  const stats = [
    {
      icon: <UsergroupAddOutlined />,
      value: "12K+",
      label: "Active Players",
    },
    {
      icon: <TrophyOutlined />,
      value: "48+",
      label: "Winning Records",
    },
    {
      icon: <CheckCircleOutlined />,
      value: "98%",
      label: "Satisfaction Rate",
    },
    {
      icon: <StarOutlined />,
      value: "4.7",
      label: "User Ratings",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <div
          className='
      absolute inset-0 -top-16
      bg-[url("../../../public/images/hero.jpg")]
      bg-cover bg-center
      z-0
    '
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* CONTENT */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            OUR COACHES
          </h1>

          <div className="mt-4 flex justify-center items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest">
            <span className="text-gray-400">
              <Link to="/">Home</Link>
            </span>
            <span className="text-[#e2e619]">/ Coaches</span>
          </div>
        </div>
      </section>

      {/* COACHES GRID */}
      <div className="mt-20 max-w-7xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {coaches.map((coach, index) => {
            const { name, role, image, experience, bio } = coach;

            return (
              <div
                key={index}
                className="bg-[#1f2124] overflow-hidden shadow-lg hover:shadow-xl transition"
              >
                {/* IMAGE */}
                <img
                  src={image}
                  alt={name}
                  className="w-full h-56 object-cover object-top"
                />

                {/* CONTENT */}
                <div className="p-5 text-white">
                  <h4 className="text-lg font-semibold">{name}</h4>
                  <p className="text-sm text-orange-500">{role}</p>
                  {/* <p className="text-xs text-gray-400 mt-1">{experience}</p> */}

                  {/* <p className="text-sm text-gray-300 mt-3 line-clamp-3">
                    {bio}
                  </p> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-white">
        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-b pb-4 pt-5 border-gray-200">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 border-r border-gray-200 last:border-0 pr-4 md:pr-0"
            >
              <div className="text-orange-500 text-2xl">{stat.icon}</div>
              <h4 className="text-2xl font-bold text-gray-900">{stat.value}</h4>
              <p className="text-xs uppercase tracking-wide text-gray-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* IMAGE */}
              <div className="relative">
                <img
                  src="/public/images/coach1.jpeg"
                  alt="Coach training players"
                  className="w-full h-80 md:h-105 object-cover"
                />

                {/* EXPERIENCE BADGE */}
                {/* <div className="absolute -top-6 -right-6 bg-white shadow-xl rounded-full h-32 w-32 flex flex-col items-center justify-center">
                  <p className="text-3xl font-bold text-[#e2e619]">25+</p>
                  <p className="text-xs uppercase tracking-wide text-gray-500 text-center">
                    Years of Experience
                  </p>
                </div> */}
              </div>

              {/* CONTENT */}
              <div>
                <span className="inline-block mb-4 text-xs uppercase tracking-wide text-blue-600 border border-blue-200 px-3 py-1">
                  Join our coach
                </span>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  Experienced & Dedicated Coaches Developing Skills, Character,
                  and Champions
                </h2>

                <p className="text-gray-500 mb-8 max-w-xl">
                  Our coaches are passionate professionals committed to
                  nurturing young footballers through structured training and
                  mentorship. Our program emphasise physical fitness, mental
                  strength, sportsmanship, and leadership, helping players build
                  confidence, resilience, and a winning mindset.
                </p>

                {/* PROGRESS BARS */}
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-gray-700">
                        Licensed and Experienced Professional Coaches
                      </span>
                      <span className="text-gray-600">87%</span>
                    </div>
                    <Progress
                      percent={87}
                      showInfo={false}
                      strokeColor="#e2e619"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-gray-700">
                        Modern Training with Player-Focused Development
                      </span>
                      <span className="text-gray-600">95%</span>
                    </div>
                    <Progress
                      percent={95}
                      showInfo={false}
                      strokeColor="#1d4ed8"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-gray-700">
                        Strong Focus on Discipline, Mentality, and Teamwork
                      </span>
                      <span className="text-gray-600">90%</span>
                    </div>
                    <Progress
                      percent={90}
                      showInfo={false}
                      strokeColor="yellow"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Coaches;
