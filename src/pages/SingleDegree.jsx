import Navbar from "../conponent/Navbar";
import Education from "../conponent/Education";
import database from "../Database.json";
import React, { useState, useEffect } from "react";
const pathname = window.location.pathname;
const course = database.PersonalInfo.Education;
import { Link } from "react-router-dom";
import { useLanguage } from "../help/helpFunction";
import { useParams } from "react-router";
import { motion, AnimatePresence } from "framer-motion";

// if (pathname === '/major/ArtificalInteliigence') {
//   data = course.filter((item) => item.id === "AI");
// } else if (pathname === '/major/DataScience') {
//   data = course.filter((item) => item.id === "DS");
// } else if (pathname === '/major/BusinessAdministration') {
//   data = course.filter((item) => item.id === "BA");
// } else if (pathname === '/major/FunctionalMaterial') {
//   data = course.filter((item) => item.id === "FM");
// } else {
//   data = [];
// }
// console.log(data);

const visblecontainer = database.Animation.Variant.fastWelcomevisblecontainer;
const LeftappearBar = database.Animation.Transition.LeftappearBar;
const item = database.Animation.Variant.LeftWelcomeItem;

export default function Example() {
  const { major } = useParams();
  console.log(major);
  const data = course.filter((item) => item.id == major);

  // let data = [];
  const lang = useLanguage();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [navbarHeight, setNavbarHeight] = useState(40);

  const handleNavbarHeightChange = (height) => {
    setNavbarHeight(height);
  };

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
    <div className="overflow-hidden bg-white">
      <AnimatePresence>
        <motion.div
          layout
          layoutId={localStorage.getItem("currenStu")}
          className="page-overview "
          data-component-list="PageXpController"
          data-anim-scroll-group="body"
        >
          <Navbar className="z-50" onHeightChange={handleNavbarHeightChange} />
          <script src="https://cdn.tailwindcss.com"></script>
          <link rel="stylesheet" href="../style/output.css" type="text/css" />
          <link rel="stylesheet" href="../style/style.css" type="text/css" />
          <link
            rel="stylesheet"
            href="../style/appleStyleGrid/overview.built.css"
            type="text/css"
          />
          <link
            rel="stylesheet"
            href="../style/work/main.built.css"
            type="text/css"
          />
          <link
            rel="stylesheet"
            href="../style/work/overview.built.css"
            type="text/css"
          />
          <link
            rel="stylesheet"
            href="../style/work/main.built2.css"
            type="text/css"
          />
          <link
            rel="stylesheet"
            href="../style/work/overview.built2.css"
            type="text/css"
          />
          <main id="main" className="main" role="main">
            <section className="section section-welcome no-pad-bottom">
              <div className="section-content-responsive mt-24">
                <header className="section-header row">
                  <h1 className=" welcomeanimation section-header-headline">
                    {data[0].major[lang][0]}
                    {lang == 0 && " "}
                    {data[0].major[lang][1]}
                  </h1>
                  <div className="section-header-copy-visblecontainer">
                    <p>{data[0].type[lang]}</p>
                  </div>
                </header>
              </div>
              {data[0].type[0] == "Bacholor degree" && (
                <a
                  href={data[0].web}
                  className={`welcome-video-wall-visblecontainer w-full flex justify-center  py-9 flex-col bg-sky-100 bg-cover bg-center sticky z-30 shadow-2xl`}
                  style={{ top: `calc(${navbarHeight}px + 10px)` }}
                >
                  <div className="flex flex-row justify-center items-center">
                    <img
                      className="w-[130px] px-7"
                      src="https://www.swust.edu.cn/_upload/article/images/a2/be/26cda87e40859fc995162c402b1e/817d5684-7ac9-491b-8752-60cfa0809adc.png"
                      alt=""
                    />
                    <img
                      className="w-[400px] h-[130px] py-12 px-7"
                      src="https://www.swust.edu.cn/_upload/article/images/a2/be/26cda87e40859fc995162c402b1e/ea60b2ce-3079-4e5f-ad4d-440410ae50af.png"
                      alt=""
                    />
                  </div>
                </a>
              )}

              {data[0].type[0] == "Master degree" && (
                <a
                  href={data[0].web}
                  className={`welcome-video-wall-visblecontainer w-full flex justify-center  py-9 flex-col bg-sky-100 bg-cover bg-center sticky z-30 shadow-2xl`}
                  style={{
                    top: `calc(${navbarHeight}px + 10px)`,
                    backgroundImage:
                      "url(https://www.student.unsw.edu.au/sites/default/files/uploads/global/unsw-students-banner.png)",
                  }}
                >
                  <div className="flex flex-row justify-center items-center">
                    <img
                      className="w-[110px] h-auto"
                      src="https://www.edigitalagency.com.au/wp-content/uploads/new-UNSW-logo-png-vertical-crest.png"
                      alt=""
                    />
                  </div>
                </a>
              )}
              <div className="welcome-video-wall-visblecontainer visblecontainer space-y-6 h-auto">
                <div className=" text-gray-500 pt-24 pb-4">
                  <h2 className="typography-section-intro-headline section-intro-headline">
                    {lang == 0 && "University Status"}
                    {lang == 1 && "学校信息"}
                  </h2>
                </div>
                <p className=" text-justify">{data[0].unides[lang][0]}</p>
                <p className=" text-justify">
                  {data[0].unides[lang][1]}
                  <a className="text-sky-500" href={data[0].web}>
                    {" "}
                    [ {lang == 0 && "Offical Website"}
                    {lang == 1 && "官网"} ]
                  </a>
                </p>
                <div className=" text-gray-500 pt-24 pb-4">
                  <h2 className="typography-section-intro-headline section-intro-headline">
                    {data[0].major[lang][0]}
                    {lang == 0 && " "}
                    {data[0].major[lang][1]}
                  </h2>
                </div>
                <p className=" text-justify">{data[0].majordes[lang][0]}</p>
                <p className=" text-justify">
                  {data[0].majordes[lang][1]}
                  <a className="text-sky-500" href={data[0].majorweb}>
                    {" "}
                    [ {lang == 0 && "weki"}
                    {lang == 1 && "维基百科"} ]
                  </a>
                </p>
              </div>
            </section>
            <section className="section section-welcome no-pad-bottom visblecontainer">
              <div className="welcome-video-wall-visblecontainer  space-y-6 h-auto w-[100%]">
                <div className="w-[100%] text-gray-500 pt-24 pb-4  bg-gradient-to-br from-white from-10% via-white via-90% to-white/0  sticky top-[25px] z-50">
                  <h2 className="typography-section-intro-headline section-intro-headline ">
                    {lang == 1 && "主要课程"}
                    {lang == 0 && "Main Course"}
                  </h2>
                  {lang == 0 && (
                    <thead
                      className={`${
                        windowWidth > 786 ? "" : "hidden"
                      } pb-[15px] w-[100%] flex justify-between text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-400`}
                    >
                      <th className="pl-[2%] py-3 text-center w-[5%]">
                        Serial
                      </th>
                      <th className="pl-[4%] py-3 w-[34%]">Course</th>
                      <th className="px-6 py-3 text-center w-[12.5%]">Type</th>
                      <th className="pr-[2%] py-3 text-center w-[12.5%]">
                        descrition
                      </th>
                    </thead>
                  )}
                  {lang == 1 && (
                    <thead
                      className={`${
                        windowWidth > 786 ? "" : "hidden"
                      } pb-[15px] w-[100%] flex justify-between text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-400`}
                    >
                      <th className="pl-[2%] py-3 text-center w-[10%]">序号</th>
                      <th className="pl-[4%] py-3 w-[34%]">课程</th>
                      <th className="px-6 py-3 text-center w-[12.5%]">类型</th>
                      <th className="pr-[2%] py-3 text-center w-[12.5%]">
                        其他
                      </th>
                    </thead>
                  )}
                </div>

                <p className=" text-justify">{data[0].description[lang]}</p>
                <div className="pb-48 relative overflow-x-auto">
                  <motion.table
                    variants={visblecontainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="w-full  text-left rtl:text-right text-gray-500 dark:text-gray-40"
                  >
                    {lang == 0 && (
                      <thead
                        className={`${
                          windowWidth <= 786 ? "" : "hidden"
                        } text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 `}
                      >
                        <tr>
                          <th scope="col" className="px-6 py-3 text-center">
                            Serial
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Course
                          </th>
                          <th scope="col" className="px-6 py-3 text-center">
                            Type
                          </th>
                          <th scope="col" className="px-6 py-3 text-center">
                            descrition
                          </th>
                        </tr>
                      </thead>
                    )}
                    {lang == 1 && (
                      <thead
                        className={`${
                          windowWidth <= 786 ? "" : "hidden"
                        } text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 `}
                      >
                        <th className="pl-[2%] py-3 text-center w-[10%]">
                          序号
                        </th>
                        <th className="pl-[4%] py-3 w-[34%]">课程</th>
                        <th className="px-6 py-3 text-center w-[12.5%]">
                          类型
                        </th>
                        <th className="pr-[2%] py-3 text-center w-[12.5%]">
                          其他
                        </th>
                      </thead>
                    )}
                    {data[0].courses[lang].map((subject, index) => (
                      <motion.tbody
                        key={index}
                        variants={item}
                        transition={LeftappearBar}
                        whileHover={{ scale: 1.001 }}
                        whileTap={{ scale: 0.99 }}
                        layout
                      >
                        <tr className="max-w-full text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
                          >
                            {index + 1}
                          </th>
                          <td
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            {subject.CourseName}
                          </td>
                          <td className="px-6 py-4 text-center">
                            {subject.Type}
                          </td>
                          <td className="px-6 py-4 text-center">
                            {subject.Description}
                          </td>
                        </tr>
                      </motion.tbody>
                    ))}
                  </motion.table>
                </div>
              </div>
            </section>
            <Education hideTittle={true} simpleVer={true} />
          </main>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
