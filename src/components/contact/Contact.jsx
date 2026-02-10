import React, { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { usePlayerStore } from '../../store/usePlayerStore';
import { Link } from 'react-router-dom';


const Contact = () => {
  const { contactStatus, setContactStatus } = usePlayerStore();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setContactStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setContactStatus('success');
      setTimeout(() => setContactStatus('idle'), 3000);
    }, 1500);
  };

  const enquiryCards = [
    {
      title: "League Enquiries",
      phone: "+234 (0) 8124 490 595",
      email: "Coachdayor@gmail.com",
      address: "OAU QUARTERS MAITAMA,ABUJA, NIGERIA"
    },
    {
      title: "Media Enquiries",
      phone: "+234 (0) 7034 467 923",
      email: "soccerjoseniho@gmail.com",
      address: "OAU QUARTERS MAITAMA,ABUJA, NIGERIA"
    },
    {
      title: "Head Office",
      phone: "+234 (0) 916 805 1180,",
      email: "soccerjoseniho@gmail.com",
      address: "OAU QUARTERS MAITAMA,ABUJA, NIGERIA"
    }
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans relative -top-16 py-10">
      <AnimatePresence mode="wait">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          {/* HERO SECTION */}
          <section className="relative h-[30vh] md:h-[50vh] flex items-center justify-center text-white">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("/images/bg-subanner.jpg")` }} />
            <div className="relative z-20 text-center px-4">
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">OFFICIAL CONTACT</h1>
              <div className="mt-4 flex justify-center items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest">
                <span className="text-gray-400">
                  <Link to="/">Home</Link>
                </span>
                <span className="text-[#e2e619]">/ Contact</span>
              </div>
            </div>
          </section>

          <div className="max-w-7xl mx-auto px-6 py-20">
            
            {/* ENQUIRY CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
              {enquiryCards.map((card, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white p-10 shadow-sm border border-slate-100 rounded-sm"
                >
                  <h3 className="text-xl font-black text-[#1C1F42] uppercase mb-8 border-l-4 border-[#e2e619] pl-4">
                    {card.title}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center focus:border-blue-900 group-hover:bg-[#1C1F42] group-hover:text-white transition-colors">
                        <FiPhone size={18} />
                      </div>
                      <span className="text-slate-600 font-bold">{card.phone}</span>
                    </div>
                    <div className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center focus:border-blue-900 group-hover:bg-[#1C1F42] group-hover:text-white transition-colors">
                        <FiMail size={18} />
                      </div>
                      <span className="text-slate-600 font-bold">{card.email}</span>
                    </div>
                    <div className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center focus:border-blue-900 group-hover:bg-[#1C1F42] group-hover:text-white transition-colors flex-shrink-0">
                        <FiMapPin size={18} />
                      </div>
                      <span className="text-slate-600 font-bold leading-relaxed">{card.address}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* FORM AND MAP SECTION */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* CONTACT FORM */}
              <div>
                <h2 className="text-3xl font-black text-[#1C1F42] uppercase mb-10">Leave Us for Your Info</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input 
                      type="text" 
                      placeholder="Name" 
                      className="w-full bg-white border border-slate-200 p-4 outline-none focus:border-blue-900 transition-colors font-semibold" 
                      required
                    />
                    <input 
                      type="email" 
                      placeholder="Email" 
                      className="w-full bg-white border border-slate-200 p-4 outline-none focus:border-blue-900 transition-colors font-semibold" 
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input 
                      type="text" 
                      placeholder="Phone" 
                      className="w-full bg-white border border-slate-200 p-4 outline-none focus:border-blue-900 transition-colors font-semibold" 
                    />
                    <input 
                      type="text" 
                      placeholder="Subject" 
                      className="w-full bg-white border border-slate-200 p-4 outline-none focus:border-blue-900 transition-colors font-semibold" 
                    />
                  </div>
                  <textarea 
                    rows="6" 
                    placeholder="Message" 
                    className="w-full bg-white border border-slate-200 p-4 outline-none focus:border-blue-900 transition-colors font-semibold"
                    required
                  ></textarea>
                  
                 <button
  type="submit"
  disabled={contactStatus === "submitting"}
  className={`
    relative inline-flex items-center justify-center
    px-12 py-4
    rounded-full
    border border-[#97991b]
    font-black uppercase text-sm tracking-widest
    text-[#97991b]
    overflow-hidden
    transition-all duration-300
    group

    hover:shadow-[0_10px_30px_rgba(151,153,27,0.35)]
    hover:-translate-y-0.5

    ${
      contactStatus === "submitting"
        ? "opacity-60 cursor-not-allowed"
        : "cursor-pointer"
    }
  `}
>
  {/* BACKGROUND FILL */}
  <span
    className={`
      absolute inset-0
      bg-[#97991b]
      -translate-x-full
      group-hover:translate-x-0
      transition-transform duration-300 ease-out
    `}
  />

  {/* TEXT */}
  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
    {contactStatus === "submitting" ? "Sending..." : "Submit"}
  </span>
</button>


                  {contactStatus === 'success' && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 font-bold">
                      Message sent successfully! We will get back to you soon.
                    </motion.p>
                  )}
                </form>
              </div>

              {/* MAP SECTION */}
              <div>
                <h2 className="text-3xl font-black text-[#1C1F42] uppercase mb-10">Location</h2>
                <div className="w-full h-[450px] bg-slate-200 rounded-sm overflow-hidden shadow-inner grayscale hover:grayscale-0 transition-all duration-700">
                  <iframe 
                    title="Club Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.81924302169!2d-0.12775829999999997!3d51.5073509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c32169138d%3A0xb00540578e03e43!2sUnited%20Kingdom!5e0!3m2!1sen!2s!4v1640000000000!5m2!1sen!2s" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Contact;