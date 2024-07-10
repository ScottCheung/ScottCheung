import React, { useState, useEffect } from "react";
import Navbar from "../conponent/NavBar/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import database from "../Database.json";
import Contact from "../conponent/Contact";
import { useLanguage } from "../help/helpFunction";
import { Link } from "react-router-dom";

export default function Profile() {
  document.body.style.overflowX = "hidden";
  const lang = useLanguage();
  const infos = database.PersonalInfo.Infos[lang];
  const visblecontainer = database.Animation.Variant.fastWelcomevisblecontainer;
  const LeftappearBar = database.Animation.Transition.LeftappearBar;
  const item = database.Animation.Variant.LeftWelcomeItem;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isExpanded, setIsExpanded] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="overflow-hidden profile-page">
      <Navbar topTextColor={true} />
      <main className="overflow-hidden profile-page">
        <motion.div
          initial={{ opacity: 0, y: "-60px", scale: 0.95 }}
          transition={{ ease: [0.455, 0.03, 0.515, 0.955], duration: 0.9 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: "0px", scale: 1 }}
          className="relative block"
          style={{ height: "400px" }}
        >
          <div
            className="absolute top-0 w-full h-full bgrid-colsenter bgrid-colsover"
            style={{
              backgroundImage:
                "url('https://3o.hk/images/2024/01/22/profilebg.jpg')",
            }}
          >
            <span
              id="blackOverlay"
              className="absolute w-full h-full bg-black opacity-50"
            ></span>
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 top-auto w-full overflow-hidden pointer-events-none"
            style={{ height: "700px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden "
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-[#f5f5f7]"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </motion.div>
        <section className="relative py-16 ">
          <div className="visblecontainer ">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-[28px] -mt-[150px] animate__animated animate__fadeInUp ">
              <div className="px-6">
                <div className="flex justify-center mb-64">
                  <div className="flex justify-center w-full">
                    <div className="">
                      <img
                        alt="..."
                        src="https://3o.hk/images/2024/01/14/avatar.md.jpg"
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-[75px] animate__animated animate__zoomIn"
                        style={{ maxWidth: "150px" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-12 text-center">
                  <h3 className="mb-2 text-5xl font-[600] leading-normal text-gray-800 animate__animated animate__zoomIn">
                    张贤哲 | Scott Zhang
                  </h3>
                  <a
                    href="https://maps.app.goo.gl/Eg2DYKQuALM3ioqg7"
                    className="mt-0 mb-2 text-xl font-[600] leading-normal text-gray-500 uppercase"
                  >
                    <i className="mr-2 text-gray-500 fi fi-rr-marker"></i>

                    {lang == 0 && "Sydney, Australia"}
                    {lang == 1 && "澳大利亚，悉尼"}
                  </a>
                  <div className="mt-10 mb-2 text-gray-700"></div>
                </div>
                <div className="py-10 mt-10 text-center border-t">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full px-4 lg:w-9/12">
                      <p className="mb-4 text-3xl leading-relaxed text-red-500 ">
                        {lang == 0 &&
                          "Please note that all these informations is private. Please respect privacy and please do not spread it."}
                        {lang == 1 &&
                          "请不要随意传播个人信息，请尊重他人隐私，谢谢。"}
                      </p>
                      <button
                        className="font-normal text-pink-500 animate__animated animate__zoomIn"
                        onClick={(e) =>
                          e.preventDefault() & setIsExpanded(!isExpanded)
                        }
                      >
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className={`animate__animated hidden animate__zoomIn ${
                            isExpanded ? "hidden" : ""
                          }`}
                        >
                          {lang == 0 && "Show QA Info"}
                          {lang == 1 && "展开QA问答"}
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className={`animate__animated  animate__zoomIn ${
                            !isExpanded ? "hidden" : ""
                          }`}
                        >
                          {lang == 0 && "Show Basic Information"}
                          {lang == 1 && "展开基本信息"}
                        </motion.div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="grid visblecontainer section-sapphire pb-24 mb-[15vh]">
        <div className="grid-item large-span-12 tile-body-no-pad-left tile-body-no-pad-right tile-body-no-pad-bottom grid-item-stickers ">
          <div className="tile tile-rounded ">
            <motion.div
              variants={visblecontainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white tile-content "
            >
              {isExpanded ? (
                <>
                  {" "}
                  {/* Further Information */}
                  <div className="tile-header ">
                    <div className="flex justify-between">
                      <h3 className="py-16 mx-8 tile-headline typography-subsection-headline animate__animated animate__zoomIn">
                        {lang == 0 && "QA Info"}
                        {lang == 1 && "QA信息"}
                      </h3>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="py-16 tile-headline animate__animated animate__zoomIn"
                      >
                        <a href="/">
                          {lang == 0 && "more >"}
                          {lang == 1 && "更多  >>"}
                        </a>
                      </motion.div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {" "}
                  {/* Basic Information */}
                  <div className="tile-header ">
                    <h3
                      style={{
                        lineHeight: 1.19048,
                        fontWeight: 600,
                        letterSpacing: "0.011em",
                      }}
                      className="py-4 text-[30px] text-gray-900 animate__animated animate__zoomIn"
                    >
                      {lang == 0 && "Basic Information"}
                      {lang == 1 && "基本信息"}
                    </h3>
                    <div
                      className={`grid ${
                        windowWidth > 786 ? "grid-cols-2" : "grid-cols-1"
                      } `}
                    >
                      {infos.map((info, index) => {
                        // 判断是否为 "Age"
                        if (info.cont === "Age" || info.cont === "年龄") {
                          // 计算年份，这里假设 birthYear 是存储出生年份的变量
                          const currentYear = new Date().getFullYear();
                          const age = currentYear - 1997 - 1;
                          info.icon = age;
                        }

                        return (
                          <motion.div
                            key={index}
                            variants={item}
                            transition={LeftappearBar}
                            whileHover={{ scale: 1.001 }}
                            whileTap={{ scale: 0.99 }}
                            layout
                            style={{ animationDelay: `${0.05 * index}s` }}
                            className="py-4 mx-8 border-b md:py-8 animate__animated animate__fadeInRight"
                          >
                            <div className="flex items-center">
                              <div className="flex-shrink-0">
                                <i
                                  className={`text-[17px] text-gray-900 fi ${info.label}`}
                                ></i>
                              </div>
                              <div className="flex-1 min-w-0 ms-4">
                                <p className="text-3xl font-medium text-gray-900 truncate darrk:text-white">
                                  {info.cont}
                                </p>
                              </div>
                              <div className="inline-flex items-center text-2xl text-gray-900 lg:text-3xl darrk:text-white">
                                {info.icon}
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </div>
          <div className="min-h-[20vh]"></div>
        </div>
      </div>
      <Contact />
    </div>
  );
}
