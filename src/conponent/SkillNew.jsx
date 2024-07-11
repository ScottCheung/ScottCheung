import React, { useState, useEffect } from "react";
import Database from "../Database.json";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../help/helpFunction";
import BG from "./gfBG";

const tabs = [
  {
    label: ["Frontend", "前端"],
    color1: "[#2af598]",
    ratio1: "[-25%]",
    ratio2: "[125%]",
    color2: "[#009efd]",
    contentKey: "front-end",
  },
  {
    label: ["Backend", "后端"],
    color1: "[#f9f586]",
    ratio1: "[-25%]",
    ratio2: "[100%]",
    color2: "[#43e97b]",
    contentKey: "backend-end",
  },
  {
    label: ["DataBase", "数据库"],
    color1: "[#F7B500]",
    ratio1: "[-76%]",
    ratio2: "[76%]",
    color2: "[#6DD400]",
    contentKey: "database",
  },
  {
    label: ["Algorithm", "算法"],
    color1: "[#CB2C14]",

    ratio1: "[-50%]",
    ratio2: "[150%]",
    color2: "[#FFA221]",
    contentKey: "algorithm",
  },
  {
    label: ["Other", "其他"],
    color1: "[#00f2fe]",
    ratio1: "[-25%]",
    ratio2: "[125%]",
    color2: "[#b721ff]",
    contentKey: "other",
  },
];

