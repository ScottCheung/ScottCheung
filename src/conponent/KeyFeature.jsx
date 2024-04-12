import React, { useState, useEffect, useRef } from 'react';
import Database from '../Datebase.json';
import { Link } from 'react-router-dom';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  easeInOut,
} from 'framer-motion';
import N from './Num';
import { hideRow, useLanguage } from '../help/helpFunction';
import ScrollableContainer from './ScrollableContainer';

const KeyFeatures = Database.PersonalInfo.KeyFeature;
const bg = Database.PersonalInfo.KeyFeaturebg;
const Welcomevisblecontainer =
  Database.Animation.Variant.Welcomevisblecontainer;
const StagerFadeInUp = Database.Animation.Transition.StagerFadeInUp;
const WelcomeItem = Database.Animation.Variant.WelcomeItem;

function KeyFeature() {
  const lang = useLanguage();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['-80% -80%', '-45% -45%'],
  });

  // 根据滚动进度计算位移
  const x = useTransform(scrollYProgress, [0, 1], [-1000, 0]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], [500, 0]);
  const targetValue = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const opacity = useTransform(targetValue, [0, 70], [0.8, 1]);
  // const height = useTransform(scrollYProgress, [0, 1], [0, 2000]);

  const KeyFeature = (
    <motion.div
      layout
      ref={ref}
      style={{ x, borderRadius, opacity }}
      className={`w-full flex h-[230vh] overflow-hidden  absolute z-0 transition-all`}
    >
      <motion.section className='w-full h-[120vh] relative overflow-hidden'>
        <img
          className='w-full md:h-[150vh] object-cover absolute object-bottom gradient-mask'
          src={bg[0]}
        />
        <motion.span
          // style={{ borderRadius, opacity }}
          className={`w-full h-full absolute gradient-mask transition-all bg-black/50`}
        ></motion.span>

        <div className='flex mt-[30%]  w-full justify-center relative'>
          <motion.div
            variants={Welcomevisblecontainer}
            initial='hidden'
            whileInView='visible'
            transition={StagerFadeInUp}
            // viewport={{ once: true }}
            className='flex justify-center animate__animated animate__fadeInUp place-items-center w-full container  '
          >
            <ScrollableContainer Button_mt={'mt-[80px]'}>
              {KeyFeatures.map((KeyFeature, index) => (
                <motion.div
                  key={index}
                  variants={WelcomeItem}
                  whileTap={{ scale: 0.97, transition: { duration: 0.1 } }}
                  transition={StagerFadeInUp}
                  layout
                  className='flex flex-col   px-[20px] rounded-[28px]  hover:bg-gray-950/40  hover:backdrop-blur-md  hover:shadow-2xl focus:shadow-2xl  items-start '
                >
                  <a
                    data-popover-target={`keyFeatureDes-${index}`}
                    href={`${KeyFeature.href}`}
                    className='w-full flex item-start justify-start text-left text-white p-[28px]'
                  >
                    <div
                      style={{ animationDelay: `${index * 0.2}s` }}
                      className='w-full flex item-start justify-start text-left animate__animated animate__zoomIn text-[16vh]  font-semibold  text-white '
                    >
                      <N n={KeyFeature.no} d={1.5} />
                    </div>
                    <div className='flex items-center w-full justify-center mt-[-10px]'>
                      <div
                        style={{ animationDelay: `${index * 0.2}s` }}
                        className='flex animate__animated animate__zoomIn text-[2vh]  text-lime-500  items-center'
                      >
                        <i className={`  px-[10%]  fi  ${KeyFeature.icon}`}></i>
                        {KeyFeature.keyfeature[lang]}
                      </div>
                    </div>
                  </a>

                  <div
                    data-popover
                    id={`keyFeatureDes-${index}`}
                    role='tooltip'
                    className='absolute z-10 invisible inline-flex w-96 text-gray-500 transition-opacity duration-300 bg-white rounded-[14px] shadow-2xl opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800'
                  >
                    <div className='px-6 py-4'>
                      <p className='text-[13px] text-left font-mono'>
                        {KeyFeature.description[lang]}
                      </p>
                    </div>
                    <div data-popper-arrow></div>
                  </div>
                </motion.div>
              ))}
            </ScrollableContainer>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );

  return (
    <div className='flex relative pb-[80vh] md:pb-[100vh]'>{KeyFeature}</div>
  );
}

export default KeyFeature;
