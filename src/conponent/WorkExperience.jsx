import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Database from "../Database.json";
import { Link } from "react-router-dom";
import { hideRow, bgPic, useLanguage } from "../help/helpFunction";
import More from "./More";
import { useInView } from "react-intersection-observer";
import CtButton from "./ctButton";
import { useAppContext } from "../help/ContextManager";

const WorkExperiences = Database.PersonalInfo.WorkExperience;
const visblecontainer = Database.Animation.Variant.Welcomevisblecontainer;
const StagerFadeInUp = Database.Animation.Transition.StagerFadeInUp;
const item = Database.Animation.Variant.WelcomeItem;
const h1 = `font-sans tracking-wide text-sky-700 text-[30px] md:text-[50px]  font-bold  transition-all duration-1000`;
const normaltext = "text-[15px] text-jusify transition-all duration-1000";
const h2 = `flex text-[30px]  font-black text-sky-700 group-hover:text-sky-400,
)} gap-x-[15px] items-center transition-all duration-1000`;
const printWidth = "max-w-[1300px] mt-[50px]";
const icon = `w-[15px] text-[15px] mr-[5px] mt-[2px]  transition-all duration-1000`;
const division = `hidden items-center md:flex md:flex-1 h-[2px] m-0 rounded-full bg-sky-700 opacity-10  transition-all duration-1000`;

const h3 = `text-[15px] font-black flex items-center `;
const timetext = `text-2xl font-[500] text-gray-400  transition-all duration-1000`;
const whymeIcon = `text-[20px] flex justify-center items-center text-gray-400 group-hover:text-sky-700`;
const whymelable = `text-[15px] text-gray-400 group-hover:text-sky-700`;
const contentContainer = `flex-1 flex flex-col justify-between `;

const Welcomevisblecontainer =
  Database.Animation.Variant.Welcomevisblecontainer;
