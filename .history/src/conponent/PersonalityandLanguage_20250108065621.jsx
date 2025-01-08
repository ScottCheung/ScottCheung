/** @format */

import React, { useState, useEffect } from 'react';
import Database from '../data/Database.json';
import { motion, AnimatePresence } from 'framer-motion';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { hideRow, bgPic, useLanguage, SelectText } from '../help/helpFunction';
import { Link } from 'react-router-dom';
import N from './Num';
import BG from './gfBG';

// loaddata
const language = Database.PersonalInfo.Capability.language;
const personality = Database.PersonalInfo.Capability.personality;
const apps = Database.PersonalInfo.Capability.Apps;
const frontEnd = Database.PersonalInfo.Capability['front-end'];
const BackendEnd = Database.PersonalInfo.Capability['backend-end'];
const database = Database.PersonalInfo.Capability.database;
const algorithm = Database.PersonalInfo.Capability.Algorithm;
const other = Database.PersonalInfo.Capability.other;

// animation
const StagerFadeInUp = Database.Animation.Transition.StagerFadeInUp;
const fastWelcomevisblecontainer =
  Database.Animation.Variant.fastWelcomevisblecontainer;
const Welcomevisblecontainer =
  Database.Animation.Variant.Welcomevisblecontainer;
const WelcomeItem = Database.Animation.Variant.WelcomeItem;
const ProgressBar = Database.Animation.Transition.ProgressBar;
const ProgressBarvisblecontainer =
  Database.Animation.Variant.ProgressBarvisblecontainer;
const ProgressBarItem = Database.Animation.Variant.ProgressBarItem;
const visblecontainer = Database.Animation.Variant.Welcomevisblecontainer;
const item = Database.Animation.Variant.WelcomeItem;

const tabs = [
  {
    label: ['Frontend', '前端'],
    color1: 'red-500',
    color2: 'red-700',
    content: 'Content for Frontend Tab',
  },
  {
    label: ['Backend', '后端'],
    color1: 'orange-500',
    color2: 'amber-500',
    content: 'Content for Backend Tab',
  },
  {
    label: ['DataBase', '数据库'],
    color1: 'sky-500',
    color2: 'emerald-500',
    content: 'Content for Data Tab',
  },
  {
    label: ['Algorithm', '算法'],
    color1: 'cyan-500',
    color2: 'blue-500',
    content: 'Content for Algorithm Tab',
  },
  {
    label: ['Other', '其他'],
    color1: 'indigo-500',
    color2: 'pink-500',
    content: 'Content for Other Tab',
  },
];

