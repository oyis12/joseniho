import React from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiArrowLeft, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { usePlayerStore } from '../../store/usePlayerStore';
import {Link} from 'react-router-dom';
const PlayersData = () => {
  const { 
    setSelectedPlayer, 
    selectedPlayer, 
    filterRole, 
    setFilterRole, 
    currentPage, 
    setCurrentPage, 
    getProcessedData 
  } = usePlayerStore();

  const { displayPlayers, totalPages, totalResults } = getProcessedData();
  const roles = ["All", "Goalkeeper", "Defender", "Midfielder", "Forward"];

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans relative -top-16 py-10">
      {/* SHARED HERO SECTION */}
      <section className="relative h-[30vh] md:h-[50vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("/images/bg-subanner.jpg")` }} />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            {selectedPlayer ? selectedPlayer.name : "Players"}
          </h1>
          <div className="mt-4 flex justify-center items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest">
            <span className="text-gray-400">
              <Link to="/">Home</Link>
            </span>
            <span className="text-gray-400">/</span>
            <span 
              className={`transition-colors cursor-pointer ${!selectedPlayer ? 'text-[#e2e619]' : 'text-gray-400 hover:text-white'}`}
              onClick={() => setSelectedPlayer(null)}
            >
              Players
            </span>
            {selectedPlayer && (
              <>
                <span className="text-gray-400">/</span>
                <span className="text-yellow-600">{selectedPlayer.role}</span>
              </>
            )}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <AnimatePresence mode="wait">
          {!selectedPlayer ? (
            /* SQUAD LIST VIEW */
            <motion.div 
              key="list" 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="py-12"
            >
              {/* FILTER BAR */}
              <div className="flex flex-wrap items-center justify-between gap-6 mb-12 border-b border-slate-200 pb-8">
                <div className="flex flex-wrap gap-2">
                  {roles.map((role) => (
                    <button
                      key={role}
                      onClick={() => setFilterRole(role)}
                      className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all cursor-pointer ${
                        filterRole === role 
                        ? 'bg-[#97991b]  text-white shadow-lg shadow-blue-200' 
                        : 'bg-white text-[#1C1F42] hover:bg-[#dadd2d] border border-slate-200'
                      }`}
                    >
                      {role}
                    </button>
                  ))}
                </div>
                <p className="text-slate-400 text-sm font-bold uppercase">Showing {displayPlayers.length} of {totalResults} Players</p>
              </div>

              {/* PLAYERS GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {displayPlayers.map((player) => (
                  <motion.div 
                    key={player.id} 
                    layoutId={`player-card-${player.id}`}
                    whileHover={{ y: -10 }}
                    className="group cursor-pointer"
                    onClick={() => setSelectedPlayer(player)}
                  >
                    {/* <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-slate-200"> */}
                     <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-slate-200">
                      <motion.img 
                        layoutId={`player-img-${player.id}`}
                        src={`${player.img}?q=80&w=400`} 
                        alt={player.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-[#1C1F42]/60 opacity-0  transition-all duration-300 flex items-center justify-center">
                         <div className="bg-white p-3 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                            <FiArrowUpRight size={24} className="text-[#1C1F42]" />
                         </div>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-between items-start">
                      <div>
                        <h3 className="font-black text-xl text-[#1C1F42]  transition-colors uppercase">{player.name}</h3>
                        <p className="text-blue-900 font-bold text-sm uppercase">{player.role} • {player.team}</p>
                      </div>
                      <div className="w-10 h-10 flex items-center justify-center bg-[#97991b] text-white rounded-full font-black text-lg">{player.number}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* PAGINATION */}
              {totalPages > 1 && (
                <div className="mt-16 flex justify-center items-center gap-4">
                  <button 
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                    className="p-3 rounded-full bg-white border border-slate-200 text-[#1C1F42] disabled:opacity-30 hover:bg-blue-900 hover:text-white transition-all shadow-sm"
                  >
                    <FiChevronLeft size={20} />
                  </button>
                  
                  <div className="flex gap-2">
                    {[...Array(totalPages)].map((_, i) => (
                      <button
                        key={i + 1}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`w-12 h-12 rounded-full font-black text-sm transition-all ${
                          currentPage === i + 1 
                          ? 'bg-[#97991b] text-white' 
                          : 'bg-white text-[#1C1F42] border border-slate-200 hover:border-blue-900'
                        }`}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </button>
                    ))}
                  </div>

                  <button 
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                    className="p-3 rounded-full bg-white border border-slate-200 text-[#1C1F42] disabled:opacity-30 hover:bg-blue-900 hover:text-white transition-all shadow-sm"
                  >
                    <FiChevronRight size={20} />
                  </button>
                </div>
              )}
            </motion.div>
          ) : (
            /* PLAYER DETAILS VIEW - (Same as previous, just kept inside AnimatePresence) */
            <motion.div 
              key="details" 
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
              className="py-16"
            >
              <button onClick={() => setSelectedPlayer(null)} className="group flex items-center gap-2 font-black uppercase text-sm mb-10 hover:text-blue-900 transition-all cursor-pointer">
                <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Squad
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-4">
                  <div className="sticky top-24">
                    <motion.img 
                        layoutId={`player-img-${selectedPlayer.id}`}
                        src={`${selectedPlayer.img}?q=80&w=800`} 
                        alt={selectedPlayer.name} 
                        className="w-full aspect-[3/4] object-cover rounded-lg shadow-2xl border-4 border-white"
                    />
                  </div>
                </div>

                <div className="lg:col-span-8">
                  <div className="border-b border-slate-200 pb-6 mb-8">
                      <h2 className="text-5xl md:text-6xl font-black text-[#1C1F42] uppercase tracking-tighter">{selectedPlayer.name}</h2>
                      <p className="text-blue-900 font-black text-xl mt-2 uppercase tracking-widest">{selectedPlayer.role} / No.{selectedPlayer.number}</p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                          {[
                            { label: 'Nationality', val: selectedPlayer.nationality },
                            { label: 'Date of Birth', val: selectedPlayer.dob },
                            { label: 'Height', val: selectedPlayer.height },
                            { label: 'Weight', val: selectedPlayer.weight }
                          ].map((item, i) => (
                            <div key={item.label}>
                              <p className="text-xs font-bold text-slate-400 uppercase mb-1">{item.label}</p>
                              <p className="font-black text-[#1C1F42] text-lg">{item.val || "N/A"}</p>
                            </div>
                          ))}
                      </div>
                  </div>

                  <div className="mb-12">
                      <h3 className="text-2xl font-black text-[#1C1F42] uppercase mb-4">Biography</h3>
                      <p className="text-slate-500 leading-relaxed font-medium text-lg">
                          Professional athlete playing for {selectedPlayer.team}. Standard biographical details for the 2026 season are currently being updated.
                      </p>
                  </div>

                  <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                      <h3 className="text-2xl font-black text-[#1C1F42] uppercase mb-8">Players Performance</h3>
                      <div className="space-y-8">
                          {Object.entries(selectedPlayer.stats).map(([label, value]) => (
                              <div key={label}>
                                  <div className="flex justify-between font-black uppercase text-sm mb-3">
                                      <span className="tracking-widest text-[#1C1F42]">{label}</span>
                                      <span className="text-[#e2e619]">{value}%</span>
                                  </div>
                                  <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                                      <motion.div 
                                          initial={{ width: 0 }}
                                          animate={{ width: `${value}%` }}
                                          transition={{ duration: 1, ease: "circOut" }}
                                          className="h-full bg-[#e2e619]"
                                      />
                                  </div>
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
    </div>
  );
};

export default PlayersData;