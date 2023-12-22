import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion"
import { LazyMotion, domAnimation, m } from "framer-motion"
import Database from '../Datebase.json';
import { Link } from 'react-router-dom';

const data = Database.PersonalInfo.Contacts
const codes = Database.PersonalInfo.ContactsScanCode
const WelcomeContainer = Database.Animation.Variant.WelcomeContainer
const StagerFadeInUp = Database.Animation.Transition.StagerFadeInUp
const WelcomeItem = Database.Animation.Variant.WelcomeItem

function Contact() {
  const Contact = (
    <>
      <div className="rounded-3xl h-[100vh]  section-image"
        style={{ backgroundImage: 'url(./contact1.jpeg)' }}>
        <div className=" rounded-3xl pt-[150px]">
          <AnimatePresence>
            <section
              className="section-incentive background-alt staggered-end relative"
            >
              <div className='blackoverlay'>
                <div className="gallery gallery-align-start gallery-icon-cards">
                  <div className="scroll-container">
                    <div className="item-container">
                      <motion.ul
                        variants={WelcomeContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="card-set snap-x" role="list">
                        {data.map((type, index) => (

                          <motion.li
                            href={type.link}
                            key={index}
                            variants={WelcomeItem}
                            transition={StagerFadeInUp}
                            whileHover={{ scale: 1.001 }}
                            whileTap={{ scale: 0.99 }}
                            layout
                            className="snap-start"
                          >
                            <div className="icon-card card-container">
                              <div className="card">
                                <div className="card-modifier card-padding has-trigger-button fixed-width" >
                                  <div className="card-viewport-content">
                                    <div className="icon-card-content">
                                      <div className="icon-container">
                                        <div class="flex-shrink-0">
                                          <div class="items-center flex justify-start">
                                            <i style={{ animationDelay: `${index * 0.3}s` }} className={`${type.icon} text-7xl animate__animated  animate__zoomIn animate__fast `}></i></div>
                                        </div>
                                      </div>
                                      <div className="copy-container">
                                        <div class="typography-card-headline">{type.type} </div>
                                        <p style={{ animationDelay: `${index * 0.3}s` }} class="mt-7 animate__animated  animate__fadeInUp  card-description text-justify ">{type.name}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <a class="anz-card-modal-link"
                                href={type.link}>
                                <button
                                  class="card-modal-trigger modal-trigger card-cta-modal-button"
                                  type="link">
                                  <div class="modal-trigger-container">
                                    <span class="card-cta-modal-button-icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="card-cta-modal-button-small-icon card-modal-button-small-icon">
                                        <path d="M17.25,8.51H11.5V2.75A1.5,1.5,0,0,0,10,1.25h0a1.5,1.5,0,0,0-1.5,1.5V8.5H2.75a1.5,1.5,0,0,0,0,3H8.5v5.75a1.5,1.5,0,0,0,1.5,1.5h0a1.5,1.5,0,0,0,1.5-1.5V11.5h5.75a1.5,1.5,0,0,0,0-3Z">
                                        </path>
                                      </svg>
                                    </span>
                                  </div>
                                </button>
                              </a>
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
                    <div className="container">
                      <motion.div
                        variants={WelcomeContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className=" flex justify-between items-center px-20">
                        {data.map((type, index) => (
                          <motion.div
                            key={index}
                            variants={WelcomeItem}
                            transition={StagerFadeInUp}
                            whileHover={{ scale: 1.001 }}
                            whileTap={{ scale: 0.99 }}
                            layout>
                            <a class="flex-shrink-0"
                              href={type.link} >
                              <div class="items-center flex justify-center">
                                <i style={{ animationDelay: `${index * 0.3}s` }} className={`${type.icon} text-white text-3xl animate__animated  animate__zoomIn animate__fast `}></i></div>
                              <p className='text-sm text-white'>{type.type}</p>
                            </a>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                  {/* Scan Code */}
                  <div className="py-10 px-10 ">
                    <div className="container max-w-7xl">
                      <motion.div
                        variants={WelcomeContainer}
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
                              <div className='p-3 bg-white rounded-lg'>
                                <img src={code.codepic} style={{ animationDelay: `${index * 0.3}s` }} width={60} className={`text-white text-3xl animate__animated  animate__zoomIn animate__fast `}></img>
                              </div>
                              <div className='card-description text-center text-white py-4'>{code.lable}</div>
                            </div>
                            <div data-popover id={`code-${index}`} role="tooltip" class="absolute z-10 invisible  inline-flex w-64 text-gray-500 transition-opacity duration-300 bg-white rounded-[14px] shadow-2xl opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
                              <div class="px-6 py-4">
                                <p className='text-[13px] text-left font-mono'>{code.des}</p>
                                <div className='text-center text-[16px]'>{code.expression}</div>
                              </div>
                              <div data-popper-arrow></div>
                            </div>
                          </motion.div>
                        ))}

                      </motion.div>
                    </div>
                  </div>
                  <footer className="text-white text-base-content flex justify-center my-24">
                    <p>Copyright © 2023-2024    -   All right reserved by Xianzhe</p>
                  </footer>
                </div>
              </div>
            </section>
          </AnimatePresence>
        </div>

      </div>

    </>
  );

  return (
    <div>
      {Contact}
    </div>
  );
}

export default Contact;