function PersonalityandLanguage() {
  const lang = useLanguage();
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [current, setCurrent] = useState(null);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const PersonalityandLanguage = (
    <motion.div
      layout
      className=' col-span-12 md:col-span-6 lg:col-span-4 min-h-[930px] '
      data-analytics-section-engagement='name:search filters'
      data-tile-name='search'
    >
      <motion.div
        layout
        className='flex flex-col h-full gap-[14px] lg:gap-[28px] relative'
      >
        {/* INFJ */}
        <motion.div
          // initial={{ opacity: 0 }}
          // whileInView={{ opacity: 1 }}
          layout
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          style={{
            background:
              'linear-gradient(to bottom right, rgba(0, 0, 0,  1), rgba(0, 100, 0, 1))',
          }}
          className='flex-1 rounded-[28px] relative overflow-hidden lg:overflow-visible'
        >
          <div className='flex-grow mb-[250px]'>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, height: 'auto' }}
              transition={{
                ease: [0.455, 0.03, 0.515, 0.955],
                duration: 2,
                delayChildren: 0,
              }}
              layout='position'
              className='flex  px-[20px] lg:px-[40px] pt-[20px]  flex-wrap items-center justify-between overflow-hidden mb-[40px]'
            >
              <h3
                style={{
                  lineHeight: 1.19048,
                  fontWeight: 600,
                  letterSpacing: '0.011em',
                }}
                className='flex items-center py-4 text-[30px] text-white'
              >
                {lang == 0 && 'Personality'}
                {lang == 1 && '人格类型'}
              </h3>
              <a
                href='https://www.16personalities.com/enfp-personality'
                className='flex items-center jusitify-between text-[17px] font-[600]'
              >
                <p className='text-white tile-headline'>
                  {lang == 0 && 'ENFP'}
                  {lang == 1 && '快乐小狗'}
                </p>

                <i className='flex items-center justify-end my-0 ml-2 text-white fi fi-rr-interrogation'></i>
              </a>
            </motion.div>

            <motion.div
              variants={ProgressBarvisblecontainer}
              initial='hidden'
              whileInView='visible'
              layout='position'
              className='z-30 '
            >
              {personality.feature[lang].map((per, index) => (
                <motion.div
                  layout='position'
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  onClick={(e) => {
                    // e.stopPropagation();
                    setCurrent(current === per.name ? null : per.name);
                  }}
                  key={index + per.name}
                  className='flex flex-col  px-[20px] lg:px-[40px] py-8  hover:cursor-pointer hover:bg-black/20  '
                >
                  <motion.div
                    className={`${
                      per.color1 + ' ' + per.color2
                    } flex justify-between  bg-gradient-to-r text-transparent bg-clip-text pb-[10px]`}
                  >
                    <motion.div className='text-[23px] font-[500]  flex items-baseline '>
                      <div> {per.right}</div>
                      <motion.div className=' ml-[10px]  text-[15px] flex items-baseline '>
                        <div className='flex mb-2'>{per.name}</div>
                        <i className='flex ml-2 fi text-[12px] fi-rr-interrogation'></i>
                      </motion.div>
                    </motion.div>
                    <motion.div className='flex text-[20px]  font-[600]'>
                      <N className='' n={per.label} d={3} /> %
                    </motion.div>
                  </motion.div>
                  <motion.div className='w-full h-[15px] mb-4 rounded-full bg-white/20 darrk:bg-gray-700'>
                    <motion.div
                      key={index}
                      variants={{
                        hidden: { opacity: 0, width: '0%' },
                        visible: {
                          opacity: 1,
                          width: `${per.column}`,
                        },
                      }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`${
                        per.color1 + ' ' + per.color2
                      } bg-gradient-to-r  h-[15px] rounded-full`}
                      style={{ width: `0%` }}
                    ></motion.div>
                  </motion.div>

                  {current === per.name && (
                    <motion.div
                      key={`${per.name}`}
                      initial={{ height: '0%', opacity: 0 }}
                      animate={{ height: '100%', opacity: 1 }}
                      exit={{ height: '0%', opacity: 0 }}
                      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                      className='bg-white/5 transition-all over-hidden p-[20px]  my-[20px] rounded-[14px]'
                    >
                      <motion.div
                        className={`${
                          per.color1 + ' ' + per.color2
                        }  flex-col flex bg-gradient-to-r text-transparent bg-clip-text pb-[10px]`}
                      >
                        <motion.div className='text-[20px] font-black '>
                          {per.name}
                        </motion.div>
                        <div className='flex justify-start  text-[15px] gap-[10px] items-baseline'>
                          <motion.div className='flex  font-[600] '>
                            {per.right}
                            <N className='mx-[10px]' n={per.label} d={1} /> %
                          </motion.div>
                          <p className='flex font-[600] '>+</p>
                          <motion.div
                            layoutId='left'
                            className='flex  font-[600]]'
                          >
                            {per.left}{' '}
                            <N
                              className='mx-[10px]'
                              n={100 - per.label}
                              d={1}
                            />{' '}
                            %
                          </motion.div>
                        </div>
                        <motion.div className='flex text-[15px] my-[50px] font-[600]'>
                          {per.des}
                        </motion.div>
                        <img
                          src={per.despic}
                          alt={per.name}
                          className='p-[20px]'
                        />
                      </motion.div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
          <motion.img
            layout='position'
            className='absolute bottom-[50px] scale-125 left-[50px] right-0 h-[200px] '
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            src='https://www.16personalities.com/static/images/types/headers/campaigner-mobile.svg'
            alt=''
          />
        </motion.div>

        {/* Language */}
        <motion.div
          // initial={{ opacity: 0 }}
          // whileInView={{ opacity: 1 }}
          layout
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            layout
            variants={ProgressBarvisblecontainer}
            initial='hidden'
            whileInView='visible'
            className='rounded-[28px] flex-1 h-full relative overflow-hidden'
            style={{
              background:
                'linear-gradient(to top left, #9795f0 0%, #fbc8d4 100%)',
            }}
          >
            {/* <motion.div
              layout
              className='absolute bottom-0   left-0 right-0 h-[40vh] md:h-[40vh]'
              style={{
                backgroundImage: `url(${Database.PersonalInfo.Capability.graphs.infj})`,
                backgroundSize: '80% auto',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center bottom',
                filter: 'drop-shadow(0px 20px 26px rgba(0, 0, 0, 0.3))',
              }}
            ></motion.div> */}
            <div className='p-[20px] lg:p-[40px] flex-grow'>
              <div className='w-full h-full'>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    ease: [0.455, 0.03, 0.515, 0.955],
                    duration: 2,
                  }}
                  className='flex justify-between'
                >
                  <h3
                    style={{
                      lineHeight: 1.19048,
                      fontWeight: 600,
                      letterSpacing: '0.011em',
                    }}
                    className='flex items-center py-4 text-[30px] text-purple-900'
                  >
                    {lang == 0 && 'Language'}
                    {lang == 1 && '语言能力'}
                  </h3>
                  <a
                    href='https://en.wikipedia.org/wiki/Multilingualism'
                    className='py-4 text-purple-900 text-[17px] font-[600]'
                  >
                    {lang == 0 && 'Multi-language'}
                    {lang == 1 && '多语言'}
                  </a>
                </motion.div>
                <motion.div className='space-y-8'>
                  {language[lang].map((personality, index) => (
                    <motion.div>
                      <motion.div
                        key={index}
                        className={`${
                          personality.color1 + ' ' + personality.color2
                        } flex justify-between bg-gradient-to-r text-transparent bg-clip-text pb-[10px]`}
                      >
                        <motion.div className='text-[18px] font-[500]'>
                          {personality.name}
                        </motion.div>
                        <motion.div className='flex text-[20px] font-[600]'>
                          <N n={personality.label} d={3} />
                        </motion.div>
                      </motion.div>
                      <motion.div className='w-full h-[15px] mb-4 rounded-full bg-white/20 darrk:bg-gray-700'>
                        <motion.div
                          key={index}
                          variants={{
                            hidden: { opacity: 0, width: '0%' },
                            visible: {
                              opacity: 1,
                              width: `${personality.column}`,
                            },
                          }}
                          transition={{ duration: 1, delay: (index + 4) * 0.1 }}
                          className={`${
                            personality.color1 + ' ' + personality.color2
                          } bg-gradient-to-r  h-[15px] rounded-full`}
                          style={{ width: `0%` }}
                        ></motion.div>
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
            <motion.img
              layout='position'
              style={{
                filter: 'drop-shadow(0px 20px 26px rgba(0, 0, 0, 0.3))',
              }}
              className=' w-[400px]  flex-1'
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              src={Database.PersonalInfo.Capability.graphs.infj}
              alt=''
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );

  return PersonalityandLanguage;
}

export default PersonalityandLanguage;
