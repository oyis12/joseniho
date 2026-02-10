import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link, useLocation, useNavigate } from "react-router-dom";

import sponsor1 from "../../../public/images/sponsor1.png";
import sponsor2 from "../../../public/images/sponsor2.png";
import sponsor3 from "../../../public/images/sponsor3.png";
import sponsor4 from "../../../public/images/sponsor4.png";
import sponsor5 from "../../../public/images/sponsor5.png";
import sponsor6 from "../../../public/images/sponsor6.png";
import sponsor7 from "../../../public/images/sponsor7.png";

import social1 from "../../../public/images/social1.png";
import social2 from "../../../public/images/social2.png";
import social3 from "../../../public/images/social3.png";
import social4 from "../../../public/images/social4.png";
import social5 from "../../../public/images/social5.png";
import social6 from "../../../public/images/social6.png";

const Footer = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",

    /* ===== OVERFLOW FIXES ===== */
    swipeToSlide: true,
    adaptiveHeight: true,
    centerMode: false,
    arrows: false,

    pauseOnHover: false, // <--- ADD THIS
    pauseOnFocus: false, // <--- ADD THIS
    /* ========================= */
  };

  const socialSlides = [
    { image: social1 },
    { image: social2 },
    { image: social3 },
    { image: social4 },
    { image: social5 },
    { image: social6 },
  ];

  const slides = [
    { image: sponsor1 },
    { image: sponsor2 },
    { image: sponsor3 },
    { image: sponsor4 },
    { image: sponsor5 },
    { image: sponsor6 },
    { image: sponsor7 },
  ];

  const menuItems = [
    { key: "/", label: "Home" },
    { key: "/about", label: "About Club" },
    { key: "/team", label: "Team" },
    { key: "/blog", label: "Blog" },
    { key: "/gallery", label: "Gallery" },
    { key: "/contact", label: "Contacts" },
  ];

  return (
    <div className="bg-[url('/images/footerBg.jpg')] bg-cover bg-center lg:px-20 sm:px-10 md:px-10">
      {/* Sponsors */}
      <div className="pt-8">
        <h3 className="text-3xl">Our Sponsors</h3>
        <div className="h-0.5 w-16 bg-orange-600 mt-4" />

        <div className="mt-10">
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div key={index} className="px-3">
                <img
                  src={slide.image}
                  alt="Sponsor"
                  className="h-15 sm:h-15 w-full object-contain mb-4"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="bg-[#0000008e] px-10 py-20 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT (BIGGER) */}
          <div className="lg:col-span-2 text-white">
            <div className="flex flex-wrap gap-x-4 gap-y-2 sm:gap-x-5">
              {menuItems.map((item, index) => (
                <Link
                  key={item.key}
                  to={item.key}
                  className="text-[#9DAAAA]! flex items-center gap-2 sm:gap-3 text-sm sm:text-base"
                >
                  {item.label}
                  {index !== menuItems.length - 1 && (
                    <span className="hidden sm:inline">|</span>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT (SMALLER) */}
          <div className="lg:col-span-1 ">
            {socialSlides.map((slide, index) => {
              return (
                <img
                  src={slide.image}
                  alt="Social"
                  className="h-7 w-7 object-contain mr-4 inline-block cursor-pointer hover:scale-110 transition-transform"
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="bg-[#1B1F20]">
        <p className="text-white text-xs px-10 py-6">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
