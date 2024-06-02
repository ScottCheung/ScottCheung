import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Database from "../Database.json";
import { Link } from "react-router-dom";
import { hideRow, useLanguage } from "../help/helpFunction";
import More from "./More";
import { useInView } from "react-intersection-observer";
import ScrollableContainer from "./ScrollableContainer";

const data = Database.PersonalInfo.Education;
const visblecontainer = Database.Animation.Variant.Welcomevisblecontainer;
const StagerFadeInUp = Database.Animation.Transition.StagerFadeInUp;
const item = Database.Animation.Variant.WelcomeItem;
const Welcomevisblecontainer =
  Database.Animation.Variant.Welcomevisblecontainer;
const WelcomeItem = Database.Animation.Variant.WelcomeItem;

function Education({ hideTittle, simpleVer }) {
  const isTittle = hideTittle || false;
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
    // threshold: 0.6,
  });

  const Education = (
    <div className="z-50 ">
      {!isTittle ? (
        <div>
          {/* 一级标题 */}
          <div className="flex justify-center py-12 pt-[10vh] items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                ease: [0.455, 0.03, 0.515, 0.955],
                duration: 1,
              }}
              className="flex items-center justify-center gap-x-[20px]"
            >
              <div className="flex-initial animate__animated animate__zoomIn">
                <i className=" fi text-5xl lg:text-8xl fi-rr-circle-book-open mr-[20px] pt-3 "></i>
              </div>
              <h2 className="font-mono text-5xl font-bold animate__animated animate__zoomIn lg:text-8xl">
                {lang == "1" && "教育"}
                {lang == "0" && "Education"}
              </h2>
              <div className="flex animate__animated animate__rotateIn">
                <div className="flex justify-center">
                  <Link
                    to="#Education"
                    id="Education"
                    style={{ animationDelay: `${0.4}s` }}
                    className="z-50 flex items-center justify-center w-24 h-24 text-center rounded-full shadow-none bg-gray-200/20 hover:text-white hover:bg-sky-900"
                  >
                    <i className="text-3xl fi fi-br-angle-up "></i>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      ) : (
        <></>
      )}

      {/* Item 容器 */}
      <div className=" section-incentive py-[100px]">
        <div className="gallery gallery-align-center gallery-icon-cards">
          <div className="scroll-visblecontainer">
            <div className="item-visblecontainer ">
              <motion.ul
                layout
                variants={Welcomevisblecontainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-30%" }}
                className={`card-set p-[20px] `}
                role="list"
              >
                {/* <ScrollableContainer
                    container={'pl-[40px]'}
                    Button_mt={'mt-[20px]'}
                  > */}
                {data.map((Experience, index) => (
                  <motion.div
                    href={Experience.href}
                    key={index}
                    variants={WelcomeItem}
                    transition={StagerFadeInUp}
                    whileHover={{ scale: 1.001 }}
                    whileTap={{ scale: 0.99 }}
                    className={`gallery-item grid-item current snap-start rounded-[28px]`}
                  >
                    <div className="icon-card card-visblecontainer ">
                      <motion.div className="card " tabIndex={index}>
                        <div
                          className={`card-modifier card-padding has-trigger-button fixed-width transition-all duration-500 ${
                            hideTittle ? "bg-gray-50" : "bg-white/80"
                          }`}
                        >
                          <div className="card-viewport-content">
                            <div className="icon-card-content">
                              <div className="">
                                <div className="flex-shrink-0">
                                  <div
                                    className={` max-w-[120px] h-auto items-center flex justify-center overflow-hidden ${
                                      Experience.tag[0][0] == "Bachelor"
                                        ? "rounded-full bg-white "
                                        : ""
                                    }  `}
                                  >
                                    <img
                                      style={{
                                        animationDelay: `${index * 0.3}s`,
                                      }}
                                      src={Experience.logo}
                                      alt={Experience.university}
                                      className={`rounded-xl animate__animated  animate__zoomIn animate__fast `}
                                    ></img>
                                  </div>
                                </div>
                              </div>
                              <div className="copy-visblecontainer">
                                <div
                                  style={{
                                    animationDelay: `${index * 0.2}s`,
                                  }}
                                  className="flex items-start justify-start py-10 mb-3 gap-x-4 md:flex-col animate__animated animate__zoomIn"
                                >
                                  <div className="typography-card-headline ">
                                    {`${Experience.major[lang][0]}`}
                                    {lang == 1 &&
                                      Experience.major[lang][1]}{" "}
                                  </div>
                                  <div className="typography-card-headline ">
                                    {lang == 0 && Experience.major[lang][1]}
                                    {}
                                  </div>
                                </div>
                                {/* Tag */}
                                <div
                                  className={`${simpleVer || windowWidth < 1024 ? "hidden" : "flex justify-start py-5 space-x-3 text-[15px]"}`}
                                >
                                  <div
                                    style={{
                                      animationDelay: `${index * 0.2}s`,
                                    }}
                                    className="inline-flex justify-center items-center  py-1 font-medium text-white rounded-full px-[20px]  animate__animated animate__zoomIn animate__slow bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 category"
                                  >
                                    {Experience.tag[lang][0]}
                                  </div>
                                  {Experience.tag[lang][1] && (
                                    <div className="inline-flex justify-center items-center py-1 font-medium text-white rounded-full px-[20px]  animate__animated animate__zoomIn animate__slow bg-gradient-to-br from-emerald-500 to-sky-500 ">
                                      {Experience.tag[lang][1]}
                                    </div>
                                  )}
                                </div>
                                <div>
                                  {/* Duration */}
                                  <span
                                    style={{
                                      animationDelay: `${index * 0.3}s`,
                                    }}
                                    className="flex justify-center items-center w-full py-1 font-medium text-center text-white rounded-full px-[20px] text-justify-between animate__animated card-description animate__zoomIn category bg-sky-900 ring-1 ring-inset ring-gray-900/10 hover:bg-gray-700"
                                  >
                                    {Experience.time[lang]}
                                  </span>
                                  <p
                                    style={{
                                      ...hideRow(3),
                                      animationDelay: `${index * 0.3}s`,
                                    }}
                                    className={`${simpleVer || windowWidth < 1024 ? "hidden" : ""} mt-10  text-gray-600 animate__animated animate__fadeInUp card-description dark:text-gray-50`}
                                  >
                                    {Experience.description[lang]}
                                  </p>{" "}
                                  <More color={"blue"} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                      <a
                        className="anz-card-modal-link"
                        href={Experience.href}
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
                    </div>
                  </motion.div>
                ))}
                {/* </ScrollableContainer> */}
              </motion.ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <motion.div className="max-h-[120vh] min-h-[120vh] pb-[30vh]">
        {Education}
      </motion.div>
    </div>
  );
}

export default Education;