const WelcomeItem = Database.Animation.Variant.WelcomeItem;
const divisionline = `flex duration-0 flex flex-1 h-[5px]  rounded-full bg-sky-700  transition-all duration-1000`;
const cardData = [
  {
    id: 0,
    title: "JOB TITTLE",
    company: "JOB company",
    image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-00.jpg",
    backgroundColor: "bg-red-500",
    skill: [
      "Neo4j",
      "JavaScript",
      "React",
      "D3",
      "Tailwind",
      "Framer Motion",
      "Chrome DevTools",
      "Figma",
    ],
    points: [
      {
        point: "Interface and Interaction Design",
        description:
          "Individually designed and implemented 2 complex interfaces, 5 medium inferfaces and over 20 interaction logics, using Figma to enhance design efficiency by 30%, ensuring intuitive and smooth user experiences.",
      },
      {
        title: "Data Visualization Component Development",
        description:
          "Developed 25 fully customized React and D3.js data visualization components from scratch, enabling real-time graphical representation of complex data relationships.",
      },
      {
        title: "Animation and Visual Effects Design",
        description:
          "Individually Designed and implemented over 40 UI animations and visual effects using Framer Motion and other animation libraries, boosting user interaction satisfaction by 80% and enhancing visual appeal. Optimized animation performance by 30% using Google performance analysis tools.",
      },
      {
        title: "Frontend-Backend Integration",
        description:
          "Led frontend operations, successfully conducted over 10 large-scale data integration tests with backend services, ensuring 99% system stability and data accuracy.",
      },
    ],
    period: "Feb 2024 - May 2024",
  },
  {
    id: 1,
    title: "JOB TITTLE",
    company: "JOB company",
    image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-02.jpg",
    backgroundColor: "bg-red-500",
    skill: [
      "Neo4j",
      "JavaScript",
      "React",
      "D3",
      "Tailwind",
      "Framer Motion",
      "Chrome DevTools",
      "Figma",
    ],
    points: [
      {
        point: "Interface and Interaction Design",
        description:
          "Individually designed and implemented 2 complex interfaces, 5 medium inferfaces and over 20 interaction logics, using Figma to enhance design efficiency by 30%, ensuring intuitive and smooth user experiences.",
      },
      {
        title: "Data Visualization Component Development",
        description:
          "Developed 25 fully customized React and D3.js data visualization components from scratch, enabling real-time graphical representation of complex data relationships.",
      },
      {
        title: "Animation and Visual Effects Design",
        description:
          "Individually Designed and implemented over 40 UI animations and visual effects using Framer Motion and other animation libraries, boosting user interaction satisfaction by 80% and enhancing visual appeal. Optimized animation performance by 30% using Google performance analysis tools.",
      },
      {
        title: "Frontend-Backend Integration",
        description:
          "Led frontend operations, successfully conducted over 10 large-scale data integration tests with backend services, ensuring 99% system stability and data accuracy.",
      },
    ],
    period: "Feb 2024 - May 2024",
  },
  {
    id: 2,
    title: "JOB TITTLE",
    company: "JOB company",
    image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-02.jpg",
    backgroundColor: "bg-red-500",
    skill: [
      "Neo4j",
      "JavaScript",
      "React",
      "D3",
      "Tailwind",
      "Framer Motion",
      "Chrome DevTools",
      "Figma",
    ],
    points: [
      {
        point: "Interface and Interaction Design",
        description:
          "Individually designed and implemented 2 complex interfaces, 5 medium inferfaces and over 20 interaction logics, using Figma to enhance design efficiency by 30%, ensuring intuitive and smooth user experiences.",
      },
      {
        title: "Data Visualization Component Development",
        description:
          "Developed 25 fully customized React and D3.js data visualization components from scratch, enabling real-time graphical representation of complex data relationships.",
      },
      {
        title: "Animation and Visual Effects Design",
        description:
          "Individually Designed and implemented over 40 UI animations and visual effects using Framer Motion and other animation libraries, boosting user interaction satisfaction by 80% and enhancing visual appeal. Optimized animation performance by 30% using Google performance analysis tools.",
      },
      {
        title: "Frontend-Backend Integration",
        description:
          "Led frontend operations, successfully conducted over 10 large-scale data integration tests with backend services, ensuring 99% system stability and data accuracy.",
      },
    ],
    period: "Feb 2024 - May 2024",
  },
  {
    id: 3,
    title: "JOB TITTLE",
    company: "JOB company",
    image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-03.jpg",
    backgroundColor: "bg-red-500",
    skill: [
      "Neo4j",
      "JavaScript",
      "React",
      "D3",
      "Tailwind",
      "Framer Motion",
      "Chrome DevTools",
      "Figma",
    ],
    points: [
      {
        point: "Interface and Interaction Design",
        description:
          "Individually designed and implemented 2 complex interfaces, 5 medium inferfaces and over 20 interaction logics, using Figma to enhance design efficiency by 30%, ensuring intuitive and smooth user experiences.",
      },
      {
        title: "Data Visualization Component Development",
        description:
          "Developed 25 fully customized React and D3.js data visualization components from scratch, enabling real-time graphical representation of complex data relationships.",
      },
      {
        title: "Animation and Visual Effects Design",
        description:
          "Individually Designed and implemented over 40 UI animations and visual effects using Framer Motion and other animation libraries, boosting user interaction satisfaction by 80% and enhancing visual appeal. Optimized animation performance by 30% using Google performance analysis tools.",
      },
      {
        title: "Frontend-Backend Integration",
        description:
          "Led frontend operations, successfully conducted over 10 large-scale data integration tests with backend services, ensuring 99% system stability and data accuracy.",
      },
    ],
    period: "Feb 2024 - May 2024",
  },
];

function Card({ card, onClick }) {
  return (
    <motion.div
      key={card.id}
      variants={WelcomeItem}
      transition={StagerFadeInUp}
      // className="large-span-4 medium-span-6 small-span-12"
      className="flex-shrink-0 "
    >
      <div className="relative flex w-full ">
        <motion.div
          layout
          layoutId={`card-container-${card.id}`}
          transition={{ easing: "easeInOut" }}
          initial={{ scale: 1, y: 0 }}
          whileHover={{ scale: 1.001, y: -5 }}
          whileTap={{ scale: 0.99 }}
          className={`relative bg-white  cursor-pointer w-[400px] p-[28px] shadow-[10px] rounded-[28px]  hover:${card.backgroundColor}/20`}
          onClick={() => onClick(card.id)}
        >
          <div className="absolute  -left-[30px] -top-[30px] right-[60px]  ">
            <motion.img
              layout
              src={card.image}
              layoutId={`card-img-${card.id}`}
              transition={{ easing: "easeInOut" }}
              className=" rounded-[28px] shadow-lg w-full overflow-hidden  "
            />
          </div>

          <div className="flex flex-col mt-[60%]  items-start justify-start h-[200px] ">
            <h1 className="font-bold  text-[17px] md:text-[20px] lg:text-[25px] text-gray">
              {card.title}
            </h1>
            <h1 className="flex  text-[17px] md:text-[20px] lg:text-[25px] text-gray">
              {card.company}
            </h1>
            {/* <h1 className="flex  text-[17px] md:text-[20px] lg:text-[25px] text-gray">
              {card.title}
            </h1> */}
          </div>
        </motion.div>
      </div>
      <div className="-mx-[12%] mt-[10vh]  relative flex items-center justify-between">
        <span className={divisionline}></span>
        <div className="absolute right-0 bg-sky-700 rounded-full w-[30px] h-[30px]"></div>
      </div>
    </motion.div>
  );
}

