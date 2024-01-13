import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion"
import Database from '../Datebase.json';
import { hideRow,bgPic,useLanguage } from '../help/helpFunction';
import More from './More';
import { Link, useNavigate } from 'react-router-dom';


const Welcomevisblecontainer = Database.Animation.Variant.Welcomevisblecontainer
const StagerFadeInUp = Database.Animation.Transition.StagerFadeInUp
const WelcomeItem = Database.Animation.Variant.WelcomeItem




function WhyMe({hideTittle}) {
  const data = Database.PersonalInfo.StudyExperience
  const lang = useLanguage();
  const keyfeature = Database.PersonalInfo.WhyMe[lang]

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

  const WhyMe = (
    <div >
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
      </motion.div>
      {/* 一级标题 */}
      <div id='WhyMe' className={`${hideTittle? "hidden":""} flex justify-center pt-36`}>
      <motion.div
                  initial={{  opacity: 0}}
                  whileInView={{ opacity: 1}}
                  transition={{
                    "ease": [
                    0.455,
                    0.030,
                    0.515,
                    0.955
                  ],
                  "duration": 1,
                  }} className='animate__animated animate__fadeInUp items-center flex justify-center'>
          <div className='animate__animated animate__zoomIn'>
            <i class=" fi text-5xl lg:text-8xl  fi-rr-lightbulb-on mr-3 pt-3 "></i>
          </div>
          <h2  className="animate__animated animate__zoomIn text-5xl lg:text-8xl font-bold font-mono">{lang==0&&"Why me?"}{lang==1&&"优势" }</h2>
        </motion.div>
      </div>
      {/* Item 容器 */}
      <AnimatePresence>
        <section
          className="section section-incentive background-alt staggered-end">
          <div className="gallery gallery-align-start gallery-icon-cards">
            <div className="scroll-visblecontainer">
              <div className="item-visblecontainer">
                <motion.ul
                  variants={Welcomevisblecontainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="card-set p-[20px] overflow-hidden" role="list">
                  {keyfeature.map((feature, index) => (
                    <motion.div
                      to={feature.href}
                      key={index}
                      variants={WelcomeItem}
                      transition={StagerFadeInUp}
                      whileHover={{ scale: 1.001 }}
                      whileTap={{ scale: 0.99 }}
                      className="gallery-item grid-item current">
                      <div className="icon-card card-visblecontainer">
                        <div className="card" >
                          <div className={`${hideTittle? `${windowWidth>768? "bg-gray-100":"bg-gray-900/80"}  `:"bg-white"}  card-modifier card-padding has-trigger-button fixed-width bg-button`}
                            style={!hideTittle? ({ ...bgPic(feature.pic, "100% auto", "center bottom") }) : null}>
                            <div className="card-viewport-content">
                              <div className="icon-card-content">
                                <div className="">
                                  <div class={``}>
                                    <div class="items-center flex justify-start">
                                      <i style={{ animationDelay: `${index * 0.2}s` }} className={`${feature.icon} fi animate__animated animate__delay-3s  animate__zoomIn animate__slow text-6xl ${feature.color1+" "+feature.color2} flex-shrink-0 bg-gradient-to-r text-transparent bg-clip-text`}></i>
                                    </div>
                                    <div className='py-6 sm:py-3 flex justify-start'>
                                      <div style={{ animationDelay: `${index * 0.2}s` }} class={`animate__animated  animate__delay-3s animate__zoomIn animate__slow typography-card-headline ${feature.color1+" "+feature.color2} flex-shrink-0 bg-gradient-to-r text-transparent bg-clip-text`}>{feature.advantage}</div>
                                    </div>
                                  </div>
                                </div>
                                <div className={`${hideTittle? "hidden":""} copy-visblecontainer md:h-[450px] h-[290px]`}>
                                  <div style={{...hideRow(3), animationDelay: `${index * 0.3}s` }}  class={`text-full  my-7 animate__animated  animate__fadeInUp  card-description text-justify `}>{feature.description}</div>
                                  <More color={`  ${feature.color1+" "+feature.color2} bg-gradient-to-r text-transparent bg-clip-text `}/>
                                </div>
                              </div>
                            </div>
                            <div>
                            </div>
                          </div>
                        </div>
                        <Link class="anz-card-modal-link"
                          to={feature.href}>
                          <button
                            class="card-modal-trigger modal-trigger card-cta-modal-button"
                            type="link">
                            <div class="modal-trigger-visblecontainer">
                              <span class={`${hideTittle? `${feature.color1+" "+feature.color2} bg-gradient-to-r card-cta-modal-button-icon opacity-80`:'card-cta-modal-button-icon'}  `}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="8 8 20 20"
                                  class="card-cta-modal-button-small-icon card-modal-button-small-icon">
                                  <path
                                    d="M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z">
                                  </path>
                                </svg>
                              </span>
                            </div>
                          </button>
                        </Link>
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
    <div className='mb-[10vh]'>
      {WhyMe}
    </div>
  );
}

export default WhyMe;
