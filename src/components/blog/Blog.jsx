
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiClock,
  FiMessageSquare,
  FiUser,
  FiChevronLeft,
  FiChevronRight,
  FiArrowRight,
  FiShare2,
} from "react-icons/fi";
import { usePlayerStore } from "../../store/usePlayerStore";
import { Link } from "react-router-dom";

const Blog = () => {
  const {
    news,
    selectedNews,
    setSelectedNews,
    getPaginatedNews,
    newsPage,
    setNewsPage,
    newsPerPage,
    getTotalNewsPages,
  } = usePlayerStore();

  const displayNews = getPaginatedNews();
  const totalPages = getTotalNewsPages();
  const totalResults = news.length;

  // Pagination calculation for the "Showing X-Y of Z" text
  const startResult = (newsPage - 1) * newsPerPage + 1;
  const endResult = Math.min(newsPage * newsPerPage, totalResults);

  const handleNext = () => {
    if (newsPage < totalPages) setNewsPage(newsPage + 1);
  };

  const handlePrev = () => {
    if (newsPage > 1) setNewsPage(newsPage - 1);
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans relative -top-16 py-10">
      <AnimatePresence mode="wait">
        {!selectedNews ? (
          /* NEWS GRID VIEW */
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <section className="relative h-[30vh] md:h-[50vh] flex items-center justify-center text-white">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url("/images/bg-subanner.jpg")` }}
              />
              <div className="relative z-20 text-center px-4">
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                  OUR NEWS
                </h1>
                <div className="mt-4 flex justify-center items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest">
                  <span className="text-gray-400">
                    <Link to="/">Home</Link>
                  </span>
                  <span className="text-[#e2e619]">/ News</span>
                </div>
              </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 py-16">
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-3xl font-black text-[#1C1F42] uppercase">
                  Latest Updates
                </h2>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-slate-400 font-bold">
                    Showing {startResult}-{endResult} of {totalResults} results
                  </span>
                  <select className="bg-white border border-slate-200 text-sm p-2 outline-none font-bold rounded-sm">
                    <option>Sort by Latest</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {displayNews.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100"
                  >
                    <div className="relative overflow-hidden aspect-video">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-[#1C1F42] text-white p-2 text-center leading-tight min-w-[50px] z-10">
                        <span className="block text-xl font-black">
                          {item.date.split(" ")[0]}
                        </span>
                        <span className="block text-[10px] uppercase font-bold text-[#e2e619]">
                          {item.date.split(" ")[1]}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6 relative">
                      <div className="flex items-center gap-4 text-[10px] font-bold text-blue-900 uppercase mb-4">
                        <span className="flex items-center gap-1">
                          <FiUser className="text-slate-400" /> {item.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <FiMessageSquare className="text-slate-400" />{" "}
                          {item.commentsCount}
                        </span>
                        <span className="flex items-center gap-1">
                          <FiClock className="text-slate-400" /> {item.timeAgo}
                        </span>
                      </div>
                      
                      <h3
                        className="text-xl font-black text-[#1C1F42] mb-3 leading-tight group-hover:text-[#97991b] transition-colors cursor-pointer"
                        onClick={() => setSelectedNews(item)}
                      >
                        {item.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-10">
                        {item.excerpt}
                      </p>

                      <button
                        onClick={() => setSelectedNews(item)}
                        className="relative inline-flex items-center gap-3 border border-[#97991b] text-[#97991b] px-4 py-1 text-xs font-bold rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg group"
                      >
                        <span className="absolute inset-0 bg-[#97991b] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-white cursor-pointer">
                          Read more
                        </span>
                        <span className="relative z-10 w-6 h-6 bg-[#97991b] text-white rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-[#97991b]">
                          <FiArrowRight size={12} />
                        </span>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CORRECTED PAGINATION */}
              <div className="mt-20 border-t border-slate-200 pt-10 flex flex-wrap items-center justify-end gap-6">
                
                <button 
                  onClick={handleNext}
                  disabled={newsPage === totalPages}
                  className="bg-[#97991b] text-white px-8 py-3 text-sm font-black cursor-pointer uppercase flex items-center gap-2 hover:bg-[#7a7b16] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next page <FiChevronRight />
                </button>

                <div className="flex items-center gap-2">
                  <div className="px-4 py-2 border border-slate-200 font-bold bg-white text-[#1C1F42]">
                    {newsPage}
                  </div>
                  <span className="text-sm font-bold text-slate-400 mx-2 uppercase tracking-widest">
                    of {totalPages}
                  </span>
                  
                  <div className="flex gap-1">
                    <button 
                      onClick={handlePrev}
                      disabled={newsPage === 1}
                      className="p-3 border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 disabled:opacity-30 transition-all"
                    >
                      <FiChevronLeft />
                    </button>
                    <button 
                      onClick={handleNext}
                      disabled={newsPage === totalPages}
                      className="p-3 border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 disabled:opacity-30 transition-all"
                    >
                      <FiChevronRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          /* NEWS DETAIL VIEW (Same as before but with minor fixes) */
          <motion.div
            key="detail"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <section className="relative h-[40vh] flex items-center justify-center text-white">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url("/images/bg-subanner.jpg")` }}
              />
              <div className="relative z-20 text-center px-4">
                <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
                  Article Details
                </h1>
                <div className="mt-4 flex justify-center items-center gap-2 text-xs font-bold uppercase">
                  <span className="text-gray-400">News</span>
                  <span className="text-[#e2e619]">/ Details</span>
                </div>
              </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8">
                <button
                  onClick={() => setSelectedNews(null)}
                  className="flex items-center gap-2 font-black uppercase text-xs text-[#1C1F42] hover:text-[#97991b] mb-8 transition-colors"
                >
                  <FiChevronLeft /> Back to News
                </button>
                <img
                  src={selectedNews.img}
                  alt=""
                  className="w-full aspect-video object-cover mb-8 shadow-lg"
                />

                <div className="flex flex-wrap items-center gap-6 text-[10px] font-black text-slate-400 uppercase border-b border-slate-100 pb-6 mb-6">
                  <span className="flex items-center gap-2"><FiUser className="text-[#97991b]" /> {selectedNews.author}</span>
                  <span className="flex items-center gap-2"><FiClock className="text-[#97991b]" /> {selectedNews.fullDate}</span>
                  <span className="flex items-center gap-2"><FiMessageSquare className="text-[#97991b]" /> {selectedNews.commentsCount} Comments</span>
                  <button className="ml-auto flex items-center gap-2 hover:text-[#97991b] transition-colors"><FiShare2 /> Share</button>
                </div>

                <h2 className="text-3xl md:text-4xl font-black text-[#1C1F42] uppercase mb-8 leading-tight italic">
                  {selectedNews.title}
                </h2>
                <div className="text-slate-600 leading-relaxed text-lg space-y-6">
                  <p>{selectedNews.content}</p>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-4 space-y-10">
                <div className="bg-white p-8 border border-slate-100 shadow-sm">
                  <h4 className="text-lg font-black text-[#1C1F42] uppercase mb-6 border-l-4 border-[#97991b] pl-4">Categories</h4>
                  <ul className="space-y-4 font-bold text-sm text-slate-500">
                    {["League News", "Match Reports", "Youth Development", "Tournament Updates"].map((cat) => (
                      <li key={cat} className="flex items-center gap-2 hover:text-[#97991b] cursor-pointer transition-colors">
                        <FiArrowRight className="text-xs" /> {cat}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-8 border border-slate-100 shadow-sm">
                  <h4 className="text-lg font-black text-[#1C1F42] uppercase mb-8 border-l-4 border-[#97991b] pl-4">Recent Posts</h4>
                  <div className="space-y-6">
                    {news.slice(0, 3).map((post) => (
                      <div key={post.id} className="flex gap-4 group cursor-pointer" onClick={() => setSelectedNews(post)}>
                        <div className="w-16 h-16 flex-shrink-0 overflow-hidden bg-slate-100">
                          <img src={post.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                        </div>
                        <h5 className="font-black text-[#1C1F42] text-xs group-hover:text-[#97991b] transition-colors uppercase leading-snug">
                          {post.title}
                        </h5>
                      </div>
                    ))}
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

export default Blog;
