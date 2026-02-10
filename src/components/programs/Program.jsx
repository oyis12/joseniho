import { motion } from "framer-motion";
import { FiArrowUpRight, FiCheckCircle } from "react-icons/fi";
import { FaFutbol, FaRunning, FaBullseye, FaUserFriends } from "react-icons/fa";
import { GiAwareness } from "react-icons/gi";
import { usePlayerStore } from "../../store/usePlayerStore";
import { Link } from "react-router-dom";

const Program = () => {
  const { programs } = usePlayerStore();

  // Helper to map icon names to components
  const getIcon = (iconName) => {
    const icons = {
      FaFutbol: <FaFutbol />,
      FaRunning: <FaRunning />,
      GiAwareness: <GiAwareness />,
      FaBullseye: <FaBullseye />,
      FaUserFriends: <FaUserFriends />,
    };
    return icons[iconName] || <FaFutbol />;
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <div className="bg-[#FEFEFE] font-sans overflow-hidden relative -top-16 py-10">
      {/* HERO SECTION */}
      <section className="relative h-[50vh] flex items-center justify-center text-white text-center px-6">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=1600')`,
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-20"
        >
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            Programs
          </h1>
          <div className="mt-4 flex justify-center items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest">
            <span className="text-gray-400">
              <Link to="/">Home</Link>
            </span>
            <span className="text-[#e2e619]">/ Programs</span>
          </div>
        </motion.div>
      </section>

      {/* FEATURED PROGRAM HEADER */}
      <section className="py-16 px-6 md:px-12 lg:px-24 max-w-8xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-bold tracking-widest text-xs border-l-4 border-blue-600 pl-4 uppercase">
              Featured Program
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-6 leading-[1.1]">
              Our Work: Developing Young Talent into Future Football Stars
            </h2>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:pt-14"
          >
            <p className="text-gray-500 text-base mb-6 leading-relaxed">
              At Joseninho Kids Football League, we provide a structured
              platform where young players can grow, compete, and thrive.
              Through organised matches, quality coaching, and mentorship, we
              focus on skill development, discipline, teamwork, and leadership
              preparing young talents for the future of football and life beyond
              the game.
            </p>
            {/* <Link to="/team/coaches" className="bg-[#97991b] text-white px-8 py-3 font-bold text-sm tracking-widest transition-all">DISCOVER MORE</Link> */}
            <Link
              to="/team/coaches"
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
                Discover More
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
        </div>

        {/* PROGRAM GRID */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {programs.map((prog, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="bg-white shadow-xl overflow-hidden group relative flex flex-col border border-gray-50 hover:border-red-100 transition-colors"
            >
              <div className="p-6 pb-4">
                <div className="flex justify-between items-start mb-4">
                  <div className="max-w-[80%]">
                    <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight group-hover:text-yellow-600 transition-colors">
                      {prog.title}
                    </h3>
                    <p className="text-gray-500 text-xs mt-2 leading-relaxed min-h-[32px]">
                      {prog.description}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#252625] group-hover:bg-[#252625] group-hover:text-white transition-all duration-300">
                    <FiArrowUpRight size={18} />
                  </div>
                </div>
              </div>

              <div className="relative h-64 w-full overflow-hidden mt-auto">
                <img
                  src={prog.img}
                  alt={prog.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 w-14 h-14 bg-white flex items-center justify-center shadow-lg text-yellow-600 text-xl z-20 border-t border-r border-gray-100">
                  {getIcon(prog.icon)}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* MENTORS SECTION */}
      <section
        className="relative min-h-[550px] flex items-end justify-end bg-cover bg-center"
        style={{ backgroundImage: `url("/images/bg_bannerArea.jpg")` }}
      >
        <div className="absolute inset-0 bg-black/20" />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 bg-gradient-to-br from-[#1e3a8a] to-[#97991b] p-10 lg:p-20 max-w-2xl text-white shadow-2xl"
        >
          <h2 className="text-3xl lg:text-5xl font-black mb-6 leading-tight">
            Passionate football mentors guiding every training experience
          </h2>
          <p className="text-sm lg:text-lg opacity-90 leading-relaxed mb-10">
            Professional guidance is the bridge between raw talent and elite
            performance. Our mentors bring years of field experience directly to
            you.
          </p>
          {/* <Link
            to="/team/coaches"
            className="w-fit bg-[#97991b] px-10 py-4 font-bold uppercase tracking-widest text-xs border border-white/20 hover:bg-white hover:text-blue-900 transition-all"
          >
            Discover More
          </Link> */}
           <Link
              to="/team/coaches"
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
                Discover More
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
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 px-6 md:px-12 lg:px-24 max-w-8xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col h-full"
          >
            <span className="text-blue-600 font-bold text-xs border-l-4 border-blue-600 pl-4 uppercase tracking-widest">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4 mb-6 leading-tight">
              Driven By Quality, Focused On Your Growth
            </h2>
            <p className="text-gray-500 mb-8 text-base leading-relaxed">
              We are committed to Nurturing Grassroots Talent into Competitive
              Champions
            </p>

            <div className="flex flex-col md:flex-row gap-0 items-stretch flex-grow">
              <div className="flex-grow space-y-3 pr-4">
                {[
                  "Licensed Professional Coaches",
                  "Modern Training Methods",
                  "Player Focused Development",
                  "One on One Mentorship",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 bg-slate-50 p-4 border border-slate-100"
                  >
                    <FiCheckCircle className="text-blue-700 text-lg flex-shrink-0" />
                    <span className="font-bold text-slate-800 text-sm tracking-tight">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="w-full md:w-48 bg-gradient-to-br from-[#97991b] to-[#1e3a8a] text-white p-6 flex flex-col items-center justify-center text-center shadow-xl">
                <div className="w-12 h-12 bg-[#e2e619] flex items-center justify-center mb-4 shadow-lg">
                  <FaFutbol size={24} className="text-white" />
                </div>
                <h4 className="font-black text-xs uppercase tracking-widest mb-2">
                  Joseniho
                </h4>
                <p className="text-[10px] font-bold opacity-70 leading-relaxed uppercase tracking-tighter">
                  Registered as an FA Affiliated Club
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="h-full min-h-[400px]"
          >
            <img
              src="https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=1600"
              alt="Football Training"
              className="w-full h-full object-cover shadow-xl"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Program;
