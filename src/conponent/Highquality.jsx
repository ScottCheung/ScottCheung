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

function Highquality() {
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

  const Highquality = (
    <motion.div className="grid-item large-span-4 medium-span-6 small-span-12 grid-item-check-in will-change carnival-item-in-view min-h-[650px]">
      {/* 半透明要改 */}
      <motion.div className="tile tile-rounded tile-with-overlay bg-white/30">
        <div
          className="tile-content"
          style={{
            backgroundImage: `url(${Database.PersonalInfo.Capability.graphs.code[0]})`,
            backgroundSize: "100% auto",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center bottom",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              ease: [0.455, 0.03, 0.515, 0.955],
              duration: 1.3,
              delay: 0.4,
            }}
            className="tile-header"
          >
            <h3 className="tile-headline typography-subsection-headline">
              {lang == 0 && "High Quality for evertthing"}
              {lang == 1 && "完美方方面面"}
            </h3>
            {/* 完美主义 内容 */}
            <p className="tile-copy typography-subsection-copy">
              {lang == 0 &&
                SelectText(
                  "As a perfectionist, I approach every project I handle with a commitment to high quality, ensuring that every aspect is flawless. I meticulously consider details such as [code quality], [user usability], [aesthetics], and more. Perfection, for me, extends across all facets of the project and life.",
                  "blue-700",
                  "\t ",
                )}
              {lang == 1 &&
                SelectText(
                  "作为追求卓越之人，我在交付每个项目时都致力于确保各个方面都无可挑剔。这包括[代码质量]、[用户可用性]、[美感]等各个方面。对我而言，追求完美不仅体现在项目中，也延伸至生活的方方面面。这种执着于高质量的态度通常能够带来更好的结果和用户体验。在工作中，不断追求卓越有助于提高产品的竞争力，并确保用户对我的工作产生积极的体验和印象。",
                  "blue-700",
                )}
            </p>
          </motion.div>
          <motion.div className="tile-body">
            <motion.div className="overview-messages-image-visblecontainer large-centered">
              <figure role="img" className="overview-messages-check-in" />
              <span aria-hidden="true">
                <motion.div className="inline-video-visblecontainer inline-video-check-in inline-video-is-webm loaded ended">
                  <figure
                    className="start-frame"
                    aria-hidden="true"
                    data-anim-lazy-image-download-complete=""
                  />
                  <figure
                    className="static-frame end-frame"
                    aria-hidden="true"
                    data-anim-lazy-image-download-complete=""
                  />
                </motion.div>
              </span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );

  return Highquality;
}

export default Highquality;
