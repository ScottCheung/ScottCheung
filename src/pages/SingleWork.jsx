import React, { useState, useEffect } from "react";
import Navbar from "../conponent/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import database from "../Database.json";
import Contact from "../conponent/Contact";
import WhyMe from "../conponent/WhyMe";
import { hideRow, bgPic } from "../help/helpFunction";
import { useParams } from "react-router";

let data = [];
const pathname = window.location.pathname;

const infos = database.PersonalInfo.Infos;
const visblecontainer = database.Animation.Variant.fastWelcomevisblecontainer;
const LeftappearBar = database.Animation.Transition.LeftappearBar;
const item = database.Animation.Variant.LeftWelcomeItem;

export default function singleWork() {
  const { work } = useParams();
  const extractedValue = work.split("=")[1];
  console.log(work + "     " + extractedValue);
  const WorkExperience = database.PersonalInfo.WorkExperience;
  const selectedWhyMeItem = database.PersonalInfo.WorkExperience.find(
    (item) => item.id === extractedValue,
  );
  console.log(selectedWhyMeItem);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isExpanded, setIsExpanded] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <Navbar topTextColor={true} />
      <main
        className={`profile-page`}
        style={
          (windowWidth < 768 && {
            ...bgPic(selectedWhyMeItem.pic, "600px auto", "bottom center"),
          }) ||
          null
        }
      >
        <section className="relative block" style={{ height: "400px" }}>
          <motion.div
            initial={{ opacity: 0, y: "60px", scale: 0.95 }}
            transition={{
              ease: [0.455, 0.03, 0.515, 0.955],
              duration: 0.9,
            }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: "0px", scale: 1 }}
            className="absolute top-0 w-full h-full bgrid-colsenter bgrid-colsover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auhref=format&fit=crop&w=2710&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </motion.div>
        </section>
        <motion.div
          initial={{ opacity: 1, y: "30px" }}
          transition={{
            ease: [0.455, 0.03, 0.515, 0.955],
            duration: 0.9,
          }}
          whileInView={{ opacity: 1, y: "0px" }}
          viewport={{ once: true }}
          className={`visblecontainer ${
            windowWidth > 768 ? "mb-[100px]" : ""
          }  `}
        >
          <motion.div
            initial={{ opacity: 1, y: "30px", scale: 2 }}
            transition={{
              ease: [0.645, 0.045, 0.355, 1],
              duration: 0.9,
            }}
            whileInView={{ opacity: 1, y: "0px", scale: 1 }}
            viewport={{ once: true }}
            className="min-h-[800px] lg:min-h-[900px] relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-[28px] -mt-[150px] animate__animated animate__fadeInUp"
          >
            <div className="px-6">
              <div className="flex  justify-center mb-15 -mt-[75px]">
                <div className=" ">
                  <motion.div
                    initial={{ opacity: 1, scale: 0 }}
                    transition={{
                      ease: [0.455, 0.03, 0.515, 0.955],
                      duration: 0.9,
                    }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="flex-shrink-0 "
                  >
                    <div
                      className={`flex justify-center items-center  w-[150px] h-[150px]  }  `}
                    >
                      <img
                        src={selectedWhyMeItem.logo}
                        className={`outline outline-white outline-[4px] bg-white ${
                          selectedWhyMeItem.logoRound == "rounded"
                            ? "rounded-full"
                            : "rounded-[10px]"
                        }  shadow-2xl`}
                      ></img>
                    </div>
                  </motion.div>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: "-60px" }}
                transition={{
                  ease: [0.455, 0.03, 0.515, 0.955],
                  duration: 0.9,
                }}
                whileInView={{ opacity: 1, y: "0px" }}
                viewport={{ once: true }}
                className="text-center mt-12"
              >
                <h3 className="text-[32px] font-semibold leading-normal mb-2 text-gray-800 mb-2 animate__animated animate__zoomIn">
                  {selectedWhyMeItem.advantage}
                </h3>
              </motion.div>
              <div className="mt-10 py-10  text-center">
                <div className="flex flex-wrap justify-center">
                  <div className={`grid mb-[228px]`}>
                    {/* row1-right-with-button */}
                    <div className="grid-item large-span-12 small-span-12 rounded-[14px] p-[28px] ">
                      <div className="tile tile-rounded">
                        <div className="tile-content">
                          <div className="content-between">
                            <div className="tile-header">
                              <motion.div
                                initial={{ opacity: 0, y: 300 }}
                                transition={{
                                  ease: [0.455, 0.03, 0.515, 0.955],
                                  duration: 1.2,
                                }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="tile-headline typography-subsection-headline text-gray text-[28px] animate__animated animate__zoomIn"
                              >
                                {selectedWhyMeItem.description}
                              </motion.div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <WhyMe hideTittle={true} />
      </main>
      <a
        rel="stylesheet"
        href="../appleStyleGrid/overview.built.css"
        type="text/css"
      />

      <Contact isTopOut={true} />
    </div>
  );
}
