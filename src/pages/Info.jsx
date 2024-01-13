import React, { useState, useEffect } from 'react';
import Navbar from "../conponent/Navbar";
import { motion, AnimatePresence } from "framer-motion"
import database from "../Datebase.json";
import Contact from "../conponent/Contact";
import { useLanguage } from '../help/helpFunction';





export default function Profile() {
  const lang = useLanguage();
  const infos = database.PersonalInfo.Infos[lang]
  const visblecontainer = database.Animation.Variant.fastWelcomevisblecontainer
  const LeftappearBar = database.Animation.Transition.LeftappearBar
  const item = database.Animation.Variant.LeftWelcomeItem
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isExpanded, setIsExpanded] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Navbar topTextColor={true} />
      <main className="profile-page">
      <motion.div
            initial={{opacity:0,y:"-60px",scale:0.95}}
            transition={{"ease": [
              0.455,
              0.030,
              0.515,
              0.955
            ],
            "duration": 0.9}}
            viewport={{ once: true }}
            whileInView={{opacity:1,y:"0px",scale:1}} 
            className="relative block" style={{ height: "400px" }}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')"
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "700px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-[#e5e5e5] fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </motion.div>
        <section className="relative py-16 ">
          <div className="visblecontainer  ">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-[28px] -mt-[150px] animate__animated animate__fadeInUp ">
              <div className="px-6">
                <div className="flex  justify-center mb-64">
                  <div className="w-full flex justify-center">
                    <div className="">
                      <img
                        alt="..."
                        src="/Graphs/home/avatar.jpg"
                        class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-[75px] animate__animated animate__zoomIn"
                        style={{ maxWidth: "150px" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2 animate__animated animate__zoomIn">
                    张贤哲 | Scott Zhang
                  </h3>
                  <a
                    href="https://maps.app.goo.gl/Eg2DYKQuALM3ioqg7"
                    className="text-xl leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                    <i className="fi fi-rr-marker mr-2  text-gray-500"></i>
                    
                    {lang==0&&"Sydney, Australia" }{lang==1&&"澳大利亚，悉尼" }
                  </a>
                  <div className="mb-2 text-gray-700 mt-10">

                  </div>

                </div>
                <div className="mt-10 py-10 border-t  text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-xl leading-relaxed text-gray-800 ">
                        
                        {lang==0&&"Please note that all these informations is private. Please respect privacy and please do not spread it." }{lang==1&&"请不要随意传播个人信息，请尊重他人隐私，谢谢。" }
                      </p>
                      <button
                        className="font-normal text-pink-500 animate__animated animate__zoomIn"
                        onClick={e => e.preventDefault() & setIsExpanded(!isExpanded)}
                      >
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className={`animate__animated animate__zoomIn ${isExpanded ? "hide" : ""}`}>{lang==0&&"Show QA Info" }{lang==1&&"展开QA问答" }</motion.div>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className={`animate__animated animate__zoomIn ${!isExpanded ? "hide" : ""}`}>{lang==0&&"Show Basic Information" }{lang==1&&"展开基本信息" }</motion.div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <div className="grid visblecontainer section-sapphire pb-24 mb-[15vh]">
        <div
          className="grid-item large-span-12 tile-body-no-pad-left tile-body-no-pad-right tile-body-no-pad-bottom grid-item-stickers "
        >
          <div className="tile tile-rounded ">
            <motion.div
              variants={visblecontainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="tile-content bg-white ">
              {isExpanded ?
                (<>          {/* Further Information */}
                  <div className="tile-header ">
                    <div className='flex justify-between'>
                      <h3 className="tile-headline typography-subsection-headline mx-8 py-16 animate__animated animate__zoomIn">
                        {lang==0&&"QA Info" }{lang==1&&"QA信息" }
                      </h3>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className='tile-headline py-16  animate__animated animate__zoomIn'>
                        <a href="/">{lang==0&&"more >" }{lang==1&&"更多  >>" }</a>
                      </motion.div>
                    </div>
                  </div>
                </>)
                : (<>          {/* Basic Information */}
                  <div

                    className="tile-header ">
                    <h3 className="tile-headline typography-subsection-headline mx-8 py-16 animate__animated animate__zoomIn">
                      {lang==0&&"Basic Information" }{lang==1&&"基本信息" }
                    </h3>
                    <div class={`grid ${windowWidth > 786 ? "grid-cols-2" : "grid-cols-1"} `}>

                      {infos.map((info, index) => {
                        // 判断是否为 "Age"
                        if (info.cont === "Age"||info.cont === "年龄") {
                          // 计算年份，这里假设 birthYear 是存储出生年份的变量
                          const currentYear = new Date().getFullYear();
                          const age = currentYear - 1997 -1 ;
                          info.icon = age;
                        }

                        return (
                          <motion.div
                            key={index}
                            variants={item}
                            transition={LeftappearBar}
                            whileHover={{ scale: 1.001 }}
                            whileTap={{ scale: 0.99 }}
                            layout
                            style={{ animationDelay: `${0.05 * index}s` }}
                            className="py-3 sm:py-4 border-b mx-8 animate__animated animate__fadeInRight"
                          >
                            <div class="flex items-center">
                              <div class="flex-shrink-0">
                                <i class={`text-[17px] text-gray-900 fi ${info.label}`}></i>
                              </div>
                              <div class="flex-1 min-w-0 ms-4">
                                <p class="text-3xl font-medium text-gray-900 font-semibold truncate dark:text-white">
                                  {info.cont}
                                </p>
                              </div>
                              <div class="inline-flex text-2xl items-center  text-gray-900 dark:text-white">
                                {info.icon}
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}


                    </div>
                  </div></>)}

            </motion.div>
          </div>
          <div className='min-h-[20vh]'>
          </div>
        </div>
      </div>
      <Contact isTopOut={true} />
    </>
  );
}