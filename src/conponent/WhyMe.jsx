import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import Database from "../Database.json";
import { hideRow, bgPic, useLanguage, SelectText } from "../help/helpFunction";
import More from "./More";
import { Link, useNavigate } from "react-router-dom";
import CtButton from "./ctButton";
import { useAppContext } from "../help/ContextManager";
import WhyMeCard from "../conponent/WhyMeCard";

const Welcomevisblecontainer =
  Database.Animation.Variant.Welcomevisblecontainer;
const StagerFadeInUp = Database.Animation.Transition.StagerFadeInUp;
const WelcomeItem = Database.Animation.Variant.WelcomeItem;

function WhyMe({ hideTittle }) {
  const { Components, setComponents, whymeCard, setWhymeCard } =
    useAppContext();
  const data = Database.PersonalInfo.Education;
  const lang = useLanguage();
  const keyfeature = Database.PersonalInfo.WhyMe[lang];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [selectedWhyMeItem, setSelectedWhyMeItem] = useState(null);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const adjustPaddingForScrollbar = () => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    return scrollbarWidth;
  };

  const BanScroll = () => {
    const scrollbarWidth = adjustPaddingForScrollbar(); // 获取滚动条宽度
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`; // 应用动态计算的滚动条宽度
    // document.getElementById('navbar').style.marginRight = `${scrollbarWidth}px`; // 应用动态计算的滚动条宽度
    // document.getElementById('navbar').style.opacity = 0;
  };

  const UnBanScroll = () => {
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "0px"; // 重置paddingRight
    // document.getElementById('navbar').style.marginRight = '0px'; // 重置paddingRight
    // document.getElementById('navbar').style.opacity = 1;
  };

  const openCard = (feature) => {
    setWhymeCard(feature);
    BanScroll();
    setComponents((prevComponents) => ({
      ...prevComponents,
      NavBar: "hide",
      whymeCard: "visible",
    }));
  };

  const closeCard = () => {
    setWhymeCard(null);
    UnBanScroll();
    setComponents((prevComponents) => ({
      ...prevComponents,
      NavBar: "visible",
      whymeCard: "hide",
    }));
  };

  const WhyMe = (
    <div className="w-full h-full  mb-[10vh] relative flex ">
      <div className="w-full h-full ">
        {/* 引导按钮 */}
        <motion.div
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, rotate: 180 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.455, 0.03, 0.515, 0.955],
          }}
          className=""
        ></motion.div>
        {/* 一级标题 */}
        <div
          id="WhyMe"
          className={`${hideTittle ? "hidden" : "mt-[20vh]"} flex justify-center `}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              ease: [0.455, 0.03, 0.515, 0.955],
              duration: 1,
            }}
            className="flex items-center justify-center "
          >
            <div className="">
              <i className="pt-3 mr-3 text-5xl fi lg:text-8xl fi-rr-lightbulb-on"></i>
            </div>
            <h2 className="font-mono text-5xl font-bold lg:text-8xl">
              {lang == 0 && "Why me?"}
              {lang == 1 && "优势"}
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
                    variants={Welcomevisblecontainer}
                    initial="hidden"
                    whileInView="visible"
                    exit={{ opacity: 0 }}
                    viewport={{ once: false, margin: "-30%" }}
                    className="card-set p-[20px] overflow-hidden scroll-smooth "
                    role="list"
                  >
                    {keyfeature.map((feature, index) => (
                      <motion.div
                        // href={feature.href}

                        onClick={() => {
                          if (windowWidth > 1024) {
                            openCard(feature);
                          }
                        }}
                        key={index}
                        variants={WelcomeItem}
                        transition={StagerFadeInUp}
                        whileHover={{ scale: 1.001 }}
                        whileTap={{ scale: 0.99 }}
                        className="gallery-item grid-item current "
                      >
                        <div className="icon-card card-visblecontainer ">
                          <div className="card ">
                            <motion.div
                              layout
                              layoutId={feature.advantage}
                              transition={{
                                duration: 0.9,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                              className={`${
                                hideTittle
                                  ? `${
                                      windowWidth > 768
                                        ? "bg-gray-100 "
                                        : "bg-gray-900/80"
                                    }  `
                                  : "bg-white/40  -z-30"
                              }  card-modifier fixed-width bg-button card-padding has-trigger-button`}
                            >
                              <motion.div className="card-viewport-content">
                                <div className="icon-card-content">
                                  <div className="">
                                    <motion.div>
                                      <motion.div
                                        layoutId={feature.advantage + "icon"}
                                        transition={{
                                          duration: 0.9,
                                          ease: [0.22, 1, 0.36, 1],
                                        }}
                                        className="flex items-center justify-start"
                                      >
                                        <i
                                          style={{
                                            animationDelay: `${index * 0.2}s`,
                                          }}
                                          className={`${
                                            feature.icon
                                          } fi animate__animated animate__delay-3s  animate__zoomIn  text-6xl ${
                                            feature.color1 +
                                            " " +
                                            feature.color2
                                          } flex-shrink-0 bg-clip-text text-transparent bg-gradient-to-br`}
                                        ></i>
                                      </motion.div>
                                      <div className="flex justify-start py-6 sm:py-3">
                                        <motion.div
                                          layoutId={feature.advantage + "title"}
                                          transition={{
                                            duration: 0.9,
                                            ease: [0.22, 1, 0.36, 1],
                                          }}
                                          style={{
                                            animationDelay: `${index * 0.2}s`,
                                          }}
                                          className={`animate__animated  animate__delay-3s animate__zoomIn animate__slow typography-card-headline ${
                                            feature.color1 +
                                            " " +
                                            feature.color2
                                          } flex-shrink-0 bg-clip-text text-transparent bg-gradient-to-br`}
                                        >
                                          {feature.advantage}
                                        </motion.div>
                                      </div>
                                    </motion.div>
                                  </div>
                                  <div
                                    className={`${
                                      hideTittle ? "hidden" : ""
                                    } copy-visblecontainer md:h-[450px] h-[400px] overflow-hidden`}
                                  >
                                    <div
                                      style={{
                                        ...hideRow(3),
                                        animationDelay: `${index * 0.3}s`,
                                      }}
                                      className={`text-full  my-7 animate__animated  animate__fadeInUp text-gray-600  card-description `}
                                    >
                                      {feature.description}
                                    </div>
                                    <More
                                      color={`  ${
                                        feature.color1 + " " + feature.color2
                                      } bg-gradient-to-br text-transparent bg-clip-text `}
                                    />
                                  </div>
                                </div>
                              </motion.div>
                              <motion.span
                                layoutId={feature.pic[0]}
                                className="absolute top-0 left-0 right-0  bottom-0 -z-20 overflow-hidden rounded-[28px] first-letter:"
                                style={{
                                  ...(!hideTittle
                                    ? bgPic(
                                        feature.pic[0],
                                        "100% auto",
                                        "center bottom",
                                      )
                                    : {}),
                                }}
                              ></motion.span>
                            </motion.div>
                          </div>
                          {(windowWidth < 1024 || hideTittle) && (
                            <a
                              href={feature.href}
                              className="z-50 anz-card-modal-link "
                            >
                              <button
                                className="card-modal-trigger modal-trigger card-cta-modal-button"
                                type="link"
                              >
                                <div className="modal-trigger-visblecontainer">
                                  <span
                                    className={`${
                                      hideTittle
                                        ? `${
                                            feature.color1 +
                                            " " +
                                            feature.color2
                                          } bg-gradient-to-br card-cta-modal-button-icon opacity-80`
                                        : "card-cta-modal-button-icon"
                                    }  `}
                                  >
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
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </motion.ul>
                </div>
              </div>
            </div>
          </section>
        </AnimatePresence>
      </div>
      {Components.whymeCard === "visible" && <WhyMeCard />}
    </div>
  );

  return WhyMe;
}

export default WhyMe;
