import React, { useState, useEffect,useRef } from 'react';
import Database from '../Datebase.json';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence,useScroll,useTransform } from 'framer-motion';
import { hideRow, bgPic, useLanguage } from '../help/helpFunction';
const data = Database.PersonalInfo.SelfDescribing;
const floateMenu = {
  start: { opacity: 0, scale: 0 },
  end: {
    scale: 1,
    opacity: 1,
  },
};

function SelfDescribing() {
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
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['-80vh ', '-50vh'],
  });

  // 根据滚动进度计算位移
  const x = useTransform(scrollYProgress, [0, 1], ["30vw", '0vw']);
  const y = useTransform(scrollYProgress, [0, 1], ["-30vh",'0vh']);
  const y2 = useTransform(scrollYProgress, [0, 1], ["30vh",'0vh']);
  const borderTopRightRadius = useTransform(scrollYProgress, [0, 1], [200, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);


  const SelfDescribing = (

      <section
      id='SelfDescribing' 
        className={`smoothchange items-center bg-fixed bg-center relative flex justify-center w-full`}
        style={{
          backgroundImage: `url(${data.pic})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
        }}
      >
        <span className='w-full h-full absolute opacity-70 bg-black '></span>
        <div className='visblecontainer py-[20vh]'>
          <motion.div
          style={{opacity,scale }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              ease: [0.455, 0.03, 0.515, 0.955],
              duration: 1,
            }}
            className='text-white z-10 animate__animated animate__slideInUp text-8xl font-bold my-12 py-24 font-mono'
          >
            <i className='fi fi-rr-comment-heart text-5xl lg:text-8xl mr-[20px] pt-3 '></i>
            {lang == 0 && 'Self Describing'}
            {lang == 1 && '自述'}
          </motion.div>
          <div className=' pb-48'>
            <motion.blockquote
ref={ref}  
              className=''
            >
              <motion.div   style={{x,y, borderTopRightRadius, opacity,scale }} className=' animate__animated animate__zoomIn'>
                <motion.div className=' animate__animated animate__slideInUp alignright  '>
                  <motion.img
                    width='200'
                    className='rounded-full'
                    src={Database.PersonalInfo.Avatar[0]}
                  ></motion.img>
                </motion.div>
              </motion.div>
              <motion.div
                style={{x,y, borderTopRightRadius, opacity }}
                className=' block  animate__animated animate__slideInUp text-white'
              >
                {data.description[lang]}
              </motion.div>
            </motion.blockquote>
          </div>
        </div>
      </section>
  );

  return <motion.div   
  className={``}>{SelfDescribing}</motion.div>;
}

export default SelfDescribing;
