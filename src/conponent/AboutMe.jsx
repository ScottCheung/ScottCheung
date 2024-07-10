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

function SelfDescribing() {
  const lang = useLanguage();
  const [isMobile, setIsMobile] = useState(false);
  const [scrollbarWidth, setScrollbarWidth] = useState(0);
  useEffect(() => {
    const div = document.createElement("div");
    div.style.visibility = "hidden";
    div.style.overflow = "scroll";
    document.body.appendChild(div);
    const scrollbarWidth = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);
    setScrollbarWidth(scrollbarWidth);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1080px)");
    const handleMediaQueryChange = (e) => setIsMobile(e.matches);
    handleMediaQueryChange(mediaQuery);
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () =>
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  const parseText = (text) => {
    const parts = text.split(/({bold}.*?{bold})/).map((part, index) => {
      if (part.startsWith("{bold}") && part.endsWith("{bold}")) {
        return (
          <span
            key={index}
            className="text-white mx-[3px] text-[15px] md:text-[20px] lg:text-[22px]"
          >
            {part.replace(/{bold}/g, "")}
          </span>
        );
      }
      return (
        <span
          className="text-white/50 text-[13px]  md:text-[18px] lg:text-[20px]"
          key={index}
        >
          {part}
        </span>
      );
    });
    return parts;
  };

  const ref1 = useRef(null);

  const viewwidth = window.innerWidth - scrollbarWidth;
  const { scrollYProgress } = useScroll({
    target: ref1,
    offset: ["0vh", "80vh", "280vh", "350vh"], // 调整偏移量使滚动效果更平缓
  });

  // 根据滚动进度计算位移
  const x = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    ["20vw", "0vw", "0vw", "20vw"],
  );
  const y = useTransform(
    scrollYProgress,
    [0, 0.4, 0.5, 1.3, 1],
    ["20vh", "10vh", "0vh", "-60vw", "-145vh"],
  );
  const width = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [
      `${viewwidth * 0.5}px`,
      `${viewwidth}px`,
      `${viewwidth}px`,
      `${viewwidth * 0.5}px`,
    ],
  );
  const target = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7, 1],
    ["-50vw", "0vw", "0vw", "-50vw"],
  );
  const borderBottomRightRadius = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [200, 0, 0, 200],
  );
  const borderTopRightRadius = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [200, 0, 0, 200],
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.8, 1],
    [0, 1, 0.8, 0],
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [0.5, 1, 1, 0.5],
  );

  return (
    <AnimatePresence>
      <motion.div ref={ref1} className=" lg:h-[500vh]  relative w-full block">
        <motion.div
          style={{
            backgroundImage: `url(${data.pic})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            width: isMobile ? "100vw" : width,
            borderTopRightRadius: isMobile ? 0 : borderTopRightRadius,
            borderBottomRightRadius: isMobile ? 0 : borderBottomRightRadius,
            y: isMobile ? 0 : y,
          }}
          className="sticky top-0 z-30 flex flex-col items-center justify-center w-full"
        >
          <motion.span
            style={{
              borderTopRightRadius: isMobile ? 1 : borderTopRightRadius,
              borderBottomRightRadius: isMobile ? 1 : borderBottomRightRadius,
              opacity: isMobile ? 1 : opacity,
            }}
            className="absolute w-full h-full bg-black/75"
          ></motion.span>

          <div className="visblecontainer py-[20vh] z-30">
            <motion.div
              style={{
                opacity: isMobile ? 1 : opacity,
                scale: isMobile ? 1 : scale,
                y: isMobile ? 0 : y,
              }}
              className="z-10 flex items-center mb-12 font-mono font-bold text-white text-8xl"
            >
              <i
                id="AboutMe"
                className="flex fi fi-rr-comment-heart mr-[20px]"
              ></i>
              <p className="flex">{lang === 0 || "0" ? "About me" : "自述"}</p>
            </motion.div>
            <motion.blockquote className="">
              <motion.div
                style={{
                  x: isMobile ? 0 : x,
                  opacity: isMobile ? 1 : opacity,
                  scale: isMobile ? 1 : scale,
                  y: isMobile ? 0 : y,
                }}
                className="float-right"
              >
                <motion.div className="flex">
                  <motion.img
                    className="rounded-full w-[200px] h-[200px] md:w-[250px] md:h-[250px]"
                    src={Database.PersonalInfo.Avatar[0]}
                  ></motion.img>
                </motion.div>
              </motion.div>
              <motion.div
                style={{
                  x: isMobile ? 0 : target,
                  opacity: isMobile ? 1 : opacity,
                  y: isMobile ? 0 : y,
                }}
                className="block "
              >
                {data.description[lang].map((item, index) => (
                  <motion.div className="block mb-[30px] " key={index + item}>
                    <p
                      style={{
                        lineHeight: 1.2353641176,
                        fontWeight: 500,
                        letterSpacing: "-0.022em",
                        fontFamily:
                          "SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif",
                      }}
                    >
                      {parseText(item)}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.blockquote>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default SelfDescribing;
