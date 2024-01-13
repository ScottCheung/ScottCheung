import React, { useState, useEffect } from 'react';
import Database from '../Datebase.json';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import N from './Num';
import { hideRow,useLanguage } from '../help/helpFunction';

const KeyFeatures = Database.PersonalInfo.KeyFeature
const Welcomevisblecontainer = Database.Animation.Variant.Welcomevisblecontainer
const StagerFadeInUp = Database.Animation.Transition.StagerFadeInUp
const WelcomeItem = Database.Animation.Variant.WelcomeItem

function KeyFeature() {
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

  const KeyFeature = (
      <section class={`smoothchange items-center bg-fixed bg-cover bg-center relative `} style={{ backgroundImage: 'url(/Graphs/home/keyfeaturebg.jpg)' }}>
        <span className="w-full h-full absolute opacity-70 bg-black "></span>
        <div className="items-center min-h-[100vh]  flex justify-center py-[20vh]">
            <div class=" items-center ">
              <AnimatePresence>
                <motion.dl
                  variants={Welcomevisblecontainer}
                  initial="hidden"
                  whileInView="visible"
                  transition={StagerFadeInUp}
                  viewport={{ once: true }}
                  class="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-3 animate__animated animate__fadeInUp place-items-center">
                  {KeyFeatures.map((KeyFeature, index) => (
                    <motion.div
                      key={index}
                      variants={WelcomeItem}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={StagerFadeInUp}
                      layout
                      className='flex flex-col w-[33%]  p-[20px] m-5 rounded-[28px] min-w-[350px]  hover:bg-gray-950/20 hover:backdrop-blur-md  hover:shadow-2xl focus:shadow-2xl  items-center'>
                      <div className='items-start flex'>
                        <Link data-popover-target={`keyFeatureDes-${index}`} to={`/${KeyFeature.href}`}  >
                          <div style={{ animationDelay: `${index * 0.2}s` }} class="ml-[-5px] text-center animate__animated animate__zoomIn text-[150px] font-semibold  text-white ">
                            <N n={KeyFeature.no} d={1.5} />
                          </div>
                          <div className='flex items-center justify-center mt-[-10px]'>
                            <div style={{ animationDelay: `${index * 0.2}s` }} class="flex-shrink-0 mr-[20px]">
                              <div class="rounded-full w-[30px] h-[30px] items-center flex justify-center bg-lime-500"><i className={`pt-3 text-[20px] fi text-gray-50  ${KeyFeature.icon}`}></i></div>
                            </div>
                            <div className='animate__animated animate__zoomIn text-[30px]  text-lime-500  items-center'>{KeyFeature.keyfeature[lang]}</div>
                          </div>
                        </Link>
                      </div>
                      <div data-popover id={`keyFeatureDes-${index}`} role="tooltip" class="absolute z-10 invisible  inline-flex w-96 text-gray-500 transition-opacity duration-300 bg-white rounded-[14px] shadow-2xl opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
                        <div class="px-6 py-4">
                          <p className='text-[13px] text-left font-mono'>{KeyFeature.description[lang]}</p>
                        </div>
                        <div data-popper-arrow></div>
                      </div>

                    </motion.div>))}
                </motion.dl>
              </AnimatePresence>

            </div>


          </div>
      </section>
  );

  return (
    <div>
      {KeyFeature}
    </div>
  );
}

export default KeyFeature;
