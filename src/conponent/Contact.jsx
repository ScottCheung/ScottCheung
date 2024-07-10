import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Database from "../Database.json";
import { useLanguage } from "../help/helpFunction";
import { Link } from "react-router-dom";
import Toast from "./toast";
import ScrollableContainer from "./ScrollableContainer";
const ColorMapping = [
  "from-red-700 to-red-500",
  "from-orange-500 to-amber-500",
  "from-amber-400 to-yellow-400",
  "from-sky-500 to-emerald-500",
  "from-cyan-500 to-blue-500",
  "from-indigo-500 to-pink-500",
];
const data = Database.PersonalInfo.Contacts;
const codes = Database.PersonalInfo.ContactsScanCode;
const Welcomevisblecontainer =
  Database.Animation.Variant.Welcomevisblecontainer;
const StagerFadeInUp = Database.Animation.Transition.StagerFadeInUp;
const WelcomeItem = Database.Animation.Variant.WelcomeItem;

function Contact({ isTopOut }) {
  const lang = useLanguage();
  const infos = Database.PersonalInfo.Infos[lang];
  const isOut = isTopOut; //True of false
  const Contact = (
    <div className={`overflow-hidden h-[100vh] flex relative`}>
      <div
        className="w-full h-full overflow-hidden  bg-center bg-cover pb-[50px]"
        style={{
          backgroundImage: `url(${data.bg})`,
        }}
      >
        <span
          className={`w-full h-full absolute bg-black  ${
            isOut ? "opacity-50" : "opacity-60"
          }  `}
        ></span>
        <div className="pt-[150px]">
          <AnimatePresence>
            <section className="relative section-incentive background-alt staggered-end">
              <div className="blackoverlay">
                <div
                  className={`gallery gallery-align-start gallery-icon-cards ${
                    isOut ? "" : ""
                  } `}
                >
                  <ScrollableContainer
                    gap={10}
                    containerPY={"lg:pt-[50px]"}
                    textColor={"text-white"}
                    header={{
                      cont: lang == 0 ? "Contact" : "联络",
                      icon: "fi-rr-following",
                    }}
                  >
                    {data.items.map((type, index) => (
                      <motion.div
                        data-popover-target={`copy-${index}`}
                        variants={WelcomeItem}
                        transition={StagerFadeInUp}
                        href={type.link}
                        key={index}
                        whileHover={{ scale: 1.001 }}
                        whileTap={{ scale: 0.99 }}
                        layout
                        // className=""
                        className={
                          isOut
                            ? "bg-black/50 backdrop-blur-[80px] shadow-xl "
                            : "backdrop-blur-lg bg-white/20 " +
                              "col-span-6 group p-[14px] lg:p-[28px] rounded-[14px] lg:rounded-[28px] relative flex-shrink-0 lg:w-[300px] h-auto md:h-auto"
                        }
                      >
                        <div>
                          <div className={`items-center flex justify-start `}>
                            <i
                              style={{
                                animationDelay: `${index * 0.3}s`,
                              }}
                              className={`${type.icon} text-white text-[23px] lg:text-6xl  animate__animated  animate__zoomIn  `}
                            ></i>
                          </div>

                          <div
                            className={`font-[600]  text-[12px] md:text-[15px] lg:text-[27px]  text-white lg:pt-[10px] lg:pb-[30px]`}
                          >
                            {type.type[lang]}{" "}
                          </div>
                          <p
                            style={{
                              animationDelay: `${index * 0.3}s`,
                            }}
                            className={` animate__animated text-[13px]  animate__fadeInUp   text-justify 
                                            text-white/50`}
                          >
                            {type.name}
                          </p>

                          <button
                            onClick={() => {
                              const tempInput = document.createElement("input");
                              tempInput.value = type.name;
                              document.body.appendChild(tempInput);
                              tempInput.select();
                              document.execCommand("copy");
                              document.body.removeChild(tempInput);
                              {
                                lang == 0 &&
                                  Toast(
                                    "success",
                                    `you have added ${type.type[0]} info into your clipboard`,
                                    3000,
                                  );
                              }
                              {
                                lang == 1 &&
                                  Toast(
                                    "success",
                                    `您已成功添加 ${type.type[1]}信息 到您的剪贴板`,
                                    3000,
                                  );
                              }
                            }}
                            className="absolute top-0 bottom-0 left-0 right-0 w-full h-full "
                          >
                            <span
                              className={`absolute  ${innerWidth < 1024 ? " top-[14px] right-[14px] w-[30px] h-[30px]" : "right-[28px] bottom-[28px] w-[40px] h-[40px]"} bg-black/30 group-hover:bg-black rounded-full  flex justify-center items-center`}
                              type="link"
                            >
                              <span
                                className={
                                  innerWidth < 1024
                                    ? `w-[15px] h-[15px]`
                                    : `w-[20px] h-[20px]`
                                }
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  className="fill-white"
                                >
                                  <path d="M17.25,8.51H11.5V2.75A1.5,1.5,0,0,0,10,1.25h0a1.5,1.5,0,0,0-1.5,1.5V8.5H2.75a1.5,1.5,0,0,0,0,3H8.5v5.75a1.5,1.5,0,0,0,1.5,1.5h0a1.5,1.5,0,0,0,1.5-1.5V11.5h5.75a1.5,1.5,0,0,0,0-3Z"></path>
                                </svg>
                              </span>
                            </span>
                          </button>
                        </div>

                        <div className="absolute -top-[50px] left-0 right-0 z-50 group-hover:flex overflow-visible justify-center w-full animate__fast text-white rounded-full shadow-2xl hidden animate__animated animate__fadeInUp backdrop-blur-md bg-black/80 darrk:text-gray-400 darrk:border-gray-600 darrk:bg-gray-800">
                          <p className="px-6 py-4 text-center text-[15px]">
                            {lang == 0 && "Copy "}
                            {lang == 1 && "复制 "}
                            {type.type[lang]}
                            {lang == 0 && " into your clipboard."}
                            {lang == 1 && " 到剪贴板。"}
                          </p>
                          <div data-popper-arrow></div>
                        </div>
                      </motion.div>
                    ))}
                  </ScrollableContainer>
                  <div className="flex justify-center"></div>
                  {/* Contact way */}
                  <div className="py-12 sm:py-32 ">
                    <div className="visblecontainer">
                      <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 2, delay: 0.3 }}
                        className="flex items-center justify-between px-20 "
                      >
                        {data.items.map((type, index) => (
                          <motion.li
                            key={index}
                            whileHover={{ scale: 1.001 }}
                            whileTap={{ scale: 0.99 }}
                            transition={{ duration: 0.2 }}
                            layout
                            className="group"
                          >
                            <a href={type.link} className="flex-shrink-0">
                              <div className="flex items-center justify-center">
                                <i
                                  style={{
                                    animationDelay: `${index * 0.15}s`,
                                  }}
                                  className={`${type.icon} text-white text-3xl lg:text-5xl animate__animated  animate__zoomIn `}
                                ></i>
                              </div>
                              <div className="absolute w-[200px] -top-[50px] left-0 right-0 z-50 animate__fast group-hover:flex overflow-visible justify-center text-white rounded-full shadow-2xl duration-100 hidden animate__animated animate__fadeInUp backdrop-blur-md bg-white/20 darrk:text-gray-400 darrk:border-gray-600 darrk:bg-gray-800">
                                <p className="px-6 py-4 text-center  text-[15px]">
                                  {lang == 0 && "Go to "}
                                  {lang == 1 && "访问 "}
                                  {type.type[lang]}
                                </p>
                              </div>
                            </a>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>
                  </div>
                  {/* Scan Code */}
                  <div className="px-10 py-12 ">
                    <div className="visblecontainer max-w-7xl">
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 2, delay: 0.6 }}
                        className=" flex justify-center hidden items-center space-x-[90px]"
                      >
                        {codes.map((code, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ scale: 1.001 }}
                            whileTap={{ scale: 0.99 }}
                            layout
                            data-popover-target={`code-${index}`}
                            className="flex-shrink-0"
                          >
                            <div className="flex flex-col items-center">
                              <div className="p-3 bg-gray-100 rounded-[10px]">
                                <img
                                  src={code.codepic}
                                  style={{
                                    animationDelay: `${index * 0.3}s`,
                                  }}
                                  width={60}
                                  className={`text-white text-3xl animate__animated  animate__zoomIn`}
                                ></img>
                              </div>
                              <div className="py-4 text-center text-white card-description">
                                {code.lable[lang]}
                              </div>
                            </div>
                            <div
                              data-popover
                              id={`code-${index}`}
                              role="tooltip"
                              className="absolute z-10 invisible rounded-[14px] inline-flex w-64 text-white transition-opacity duration-300 backdrop-blur-md bg-black/20 shadow-2xl opacity-0 darrk:text-gray-400 darrk:border-gray-600 darrk:bg-gray-800"
                            >
                              <div className="px-6 py-4">
                                <p className="text-[13px] text-center font-mono">
                                  {code.des[lang]}
                                </p>
                                <div className="text-center text-[16px]">
                                  {code.expression}
                                </div>
                              </div>
                              <div data-popper-arrow></div>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                  <footer className="flex justify-center my-12 text-[15px] text-white text-base-content">
                    <p>
                      Copyright © 2023-2024 - All rights reserved by Xianzhe
                    </p>
                  </footer>
                </div>
              </div>
            </section>
            {/* <Toast type={"success"} message={"ssss"}/> */}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );

  return Contact;
}

export default Contact;
