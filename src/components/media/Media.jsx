

import React, { useState, useMemo } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { FiPlus, FiX, FiChevronLeft, FiChevronRight, FiClock, FiPlay, FiImage, FiVideo, FiGrid } from 'react-icons/fi';
import { usePlayerStore } from '../../store/usePlayerStore';
import { Link } from 'react-router-dom';

const Media = () => {
  const [sortType, setSortType] = useState('Latest');
  const [activeFilter, setActiveFilter] = useState('All'); // 'All', 'Photos', 'Videos'
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(null);
  const { baseMedia } = usePlayerStore();

  // Helper to check if a file is a video
  const isVideo = (path) => {
    return path?.match(/\.(mp4|webm|ogg|mov)$/i);
  };

  // Filter and Sort Logic combined
  const filteredAndSortedData = useMemo(() => {
    // 1. First, Filter
    let data = baseMedia.filter(item => {
      if (activeFilter === 'Photos') return !isVideo(item.img);
      if (activeFilter === 'Videos') return isVideo(item.img);
      return true; // 'All'
    });

    // 2. Then, Sort
    if (sortType === 'A-Z') data.sort((a, b) => a.title.localeCompare(b.title));
    else if (sortType === 'Z-A') data.sort((a, b) => b.title.localeCompare(a.title));
    else if (sortType === 'Oldest') data.sort((a, b) => new Date(a.date) - new Date(b.date));
    else data.sort((a, b) => new Date(b.date) - new Date(a.date)); // Latest

    return data;
  }, [sortType, activeFilter, baseMedia]);

  // Pagination Logic (based on filtered data)
  const totalItems = filteredAndSortedData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredAndSortedData.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => { if (currentPage < totalPages) setCurrentPage(currentPage + 1); };
  const handlePrevPage = () => { if (currentPage > 1) setCurrentPage(currentPage - 1); };

  // Tab configuration
  const tabs = [
    { id: 'All', label: 'All Media', icon: <FiGrid /> },
    { id: 'Photos', label: 'Photos', icon: <FiImage /> },
    { id: 'Videos', label: 'Videos', icon: <FiVideo /> },
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans relative -top-16 py-10">
      <AnimatePresence mode="wait">
        <motion.div key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          
          {/* HERO SECTION */}
          <section className="relative h-[30vh] md:h-[50vh] flex items-center justify-center text-white">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("/images/bg-subanner.jpg")` }} />
            <div className="relative z-20 text-center px-4">
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Media Gallery</h1>
              <div className="mt-4 flex justify-center items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest">
                <span className="text-gray-400">
                  <Link to="/">Home</Link>
                </span>
                <span className="text-[#e2e619]">/ Media</span>
              </div>
            </div>
          </section>

          {/* FILTER & TAB SECTION */}
          <section className="max-w-7xl mx-auto px-6 py-10">
            
            {/* Beautiful Tab System */}
            <div className="flex flex-col items-center mb-12">
               <div className="inline-flex bg-slate-200/50 p-1.5 rounded-2xl backdrop-blur-sm border border-slate-200">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => { setActiveFilter(tab.id); setCurrentPage(1); }}
                      className={`relative flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-black uppercase tracking-wider transition-colors z-10 ${
                        activeFilter === tab.id ? 'text-[#1C1F42]' : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      {tab.icon}
                      {tab.label}
                      {activeFilter === tab.id && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-[#e2e619] rounded-xl -z-10 shadow-lg shadow-yellow-500/20"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </button>
                  ))}
               </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
              <h2 className="text-3xl font-black text-[#1C1F42] uppercase tracking-tighter">
                {activeFilter} <span className="text-[#e2e619]">Archive</span>
              </h2>
              
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-slate-400 whitespace-nowrap">
                    {totalItems} Items Found
                </span>
                <select 
                  value={sortType}
                  onChange={(e) => { setSortType(e.target.value); setCurrentPage(1); }}
                  className="bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm font-bold outline-none cursor-pointer hover:border-[#e2e619] transition-all shadow-sm"
                >
                  <option value="Latest">Newest First</option>
                  <option value="Oldest">Oldest First</option>
                  <option value="A-Z">Name A-Z</option>
                  <option value="Z-A">Name Z-A</option>
                </select>
              </div>
            </div>

            {/* GALLERY GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 min-h-[600px]">
              <AnimatePresence mode='popLayout'>
                {currentItems.map((item, index) => (
                  <motion.div 
                    key={item.id}
                    layout
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="group"
                  >
                    <div 
                      className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-200 cursor-pointer shadow-md" 
                      onClick={() => setSelectedMediaIndex(indexOfFirstItem + index)}
                    >
                      {isVideo(item.img) ? (
                        <div className="w-full h-full relative">
                           <video src={item.img} className="w-full h-full object-cover" muted />
                           <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-2.5 rounded-full text-white shadow-xl">
                              <FiPlay size={16} fill="white" />
                           </div>
                        </div>
                      ) : (
                        <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      )}
                      
                      <div className="absolute inset-0 bg-[#1C1F42]/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-[2px]">
                        <motion.div 
                          initial={{ y: 10, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          className="w-14 h-14 flex items-center justify-center text-white border-2 border-[#e2e619] rounded-full"
                        >
                          {isVideo(item.img) ? <FiPlay size={28} fill="#e2e619" className="ml-1" /> : <FiPlus size={28} className="text-[#e2e619]" />}
                        </motion.div>
                      </div>
                    </div>

                    <div className="mt-5 px-1">
                      <h3 className="font-black text-lg text-[#1C1F42] uppercase tracking-tight truncate leading-tight group-hover:text-[#97991b] transition-colors">
                        {item.title || "Untiled Entry"}
                      </h3>
                      <div className="flex items-center gap-2 text-slate-400 mt-2 text-[11px] font-black uppercase tracking-widest">
                        <FiClock size={12} className="text-[#e2e619]" />
                        <span>{item.time}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Empty State */}
            {totalItems === 0 && (
              <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                <FiGrid size={48} className="mb-4 opacity-20" />
                <p className="font-bold uppercase tracking-widest">No media found in this category</p>
              </div>
            )}

            {/* PAGINATION */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-20 pb-20 border-t border-slate-100 pt-10">
              <div className="flex items-center gap-3 text-sm font-bold text-slate-500">
                <span>View</span>
                <select 
                    value={itemsPerPage} 
                    onChange={(e) => { setItemsPerPage(Number(e.target.value)); setCurrentPage(1); }}
                    className="border border-slate-200 rounded-lg px-3 py-2 outline-none bg-white font-black"
                >
                    <option value={4}>4</option>
                    <option value={8}>8</option>
                    <option value={12}>12</option>
                    <option value={20}>20</option>
                </select>
              </div>

              <button 
                onClick={handleNextPage}
                disabled={currentPage === totalPages || totalItems === 0}
                className="bg-[#97991b] text-white px-10 py-4 font-black uppercase tracking-widest text-xs rounded-full flex items-center gap-3 hover:bg-[#2a2e5a] transition-all shadow-xl shadow-indigo-900/10 disabled:opacity-20"
              >
                Next page <FiChevronRight />
              </button>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <div className="bg-white border border-slate-200 px-4 py-2 text-sm font-black text-[#1C1F42] rounded-lg shadow-sm">{currentPage}</div>
                    <span className="text-sm font-bold text-slate-400 uppercase tracking-tighter ml-1">of {totalPages || 1}</span>
                </div>
                
                <div className="flex gap-2">
                    <button 
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        className="w-11 h-11 flex items-center justify-center rounded-xl border border-slate-200 text-slate-400 hover:border-[#e2e619] hover:bg-white hover:text-[#97991b] transition-all disabled:opacity-30"
                    >
                        <FiChevronLeft size={20} />
                    </button>
                    <button 
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages || totalItems === 0}
                        className="w-11 h-11 flex items-center justify-center rounded-xl border border-slate-200 text-slate-400 hover:border-[#e2e619] hover:bg-white hover:text-[#97991b] transition-all disabled:opacity-30"
                    >
                        <FiChevronRight size={20} />
                    </button>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      </AnimatePresence>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedMediaIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/98 flex items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setSelectedMediaIndex(null)}
          >
            <button className="absolute top-8 right-8 text-white/50 hover:text-[#e2e619] z-[110] transition-all transform hover:rotate-90">
                <FiX size={40} />
            </button>
            
            <button onClick={(e) => { e.stopPropagation(); setSelectedMediaIndex((prev) => (prev - 1 + totalItems) % totalItems); }} className="absolute left-4 md:left-10 text-white/20 hover:text-[#e2e619] transition-colors"><FiChevronLeft size={60} /></button>
            <button onClick={(e) => { e.stopPropagation(); setSelectedMediaIndex((prev) => (prev + 1) % totalItems); }} className="absolute right-4 md:right-10 text-white/20 hover:text-[#e2e619] transition-colors"><FiChevronRight size={60} /></button>

            <motion.div 
                key={selectedMediaIndex} 
                initial={{ scale: 0.8, opacity: 0, y: 20 }} 
                animate={{ scale: 1, opacity: 1, y: 0 }} 
                className="relative max-w-6xl w-full flex flex-col items-center" 
                onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full rounded-2xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)]">
                  {isVideo(filteredAndSortedData[selectedMediaIndex].img) ? (
                    <video 
                        src={filteredAndSortedData[selectedMediaIndex].img} 
                        controls 
                        autoPlay 
                        className="max-h-[70vh] w-full bg-black"
                    />
                  ) : (
                    <img src={filteredAndSortedData[selectedMediaIndex].img} alt="Selected" className="max-h-[70vh] w-full object-contain bg-black/40" />
                  )}
              </div>
              
              <div className="mt-10 text-center text-white px-4">
                <h4 className="text-2xl md:text-4xl font-black uppercase tracking-tight italic">
                    {filteredAndSortedData[selectedMediaIndex].title || "Untitled Presentation"}
                </h4>
                <div className="flex items-center justify-center gap-6 mt-4">
                    <span className="bg-[#e2e619] text-[#1C1F42] px-4 py-1 rounded-full font-black text-xs tracking-widest">
                        {selectedMediaIndex + 1} / {totalItems}
                    </span>
                    <p className="text-white/40 text-sm font-black uppercase tracking-[0.2em]">{filteredAndSortedData[selectedMediaIndex].time}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Media;