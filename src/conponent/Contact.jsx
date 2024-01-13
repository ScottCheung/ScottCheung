import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion"
import Database from '../Datebase.json';
import { useLanguage } from '../help/helpFunction';
import { Link } from 'react-router-dom';

const data = Database.PersonalInfo.Contacts
const codes = Database.PersonalInfo.ContactsScanCode
const Welcomevisblecontainer = Database.Animation.Variant.Welcomevisblecontainer
const StagerFadeInUp = Database.Animation.Transition.StagerFadeInUp
const WelcomeItem = Database.Animation.Variant.WelcomeItem

function Contact({isTopOut}) {
  const lang = useLanguage();
  const infos = Database.PersonalInfo.Infos[lang]
  const isOut = isTopOut; //True of false
  const Contact = (
    <>
      <div className={` ${isOut? "min-h-[70vh] max-h-[70vh]":"min-h-[100vh]"}  relative`}>
        <div className="absolute top-0 bottle-0 w-full h-full  bg-center bg-cover pb-[100px]"
            style={{ 
              backgroundImage: `url(${data.bg})`
            }}
            >
            <span  className={`w-full h-full absolute bg-black  ${isOut? "opacity-50":"opacity-60"}  `}></span>
            <div className="pt-[150px]">
          <AnimatePresence>
            <section
              className="section-incentive background-alt staggered-end relative"
            >
              <div className='blackoverlay'>
                <div className={`gallery gallery-align-start gallery-icon-cards ${isOut? "-mt-[29vh]":""} `}>
                  <div className="scroll-visblecontainer">
                    <div className="item-visblecontainer">
                      <motion.ul
                        variants={Welcomevisblecontainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="card-set p-[20px] overflow-hidden" role="list">
                        {data.items.map((type, index) => (

                          <motion.li
                            to={type.link}
                            key={index}
                            variants={WelcomeItem}
                            transition={StagerFadeInUp}
                            whileHover={{ scale: 1.001 }}
                            whileTap={{ scale: 0.99 }}
                            layout
                            className="snap-end gallery-item grid-item current"
                          >
                            <div className="icon-card card-visblecontainer">
                              <div className="card">
                                <div className={`card-modifier card-padding has-trigger-button fixed-width  ${isOut? "bg-white":"backdrop-blur-lg bg-white/20"}`} >
                                  <div className="card-viewport-content">
                                    <div className="icon-card-content">
                                      <div className="icon-visblecontainer">
                                        <div class="flex-shrink-0">
                                          <div class="items-center flex justify-start">
                                            <i style={{ animationDelay: `${index * 0.3}s` }} className={`${type.icon}  ${isOut? "bg-gray":"text-white"} text-7xl animate__animated  animate__zoomIn animate__fast `}></i></div>
                                        </div>
                                      </div>
                                      <div className="copy-visblecontainer">
                                        <div class={`typography-card-headline ${isOut? "bg-gray":"text-white"}`}>{type.type[lang]} </div>
                                        <p style={{ animationDelay: `${index * 0.3}s` }} class={`mt-7 animate__animated  animate__fadeInUp  card-description text-justify ${isOut? "bg-gray":"text-white"}`}>{type.name}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Link class="anz-card-modal-link"
                                  to={type.link}>
                                  <button
                                    class="card-modal-trigger modal-trigger card-cta-modal-button"
                                    type="link">
                                    <div class="modal-trigger-visblecontainer">
                                      <span class="card-cta-modal-button-icon">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="card-cta-modal-button-small-icon card-modal-button-small-icon">
                                            <path d="M17.25,8.51H11.5V2.75A1.5,1.5,0,0,0,10,1.25h0a1.5,1.5,0,0,0-1.5,1.5V8.5H2.75a1.5,1.5,0,0,0,0,3H8.5v5.75a1.5,1.5,0,0,0,1.5,1.5h0a1.5,1.5,0,0,0,1.5-1.5V11.5h5.75a1.5,1.5,0,0,0,0-3Z">
                                            </path>
                                          </svg>
                                      </span>
                                    </div>
                                  </button>
                                </Link>
                            </div>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>
                  </div>
                  <div className='flex justify-center'>


                  </div>
                  {/* Contact way */}
                  <div className="py-24 sm:py-32 ">
                    <div className="visblecontainer">
                      <motion.ul
                        variants={Welcomevisblecontainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className=" flex justify-between items-center px-20">
                        {data.items.map((type, index) => (
                          <motion.li
                            key={index}
                            variants={{hidden: {
                              opacity: 0,
                              y: "30px",
                              scale: 0.5
                          },
                          visible: {
                              opacity: 1,
                              y: "0px",
                              scale: 1
                          }}}
                            transition={StagerFadeInUp}
                            whileHover={{ scale: 1.001 }}
                            whileTap={{ scale: 0.99 }}
                            data-popover-target={`way-${index}`}
                            layout>
                            <Link class="flex-shrink-0"
                              to={type.link} >
                              <div class="items-center flex justify-center">
                                <i style={{ animationDelay: `${index * 0.3}s` }} className={`${type.icon} text-white text-5xl animate__animated  animate__zoomIn animate__fast `}></i></div>
                              {/* {<p className='lg:text-[15px] text-white text-center'>{type.type[lang]}</p>} */}
                              <div data-popover id={`way-${index}`} role="tooltip" class="absolute z-10 invisible rounded-full flex justify-center w-64 text-white transition-opacity duration-300 backdrop-blur-md bg-black/50 shadow-2xl opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
                              <p class="px-6 py-4 text-center">
                               {type.type[lang]}
                              </p>
                              <div data-popper-arrow></div>
                            </div>
                            </Link>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>
                  </div>
                  {/* Scan Code */}
                  <div className="py-10 px-10 ">
                    <div className="visblecontainer max-w-7xl">
                      <motion.div
                        variants={Welcomevisblecontainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className=" flex justify-between  items-center ">
                        {codes.map((code, index) => (
                          <motion.div
                            key={index}
                            variants={WelcomeItem}
                            transition={StagerFadeInUp}
                            whileHover={{ scale: 1.001 }}
                            whileTap={{ scale: 0.99 }}
                            layout
                            data-popover-target={`code-${index}`}
                            class="flex-shrink-0">
                            <div class="items-center flex flex-col">
                              <div className='p-3 bg-gray-100 rounded-[10px]'>
                                <img src={code.codepic} style={{ animationDelay: `${index * 0.3}s` }} width={60} className={`text-white text-3xl animate__animated  animate__zoomIn animate__fast `}></img>
                              </div>
                              <div className='card-description text-center text-white py-4'>{code.lable[lang]}</div>
                            </div>
                            <div data-popover id={`code-${index}`} role="tooltip" class="absolute z-10 invisible rounded-[14px] inline-flex w-64 text-white transition-opacity duration-300 backdrop-blur-md bg-black/20 shadow-2xl opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
                              <div class="px-6 py-4">
                                <p className='text-[13px] text-center font-mono'>{code.des[lang]}</p>
                                <div className='text-center text-[16px]'>{code.expression}</div>
                              </div>
                              <div data-popper-arrow></div>
                            </div>
                          </motion.div>
                        ))}

                      </motion.div>
                    </div>
                  </div>
                  <footer className="text-white text-base-content flex justify-center my-12">
                    <p>Copyright © 2023-2024    -   All right reserved by Xianzhe</p>
                  </footer>
                </div>
              </div>
            </section>
          </AnimatePresence>
        </div>
        </div>
      </div>
    </>
  );

  return (
    <div >
      {Contact}
    </div>
  );
}

export default Contact;
