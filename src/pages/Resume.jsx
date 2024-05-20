import { useTime } from "framer-motion";
import React, { useState } from "react";
import DockerBar from "../conponent/DockerBar";
import { useAppContext } from "../help/ContextManager";
import { motion } from "framer-motion";
import N from "../conponent/Num";
import Navbar from "../conponent/Navbar";
import { useParams, useNavigate } from "react-router-dom";

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
  // const printMode = true;
  let { resume } = useParams();
  const { ResumeView } = useAppContext();

  console.log("id", resume);
  const forceColor = printMode ? resume : ResumeView.forceColor;
  const colorDepth = ResumeView.colorDepth;

  const cvData = {
    header: {
      name: "Xianzhe(Scott) Zhang",
      contacts: [
        {
          name: "Front-end Developer",
          icon: <i class="fi fi-rr-briefcase"></i>,
          // link: "tel:+61 434344292",
        },
        {
          name: "+61 434344292",
          icon: <i class="fi fi-rr-mobile-notch"></i>,
          link: "tel:+61 434344292",
        },
        {
          name: "xianzhe.zhang@student.unsw.edu.au",
          icon: <i class="fi fi-rr-envelope"></i>,
          link: "mailto:xianzhe.zhang@student.unsw.edu.au",
        },
        {
          name: "xianzhe.site",
          icon: <i class="fi fi-rr-link-alt"></i>,
          link: "https://xianzhe.site",
        },
        {
          name: "xianzhe1110",
          icon: (
            <svg
              className={`fill-${EmphasizeColorLists[forceColor]}-${colorDepth}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
            </svg>
          ),
          link: "https://www.linkedin.com/in/xianzhe1110/",
        },
        // {
        //   name: 'Project',
        //   icon: <i class='fi fi-rr-folder'></i>,
        //   link: 'https://xianzhe.site/project',
        // },
      ],
    },
    sections: [
      {
        title: "Summary",
        icon: <i class="fi fi-rr-user"></i>,
        content:
          "Passionate front-end developer with over 2 years of development experience and 7 years of design experience, specializing in JavaScript, Tailwind, and Framer Motion. Proven expertise in front-end development, proficient in creating great user experiences, and adept at improving user interaction and satisfaction. Experienced in designing and deploying beautiful, reliable, and fluid software systems. (More details at https://xianzhe.site). ",
      },
      {
        title: "Highlights",
        icon: <i class="fi fi-sr-star-shooting"></i>,
        highlights: [
          {
            no: 3,
            keyfeature: "Degrees",
            href: "https://xianzhe.site/Degrees",
            icon: "fi-rr-graduation-cap",
          },
          {
            no: 17,
            keyfeature: "scholarships",
            href: "https://xianzhe.site/scholarships",
            icon: "fi-rr-trophy-star",
          },
          {
            no: 58,
            keyfeature: " Certificates",
            href: "https://xianzhe.site/Certificates",
            icon: "fi-rr-diploma",
          },
          {
            no: 59,
            keyfeature: " Skills",
            icon: "fi fi-rr-tools",
          },
          {
            no: 23,
            keyfeature: " Applications",
            icon: "fi-sr-window-alt",
          },
          // {
          //   no: 1000000,
          //   result: "1 M+",
          //   keyfeature: "1 million views+",
          //   icon: "fi-br-following",
          // },
          {
            no: 42,
            keyfeature: "HD courses",
            icon: "fi-rr-circle-a",
          },
        ],
      },
      {
        title: "Education",
        icon: <i class="fi fi-rr-graduation-cap"></i>,
        edus: [
          {
            degree: "Bachelor of Engineer",
            school: "SWUST",
            link: "https://xianzhe.site/major/FunctionalMaterial",
            major: "Functional Material",
            gpa: "84/100",
            // coursework: [
            //   'circuit analysis',
            //   'circuit design',
            //   'Organic Chemistry',
            //   'Physical Chemistry',
            //   'Inorganic Chemistry',
            //   'Analytical Chemistry',
            //   'Polymer Chemistry',
            // ],
            period: "Sep 2017 - May 2022",
          },
          {
            degree: "Bachelor of Management",
            school: "SWUST",
            link: "https://xianzhe.site/major/BusinessAdministration",
            major: "Administration Management",

            period: "Sep 2021 - May 2022",
          },
          {
            degree: "Master of IT",
            school: "UNSW",
            link: "https://xianzhe.site/major/ArtificalInteliigence",
            major: "Artificial Intelligence",
            period: "Sep 2022 - May 2024",
          },
        ],
      },
      {
        title: "Projects",
        // link: 'https://xianzhe.site/#Project',
        icon: <i class="fi  fi-rr-folder"></i>,
        projects: [
          {
            name: "Neo4j iGrapher ( Graphical data code-zero analysis tool )",
            link: "http://43.128.92.60/",
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
            contribution: [
              {
                title: "Interface and Interaction Design",
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
            name: "Personal website ( Portfolio )",
            link: "https://xianzhe.site/",
            skill: [
              "Neo4j",
              "JavaScript",
              "React",
              "Tailwind",
              "Framer Motion",
              "Chrome DevTools",
              "Photoshop",
            ],
            contribution: [
              {
                title: "User Interface and Interactive Animation Design",
                description:
                  "Designed and implemented visually appealing user interfaces and over 40 interactive animations using Framer Motion and other animation libraries. Used Google Performance Analytics to optimize performance and improve site performance by 50% animation. Improved user experience and satisfaction through intuitive and engaging animations.",
              },
              {
                title: "Web Development",
                description:
                  "Developed entire websites from scratch using JavaScript, React, Tailwind, and more. Created 36 adaptive components for data visualization in React, adapted to both desktop, mobile, and tablet to better showcase individuals.",
              },
              {
                title: "Server Deployment",
                description:
                  "Deployed the website to a server with domain mapping set up to ensure high availability and accessibility. Regularly maintained the web pages with missing elements and fixed unanticipated bugs on a regular basis.",
              },
            ],
            period: "Oct 2023 - Now",
          },
          // {
          //   name: "Advanced Explosive Materials Research",
          //   // link: "http://example.com/",
          //   skill: [
          //     "Experimental Design",
          //     "Theoretical Analysis",
          //     "Laboratory Safety",
          //     "Chemical Synthesis",
          //     "Data Analysis",
          //     "Project Management",
          //   ],
          //   contribution: [
          //     {
          //       title: "Innovative Research and Development",
          //       description:
          //         "Independently conducted high-risk experiments with high energy and low sensitivity explosives (HMX / CL-20 / FOX-7) as part of a secretive national defense project. Demonstrated strong practical abilities from theoretical verification to experimental execution, ensuring innovative solutions under stringent safety protocols.",
          //     },
          //     {
          //       title: "Early Laboratory Engagement",
          //       description:
          //         "Proactively contacted and collaborated with mentors and research facilities, securing early access to the laboratory as a freshman—a privilege typically reserved for junior-level students. This early involvement highlights exceptional initiative and capability in handling complex scientific tasks.",
          //     },
          //     {
          //       title: "Design and Safety Optimization",
          //       description:
          //         "Designed and successfully executed several high-stakes experiments, significantly advancing the project's goals. Implemented rigorous safety measures to mitigate risks associated with explosive materials, enhancing overall lab safety and project deliverables.",
          //     },
          //   ],
          //   period: "Sept 2017 - June 2021",
          // },
        ],
      },
      {
        title: "Skill",
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
          "Front-end": [
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
          "Back-end": [
            "MySQL",
            "☆ PostgreSQL",
            "☆ NodeJS",
            "☆ Json",
            "TablePlus",
          ],
          Database: [
            "MySQL",
            "☆ PostgreSQL",
            "Tableau",
            "☆ Python",
            "☆ Neo4j",
            "☆ Pandas",
          ],
          "AI-Algorithm": [
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
      },
      {
        title: "Why Me",
        icon: <i className=" fi fi-rr-lightbulb-on"></i>,
        whymes: [
          {
            id: "LearningAbility",
            advantage: ["Learning Ability"],
            href: "https://xianzhe.site/whyme/LearningAbility",
            icon: "fi-rr-graduation-cap",
          },
          {
            id: "Leadership",
            advantage: ["Leadership"],
            href: "https://xianzhe.site/whyme/Leadership",
            icon: "fi-rr-users-alt",
          },
          {
            id: "Communication",
            advantage: ["Communication Skills"],
            href: "https://xianzhe.site/whyme/Communication",
            icon: "fi-rr-comments",
          },
          {
            id: "ProblemSolving",
            advantage: ["Problem Solving"],
            href: "https://xianzhe.site/whyme/ProblemSolving",
            icon: "fi-rr-lightbulb-question",
          },
          {
            id: "AestheticAttitude",
            advantage: ["Aesthetic Attitude"],
            href: "https://xianzhe.site/whyme/AestheticAttitude",
            icon: "fi-rr-sparkles",
          },
          {
            id: "EmotionalStable",
            advantage: ["Emotional Stability"],
            href: "https://xianzhe.site/whyme/EmotionalStable",
            icon: "fi-rr-smile",
          },
        ],
      },
    ],
  };

  const h1 = `font-sans text-${EmphasizeColorLists[forceColor]}-${colorDepth} text-[30px] md:text-[50px]  font-bold  transition-all duration-1000`;
  const normaltext = "text-[15px] text-jusify transition-all duration-1000";
  const h2 = `flex text-[30px]  font-black text-${
    EmphasizeColorLists[forceColor]
  }-${colorDepth} group-hover:text-${
    EmphasizeColorLists[forceColor]
  }-${Math.max(
    colorDepth - 200 || 100,
  )} gap-x-[15px] items-center transition-all duration-1000`;
  const printWidth = "max-w-[1300px] mt-[50px]";
  const icon = `w-[15px] text-[15px] mr-[5px] mt-[2px]  transition-all duration-1000`;
  const divisionline = ` flex-1 h-[2px] m-0 rounded-full bg-${EmphasizeColorLists[forceColor]}-${colorDepth} opacity-50  transition-all duration-1000`;
  const division = `hidden items-center md:flex md:flex-1 h-[2px] m-0 rounded-full bg-${EmphasizeColorLists[forceColor]}-${colorDepth} opacity-10  transition-all duration-1000`;

  const h3 = `text-[15px] font-black flex items-center `;
  const timetext = `text-2xl font-[500] text-gray-400  transition-all duration-1000`;
  const whymeIcon = `text-[20px] flex justify-center items-center text-gray-400 group-hover:text-${EmphasizeColorLists[forceColor]}-${colorDepth}`;
  const whymelable = `text-[15px] text-gray-400 group-hover:text-${EmphasizeColorLists[forceColor]}-${colorDepth}`;
  const contentContainer = `flex-1 flex flex-col justify-between`;
  const laptopMode = window.innerWidth > 1024;

  if (printMode) {
    document.body.style.backgroundColor = "white";
  }

  return (
    <div className="bg-white ">
      {!printMode && <Navbar />}
      {!printMode && <DockerBar />}
      <motion.div
        layout
        id="pdf-content"
        className={`bg-white flex relative justify-center ${printMode ? "" : "py-[5%] pt-[15%] md:pt-[10%] px-[5%] pb-[30vh]"}  `}
      >
        <div
          className={`${printMode ? printWidth : "visblecontainer mx-auto"} min-h-[100vh] flex flex-col `}
        >
          <div className="py-4 text-center">
            <h1 className={h1}>{cvData.header.name}</h1>
            <div className="flex justify-center items-center gap-x-[15px] flex-wrap mt-[25px] ">
              {cvData.header.contacts.map((contact, index) => (
                <React.Fragment key={contact.name}>
                  <a
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-${EmphasizeColorLists[forceColor]}-${colorDepth}  flex justify-center items-center gap-x-[5px] `}
                  >
                    <div className={icon}>{contact.icon}</div>
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
                  {section.icon}
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
                <div className="w-full grid   gap-x-[20px]">
                  {section.edus.map((edu, index) => (
                    <a
                      href={edu.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={index}
                      className={
                        edu.link &&
                        "group cursor-pointer " +
                          " mt-3 flex justify-between items-start " +
                          `large-span-4 medium-span-6 small-span-12 grid-item `
                      }
                    >
                      <div className={contentContainer}>
                        <div className="flex-col items-center justify-start md:flex md:flex-row md:justify-between">
                          <h3
                            className={h3 + `cursor-pointer group-hover:bold `}
                          >
                            <div>
                              {edu.degree} - {edu.school}
                            </div>
                            {edu.link && (
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
                            <p className={timetext}>{edu.period}</p>
                          </div>
                        </div>

                        <div
                          className={
                            normaltext +
                            `  group-hover:text-${
                              EmphasizeColorLists[forceColor]
                            }-${colorDepth - 100}`
                          }
                        >
                          <p className="mt-1 group-hover:underline ">
                            {edu.major}
                          </p>
                          {/* <p>{edu.gpa}</p> */}
                          {/* <p>{edu.coursework.join(', ')}</p> */}
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
                        <p> Skill: {project.skill.join(", ")}</p>
                        <p> Contribution: </p>
                        <ul className="pl-5 ">
                          {project.contribution.map((item, index) => (
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
                ))}
              {/* Skills */}
              {section.skills &&
                Object.entries(section.skills).map(
                  ([category, list], index) => (
                    <div
                      key={index}
                      className="flex justify-between items-start md:items-center gap-x-[30px] py-[15px] md:py-[3px] "
                    >
                      <h2 className="font-[500] min-[20%]">{category}</h2>

                      <span className={division}></span>

                      <p className="text-right text-[15px] text-gray-600">
                        {list.join("、")}
                      </p>
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
