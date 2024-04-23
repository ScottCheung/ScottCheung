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
    offset: ['-100%', '0%'],
  });

  const width = useTransform(scrollYProgress, [0, 1], ['0vw', '100vw'], {
    ease: easeInOut,
  });
  const height = useTransform(scrollYProgress, [0, 1], ['100vw', '150vw'], {
    ease: easeInOut,
  });
  const borderRadius = useTransform(scrollYProgress, [0, 1], [200, 0], {
    ease: easeInOut,
  });

  const KeyFeature = (
    <motion.div
      ref={ref}
      style={{ width, borderRadius }}
      className={`w-full flex h-[100vh]  md:h-[150vh]   overflow-hidden transform-gpu `}
    >
      <motion.section className='w-full h-[150vh] relative overflow-hidden  '>
        <img
          className='w-full md:h-[150vh] object-cover absolute object-bottom '
          src={bg[0]}
        />
        <motion.span
          // style={{ borderRadius, opacity }}
          className={`w-full h-full absolute  transition-all bg-black/60`}
        ></motion.span>

        <motion.div
          variants={Welcomevisblecontainer}
          initial='hidden'
          whileInView='visible'
          transition={StagerFadeInUp}
          // viewport={{ once: true }}

          className='grid visblecontainer  py-48  z-50  absolute left-0 right-0 items-center md:top-[40vh] '
        >
          {KeyFeatures.map((KeyFeature, index) => (
            <motion.div
              key={index}
              variants={WelcomeItem}
              whileTap={{ scale: 0.97, transition: { duration: 0.1 } }}
              transition={StagerFadeInUp}
              viewport={{ margin: '-30%' }}
              layout
              className=' px-[20px] rounded-[28px]  hover:bg-gradient-to-t   from-lime-500/20  to-emerald-500/20  hover:backdrop-blur-md  hover:shadow-2xl focus:shadow-2xl  grid-item large-span-4 medium-span-6 small-span-6 grid-item-search h-[230px]'
            >
              <a
                href={`${KeyFeature.href}`}
                className='w-full flex item-center md:justify-center justify-start'
              >
                <div className='absolute text-[50px] right-20 top-20 font-semibold  text-white '>
                  <N n={KeyFeature.no} d={1.5} />
                </div>
                <div className='flex items-center w-full justify-center my-[30px]'>
                  <div className='flex flex-col  typography-card-headline bg-gradient-to-br text-transparent bg-clip-text  from-lime-500  to-emerald-500   items-center'>
                    <i
                      className={`   text-[100px]  fi  ${KeyFeature.icon}`}
                    ></i>
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
        </motion.div>
      </motion.section>
    </motion.div>
  );

  return <div className='flex justify-center'>{KeyFeature}</div>;
}

export default KeyFeature;
