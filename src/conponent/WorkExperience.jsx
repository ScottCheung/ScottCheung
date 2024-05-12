import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Database from "../Database.json";
import { Link } from "react-router-dom";
import { hideRow, bgPic, useLanguage } from "../help/helpFunction";
import More from "./More";
import { useInView } from "react-intersection-observer";

const WorkExperiences = Database.PersonalInfo.WorkExperience;
const visblecontainer = Database.Animation.Variant.Welcomevisblecontainer;
const StagerFadeInUp = Database.Animation.Transition.StagerFadeInUp;
const item = Database.Animation.Variant.WelcomeItem;

const Welcomevisblecontainer =
  Database.Animation.Variant.Welcomevisblecontainer;
const WelcomeItem = Database.Animation.Variant.WelcomeItem;

function WorkExperience() {
  const lang = useLanguage();
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
  const [ref, inView] = useInView({
    triggerOnce: true,
    // threshold: 0.75,
  });

  const WorkExperience = (
    <div id="WorkExperience" className="h-min-[100vh]">
      <div>
        <div className="">
          {/* 一级标题 */}
          <div className="flex justify-center ">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                ease: [0.455, 0.03, 0.515, 0.955],
                duration: 1,
              }}
              className="flex items-center justify-center animate__animated animate__fadeInUp"
            >
              <div className="animate__animated animate__zoomIn">
                <i className=" fi fi-rr-tool-box text-5xl lg:text-8xl mr-[20px] pt-3 "></i>
              </div>
              <h2 className="font-mono text-5xl font-bold animate__animated animate__zoomIn lg:text-8xl">
                {lang == 0 && "Work Experience"}
                {lang == 1 && "工作经历"}
              </h2>
            </motion.div>
          </div>
          {/* Item 容器 */}
          <AnimatePresence>
            <section className="section section-incentive background-alt staggered-end">
              <div className="gallery gallery-align-start gallery-icon-cards">
                <div className="scroll-visblecontainer">
                  <div className="item-visblecontainer">
                    <motion.ul
                      layout
                      className="card-set p-[20px] overflow-hidden"
                      role="list"
                    >
                      {WorkExperiences[0].map((Experience, index) => (
                        <motion.div
                          // href={Experience.href}
                          key={index}
                          variants={item}
                          transition={StagerFadeInUp}
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                          layout
                          ref={ref}
                          style={{ animationDelay: `${0.15 * index + 0.4}s` }}
                          className={`gallery-item grid-item current  ${
                            windowWidth > 700
                              ? inView
                                ? "welcomeanimation"
                                : "Exitanimation"
                              : null
                          }`}
                        >
                          <div className="icon-card card-visblecontainer">
                            <div className="card ">
                              <div className="bg-white/20 card-modifier card-padding has-trigger-button fixed-width bg-button">
                                {windowWidth > 1024 ? (
                                  <a
                                    // href={`${Experience.web}`}
                                    className="flex-none"
                                  >
                                    <div className="flex-shrink-0">
                                      <div className="rounded-[10px] max-w-[120px] h-auto items-center flex justify-center">
                                        <img
                                          style={{
                                            animationDelay: `${index * 0.3}s`,
                                          }}
                                          src={Experience.logo}
                                          alt={Experience.university}
                                          className={`rounded-[10px] animate__animated  animate__zoomIn animate__fast `}
                                        ></img>
                                      </div>
                                      <div className="flex justify-start py-10 ">
                                        <div
                                          style={{
                                            animationDelay: `${index * 0.2}s`,
                                          }}
                                          className={`inline-flex animate__animated animate__zoomIn bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 category text-white rounded-3xl font-medium py-1 px-5 ${
                                            Experience.tag[0] ? "" : "hidden"
                                          }`}
                                        >
                                          {Experience.tag[0]}
                                        </div>

                                        <div
                                          style={{
                                            animationDelay: `${index * 0.2}s`,
                                          }}
                                          className={`inline-flex animate__animated animate__zoomIn text-white rounded-3xl bg-gradient-to-br from-emerald-500 to-sky-500 font-medium py-1 px-5 ${
                                            Experience.tag[1] ? "" : "hidden"
                                          }`}
                                        >
                                          {Experience.tag[1]}
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                ) : (
                                  <></>
                                )}
                                <div className="flex flex-col">
                                  {windowWidth > 1024 ? (
                                    <div
                                      style={{
                                        animationDelay: `${index * 0.2}s`,
                                      }}
                                      className="flex flex-wrap items-start justify-start animate__animated animate__zoomIn "
                                    >
                                      <div className="text-left typography-card-headline">
                                        {`${Experience.tittle[0]}`}
                                        {"-"}
                                        {Experience.tittle[1]}
                                      </div>
                                    </div>
                                  ) : (
                                    <div className="flex justify-between">
                                      <div>
                                        <div className="text-white bg-gray-700 rounded-[14px] my-3 text-center animate__animated  animate__zoomIn animate__slow font-semibold  text-[50px]">
                                          {Experience.tittle[0].charAt(0)}
                                          {Experience.tittle[1].charAt(0)}
                                        </div>
                                        <div className="ml-2 animate__animated  animate__zoomIn animate__slow text-left text-[12px]">
                                          {Experience.tittle[0]}-
                                          {Experience.tittle[1]}
                                        </div>
                                      </div>

                                      <a href={`/`}>
                                        <div className="flex-shrink-0">
                                          <div className="rounded-[10px] max-w-[70px] h-auto items-center flex justify-end">
                                            <img
                                              src={Experience.logo}
                                              alt={Experience.university}
                                              style={{
                                                animationDelay: `${
                                                  index * 0.3
                                                }s`,
                                              }}
                                              className={`animate__animated  animate__zoomIn rounded-[10px] animate__animated  animate__zoomIn`}
                                            ></img>
                                          </div>
                                          <div className="animate__animated  animate__zoomIn  py-4 flex justify-center text-[10px]">
                                            <div
                                              style={{
                                                animationDelay: `${
                                                  index * 0.2
                                                }s`,
                                              }}
                                              className={`inline-flex animate__animated animate__zoomIn bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 category text-white rounded-3xl font-medium  px-3 ${
                                                Experience.tag[0]
                                                  ? ""
                                                  : "hidden"
                                              }`}
                                            >
                                              {Experience.tag[0]}
                                            </div>
                                            <div
                                              style={{
                                                animationDelay: `${
                                                  index * 0.2
                                                }s`,
                                              }}
                                              className={`inline-flex animate__animated animate__zoomIn text-white rounded-3xl bg-gradient-to-br from-emerald-500 to-sky-500 font-medium  px-3 ${
                                                Experience.tag[1]
                                                  ? ""
                                                  : "hidden"
                                              }`}
                                            >
                                              {Experience.tag[1]}
                                            </div>
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                  )}

                                  <div
                                    className={` justify-start flex  flex-col mt-8 mb-4 `}
                                  >
                                    <span
                                      style={{
                                        animationDelay: `${index * 0.3}s`,
                                      }}
                                      className="w-full px-5 py-1 font-medium text-center text-white animate__animated animate__zoomIn category rounded-3xl bg-sky-900 ring-1 ring-inset ring-gray-900/10 hover:bg-gray-700"
                                    >
                                      {Experience.time}
                                    </span>
                                  </div>

                                  <p
                                    style={{
                                      animationDelay: `${index * 0.3}s`,
                                    }}
                                    className="w-full font-semibold text-left text-gray-700 animate__animated animate__fadeInUp card-description"
                                  >
                                    {Experience.company}
                                  </p>
                                  <div
                                    style={{ ...hideRow(2) }}
                                    className="w-full text-justify animate__animated animate__fadeInUp card-description "
                                  >
                                    {Experience.description}{" "}
                                  </div>
                                  <More color={"blue"} />
                                </div>
                              </div>
                            </div>
                          </div>
                          <a
                            className="anz-card-modal-link"
                            // href={Experience.href}
                            aria-label=""
                          >
                            <button
                              className="card-modal-trigger modal-trigger card-cta-modal-button"
                              type="link"
                            >
                              <div className="modal-trigger-visblecontainer">
                                <span className="card-cta-modal-button-icon">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="8 8 20 20"
                                    className="card-cta-modal-button-small-icon card-modal-button-small-icon"
                                  >
                                    <path d="M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z"></path>
                                  </svg>
                                </span>
                              </div>
                            </button>
                          </a>
                        </motion.div>
                      ))}
                    </motion.ul>
                  </div>
                </div>
              </div>
            </section>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );

  return <div className="">{WorkExperience}</div>;
}

export default WorkExperience;
