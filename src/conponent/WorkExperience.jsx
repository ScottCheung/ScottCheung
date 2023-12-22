import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion"
import { LazyMotion, domAnimation, m } from "framer-motion"
import Database from '../Datebase.json';
import { Link } from 'react-router-dom';

const data = Database.PersonalInfo.StudyExperience
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.1,
    }
  }
};
const SmoothTransition = {
  ease: [0.455, 0.030, 0.515, 0.955],
  duration: 0.7
};
const item = {
  hidden: { opacity: 0, y: "60px" },
  visible: {
    opacity: 1, y: "0", borderRadius: 28,
  }
};


function WorkExperience() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const StudyExperience = (
    <div className=''>
      <div >
        <div class="container">
          {/* 引导按钮 */}
          <motion.div
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, rotate: 180 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.455, 0.03, 0.515, 0.955],
            }}
            className=''>
            <div className='animate__animated animate__rotateIn'>
              <div className=' py-8 justify-center flex '>
                <a
                  href='#StudyExperience'
                  id='StudyExperience'
                  style={{ animationDelay: `${0.4}s` }}
                  className='flex  w-24 h-24 rounded-full items-center justify-center bg-gray-200  text-center hover:text-white shadow-none hover:bg-sky-900'>
                  <i class="fi fi-sr-angle-up text-3xl "></i>
                </a>

              </div>
            </div>
          </motion.div>
          {/* 一级标题 */}
          <div className='flex justify-center lg:my-24 py-24'>
            <div className='animate__animated animate__fadeInUp items-center flex justify-center'>
              <div className='animate__animated animate__zoomIn'>
                <i class=" fi text-5xl lg:text-8xl  fi-rr-book mr-3 pt-3 "></i>
              </div>
              <h2 className="animate__animated animate__zoomIn text-5xl lg:text-8xl font-bold font-mono">Study Experience</h2>
            </div>

          </div>
          {/* Item 容器 */}
          <div >
            <AnimatePresence>
              <motion.ul
                variants={container}
                initial="hidden"
                whileInView="visible"
                // viewport={{ once: true }}
                class={`grid ${windowWidth > 768 ? 'grid-cols-2' : 'grid-cols-1'}  gap-16`}>
                {/* Item----------------------------------------------------------------------------------------------- */}
                {data.map((Experience, index) => (
                  <motion.div
                    href={Experience.href}
                    key={index}
                    variants={item}
                    transition={SmoothTransition}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.99 }}

                    className={`h-full w-full gallery-item grid-item  ${windowWidth > 1024 ? 'pl-16 pt-20 pr-40 pb-40' : 'p-12 pb-48'} bg-white `}>
                    <div >
                      <div className='flex  '>

                        {(windowWidth > 1024)
                          ? (<Link to={`${Experience.web}`} className='flex-none'>
                            <div class="flex-shrink-0">
                              <div class="rounded-lg max-w-[120px] h-auto items-center flex justify-center mx-6">
                                <img style={{ animationDelay: `${index * 0.3}s` }} src={Experience.logo} alt={Experience.university} className={`rounded-xl animate__animated  animate__zoomIn animate__fast `}></img></div>
                              <div className='py-10 flex justify-center space-x-3'>
                                <div style={{ animationDelay: `${index * 0.2}s` }} class="inline-flex animate__animated  animate__zoomIn animate__slow bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 category text-white rounded-3xl font-medium  py-1 px-5" >{Experience.tag[0]}</div>
                                {(Experience.tag[1]) && (<div class="inline-flex animate__animated  animate__zoomIn text-white rounded-3xl bg-gradient-to-r from-emerald-500 to-sky-500 font-medium  py-1 px-5  ">{Experience.tag[1]}</div>)}
                              </div>

                            </div>
                          </Link>) : (<></>)}
                        <div className='flex flex-col'>
                          {(windowWidth > 1024)
                            ? (
                              <div style={{ animationDelay: `${index * 0.2}s` }} class='flex flex-wrap items-start animate__animated animate__zoomIn  justify-start flex mb-3'>
                                <div class="font-semibold text-gray-600 xl:text-9xl lg:text-6xl md:text-6xl sm:text-3xl text-left">{`${Experience.major[0]}`}  </div>
                                <div class="lg:ml-2 font-semibold text-gray-600 xl:text-9xl lg:text-6xl md:text-6xl sm:text-3xl text-left">{Experience.major[1]}</div>
                              </div>)
                            : (
                              <div className='justify-between flex'>
                                <div justify-start flex>
                                  <div class="animate__animated  animate__zoomIn animate__slow font-semibold text-left text-9xl">{Experience.major[0].charAt(0)}{Experience.major[1].charAt(0)}</div>
                                  <div class="ml-2 animate__animated  animate__zoomIn animate__slow text-left">{Experience.major[0] + " " + Experience.major[1]}</div>
                                </div>

                                <Link to={`${Experience.web}`}>
                                  <div class="flex-shrink-0">
                                    <div class="rounded-lg max-w-[120px] h-auto items-center flex justify-center mx-6">

                                      <img src={Experience.logo} alt={Experience.university} style={{ animationDelay: `${index * 0.3}s` }} className={`animate__animated  animate__zoomIn rounded-xl animate__animated  animate__zoomIn`}></img></div>
                                    <div className='animate__animated  animate__zoomIn  py-4 flex justify-center space-x-3'>
                                      <div style={{ animationDelay: `${index * 0.2}s` }} class="inline-flex animate__animated  animate__zoomIn bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 category text-white rounded-3xl font-medium  py-1 px-5" >{Experience.tag[0]}</div>
                                      {(Experience.tag[1]) && (<div class="inline-flex animate__animated  animate__zoomIn text-white rounded-3xl bg-gradient-to-r from-emerald-500 to-sky-500 font-medium  py-1 px-5  ">{Experience.tag[1]}</div>)}
                                    </div>
                                  </div>
                                </Link>
                              </div>

                            )}

                          <div className={`w-full justify-start flex  flex-col mt-8 mb-4 `}>
                            <span style={{ animationDelay: `${index * 0.3}s` }} class="text-justify-between text-center  animate__animated  animate__zoomIn  category text-white rounded-3xl bg-sky-900 py-1 font-medium px-5  ring-1 ring-inset ring-gray-900/10 hover:bg-gray-700">{Experience.time}</span>
                          </div>


                          <p style={{ animationDelay: `${index * 0.3}s` }} class="animate__animated  animate__fadeInUp  card-description text-justify ">{Experience.description}</p>
                        </div>
                      </div>

                    </div>
                    <a class="anz-card-modal-link"
                      href={Experience.href} aria-label="">
                      <button
                        class="card-modal-trigger modal-trigger card-cta-modal-button"
                        type="link">
                        <div class="modal-trigger-container">
                          <span class="card-cta-modal-button-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="8 8 20 20"
                              class="card-cta-modal-button-small-icon card-modal-button-small-icon">
                              <path
                                d="M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z">
                              </path>
                            </svg>
                          </span>
                        </div>
                      </button>
                    </a>
                  </motion.div>
                ))}
              </motion.ul>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <LazyMotion features={domAnimation}>
      <m.div className='mb-[15vh]'>
        {WorkExperience}
      </m.div>
    </LazyMotion>
  );
}

export default WorkExperience;