function Skill() {
  const StagerFadeInUp = Database.Animation.Transition.StagerFadeInUp;
  const WelcomeItem = Database.Animation.Variant.WelcomeItem;
  const lang = useLanguage();
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [prevTab, setPrevTab] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTabChange = (tab) => {
    setPrevTab(selectedTab);
    setSelectedTab(tab);
  };

  const renderContent = () => {
    const contentData =
      Database.PersonalInfo.Capability.des[selectedTab.label[0]];
    const content = contentData[lang];
    return (
      <motion.div
        // layoutId="abilitiy"
        style={{
          lineHeight: 1.23536,
          fontFamily: `"SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif`,
        }}
        className={`flex-1 relative  flex-col w-full bg-clip-text bg-gradient-to-r from-${selectedTab.ratio1} to-${selectedTab.ratio2}  from-${selectedTab.color1} to-${selectedTab.color2}`}
      >
        <motion.p
          className={`text-transparent from-${selectedTab.ratio1} to-${selectedTab.ratio2}  from-${selectedTab.color1} to-${selectedTab.color2} bg-gradient-to-br bg-clip-text flex text-[13px] md:text-[15px] lg:text-[20px]`}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1 }}
        >
          {content.description}
        </motion.p>
        <motion.ul
          variants={Database.Animation.Variant.Welcomevisblecontainer}
          initial="hidden"
          whileInView="visible"
          className={`text-transparent grid  grid-cols-12 gap-[20px] md:gap-[40px] lg:gap-[70px] py-[50px]  lg:py-[100px] from-${selectedTab.ratio1} to-${selectedTab.ratio2}  from-${selectedTab.color1} to-${selectedTab.color2} bg-gradient-to-br bg-clip-text normal-text`}
        >
          {content.skills.map((skill, index) => (
            <motion.li
              key={index}
              variants={WelcomeItem}
              transition={StagerFadeInUp}
              className="flex items-start col-span-12 pb-2 md:col-span-6 lg:col-span-4 xl:col-span-3 gap-x-[20px]"
            >
              <motion.div
                className={`flex flex-shrink-0 justify-center items-center w-[50px] h-[50px] p-[10px] from-[-200%] to-[200%] bg-gradient-to-br rounded-[9px]`}
                transition={{ duration: 1, delay: index * 0.15 }}
              >
                <img src={skill.image} alt={skill.name} />
              </motion.div>

              <div
                style={{ animationDelay: `${0.18 * index}s` }}
                className={`flex flex-col animate__animated animate__zoomIn text-transparent from-${selectedTab.ratio1} to-${selectedTab.ratio2}   bg-gradient-to-br bg-clip-text`}
              >
                <motion.strong className="flex font-[600] text-[13px] md:text-[15px] lg:text-[20px] items-start pb-4">
                  {skill.name}
                </motion.strong>
                <motion.p className="flex flex-wrap text-[10px] md:text-[13px] lg:text-[15px] w-[280px] md:w-auto">
                  {skill.description}
                </motion.p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    );
  };

  const BigRadius =
    "rounded-[28px] md:rounded-[28px] lg:rounded-[30px] p-[14px] lg:p-[40px]";
  const Radius = "rounded-[12px] md:rounded-[14px] lg:rounded-[28px]";

  const direction = tabs.indexOf(selectedTab) > tabs.indexOf(prevTab) ? 1 : -1;

  return (
    <motion.div className="transition-all grid-item large-span-12 col-span-12 z-20 -mt-[20vh] ">
      <motion.div
        id="Capability"
        className="transition-all shadow-[40px] relative z-0"
      >
        <motion.div
          id="blackOverlay"
          className={`absolute top-0 bottom-0 left-0 right-0 z-10  invisible transition-all lg:visible gradient-mask overflow-hidden ${BigRadius} shadow-2xl`}
        >
          <motion.span
            layout
            style={{
              backgroundImage: `url(https://palettemaker.com/_nuxt/landing-header-bg.19f630cc.webp)`,
              backgroundSize: "100% auto",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right bottom",
            }}
            className={`absolute flex-1  invisible transition-all lg:visible top-0 bottom-0 left-0 right-0 opacity-50 z-0 ${BigRadius}`}
          ></motion.span>
          <div className="">
            <BG />
          </div>
          <span
            className={`absolute invisible transition-all lg:visible top-0 bottom-0 left-0 right-0 from-[#050D19] to-slate-950 bg-gradient-to-br -z-10 ${BigRadius}`}
          ></span>
        </motion.div>

        <motion.div
          className={`z-40 relative h-auto transition-all  overflow-hidden ${BigRadius}`}
          style={{
            backgroundImage:
              windowWidth < 1080
                ? `url(${Database.PersonalInfo.Capability.graphs.bg})`
                : "",
            backgroundSize: "100% auto",
            backgroundRepeat: "repeat",
            backgroundPosition: "top",
          }}
        >
          <span
            className={`absolute visible transition-all lg:invisible top-0 bottom-0 left-0 right-0 from-[#050D19]/70 to-slate-950/70 bg-gradient-to-br z-0 ${BigRadius}`}
          ></span>
          <div className="flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: [0.455, 0.03, 0.515, 0.955], duration: 2 }}
              className={`inline-flex  font-[900] items-center justify-center transition-all text-6xl md:text-7xl lg:text-8xl z-30 from-${selectedTab.ratio1} to-${selectedTab.ratio2}  from-${selectedTab.color1} to-${selectedTab.color2} bg-gradient-to-r text-transparent bg-clip-text text-center mt-[30px] mb-[80px]`}
            >
              <i className="flex items-center fi fi-rr-circle-user mr-[20px] text-transparent bg-clip-text"></i>
              <p className="flex items-center text-transparent bg-clip-text">
                {lang == 0 ? "Capability" : "能力"}
              </p>
            </motion.div>
          </div>

          <motion.div className="z-30 ">
            <motion.ul
              layout
              variants={Database.Animation.Variant.Welcomevisblecontainer}
              initial="hidden"
              whileInView="visible"
              // viewport={{ once: false, margin: "-30%" }}
              className="flex relative justify-between text-center w-full gap-x-[3%] lg:gap-x-[10%] overflow-auto scrollbar-hide pb-[30px]"
            >
              {tabs.map((tab, index) => (
                <motion.button
                  key={tab.label}
                  variants={{
                    hidden: { opacity: 0, pointerEvents: "none" },
                    visible: { opacity: 1, pointerEvents: "auto" },
                  }}
                  transition={{ duration: 1, delay: index * 0.15 }}
                  className="inline-flex items-start text-[15px] md:text-[20px] lg:text-[25px] font-[600]"
                  onClick={() => handleTabChange(tab)}
                >
                  <div className="flex flex-col">
                    <h3
                      className={`flex bg-gradient-to-br text-transparent bg-clip-text from-${tab.ratio1} to-${tab.ratio2} from-${tab.color1} to-${tab.color2}`}
                    >
                      {tab.label[lang]}
                    </h3>
                    {tab === selectedTab ? (
                      <motion.div
                        className={`mt-[10px] from-[-150%] to-[150%] from-${tab.color1} to-${tab.color2} bg-gradient-to-r w-full h-[3px] lg:h-[6px] rounded-full z-50`}
                        layoutId="underline"
                      />
                    ) : null}
                  </div>
                </motion.button>
              ))}
            </motion.ul>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTab.label}
                initial={{ x: -direction * 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction * 100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:pb-[40vh]"
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Skill;
