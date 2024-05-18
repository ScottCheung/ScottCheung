import React, { useState, useEffect } from "react";
import Database from "../Database.json";
import { motion, AnimatePresence } from "framer-motion";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { hideRow, bgPic, useLanguage, SelectText } from "../help/helpFunction";
import { Link } from "react-router-dom";
import N from "./Num";
import BG from "./gfBG";

const division = `hidden items-center md:flex md:flex-1 h-[2px] m-0 rounded-full bg-blue-500 opacity-10  transition-all duration-1000`;

const laptopMode = window.innerWidth > 1024;
const Skill = {
  icon: <i class="fi fi-rr-tool-box"></i>,
  skills: {
    Management: [
      "☆ Jira",
      "☆ SWOT",
      "☆ PEST",
      "☆ Boston Matrix",
      "Gantt Chart",
      "Organizational Behavioral Analysis",
      "strategic management",
    ],
    Frontend: [
      "HTML",
      "CSS",
      "☆ JavaScript",
      "☆ React",
      "Redux",
      "☆ Tailwind",
      "☆ Framer",
      "Main UI",
      "Animation libs",
    ],
    Backend: ["MySQL", "☆ PostgreSQL", "☆ NodeJS", "☆ Json", "TablePlus"],
    Database: [
      "MySQL",
      "☆ PostgreSQL",
      "Tableau",
      "☆ Python",
      "☆ Neo4j",
      "☆ Pandas",
    ],
    AI: [
      "Machine Learning",
      "☆ Deep Learning",
      "Natural Language",
      "☆ Recommender System",
    ],
    "IT-Tool": ["☆ Github", "☆ SSH", "Docker", "☆ Zsh", "Vim"],
    Text: ["☆ Markdown", "LaTeX", "☆ Word", "☆ Pages", "HTML"],
    Slides: ["☆ PowerPoint", "☆ Keynotes", "Google Slides"],
    Video: [
      "☆ Final Cut Pro",
      "Premiere",
      "After Effects",
      "☆ DaVinci",
      "iMovie",
      "☆ JianYing",
    ],
    Graph: [
      "☆ Photoshop",
      "☆ Lightroom",
      "Illustrator",
      "☆ InDesign",
      "XD",
      "3D Max",
      "☆ Sharp 3D",
    ],
    Language: ["English", "☆ Chinese", "☆ SiChuan Dialect"],
    Music: ["Guitar", "☆ Piano"],
  },
};
function Otherability() {
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

  const Otherability = (
    <motion.div
      className="h-auto grid-item large-span-8 medium-span-6 small-span-12 grid-item-swipe-reply carnival-item-in-view"
      data-component-list="CarnivalInlineVideo"
      data-analytics-section-engagement="name:catch up and swipe to reply"
      data-tile-name="swipe-reply"
    >
      <motion.div className="tile tile-rounded">
        {/* 半透明要改 */}
        <motion.div
          // style={{
          //   background:
          //     "linear-gradient(0deg, rgba(26, 131, 144, 1), rgba(109, 255, 232, 0.3))",
          //   // 'linear-gradient(0deg, rgba(33, 33, 150, 1), rgba(149, 95, 233, 1))',
          // }}
          className="tile-content bg-white/40"
        >
          {/* Skill */}
          <motion.div className="tile-header">
            <h3 className="tile-headline typography-subsection-headline ">
              Skills
            </h3>
            {Object.entries(Skill.skills).map(([category, list], index) => (
              <div
                key={index}
                className="flex justify-between items-start md:items-center gap-x-[30px] py-[15px] md:py-[15px] "
              >
                <h2 className="font-[500] min-[20%]">{category}</h2>

                <span className={division}></span>

                <p className="text-right text-[15px] text-gray-600">
                  {list.join("、")}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );

  return Otherability;
}

export default Otherability;
