import React from "react";
import data from "../Database.json";
import { useLanguage } from "../help/helpFunction";
import { motion, useTime, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

function Welcome() {
  const lang = useLanguage();
  const Welcome = (
    <div className="absolute z-50">
      <div className="h-[100vh] p-[10%] relative w-[100vw]">
        {/* Home hello des */}

        <motion.h1
          layout
          initial={{ opacity: 0, scale: 0.8, x: -1200 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
            transition: { duration: 0.7, delay: 0.4 },
          }}
          exit={{ opacity: 0 }}
          className="absolute top-[40%] sm:left-[10%] right-[10%] text-right from-white/50 to-white/50 bg-clip-text text-transparent bg-gradient-to-br  animate__animatedanimate__slideInLeft font-black  text-[35px] md:text-[50px] font-[Verdana] lg:text-9xl"
        >
          {data.Navbar.Hero.hello[lang]}
        </motion.h1>
        <motion.h2
          layout
          initial={{ opacity: 0, scale: 0.5, x: 1200 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
            transition: { duration: 0.7, delay: 0.4 },
          }}
          exit={{ opacity: 0 }}
          className="absolute top-[60%] sm:left-[10%] right-[10%] from-sky-100/50 to-sky-200/50 bg-clip-text text-transparent bg-gradient-to-br  text-right animate__animatedanimate__slideInRight lg:text-[30px] font-[Cambria] p-[20px]"
        >
          {data.Navbar.Hero.word[lang]}
        </motion.h2>
      </div>
    </div>
  );

  return Welcome;
}

export default Welcome;
