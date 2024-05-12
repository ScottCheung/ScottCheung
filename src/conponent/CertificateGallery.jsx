import React, { useState, useRef, useEffect } from "react";
import Navbar from "./Navbar";
import Database from "../Database.json";
import { useLanguage } from "../help/helpFunction";
import { useParams, useNavigate } from "react-router-dom";

import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useAppContext } from "../help/ContextManager";
const StagerFadeInUp = Database.Animation.Transition.StagerFadeInUp;
const Welcomevisblecontainer = {
  hidden: {
    transition: {},
  },
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const WelcomeItem = Database.Animation.Variant.WelcomeItem;

function CertificateGallery() {
  const lang = useLanguage();
  const picturesDate = Database.PersonalInfo.Certificates[lang];
  const CertificateGallery = (
    <div className="flex items-center justify-center w-full py-[20vh]">
      <motion.div
        variants={Welcomevisblecontainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-30%" }}
        className="relative grid w-full"
      >
        {picturesDate.map((item, index) => (
          <motion.a
            key={index}
            href={item.src}
            variants={WelcomeItem}
            transition={StagerFadeInUp}
            whileHover={{ scale: 1.001 }}
            whileTap={{ scale: 0.99 }}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start justify-center large-span-2 medium-span-3 small-span-6 py-[60px]"
          >
            <motion.div
              key={index}
              className="py-[20px] flex flex-col items-start justify-start "
            >
              <div className="h-auto  max-h-[100px]  max-w-full  rounded-[14px] flex justify-center items-end ">
                <img
                  className="flex h-auto max-w-full"
                  src={item.src.replace(
                    /\.(png|jpg|jpeg|gif|bmp|svg|webp)$/,
                    ".md.$1",
                  )}
                  alt={item.name}
                />
              </div>

              <div className="flex flex-col p-2 text-gray-500 ">
                <p className="text-[20px] font-bold h-[70px]">{item.award}</p>
                <p className="text-[15px]">{item.activity}</p>
              </div>
            </motion.div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );

  return CertificateGallery;
}

export default CertificateGallery;
