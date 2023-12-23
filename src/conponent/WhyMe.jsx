import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion"
import { LazyMotion, domAnimation, m } from "framer-motion"
import Database from '../Datebase.json';
import { Link } from 'react-router-dom';

const data = Database.PersonalInfo.StudyExperience
const keyfeature = Database.PersonalInfo.WhyMe

const WelcomeContainer = Database.Animation.Variant.WelcomeContainer
const StagerFadeInUp = Database.Animation.Transition.StagerFadeInUp
const WelcomeItem = Database.Animation.Variant.WelcomeItem



function WhyMe() {
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
    <div>
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
      <div id='WhyMe' className='flex justify-center pt-36'>
        <div className='animate__animated animate__fadeInUp items-center flex justify-center'>
          <div className='animate__animated animate__zoomIn'>
            <i class=" fi text-5xl lg:text-8xl  fi-rr-lightbulb-on mr-3 pt-3 "></i>
          </div>
          <h2  className="animate__animated animate__zoomIn text-5xl lg:text-8xl font-bold font-mono">Why me?</h2>
        </div>
      </div>
      {/* Item 容器 */}
      <AnimatePresence>
        <section
          className="section section-incentive background-alt staggered-end">
          <div className="gallery gallery-align-start gallery-icon-cards">
            <div className="scroll-container">
              <div className="item-container">
                <motion.ul
                  variants={WelcomeContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="card-set" role="list">
                  {keyfeature.map((feature, index) => (
                    <motion.div
                      href={feature.href}
                      key={index}
                      variants={WelcomeItem}
                      transition={StagerFadeInUp}
                      whileHover={{ scale: 1.001 }}
                      whileTap={{ scale: 0.99 }}
                      layout
                      className="gallery-item grid-item current">
                      <div className="icon-card card-container">
                        <div className="card" >
                          <div className="card-modifier card-padding has-trigger-button fixed-width bg-button"
                            style={{
                              backgroundImage: `url(${feature.pic})`,
                              backgroundSize: '100% auto',
                              backgroundRepeat: 'no-repeat',
                              backgroundPosition: 'center bottom'
                            }}>
                            <div className="card-viewport-content ">
                              <div className="icon-card-content">
                                <div className="">
                                  <div class="flex-shrink-0">
                                    <div class="items-center flex justify-start">
                                      <i style={{ animationDelay: `${index * 0.2}s` }} className={`${feature.icon} fi animate__animated  animate__zoomIn animate__slow text-6xl`}></i>
                                    </div>
                                    <div className='py-6 sm:py-3 flex justify-start'>
                                      <div style={{ animationDelay: `${index * 0.2}s` }} class="animate__animated  animate__zoomIn animate__slow typography-card-headline" >{feature.advantage}</div>
                                    </div>
                                  </div>
                                </div>
                                <div className="copy-container ">
                                  <p style={{ animationDelay: `${index * 0.3}s` }} class="md:h-[500px] h-[430px] my-7 animate__animated  animate__fadeInUp  card-description text-justify ">{feature.description}</p>
                                </div>
                              </div>
                            </div>
                            <div>
                            </div>
                          </div>
                        </div>

                        <a class="anz-card-modal-link"
                          href={feature.href}>
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
                      </div>
                    </motion.div>
                  ))}

                </motion.ul>

              </div>
            </div>
            <div
              data-analytics-gallery-interaction-type="paddlenav"
              data-gallery-paddlenav=""
              className="paddlenav paddlenav-alpha"
            >
              <ul className="sticky-element">
                <li className="left-item">
                  <button
                    aria-label="上一張"
                    className="paddlenav-arrow paddlenav-arrow-previous"
                    disabled="true"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
                      <path d="M21.559,12.062 L15.618,17.984 L21.5221,23.944 C22.105,24.533 22.1021,25.482 21.5131,26.065 C21.2211,26.355 20.8391,26.4999987 20.4571,26.4999987 C20.0711,26.4999987 19.6851,26.352 19.3921,26.056 L12.4351,19.034 C11.8531,18.446 11.8551,17.4999987 12.4411,16.916 L19.4411,9.938 C20.0261,9.353 20.9781,9.354 21.5621,9.941 C22.1471,10.528 22.1451,11.478 21.5591,12.062 L21.559,12.062 Z" />
                    </svg>
                  </button>
                </li>
                <li className="right-item">
                  <button
                    aria-label="下一張"
                    className="paddlenav-arrow paddlenav-arrow-next"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
                      <path d="M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z" />
                    </svg>
                  </button>
                </li>
                <div className="scrim" />
              </ul>
            </div>
          </div>
        </section>

      </AnimatePresence>
    </div>
  );


  return (
    <div>
      {WhyMe}
    </div>
  );
}

export default WhyMe;
