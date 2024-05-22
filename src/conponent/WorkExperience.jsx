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

const Welcomevisblecontainer =
  Database.Animation.Variant.Welcomevisblecontainer;
const WelcomeItem = Database.Animation.Variant.WelcomeItem;

const cardData = [
  {
    id: 0,
    title: "JOB TITTLE",
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
    title: "Get your game on, go play",
    image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-01.jpg",
    backgroundColor: "bg-purple-700",
    description: "Some long text about getting your game on...",
  },
  {
    id: 2,
    title: "Hey now, you're a rock star",
    image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-02.jpg",
    backgroundColor: "bg-green-400",
    description: "Some long text about being a rock star...",
  },
  {
    id: 3,
    title: "Get the show on, get paid",
    image:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/53148/deathtostock-03.jpg",
    backgroundColor: "bg-blue-400",
    description:
      "Some long text about getting the show on...Some long text about getting the show on...Some long text about getting the show on...Some long text about getting the show on...Some long text about getting the show on...Some long text about getting the show on...Some long text about getting the show on...Some long text about getting the show on...Some long text about getting the show on...Some long text about getting the show on...Some long text about getting the show on...Some long text about getting the show on...Some long text about getting the show on...Some long text about getting the show on...Some long text about getting the show on...Some long text about getting the show on...Some long text about getting the show on...Some long text about getting the show on...Some long text about getting the show on...Some long text about getting the show on...Some long text about getting the show on...Some long text about getting the show on...Some long text about getting the show on...Some long text about getting the show on...Some long text about getting the show on...Some long text about getting the show on...",
  },
];

function Card({ card, onClick }) {
  return (
    <motion.div
      key={card.id}
      variants={WelcomeItem}
      transition={StagerFadeInUp}
      whileHover={{ scale: 1.001 }}
      whileTap={{ scale: 0.99 }}
      // className="large-span-4 medium-span-6 small-span-12"
      className="flex-shrink-0 "
    >
      <div className="relative flex w-full ">
        <motion.div
          layoutId={`card-container-${card.id}`}
          // transition={{ duration: 0.7, easing: "easeInOut" }}
          className={`relative bg-white cursor-pointer w-[400px] p-[28px] shadow-[10px] rounded-[28px]  hover:${card.backgroundColor}/20`}
          onClick={() => onClick(card.id)}
        >
          <div className="absolute  -left-[30px] -top-[30px] right-[60px]  ">
            <motion.img
              src={card.image}
              layoutId={`card-img-${card.id}`}
              // transition={{ duration: 0.7, easing: "easeInOut" }}
              className=" rounded-[28px] shadow-lg w-full overflow-hidden  "
            />
          </div>

          <div className="flex flex-col mt-[60%]  items-start justify-start h-[200px] ">
            <h1 className="font-bold  text-[17px] md:text-[20px] lg:text-[25px] text-gray">
              {card.title}
            </h1>
            <h1 className="flex  text-[17px] md:text-[20px] lg:text-[25px] text-gray">
              {card.title}
            </h1>
            <h1 className="flex  text-[17px] md:text-[20px] lg:text-[25px] text-gray">
              {card.title}
            </h1>
          </div>
        </motion.div>
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
            {lang == 0 && "WorkExperience"}
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
                  className="relative p-[20px] gap-x-[40px] md:flex w-full   bg-white shadow-lg "
                >
                  <motion.img
                    layoutId={`card-img-${selectedCard.id}`}
                    src={selectedCard.image}
                    // transition={{ duration: 0.7, easing: "easeInOut" }}
                    alt="detail"
                    className="w-full max-w-[800px] flex"
                  />
                  <div className="flex flex-col p-4 w-full max-w-[800px]">
                    <h1 className="pb-8 font-bold text-7xl">
                      {selectedCard.title}
                    </h1>
                    <p className="text-[20px] overflow-auto h-[300px] scrollbar-hide">
                      {selectedCard.description}
                    </p>
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