function WorkExperience() {
  const lang = useLanguage();
  const { Components, setComponents } = useAppContext();
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
  const [selectedCard, setSelectedCard] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleCardClick = (id) => {
    const card = cardData.find((card) => card.id === id);
    setSelectedCard(card);
    BanScroll();
    setIsOpen(true);
    setComponents((prevComponents) => ({
      ...prevComponents,
      NavBar: "hide",
    }));
  };

  const handleClose = () => {
    setSelectedCard(null);
    UnBanScroll();
    setIsOpen(false);
    setComponents((prevComponents) => ({
      ...prevComponents,
      NavBar: "visible",
    }));
  };
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

  return (
    <section className="flex flex-col justify-center w-full ">
      {/* 一级标题 */}
      <div id="WorkExperience" className={`flex justify-center `}>
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
            <i className="pt-3 mr-3 text-5xl fi lg:text-8xl fi-rr-tool-box"></i>
          </div>
          <h2 className="font-mono text-5xl font-bold lg:text-8xl">
            {lang == 0 && "Work Experience"}
            {lang == 1 && "工作经验"}
          </h2>
        </motion.div>
      </div>
      <motion.ul
        variants={Welcomevisblecontainer}
        initial="hidden"
        whileInView="visible"
        exit={{ opacity: 0 }}
        viewport={{ once: false, margin: "-60%" }}
        style={{
          paddingLeft:
            "calc(50vw - min(1680px, var(--global-viewport-content-responsive)) / 2)",
        }}
        className="flex w-full space-x-[80px] overflow-x-auto py-[20vh]  scroll-smooth  scrollbar-hide"
      >
        {cardData.map((card) => (
          <Card card={card} onClick={handleCardClick} />
        ))}
      </motion.ul>
      {isOpen && (
        <AnimatePresence>
          <motion.div
            onClick={handleClose}
            className="fixed  inset-0  w-full h-full z-50  bg-gray-900/75 backdrop-blur-[20px]"
          >
            <div className="relative flex items-center justify-center w-full h-full ">
              <button
                onClick={handleClose}
                className="absolute text-[100px] text-gray-800  top-[30px] right-[30px] z-50"
              >
                &times;
              </button>
              <motion.div onClick={(e) => e.stopPropagation()}>
                <motion.div
                  layoutId={`card-container-${selectedCard.id}`}
                  // transition={{ duration: 0.7, easing: "easeInOut" }}
                  className="relative p-[20px] gap-x-[40px] flex-wrap lg:flex w-full gap-y-[30px]  justify-center items-start bg-white shadow-lg  "
                >
                  <motion.img
                    layoutId={`card-img-${selectedCard.id}`}
                    src={selectedCard.image}
                    // transition={{ duration: 0.7, easing: "easeInOut" }}
                    alt="detail"
                    className="w-full max-w-[800px] flex "
                  />
                  <div className="flex flex-col p-4 w-full max-w-[800px]">
                    <h1 className="pb-8 font-bold text-7xl">
                      {selectedCard.title}
                    </h1>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={selectedCard.link}
                      className={
                        selectedCard.link &&
                        "group cursor-pointer " +
                          " mt-3 flex justify-between items-start " +
                          ` `
                      }
                    >
                      <div className={contentContainer}>
                        <div className="flex-col items-center justify-start md:flex md:flex-row md:justify-between overflow-y-auto scrollbar-hide h-[30%]">
                          <h3 className={h3}>
                            {selectedCard.name}
                            {selectedCard.link && (
                              <div>
                                <svg
                                  class="w-4 h-4 mx-2  -rotate-45"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 14 10"
                                >
                                  <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                  />
                                </svg>
                              </div>
                            )}
                          </h3>
                          {/* duration */}
                          <div className="flex flex-col justify-end overflow-y-auto ">
                            <p className={timetext}>{selectedCard.period}</p>
                          </div>
                        </div>

                        <div className={normaltext + " pl-[20px]"}>
                          <p> Skill: {selectedCard.skill.join(", ")}</p>
                          <p> Contribution: </p>
                          <ul className="pl-5 ">
                            {selectedCard.points.map((item, index) => (
                              <li key={index} className="mb-2 text-justify">
                                <strong className="block mr-2 font-semibold">
                                  ▸ {item.title} :
                                </strong>
                                {item.description}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </section>
  );
}

export default WorkExperience;
