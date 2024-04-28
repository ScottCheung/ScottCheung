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
            background: `linear-gradient(to bottom right, rgba(214, 222, 194, 0.5), rgba(125, 194, 63, 1))`,
          }}
          className="tile-header  rounded-[28px]  "
        >
          <div
            className="pb-[70%] "
            style={{
              backgroundImage: `url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNTAgMTUwIj48ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCI+PHBhdGggZmlsbD0iI0REREREQyIgZD0iTTQ3Ljg5NCA1NC45MDFsMzIuMjUtNi4wN0w2OC4xNjggMCAwIDE1LjI2Mmw5LjUzMiA1MS4xODEgMjAuNDYtNi4wNDcgMjEuMjk4IDkuMTgxeiIvPjxjaXJjbGUgZmlsbD0iIzc3NyIgY3g9IjI3LjYzNCIgY3k9IjMxLjQ3IiByPSIyLjk5NiIvPjxjaXJjbGUgZmlsbD0iIzc3NyIgY3g9IjM4LjI3MiIgY3k9IjMxLjQ3IiByPSIyLjk5NiIvPjxjaXJjbGUgZmlsbD0iIzc3NyIgY3g9IjQ4LjkwNyIgY3k9IjMxLjQ3IiByPSIyLjk5NiIvPjwvZz48ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCI+PHBhdGggZmlsbD0iI0VCQkVBNyIgZD0iTTQzLjAxOSAxMDYuODMzbC0yLjQ0Ny0xNy40NjYtNS45MDUtMi4wMDEtMS45NyAxMi45Njd6Ii8+PHBhdGggZmlsbD0iIzcyQzlBNiIgZD0iTTExNi45MjQgMTExLjIyMWwyNC4xODIgMTAuMDI0TDE0MyAxNDIuNzcybC0xNS4wNTUgNC41MTRMMTAyLjQ5OSAxNTBsLTM5LjMzNC03LjEzOUw1NyAxMzZsNi4xOC0yOC4wNDcgMjEuOTYyLTIuMDN6Ii8+PHBhdGggZmlsbD0iIzU0QjA4QiIgZD0iTTE0MS4xMDYgMTIxLjI0NWwtMTMuMTUxIDI2LjEzMSAxOS44NzctMi4yMTJ6Ii8+PHBhdGggZmlsbD0iIzNGOEY2RiIgZD0iTTYzLjE4IDEwNy45NTN2MzQuODE5bC0xNS4yODYtMi42ODJ6Ii8+PHBhdGggZmlsbD0iIzU0QjA4QiIgZD0iTTYzLjE4IDE0Mi43NzJsLTE3LjAxNi0yOC40MzktOS4wNi4yNDYtNy45MTEgMi4wODggNS4xNCAyNC42NjZ6Ii8+PHBhdGggZmlsbD0iIzNGOEY2RiIgZD0iTTExNi45MjQgMTExLjIyMUwxMTMuODEyIDEzNGwtMjguMjcxLTYuMDM5LS4zOTktMjIuMDM4eiIvPjxwYXRoIGZpbGw9IiNGQ0RBQzciIGQ9Ik02Ny4yNCAzMS44MzZsNTcuOTQgMTYuMTAzLTE1LjM2OCA1OS4zNzhMNTEuMjkgOTEuMzE2eiIvPjxwYXRoIGZpbGw9IiNFQkJFQTciIGQ9Ik0xMDQuODAyIDYwLjM2OWwtOC42MDkgMy4zNDgtNy45NTkgOS41OTMtNC4yNzUtMy4xNTEtNS41MTMuODE1LS43NTUtMTEuOTA5LTYuMjY2LTguMDQ4IDExLjI0OSAzLjEwNSA5Ljk2MiAyLjg1N3oiLz48cGF0aCBmaWxsPSIjRkRFOUUwIiBkPSJNOTIuNjM2IDU2Ljk3OUw4OC4yMzQgNzMuMzFsLTkuNzg4LTIuMzM2IDQuMjI4LTE2Ljg1MnoiLz48cGF0aCBmaWxsPSIjQkZEQjhFIiBkPSJNNjcuMjQgMzEuODM2bDM3LjEyOS0xMy41NzItMTEuNDY3IDIwLjcwNXoiLz48cGF0aCBmaWxsPSIjOTlDMjZEIiBkPSJNMTA0LjM2OSAxOC4yNjRsNDUuMzA2IDI2LjMyMi0yNC40OTUgMy4zNTMtMzIuMjc4LTguOTd6Ii8+PHBhdGggZmlsbD0iI0VCQkVBNyIgZD0iTTEyNS4xOCA0Ny45MzlsNC40MTMgMjcuMDA0IDcuMDAzLTMuMzI4IDguODc3IDguNzg4LTQyLjk3NCA0Ni4zOTEgNy4zMTMtMTkuNDc3eiIvPjxwYXRoIGZpbGw9IiM3MDlENTMiIGQ9Ik0xMjUuMTggNDcuOTM5bDI0LjQ5NS0zLjM1My00LjIwMiAzNS44MTctOC44NzctOC43ODgtNy4wMDMgMy4zMjh6Ii8+PHBhdGggZmlsbD0iI0MyOTI3RCIgZD0iTTc5LjM4MSA5OC45OTVsMjMuMTE4IDI3Ljc5OSA3LjMxMy0xOS40Nzd6TTEzNS4wNzEgOTEuNjI5bC03LjExNi00LjI2NHYxMS42M3oiLz48cGF0aCBmaWxsPSIjNzA5RDUzIiBkPSJNMTA0LjgwMiA2MC4zNjlsLTEwLjkzOC03LjU2My0xLjIyOCA0LjE3M3pNODMuOTU5IDUwLjA2OWwtMS4yODUgNC4wNTMtMTEuMjQ5LTMuMTA1eiIvPjxwYXRoIGZpbGw9IiNDMjkyN0QiIGQ9Ik04OC4yMzQgNzMuMzFsLTUuNDY3IDIuODAzLTQuMzIxLTUuMTM5eiIvPjxwYXRoIGZpbGw9IiM0OTQ5NDkiIGQ9Ik0xMDAuNjMgNjUuMDIyYzAgMS43MzktMS40MTEgMy4xNTMtMy4xNTMgMy4xNTMtMS43MzkgMC0zLjE1NS0xLjQxNC0zLjE1NS0zLjE1MyAwLTEuNzQyIDEuNDE2LTMuMTUzIDMuMTU1LTMuMTUzIDEuNzQzIDAgMy4xNTMgMS40MTEgMy4xNTMgMy4xNTN6Ii8+PGNpcmNsZSBmaWxsPSIjNDk0OTQ5IiBjeD0iNzUuNTI3IiBjeT0iNTkuNjQ4IiByPSIzLjE1MiIvPjxwYXRoIGZpbGw9IiNDMjkyN0QiIGQ9Ik02OC4xNjggNzUuODgxbDMxLjUyOSA3Ljk0MS0xMS40MTEgNy40NC0xNC45OC0zLjkzN3oiLz48cGF0aCBmaWxsPSIjRkZGIiBkPSJNOTMuMTQ4IDg0LjQyNWwtMTkuODQyLTUuMjIgMS43MzkgNi40NzEgMTIuNDUgMy4yMDd6Ii8+PHBhdGggZmlsbD0iI0MyOTI3RCIgZD0iTTE0MS4xMDYgODAuNzg5bC02LjA4OC0zLjU5Ny0zLjU5NSA4LjAyM3oiLz48cGF0aCBmaWxsPSIjRUJCRUE3IiBkPSJNNDYuMTY0IDExNC4zMzNsLTMuMTQ1LTcuNS0xMy4wMzQtMS41NzQtMTAuNzU2LjUyNiA5Ljk2NCAxMC44ODJ6Ii8+PHBhdGggZmlsbD0iI0ZDREFDNyIgZD0iTTQzLjAxOSAxMDYuODMzbC0zMC4zNTItMjQuNjMtMS41MDMgMTIuNjggOC4wNjUgMTAuOTAyeiIvPjwvZz48L3N2Zz4=)`,
              backgroundSize: "50% auto",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right bottom",
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
              className="flex justify-between"
            >
              <h3 className="text-gray-600 tile-headline typography-subsection-headline py-4">
                {lang == 0 && "Personality"}
                {lang == 1 && "人格类型"}
              </h3>
              <a
                data-tooltip-target={`infj`}
                data-tooltip-placement={"bottom"}
                href="https://www.16personalities.com/infj-personality"
                className="flex items-center jusitify-between "
              >
                <p className="text-xl text-gray-600 tile-headline typography-subsection-headline ">
                  {lang == 0 && "INFJ"}
                  {lang == 1 && "绿老头"}
                </p>

                <i className="flex justify-end items-center ml-2 fi fi-rr-interrogation my-0"></i>
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
                    } flex justify-between bg-gradient-to-r text-transparent bg-clip-text`}
                  >
                    <motion.div className="text-[15px] font-[500]">
                      {per.name}
                    </motion.div>
                    <motion.div className="flex typography-subsection-copy">
                      <N className="" n={per.label} d={3} /> %
                    </motion.div>
                  </motion.div>
                  <motion.div className="w-full h-4 bg-white/20 rounded-full mb-4 dark:bg-gray-700">
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
                      } bg-gradient-to-br  h-4 rounded-full`}
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
          className="tile-header rounded-[28px]  h-full  "
          style={{
            background: `linear-gradient(135deg, rgba(244, 194, 194, 0.5), rgba(214, 163, 163, 1))`,
          }}
        >
          <div
            className=" h-full w-full pb-[40vh] md:pb-[20vh]"
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
              <h3 className="text-gray-600 tile-headline typography-subsection-headline py-4">
                {lang == 0 && "Language"}
                {lang == 1 && "语言能力"}
              </h3>
              <a
                href="https://en.wikipedia.org/wiki/Multilingualism"
                className="text-xl text-gray-600 tile-headline typography-subsection-headline py-4"
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
                    } flex justify-between bg-gradient-to-r text-transparent bg-clip-text`}
                  >
                    <motion.div className="text-[15px] font-[500]">
                      {personality.name}
                    </motion.div>
                    <motion.div className="flex typography-subsection-copy">
                      <N n={personality.label} d={3} />
                    </motion.div>
                  </motion.div>
                  <motion.div className="w-full h-4 bg-white/20 rounded-full mb-4 dark:bg-gray-700">
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
                      } bg-gradient-to-r  h-4 rounded-full`}
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
