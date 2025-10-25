import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { IoIosArrowRoundForward } from "react-icons/io";
import HeroVideo from "../../assets/hero.mp4"; // Your video file path
import { motion } from "framer-motion";

export const FadeUp = (delay) => ({
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 0.5,
      delay,
      ease: "easeInOut",
    },
  },
});

const Hero = () => {
  const navigate = useNavigate();

  // Detect screen size to prevent autoplay on mobile devices
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Detect mobile screen size
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Listen to resize
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          src={HeroVideo}
          autoPlay={!isMobile} // Disable autoplay on mobile
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Overlay for text visibility */}
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

      {/* Navbar */}
      <Navbar />

      {/* Content Section */}
      <div className="relative z-20 max-w-[1440px] mx-auto px-6 pt-36 pb-24 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Text Block */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-2xl text-left space-y-8"
        >
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-white">
            Building and Property Maintenance{" "}
            <span className="text-teal-300 block lg:inline">
              Solutions You Can Trust
            </span>
          </h1>
          <p className="text-lg text-white leading-relaxed">
            We pride ourselves on providing high-quality residential, commercial,
            and strata maintenance services at affordable prices. From remedial
            repairs to plumbing, painting, and renovations — we ensure reliability,
            safety, and craftsmanship in every project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
            <div
              onClick={() => navigate("/services")}
              className="flex items-center gap-2 text-white text-base font-medium cursor-pointer"
            >
              View Our Services
              <IoIosArrowRoundForward className="text-2xl text-teal-700 group-hover:translate-x-2 transition-transform duration-300" />
            </div>
            <button
              onClick={() => navigate("/contact")}
              className="bg-teal-600 hover:bg-teal-700 transition text-white px-8 py-3 rounded-xl text-base font-semibold shadow-lg"
            >
              Get a Quote
            </button>
          </div>
        </motion.div>

        {/* Right Image (Optional, remove if you only want the video background) */}
        {/* <motion.img
          src={HeroPng}
          alt="Building Maintenance Team"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full max-w-[480px] sm:max-w-[520px] lg:max-w-[600px] drop-shadow-xl"
        /> */}
      </div>
    </section>
  );
};

export default Hero;
