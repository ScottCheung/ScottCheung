import React, { useState, useEffect } from "react";
import Database from "../Database.json";
import { motion, AnimatePresence } from "framer-motion";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { hideRow, bgPic, useLanguage, SelectText } from "../help/helpFunction";
import { Link } from "react-router-dom";
import N from "./Num";
import BG from "./gfBG";

// loaddata
const language = Database.PersonalInfo.Capability.language;
const personality = Database.PersonalInfo.Capability.personality;
const apps = Database.PersonalInfo.Capability.Apps;
const frontEnd = Database.PersonalInfo.Capability["front-end"];
const BackendEnd = Database.PersonalInfo.Capability["backend-end"];
const database = Database.PersonalInfo.Capability.database;
const algorithm = Database.PersonalInfo.Capability.Algorithm;
const other = Database.PersonalInfo.Capability.other;

// animation
const StagerFadeInUp = Database.Animation.Transition.StagerFadeInUp;
const fastWelcomevisblecontainer =
  Database.Animation.Variant.fastWelcomevisblecontainer;
const Welcomevisblecontainer =
  Database.Animation.Variant.Welcomevisblecontainer;
const WelcomeItem = Database.Animation.Variant.WelcomeItem;
const ProgressBar = Database.Animation.Transition.ProgressBar;
const ProgressBarvisblecontainer =
  Database.Animation.Variant.ProgressBarvisblecontainer;
const ProgressBarItem = Database.Animation.Variant.ProgressBarItem;
const visblecontainer = Database.Animation.Variant.Welcomevisblecontainer;
const item = Database.Animation.Variant.WelcomeItem;

const tabs = [
  {
    label: ["Frontend", "前端"],
    color1: "red-500",
    color2: "red-700",
    content: "Content for Frontend Tab",
  },
  {
    label: ["Backend", "后端"],
    color1: "orange-500",
    color2: "amber-500",
    content: "Content for Backend Tab",
  },
  {
    label: ["DataBase", "数据库"],
    color1: "sky-500",
    color2: "emerald-500",
    content: "Content for Data Tab",
  },
  {
    label: ["Algorithm", "算法"],
    color1: "cyan-500",
    color2: "blue-500",
    content: "Content for Algorithm Tab",
  },
  {
    label: ["Other", "其他"],
    color1: "indigo-500",
    color2: "pink-500",
    content: "Content for Other Tab",
  },
];

function PersonalityandLanguage() {
  const lang = useLanguage();
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
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

  const PersonalityandLanguage = (
    <motion.div
      className="grid-item large-span-4 medium-span-6 small-span-12 grid-item-search min-h-[930px] "
      data-analytics-section-engagement="name:search filters"
      data-tile-name="search"
    >
      <motion.div className="tile tile-rounded gap-y-[28px] tile-content ">
        <motion.div
          style={{
            background:
              "linear-gradient(to bottom right, rgba(0, 0, 0,  1), rgba(0, 100, 0, 1))",
          }}
          className="tile-header  rounded-[28px] "
        >
          <div
            className="pb-[70%] "
            style={{
              backgroundImage: `url(https://www.16personalities.com/static/images/types/headers/advocate-desktop1.svg)`,
              backgroundSize: "100% auto",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center bottom",
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                ease: [0.455, 0.03, 0.515, 0.955],
                duration: 2,
                delayChildren: 0,
              }}
              className="flex justify-between "
            >
              <h3 className="py-4  tile-headline typography-subsection-headline text-[30px] text-white">
                {lang == 0 && "Personality"}
                {lang == 1 && "人格类型"}
              </h3>
              <a
                data-tooltip-target={`infj`}
                data-tooltip-placement={"bottom"}
                href="https://www.16personalities.com/infj-personality"
                className="flex items-center jusitify-between "
              >
                <p className="text-xl text-white tile-headline typography-subsection-headline ">
                  {lang == 0 && "INFJ"}
                  {lang == 1 && "绿老头"}
                </p>

                <i className="flex items-center justify-end my-0 ml-2 text-white fi fi-rr-interrogation"></i>
              </a>
            </motion.div>

            <motion.div
              variants={ProgressBarvisblecontainer}
              initial="hidden"
              whileInView="visible"
              className="space-y-8 "
            >
              {personality.feature[lang].map((per, index) => (
                <motion.div>
                  <motion.div
                    key={index}
                    className={`${
                      per.color1 + " " + per.color2
                    } flex justify-between bg-gradient-to-r text-transparent bg-clip-text pb-[10px]`}
                  >
                    <motion.div className="text-[18px] font-[500]">
                      {per.name}
                    </motion.div>
                    <motion.div className="flex typography-subsection-copy">
                      <N className="" n={per.label} d={3} /> %
                    </motion.div>
                  </motion.div>
                  <motion.div className="w-full h-[15px] mb-4 rounded-full bg-white/20 darrk:bg-gray-700">
                    <motion.div
                      key={index}
                      variants={{
                        hidden: { opacity: 0, width: "0%" },
                        visible: {
                          opacity: 1,
                          width: `${per.column}`,
                        },
                      }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`${
                        per.color1 + " " + per.color2
                      } bg-gradient-to-r  h-[15px] rounded-full`}
                      style={{ width: `0%` }}
                    ></motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={ProgressBarvisblecontainer}
          initial="hidden"
          whileInView="visible"
          className="tile-header rounded-[28px]  h-full "
          style={{
            background:
              "linear-gradient(to top left, #9795f0 0%, #fbc8d4 100%)",
          }}
        >
          <div
            className=" h-full w-full pb-[40vh] md:pb-[40vh] "
            style={{
              backgroundImage: `url(${Database.PersonalInfo.Capability.graphs.infj[0]})`,
              backgroundSize: "100% auto",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center bottom",
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                ease: [0.455, 0.03, 0.515, 0.955],
                duration: 2,
                delay: 1,
              }}
              className="flex justify-between"
            >
              <h3 className="py-4 text-white tile-headline typography-subsection-headline text-[30px]">
                {lang == 0 && "Language"}
                {lang == 1 && "语言能力"}
              </h3>
              <a
                href="https://en.wikipedia.org/wiki/Multilingualism"
                className="py-4 text-xl text-white tile-headline typography-subsection-headline"
              >
                {lang == 0 && "Multi-language"}
                {lang == 1 && "多语言"}
              </a>
            </motion.div>
            <motion.div className="space-y-8">
              {language[lang].map((personality, index) => (
                <motion.div>
                  <motion.div
                    key={index}
                    className={`${
                      personality.color1 + " " + personality.color2
                    } flex justify-between bg-gradient-to-r text-transparent bg-clip-text pb-[10px]`}
                  >
                    <motion.div className="text-[18px] font-[500]">
                      {personality.name}
                    </motion.div>
                    <motion.div className="flex typography-subsection-copy">
                      <N n={personality.label} d={3} />
                    </motion.div>
                  </motion.div>
                  <motion.div className="w-full h-[15px] mb-4 rounded-full bg-white/20 darrk:bg-gray-700">
                    <motion.div
                      key={index}
                      variants={{
                        hidden: { opacity: 0, width: "0%" },
                        visible: {
                          opacity: 1,
                          width: `${personality.column}`,
                        },
                      }}
                      transition={{ duration: 1, delay: (index + 4) * 0.1 }}
                      className={`${
                        personality.color1 + " " + personality.color2
                      } bg-gradient-to-r  h-[15px] rounded-full`}
                      style={{ width: `0%` }}
                    ></motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );

  return PersonalityandLanguage;
}

export default PersonalityandLanguage;
