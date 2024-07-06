import React, { useState, useEffect, useRef } from "react";
import Database from "../Database.json";
import { Link } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  easeInOut,
} from "framer-motion";
import { hideRow, bgPic, useLanguage } from "../help/helpFunction";
const data = Database.PersonalInfo.SelfDescribing;
const floateMenu = {
  start: { opacity: 0, scale: 0 },
  end: {
    scale: 1,
    opacity: 1,
  },
};

function SelfDescribing() {
  const lang = useLanguage();
  const parseText = (text) => {
    const parts = text.split(/({bold}.*?{bold})/).map((part, index) => {
      if (part.startsWith("{bold}") && part.endsWith("{bold}")) {
        return (
          <span
            key={index}
            className="text-white mx-[3px] font-semibold text-[15px]  md:text-[20px]"
          >
            {part.replace(/{bold}/g, "")}
          </span>
        );
      }
      return (
        <span className="text-white/70 text-[13px]  md:text-[18px]" key={index}>
          {part}
        </span>
      );
    });
    return parts;
  };
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["-100vh ", "-40vh"],
  });

  // 根据滚动进度计算位移
  const x = useTransform(scrollYProgress, [0, 1], ["30vw", "0vw"]);
  const y = useTransform(scrollYProgress, [0, 1], ["-30vh", "0vh"]);
  const width = useTransform(scrollYProgress, [0, 1], ["0vw", "100vw"]);
  const target = useTransform(scrollYProgress, [0, 1], ["-30vw", "0vw"]);
  const borderTopRightRadius = useTransform(scrollYProgress, [0, 1], [200, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  const SelfDescribing = (
    <section
      className={`smoothchange items-center bg-scroll bg-center relative flex flex-col justify-center w-full  `}
      style={{
        backgroundImage: `url(${data.pic})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <span className="absolute w-full h-full bg-black opacity-70 "></span>
      <div className="visblecontainer    sticky top-0 pt-[20vh]">
        <motion.div
          style={{ opacity, scale, y: target }}
          transition={{
            ease: [0.455, 0.03, 0.515, 0.955],
            duration: 1,
          }}
          className="z-10 py-24 my-12 font-mono font-bold text-white text-8xl"
        >
          <i
            id="AboutMe"
            className="fi fi-rr-comment-heart text-5xl lg:text-8xl mr-[20px] pt-3 "
          ></i>
          {lang == 0 && "About me"}
          {lang == 1 && "自述"}
        </motion.div>
        <div className="pb-48 ">
          <motion.blockquote ref={ref} className="">
            <motion.div
              style={{ x, y, borderTopRightRadius, opacity, scale }}
              className="float-right"
            >
              <motion.div className="flex">
                <motion.img
                  className="rounded-full w-[200px] h-[200px] md:w-[250px] md:h-[250px]   "
                  src={Database.PersonalInfo.Avatar[0]}
                ></motion.img>
              </motion.div>
            </motion.div>
            <motion.div
              style={{ x: target, opacity }}
              className="block leading-loose "
            >
              {data.description[lang].map((item, index) => (
                <motion.div className="block mb-[30px]" key={index + item}>
                  <p>{parseText(item)}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.blockquote>
        </div>
      </div>
    </section>
  );

  return <motion.div className={``}>{SelfDescribing}</motion.div>;
}

export default SelfDescribing;
