import { useTime } from "framer-motion";
import React, { useState } from "react";
import DockerBar from "../../conponent/DockerBar";
import { useAppContext } from "../../help/ContextManager";
import { motion } from "framer-motion";
import N from "../../conponent/Num";
import Navbar from "../../conponent/NavBar/Navbar";
import { useParams, useNavigate } from "react-router-dom";
import cvData from "./resumeData.json";

const EmphasizeColorLists = [
  "red",
  "orange",
  "yellow",
  "lime",
  "sky",
  "blue",
  "purple",
];

export default function Resume() {
  const printMode = false;
  let { resume } = useParams();
  const { ResumeView } = useAppContext();
  const forceColor = printMode ? resume : ResumeView.forceColor;
  const colorDepth = ResumeView.colorDepth;
  const h1 = `font-sans tracking-wide text-${EmphasizeColorLists[forceColor]}-${colorDepth} text-[30px] md:text-[50px]  ${printMode ? "text-[100px]" : ""}  font-bold  transition-all duration-1000`;
  const normaltext = "text-[18px] text-jusify transition-all duration-1000";
  const h2 = `flex items-center text-[30px]  font-black text-${
    EmphasizeColorLists[forceColor]
  }-${colorDepth} group-hover:text-${
    EmphasizeColorLists[forceColor]
  }-${Math.max(
    colorDepth - 200 || 100,
  )} gap-x-[15px] items-center transition-all duration-1000`;
  const printWidth = "max-w-[1350px] mt-[50px]";
  const icon = `w-[15px] text-[15px] mr-[5px] mt-[2px]  transition-all duration-1000`;
  const divisionline = ` flex-1 h-[2px] m-0 rounded-full bg-${EmphasizeColorLists[forceColor]}-${colorDepth} opacity-50  transition-all duration-1000`;
  const division = `hidden items-center md:flex md:flex-1 h-[2px] m-0 rounded-full bg-${EmphasizeColorLists[forceColor]}-${colorDepth} opacity-10  transition-all duration-1000`;

  const h3 = `flex  items-center text-[20px] font-semibold flex items-center `;
  const h4 = `flex  items-center text-[15px] text-gray-500 flex items-center `;
  const timetext = `flex  items-center  text-2xl font-[500] text-gray-400  transition-all duration-1000`;
  const whymeIcon = `text-[20px] flex justify-center items-center text-gray-400 group-hover:text-${EmphasizeColorLists[forceColor]}-${colorDepth}`;
  const whymelable = `text-[15px] text-gray-400 group-hover:text-${EmphasizeColorLists[forceColor]}-${colorDepth}`;
  const contentContainer = `flex-1 flex flex-col justify-between`;
  const laptopMode = window.innerWidth > 1024;
  const strong = `block mr-2 font-semibold pr-1 -ml-1 text-${EmphasizeColorLists[forceColor]}-${colorDepth - 100} transition-all duration-1000`;

  if (printMode) {
    document.body.style.backgroundColor = "white";
  }

  return (
    <div className="flex w-full bg-white md:justify-center">
      {!printMode && (
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navbar />
        </div>
      )}
      {!printMode && <DockerBar />}
      <motion.div
        layout
        id="pdf-content"
        className={`bg-white flex relative justify-center ${printMode ? "" : "py-[5%] pt-[15%] md:pt-[10%] px-[5%] pb-[30vh]"}  `}
      >
        {/* {printMode && ( */}
        <link
          rel="stylesheet"
          href="../style/uicons/css/all/all.css"
          type="text/css"
        />
        {/* // )} */}
        <div
          className={`${printMode ? printWidth : "visblecontainer mx-auto"} min-h-[100vh] flex flex-col `}
        >
          <div className="py-4 text-center">
            <h1 className={h1}>{cvData.header.name}</h1>
            <div className="flex justify-center items-center gap-x-[15px] flex-wrap mt-[25px] ">
              {cvData.header.contacts.map((contact, index) => (
                <React.Fragment key={contact.name}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={contact.link}
                    className={`text-${EmphasizeColorLists[forceColor]}-${colorDepth}  flex justify-center items-center gap-x-[5px] ${printMode ? "text-[15px]" : ""} `}
                  >
                    <i className={contact.icon}></i>
                    <div className={contact.link && "hover:underline"}>
                      {contact.name}
                    </div>
                  </a>
                  {index !== cvData.header.contacts.length - 1 && (
                    <div
                      className={`w-[1px] h-4 bg-${EmphasizeColorLists[forceColor]}-${colorDepth}`}
                    ></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          {cvData.sections.map((section) => (
            <div key={section.title} className="">
              {/* Headers */}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={section.href}
                className={`flex justify-between items-center gap-x-[20px] mt-[30px] mb-[20px] ${
                  section.href && "group"
                }`}
              >
                <h2 className={h2}>
                  <i className={section.icon}></i>
                  {section.title}
                  {section.link && (
                    <div className="-ml-[10px] flex">
                      <svg
                        class="w-[20px] h-[20px]  -rotate-45"
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
                </h2>
                <span className={divisionline}></span>
              </a>

              {/* Summary */}
              {section.content && (
                <div
                  style={{
                    textAlign: "justify",
                    textJustify: "inter-word",
                    width: "100%",
                  }}
                  className={normaltext}
                >
                  <p>{section.content}</p>
                </div>
              )}
              {/* Highlights*/}
              <div className="flex flex-wrap w-full justify-center md:justify-between gap-[30px]">
                {section.highlights &&
                  section.highlights.map((KeyFeature, index) => (
                    <React.Fragment key={index}>
                      <motion.div
                        whileTap={{
                          scale: KeyFeature.href ? 0.97 : null,
                          transition: { duration: 0.1 },
                        }}
                        viewport={{ margin: "-30%" }}
                        layout
                      >
                        <a
                          href={KeyFeature.href ? `${KeyFeature.href}` : "#"}
                          onClick={(e) =>
                            !KeyFeature.href && e.preventDefault()
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex flex-col w-full item-center justify-center ${KeyFeature.href ? `group` : "cursor-default"} transition-all`}
                        >
                          <div className={whymeIcon}>
                            <i className={`mr-2 ${KeyFeature.icon} `}></i>
                            <N
                              n={KeyFeature.no}
                              d={printMode ? 0.000000001 : 2}
                            />
                          </div>
                          <div className="flex items-center justify-center w-full">
                            <div className={whymelable}>
                              <p>{KeyFeature.keyfeature}</p>
                            </div>
                          </div>
                        </a>
                      </motion.div>
                      {index !== section.highlights.length - 1 && (
                        <div
                          className={`w-[1px] h-4 bg-${EmphasizeColorLists[forceColor]}-${colorDepth}`}
                        ></div>
                      )}
                    </React.Fragment>
                  ))}
              </div>

              {/* Education */}
              {section.edus && (
                <div className="flex justify-between gap-x-[30px]">
                  {section.edus.map((edu, index) => (
                    <a
                      href={edu.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={index}
                      className={
                        edu.link &&
                        "group cursor-pointer flex-1 w-full " +
                          " mt-3 flex justify-between items-start " +
                          ``
                      }
                    >
                      <div className={contentContainer}>
                        <div className="flex justify-between flex-1 w-full">
                          <p
                            className={
                              h3 +
                              `cursor-pointer group-hover:bold flex flex-1  justify-start`
                            }
                          >
                            {edu.school}
                          </p>

                          {/* duration */}
                          <p className={timetext}>{edu.period}</p>
                        </div>

                        <div className="flex items-center justify-start ">
                          <div className={h4}>{edu.degree}</div>
                          {edu.link && (
                            <div>
                              <svg
                                class={h4 + " w-4 h-4 mx-2  -rotate-45"}
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
                        </div>

                        <div
                          className={
                            normaltext +
                            `duration-300  group-hover:text-${
                              EmphasizeColorLists[forceColor]
                            }-${colorDepth - 100}`
                          }
                        >
                          <p className="tracking-widest group-hover:underline">
                            {edu.major}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              )}

              {/* Projects */}
              {section.projects &&
                section.projects.map((project, index) => (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.link}
                    key={index}
                    className={
                      project.link &&
                      "group cursor-pointer " +
                        " mt-3 flex justify-between items-start " +
                        ` `
                    }
                  >
                    <div className={contentContainer}>
                      <div className="flex-col items-center justify-start md:flex md:flex-row md:justify-between">
                        <h3 className={h3}>
                          {project.name}
                          {project.link && (
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
                        <div className="flex flex-col justify-end ">
                          <p className={timetext}>{project.period}</p>
                        </div>
                      </div>

                      <div className={normaltext + " pl-[20px]"}>
                        <p>
                          <strong className={strong}>Skill:</strong>{" "}
                          {project.skill.join(", ")}
                        </p>
                        <p>
                          <strong className={strong}>Contribution:</strong>{" "}
                        </p>
                        <ul className="pl-5 ">
                          {project.contribution.map((item, index) => (
                            <li key={index} className="mb-2 text-justify">
                              <strong className={strong}>
                                ▸ {item.title} :
                              </strong>
                              {item.description}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </a>
                ))}

              {/* Skills */}
              {section.skills &&
                Object.entries(section.skills).map(
                  ([category, list], index) => (
                    <div
                      key={index}
                      className="flex justify-between items-start md:items-center gap-x-[30px] py-[15px] md:py-[3px] "
                    >
                      <h2 className={h3}>{category}</h2>

                      <span className={division}></span>

                      <div className="text-right text-[15px] text-gray-600">
                        {list.map((tag, index) => (
                          <React.Fragment key={index} className="group">
                            <p className="hidden group-hover:flex animate-animated animate-zoomIn">
                              Click to search "{tag}" on Google
                            </p>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href={`https://zh.wikipedia.org/wiki/${encodeURIComponent(tag)}`}
                              className="text-gray-600 group-hover::underline"
                            >
                              {tag}
                            </a>
                            {index < list.length - 1 && (
                              <span className="mx-2">|</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  ),
                )}
              {/* Whyme */}
              <div className="flex flex-wrap w-full justify-center md:justify-between gap-[30px]">
                {section.whymes &&
                  section.whymes.map((whyme, index) => (
                    <React.Fragment key={whyme.advantage}>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={whyme.href}
                        className={`group`}
                      >
                        <div key={index} className={whymeIcon}>
                          <i className={whyme.icon}></i>
                        </div>
                        <h3 className={whymelable}>{whyme.advantage}</h3>
                      </a>
                      {index !== section.whymes.length - 1 && (
                        <div
                          className={`w-[1px] h-4 bg-${EmphasizeColorLists[forceColor]}-${colorDepth}`}
                        ></div>
                      )}
                    </React.Fragment>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
