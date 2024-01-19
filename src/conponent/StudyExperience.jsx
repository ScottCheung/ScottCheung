import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion"
import { LazyMotion, domAnimation, m } from "framer-motion"
import Database from '../Datebase.json';
import { Link } from 'react-router-dom';
import { hideRow,useLanguage } from '../help/helpFunction';
import More from './More';

const data = Database.PersonalInfo.StudyExperience
const visblecontainer = Database.Animation.Variant.Welcomevisblecontainer
const StagerFadeInUp = Database.Animation.Transition.StagerFadeInUp
const item = Database.Animation.Variant.WelcomeItem

function StudyExperience({ hideTittle, simpleVer }) {
  const isTittle = hideTittle || false;
  const lang = useLanguage();
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
    <div>
      {!isTittle ? (<div>
        {/* 引导按钮 */}
        <motion.div
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, rotate: 180 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: [0.455, 0.03, 0.515, 0.955],
          }}
          layout
          className=''>
          <div className='animate__animated animate__rotateIn'>
            <div className=' py-24 justify-center flex '>
              <a
                href='#StudyExperience'
                id='StudyExperience'
                style={{ animationDelay: `${0.4}s` }}
                className='flex  w-24 h-24 rounded-full items-center justify-center bg-gray-200  text-center hover:text-white shadow-none hover:bg-sky-900'>
                <i class="fi fi-br-angle-up text-3xl "></i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* 一级标题 */}
        <div className='flex justify-center py-12'>
        <motion.div
              initial={{  opacity: 0}}
              whileInView={{ opacity: 1}}
              // viewport={{ once: true }}
              transition={{
                "ease": [
                0.455,
                0.030,
                0.515,
                0.955
              ],
              "duration": 1}}
              className='animate__animated animate__fadeInUp items-center flex justify-center  '>
            <div className='animate__animated animate__zoomIn'>
              <i class=" fi text-5xl lg:text-8xl fi-rr-circle-book-open mr-[20px] pt-3 "></i>
            </div>
            <h2 className="animate__animated animate__zoomIn text-5xl lg:text-8xl font-bold font-mono">{lang==1&&"学习经历"}{lang==0&&"Study Experience"}</h2>
          </motion.div>
        </div>
      </div>) : (<></>)}

      {/* Item 容器 */}
      <AnimatePresence>
        <section
          className="section section-incentive background-alt staggered-end">
          <div
            className="gallery gallery-align-start gallery-icon-cards"
          >
            <div className="scroll-visblecontainer">
              <div className="item-visblecontainer  ">
                <motion.ul
                  layout
                  variants={visblecontainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="card-set p-[20px] overflow-hidden" role="list">
                  {data.map((Experience, index) => (

                    <motion.div
                      key={index}
                      variants={item}
                      transition={StagerFadeInUp}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      layout
                      className="gallery-item grid-item current "
                    >
                      <div
                        className="icon-card card-visblecontainer "
                      >
                        <motion.div
                          className="card " tabIndex={index}>
                          <div className={`card-modifier card-padding has-trigger-button fixed-width ${hideTittle ? "bg-gray-50" : "bg-white"}`}>
                            <div className="card-viewport-content">
                              <div className="icon-card-content">
                                <div className="">
                                  <div class="flex-shrink-0">
                                    <div class="rounded-lg max-w-[120px] h-auto items-center flex justify-center">
                                      <img style={{ animationDelay: `${index * 0.3}s` }} src={Experience.logo} alt={Experience.university} className={`rounded-xl animate__animated  animate__zoomIn animate__fast `}></img></div>
                                    <div className='py-10 flex justify-start space-x-3'>
                                      <div style={{ animationDelay: `${index * 0.2}s` }} class="inline-flex animate__animated  animate__zoomIn animate__slow bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 category text-white rounded-3xl font-medium  py-1 px-5" >{Experience.tag[lang][0]}</div>
                                      {(Experience.tag[lang][1]) && (<div class="inline-flex animate__animated  animate__zoomIn animate__slow text-white rounded-3xl bg-gradient-to-r from-emerald-500 to-sky-500 font-medium  py-1 px-5  ">{Experience.tag[lang][1]}</div>)}
                                    </div>
                                  </div>
                                </div>
                                <div className="copy-visblecontainer">
                                  <div style={{ animationDelay: `${index * 0.2}s` }} class='flex flex-col items-start animate__animated animate__zoomIn  justify-start flex mb-3'>
                                    <div class="typography-card-headline">{`${Experience.major[lang][0]}`}{lang==1&&Experience.major[lang][1]} </div>
                                    <div class="typography-card-headline">{lang==0&&Experience.major[lang][1]}</div>
                                  </div>
                                  <div className={`${simpleVer ? "hidden" : ""}`}>
                                    <span style={{ animationDelay: `${index * 0.3}s` }} class="text-justify-between text-center  animate__animated card-description animate__zoomIn  category text-white rounded-3xl bg-sky-900 py-1  font-medium px-5  ring-1 ring-inset ring-gray-900/10 hover:bg-gray-700">{Experience.time[lang]}</span>
                                    <p style={{ ...hideRow(3), animationDelay: `${index * 0.3}s` }} class="mt-7 animate__animated  animate__fadeInUp  card-description text-justify ">{Experience.description[lang]}</p> <More color={"blue"} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                        <a class="anz-card-modal-link"
                          href={Experience.href} aria-label="">
                          <button
                            class="card-modal-trigger modal-trigger card-cta-modal-button"
                            type="link">
                            <div class="modal-trigger-visblecontainer">
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
                      </div>
                    </motion.div>
                  ))}

                </motion.ul>

              </div>
            </div>

          </div>
        </section>

      </AnimatePresence>
    </div>
  );

  return (
    <div >
      <motion.div className=' pb-[10vh]'>
        {StudyExperience}
      </motion.div>
    </div>
  );
}

export default StudyExperience;
