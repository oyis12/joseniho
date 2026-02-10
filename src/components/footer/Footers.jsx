
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footers = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1C1F42] text-white pt-16 pb-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        
        {/* Brand Section - Occupies full width on mobile, 1 col on desktop */}
        <div className="col-span-2 lg:col-span-1 space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#97991b] rounded flex items-center justify-center font-bold text-xl">J</div>
            <h2 className="text-2xl font-bold tracking-tight">JOSENIHO</h2>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Your trusted partner to produce a reliable generation of footballers.
          </p>
          <div className="flex gap-4">
            {[FaFacebookF, FaInstagram, FaXTwitter, FaYoutube].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ y: -3, backgroundColor: '#3b82f6' }}
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-sm transition-colors"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Links Sections - Sit side-by-side on mobile */}
        <div>
          <h4 className="text-lg font-semibold mb-6">Company</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            {['About Us', 'Our Mission', 'Careers', 'Press & Media', 'Contact Us', 'Partnerships'].map((item) => (
              <li key={item}><a href="#" className="hover:text-yellow-600 transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6">Support</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            {['Help Center', 'Live Support'].map((item) => (
              <li key={item}><a href="#" className="hover:text-yellow-600 transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Newsletter - Drops below and occupies full width on mobile */}
        <div className="col-span-2 lg:col-span-1 space-y-6">
          <h4 className="text-lg font-semibold leading-tight">Join our newsletter and get exclusive updates on today's football</h4>
          <div className="space-y-3">
            <input 
              type="text" placeholder="Name" 
              className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-2 text-sm focus:outline-none"
            />
            <input 
              type="email" placeholder="Email" 
              className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-2 text-sm focus:outline-none"
            />
           <motion.button
  whileHover={{ y: -2 }}
  whileTap={{ scale: 0.97 }}
  transition={{ type: "spring", stiffness: 300, damping: 20 }}
  className="
    group relative w-full
    overflow-hidden
    rounded-full
    border border-[#97991b]
    px-6 py-3
    text-sm font-semibold tracking-wide
    text-[#97991b]
    cursor-pointer
    transition-all duration-300
    hover:shadow-[0_10px_30px_rgba(151,153,27,0.35)]
  "
>
  {/* BACKGROUND SWEEP */}
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
    GET SMART UPDATES
  </span>
</motion.button>

          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p className="text-center md:text-left">Copyright © {currentYear} Joseniho Kids Football League. Powered by FlokiEploit hub.</p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footers;