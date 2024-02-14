import React, { useState, useEffect } from 'react';
import Database from '../Datebase.json';
import { Link } from 'react-router-dom';  
import { motion, AnimatePresence } from "framer-motion";
import { hideRow,bgPic,useLanguage } from '../help/helpFunction';
const data = Database.PersonalInfo.SelfDescribing
const floateMenu = {
  start: { opacity: 0, scale: 0 },
  end: {
    scale: 1,
    opacity: 1,
  }
};

function SelfDescribing () {
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
  
  const SelfDescribing = (
    <div id="SelfDescribing" className="">
      
          <section className={`smoothchange items-center bg-fixed bg-center relative flex justify-center`} style={{ backgroundImage: `url(${data.pic})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }}>
                <span className="w-full h-full absolute opacity-70 bg-black "></span>
              <div className="visblecontainer py-[20vh]">
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
                  }}  className="text-white z-10 animate__animated animate__slideInUp text-8xl font-bold my-12 py-24 font-mono">
                <i className="fi fi-rr-comment-heart text-5xl lg:text-8xl mr-[20px] pt-3 "></i>{lang==0&&"Self Describing"}{lang==1&&"自述" }</motion.div>
                  <div className=" pb-48">

                      <motion.blockquote 
                                         initial={{y:150,opacity:0}}
                                         whileInView={{y:0,opacity:1}}
                                         transition={{duration:1}}
                                         viewport={{ once: true }}
                      className="">
                      <motion.div
                              className=" animate__animated animate__zoomIn">
                              <motion.div
                              className=" animate__animated animate__slideInUp alignright  ">
                                  <motion.img width="200"
                                      initial={{"scale":0,opacity:0}}
                                      whileInView={{"scale":1,opacity:1}}
                                      transition={{duration:0.7}}
                                      viewport={{ once: true }}
                                      className='rounded-full bg-gray-400'
                                      src={Database.PersonalInfo.Avatar[0]}
                                      ></motion.img>
                              </motion.div>
                          </motion.div>
                          <motion.p 
                          initial={{y:50,opacity:0}}
                          whileInView={{y:0,opacity:1}}
                          viewport={{ once: true }}
                          className=" block  animate__animated animate__slideInUp text-white">{data.description[lang]}</motion.p>
                      </motion.blockquote>

                  </div>
              </div>
          </section>

    </div>
  );

  return (
    <div>
      {SelfDescribing}
    </div>
  );
}

export default SelfDescribing;
