import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to a specific height
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll smoothly to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div
      className="
        fixed 
        bottom-16 right-8   /* ✅ higher & left a bit on mobile */
        md:bottom-8 md:right-8 
        z-50
      "
      style={{
        paddingBottom: "env(safe-area-inset-bottom)", // ✅ iOS Safari safe area
      }}
    >
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="
            p-3 bg-[#97991b] text-white 
            rounded-full shadow-lg 
            hover:bg-gray-700 
            focus:outline-none
            transition duration-300 ease-in-out
            cursor-pointer
          "
        >
          <FaArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
