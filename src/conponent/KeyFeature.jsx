import React, { useState, useEffect } from 'react';
import Database from '../Datebase.json';
import { Link } from 'react-router-dom';  
import { motion, AnimatePresence } from "framer-motion"
import { LazyMotion, domAnimation, m } from "framer-motion"

const KeyFeatures = Database.PersonalInfo.KeyFeature
const WelcomeContainer = Database.Animation.Variant.WelcomeContainer
const StagerFadeInUp = Database.Animation.Transition.StagerFadeInUp
const WelcomeItem = Database.Animation.Variant.WelcomeItem

function KeyFeature () {

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
  
  const KeyFeature = (
    <div class=" smoothchange">
      <section class={`smoothchange -ribbon section section-image  `} id="ribbon" 
            style={{backgroundImage: 'url(/Graphs/home/keyfeaturebg.jpg)'}}>
            <div class="smoothchange appear place-items-center">
                    <div class="mx-auto max-w ">
                      <div class="  ">
                      <AnimatePresence exitBeforeEnter={false}>
                          <motion.dl 
                          variants={WelcomeContainer}
                          initial="hidden"
                          whileInView="visible"
                          transition={StagerFadeInUp}
                          // viewport={{ once: true }}
                          class=" grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3 animate__animated animate__fadeInUp place-items-center">
                            {KeyFeatures.map((KeyFeature,index) => (
                              
                              <motion.div
                                  key={index}
                                  variants={WelcomeItem}
                                  whileHover={{ scale: 1.03}}
                                  whileTap={{ scale: 0.99 }}
                                  transition={StagerFadeInUp}
                                  layout
                                  className='icon mx-auto flex max-w flex-col p-12 m-5 rounded-3xl  hover:bg-gray-950/20 hover:backdrop-blur-3xl hover:shadow-2xl focus:shadow-2xl focus:bg-lime-950/0   place-items-stretch'>
                                   <a href={`/${KeyFeature.href}`}  >
                                   
                                    <dd style={{ animationDelay: `${index * 0.2}s` }} class="animate__animated animate__zoomIn order-first text-7xl font-semibold tracking-tight text-white lg:text-8xl items-center">
                                        <i class={` text-gray-300 fi ${KeyFeature.icon}`}></i>
                                    </dd>
                                    <dd style={{ animationDelay: `${index * 0.2}s` }}
                                        class="animate__animated animate__zoomIn order-first text-5xl font-semibold tracking-tight text-white lg:text-6xl items-center">
                                        {KeyFeature.keyfeature}</dd>
                                        <dt style={{ animationDelay: `${index * 0.2}s` }} class="animate__animated animate__fadeInUp animate__slower text-3xl leading-7 text-gray-400">{KeyFeature.description}</dt>
                                    </a>                               
                              </motion.div>))}
                            </motion.dl>
                            </AnimatePresence>

                      </div>
                    </div>
                </div>
        </section>
    </div>
  );

  return (
    <div className='mb-48'>
      {KeyFeature}
    </div>
  );
}

export default KeyFeature;
