import React from "react";
import { Briefcase, MapPin, Grid, Search } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  // Animation variants
  const topImageVariants = {
    initial: { x: 0 },
    animate: { x: [-10, 10, -10] },
  };

  const bottomImageVariants = {
    initial: { x: 0 },
    animate: { x: [10, -10, 10] },
  };

  const topIconVariants = {
    initial: { x: 0 },
    animate: { x: [10, -10, 10] },
  };

  const bottomIconVariants = {
    initial: { x: 0 },
    animate: { x: [-10, 10, -10] },
  };

  return (
    <div className="w-full grid place-items-center ">
      <div className="font-poppins md:max-w-[85vw] mx-auto flex flex-col  md:flex-row justify-between items-center px-2 md:px-20 w-full md:min-h-screen bg-[#f6faff]">
        <div className="max-w-2xl space-y-6 pt-16 md:pt-0 z-10 mt-10">
          <h1
            className="text-[#0D2E54]  md:leading-14 leading-12 font-bold"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)" }}
          >
            The <span className="text-blue-600">Easiest Way</span>
            <br /> to Get Your New Job
          </h1>
          <p className="font-inter md:text-xl text-md text-gray">
            Each month, more than 3 million job seekers turn to website in their
            search for work, making over 140,000 applications every single day
          </p>

          <div className="bg-white rounded-xl shadow-lg px-4 py-3 md:py-4  flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-4 w-full max-w-3xl">
            <div className="flex items-center gap-2 w-full md:w-[180px] px-3 py-2 border rounded-md text-sm text-gray-600 cursor-pointer hover:shadow-sm">
              <Briefcase size={18} />
              <span className="flex-1">Industry</span>
              <span className="text-gray-400">▼</span>
            </div>

            <div className="flex items-center gap-2 w-full md:w-[180px] px-3 py-2 border rounded-md text-sm text-gray-600 cursor-pointer hover:shadow-sm">
              <MapPin size={18} />
              <span className="flex-1">Location</span>
              <span className="text-gray-400">▼</span>
            </div>

            <div className="flex items-center gap-2 w-full px-3 py-2 border rounded-md text-sm text-gray-600">
              <Grid size={18} />
              <input
                type="text"
                placeholder="Your keyword..."
                className="w-full outline-none text-sm"
              />
            </div>

            <button className="bg-[#3C65F5] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#1d4ed8] w-full md:w-auto flex items-center gap-2 justify-center">
              <Search size={18} /> Search
            </button>
          </div>

          <div className="text-sm mt-4 text-gray-700">
            <span className="font-medium">Popular Searches:</span>{" "}
            <a href="#" className="text-blue-600 underline mx-1">
              Designer
            </a>
            <a href="#" className="text-blue-600 underline mx-1">
              Web
            </a>
            <a href="#" className="text-blue-600 underline mx-1">
              IOS
            </a>
            <a href="#" className="text-blue-600 underline mx-1">
              Developer
            </a>
            <a href="#" className="text-blue-600 underline mx-1">
              PHP
            </a>
            <a href="#" className="text-blue-600 underline mx-1">
              Senior
            </a>
            <a href="#" className="text-blue-600 underline mx-1">
              Engineer
            </a>
          </div>
        </div>

        {/* Right banners */}
        <div className="relative mt-16 md:mt-0 w-full md:flex hidden justify-center items-center flex-row-reverse">
          {/* Top Image & Icon */}
          <motion.div
            className="relative z-0 flex -left-20 flex-col items-center"
            variants={topImageVariants}
            initial="initial"
            animate="animate"
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <img
              src="/banner1.png"
              alt="Team celebrating"
              className="rounded-xl w-[320px] md:w-[360px] h-auto object-cover transform scale-x-[-1]"
            />
            <motion.img
              src="/icon-top-banner.png"
              alt="Top Icon"
              className="rounded-xl w-[50px] md:w-[100px] absolute top-0 -right-24 h-auto object-cover transform scale-x-[-1] mt-4"
              variants={topIconVariants}
              initial="initial"
              animate="animate"
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />
          </motion.div>

          <motion.div
            className="absolute -bottom-44 left-52 z-10"
            variants={bottomImageVariants}
            initial="initial"
            animate="animate"
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <img
              src="/banner2.png"
              alt="Handshake"
              className="rounded-xl w-[240px] md:w-[400px] h-auto object-cover shadow-md transform scale-x-[-1]"
            />
            <motion.img
              src="/icon-bottom-banner.png"
              alt="Bottom Icon"
              className="w-[100px] md:w-[100px] rotate-180 absolute -left-32 bottom-20 h-auto object-cover shadow-md transform scale-x-[-1] mt-4"
              variants={bottomIconVariants}
              initial="initial"
              animate="animate"
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
