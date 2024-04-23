import React, { useState, useEffect } from 'react';
import Database from '../Datebase.json';
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

function Otherability() {
  const lang = useLanguage();
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
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

  const Otherability = (
    <motion.div
      className='grid-item large-span-8 medium-span-6 small-span-12 grid-item-swipe-reply carnival-item-in-view h-auto'
      data-component-list='CarnivalInlineVideo'
      data-analytics-section-engagement='name:catch up and swipe to reply'
      data-tile-name='swipe-reply'
    >
      <motion.div className='tile tile-rounded'>
        {/* 半透明要改 */}
        <motion.div
          // style={{
          //   background:
          //     'linear-gradient(0deg, rgba(26, 131, 144, 1), rgba(109, 255, 232, 0.3))',
          //   // 'linear-gradient(0deg, rgba(33, 33, 150, 1), rgba(149, 95, 233, 1))',
          // }}
          className='tile-content bg-white/40'
        >
          {/* Front-end */}
          <motion.div className='tile-header'>
            <h3 className='tile-headline typography-subsection-headline'>
              Front-end
            </h3>
            <motion.div className='grid grid-cols-5'>
              <motion.div className='flex justify-center items-center flex-col w-24'>
                <img
                  src='https://www.svgrepo.com/show/17134/html-file-with-code-symbol.svg'
                  alt=''
                />
                <p className='text-2xl text-black'>HTML</p>
              </motion.div>
              <motion.div className='flex justify-center items-center flex-col w-24'>
                <img src='https://www.svgrepo.com/show/521591/css.svg' alt='' />
                <p className='text-2xl text-black'>CSS</p>
              </motion.div>
              <motion.div className='flex justify-center items-center flex-col w-24'>
                <img
                  src='https://www.svgrepo.com/show/510028/javascript-file.svg'
                  alt=''
                />
                <p className='text-2xl text-black'>JavaScript</p>
              </motion.div>
              <motion.div className='flex justify-center items-center flex-col w-24'>
                <img
                  src='https://www.svgrepo.com/show/473768/react.svg'
                  alt=''
                />
                <p className='text-2xl text-black'>React</p>
              </motion.div>
              <motion.div className='flex justify-center items-center flex-col w-24'>
                <img
                  src='https://www.svgrepo.com/show/333609/tailwind-css.svg'
                  alt=''
                />
                <p className='text-2xl text-black'>Tailwind</p>
              </motion.div>
              <motion.div className='flex justify-center items-center flex-col w-24'>
                <img
                  src='https://www.svgrepo.com/show/333609/tailwind-css.svg'
                  alt=''
                />
                <p className='text-2xl text-black'>Tailwind</p>
              </motion.div>
              <motion.div className='flex justify-center items-center flex-col w-24'>
                <img
                  src='https://www.svgrepo.com/show/371686/animation.svg'
                  alt=''
                />
                <p className='text-2xl text-black'>Framer motion</p>
              </motion.div>
              <motion.div className='flex justify-center items-center flex-col w-24'>
                <img
                  src='https://www.svgrepo.com/show/473768/react.svg'
                  alt=''
                />
                <p className='text-2xl text-black'>React</p>
              </motion.div>
              <motion.div className='flex justify-center items-center flex-col w-24'>
                <img src='https://www.svgrepo.com/show/38133/ui8.svg' alt='' />
                <p className='text-[8px] text-black text-center'></p>
              </motion.div>
            </motion.div>
          </motion.div>
          {/* Back-end */}
          <motion.div className='tile-header'>
            <h3 className='tile-headline typography-subsection-headline'>
              Backend
            </h3>
            <motion.div className='grid grid-cols-5'>
              <motion.div className='flex justify-center items-center flex-col w-24'>
                <img
                  src='https://www.svgrepo.com/show/510150/python-file.svg'
                  alt=''
                />
                <p className='text-2xl text-black'>Python</p>
              </motion.div>
              <motion.div className='flex justify-center items-center flex-col w-24'>
                <img
                  src='https://www.svgrepo.com/show/473736/nodejs.svg'
                  alt=''
                />
                <p className='text-2xl text-black'>NodeJS</p>
              </motion.div>
              <motion.div className='flex justify-center items-center flex-col w-24'>
                <img
                  src='https://www.svgrepo.com/show/74933/json-file.svg'
                  alt=''
                />
                <p className='text-2xl text-black'>Json</p>
              </motion.div>
            </motion.div>
          </motion.div>
          {/* Database */}
          <motion.div className='tile-header'>
            <h3 className='tile-headline typography-subsection-headline'>
              Database
            </h3>
            <motion.div className='grid grid-cols-5'>
              <motion.div className='flex justify-center items-center flex-col w-24'>
                <img
                  src='https://www.svgrepo.com/show/394296/mysql.svg'
                  alt=''
                />
                <p className='text-2xl text-black'>MySQL</p>
              </motion.div>
              <motion.div className='flex justify-center items-center flex-col w-24'>
                <img
                  src='https://www.svgrepo.com/show/473760/postgresql.svg'
                  alt=''
                />
                <p className='text-2xl text-black'>PostgreSQL</p>
              </motion.div>
            </motion.div>
          </motion.div>
          {/* Algorithm */}
          <motion.div className='tile-header'>
            <h3 className='tile-headline typography-subsection-headline'>
              Algorithm
            </h3>
            <motion.div className='grid grid-cols-5'>
              <motion.div className='flex justify-center items-center flex-col w-24'>
                <img
                  src='https://www.svgrepo.com/show/17134/html-file-with-code-symbol.svg'
                  alt=''
                />
                <p className='text-2xl text-black'>ML</p>
              </motion.div>
              <motion.div className='flex justify-center items-center flex-col w-24'>
                <img src='https://www.svgrepo.com/show/521591/css.svg' alt='' />
                <p className='text-2xl text-black'>DL</p>
              </motion.div>
              <motion.div className='flex justify-center items-center flex-col w-24'>
                <img src='https://www.svgrepo.com/show/521714/js.svg' alt='' />
                <p className='text-2xl text-black'>NLP</p>
              </motion.div>
              <motion.div className='flex justify-center items-center flex-col w-24'>
                <img src='https://www.svgrepo.com/show/521714/js.svg' alt='' />
                <p className='text-2xl text-black'>RS</p>
              </motion.div>
            </motion.div>
          </motion.div>
          {/* Other */}
          <motion.div className='tile-header'>
            <h3 className='tile-headline typography-subsection-headline'>
              Other
            </h3>
            <motion.div className='grid grid-cols-5 pb-24'>
              <motion.div className='flex justify-center items-center flex-col w-24'>
                <img
                  src='https://www.svgrepo.com/show/512317/github-142.svg'
                  alt=''
                />
                <p className='text-2xl text-black'>Github</p>
              </motion.div>
              <motion.div className='flex justify-center items-center flex-col w-24'>
                <img src='https://www.svgrepo.com/show/438984/ssh.svg' alt='' />
                <p className='text-2xl text-black'>SSH</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );

  return Otherability;
}

export default Otherability;
