/** @format */

import React, { useState, useEffect } from 'react';
import Database from '../data/Database.json';
import { motion } from 'framer-motion';
import { useLanguage } from '../help/helpFunction';
import BG from './gfBG';
import Toggle from './Toggle';
import N from './Num';

const tabs = [
  {
    label: ['Frontend', '前端'],
    color1: '[#2af598]',
    ratio1: '[-25%]',
    ratio2: '[125%]',
    color2: '[#009efd]',
    contentKey: 'front-end',
  },
  {
    label: ['Backend', '后端'],
    color1: '[#f9f586]',
    ratio1: '[-25%]',
    ratio2: '[100%]',
    color2: '[#43e97b]',
    contentKey: 'backend-end',
  },
  {
    label: ['DataBase', '数据库'],
    color1: '[#F7B500]',
    ratio1: '[-76%]',
    ratio2: '[76%]',
    color2: '[#6DD400]',
    contentKey: 'database',
  },

  {
    label: ['Other', '其他'],
    color1: '[#00f2fe]',
    ratio1: '[-25%]',
    ratio2: '[125%]',
    color2: '[#b721ff]',
    contentKey: 'other',
  },
];

const getSkillInitials = (name = '') =>
  name
    .trim()
    .split(/\s+/)
    .map((word) => word[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();

function SkillIcon({ skill }) {
  const [imageFailed, setImageFailed] = useState(!skill.image);

  return imageFailed ?
      <span
        role='img'
        aria-label={skill.name}
        className='flex h-full w-full items-center justify-center text-center text-[18px] font-black tracking-wide text-black'
      >
        {getSkillInitials(skill.name)}
      </span>
    : <img
        loading='lazy'
        src={skill.image}
        alt={skill.name}
        onError={() => setImageFailed(true)}
      />;
}

function SkillContent({ content, selectedTab, expanded }) {
  const skills = content.skills.slice(
    0,
    !expanded && content.skills.length > 12 ? 12 : content.skills.length,
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 30,
        mass: 0.8,
        duration: 2,
      }}
      style={{
        lineHeight: 1.23536,
        fontFamily: `"SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif`,
      }}
      className={`relative flex w-full flex-1 flex-col bg-clip-text bg-gradient-to-r from-${selectedTab.ratio1} to-${selectedTab.ratio2} from-${selectedTab.color1} to-${selectedTab.color2}`}
    >
      <p
        className={`flex text-[13px] text-transparent md:text-[15px] lg:text-[20px] from-${selectedTab.ratio1} to-${selectedTab.ratio2} from-${selectedTab.color1} to-${selectedTab.color2} bg-gradient-to-br bg-clip-text`}
      >
        {content.description}
      </p>
      <ul
        className={`grid grid-cols-12 gap-[20px] py-[50px] text-transparent md:gap-[40px] lg:gap-[70px] lg:py-[100px] from-${selectedTab.ratio1} to-${selectedTab.ratio2} from-${selectedTab.color1} to-${selectedTab.color2} bg-gradient-to-br bg-clip-text normal-text`}
      >
        {skills.map((skill, index) => (
          <li
            key={`${selectedTab.contentKey}-${skill.name}-${index}`}
            className='col-span-12 flex items-start gap-x-[20px] pb-2 md:col-span-6 lg:col-span-4 xl:col-span-3'
          >
            <div
              className={`flex h-[50px] w-[50px] flex-shrink-0 items-center justify-center rounded-[9px] bg-gradient-to-br from-[-200%] to-[200%] p-[10px]`}
            >
              <SkillIcon skill={skill} />
            </div>
            <div
              className={`flex flex-col text-transparent from-${selectedTab.ratio1} to-${selectedTab.ratio2} bg-gradient-to-br bg-clip-text`}
            >
              <strong className='flex items-start pb-4 text-[13px] font-[700] tracking-wider md:text-[15px] lg:text-[20px]'>
                {skill.name}
              </strong>
              <p className='flex w-[280px] flex-wrap text-[10px] md:w-auto md:text-[12px] lg:text-[13px]'>
                {skill.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function Skill() {
  const lang = useLanguage();
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    setExpanded(false);
  };

  const contentData =
    Database.PersonalInfo.Capability.des[selectedTab.label[0]];
  const content = contentData[lang];
  const BigRadius = 'rounded-[28px] md:rounded-[28px] lg:rounded-[30px]';

  return (
    <motion.div
      className={`transition-all grid-item large-span-12 col-span-12 z-20 -mt-[20vh]`}
    >
      <motion.div
        id='Capability'
        className={`shadow-[40px] relative z-0 overflow-hidden ${BigRadius}`}
      >
        <motion.div
          id='blackOverlay'
          className={`absolute top-0 bottom-0 left-0 right-0 z-10 hidden transition-all lg:flex overflow-hidden ${BigRadius} shadow-2xl`}
        >
          <motion.span className='relative flex w-full h-full transition-all duration-1000 '>
            {/* PlannetBackground */}
            <motion.span
              layout
              style={{
                backgroundImage: `url(https://palettemaker.com/_nuxt/landing-header-bg.19f630cc.webp)`,
                backgroundSize: '100% 30%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center bottom',
              }}
              className={`absolute flex-1 invisible transition-all lg:visible top-0 -bottom-0 left-0 right-0 opacity-50 z-10 ${BigRadius}`}
            ></motion.span>
            {/* GalaxyBackground */}
            <motion.span
              layout
              className='absolute top-0 bottom-0 left-0 right-0 z-0 '
            >
              <BG />
            </motion.span>
            {/* BlackBackground */}
            <span
              className={`absolute hidden top-0 bottom-0 left-0 right-0 from-[#050D19] to-slate-950 bg-gradient-to-br -z-10 ${BigRadius}`}
            ></span>
          </motion.span>
        </motion.div>

        <motion.div
          className={`z-40 relative h-auto transition-all `}
          style={{
            backgroundImage:
              windowWidth < 1080 ?
                `url(${Database.PersonalInfo.Capability.graphs.bg})`
              : '',
            backgroundSize: '100% auto',
            backgroundRepeat: 'repeat',
            backgroundPosition: 'top',
          }}
        >
          <span
            className={`absolute visible transition-all top-0 bottom-0 left-0 right-0 from-${selectedTab.ratio1} to-${selectedTab.ratio2} from-${selectedTab.color1} to-${selectedTab.color2} opacity-10 bg-gradient-to-br z-0 ${BigRadius}`}
          ></span>
          <span
            className={`absolute visible transition-all top-0 bottom-0 left-0 right-0 bg-black opacity-50 bg-gradient-to-br z-10 ${BigRadius}`}
          ></span>

          <div className='z-30 p-[14px] lg:p-[40px] relative lg:pb-[20vh]'>
            {/* HEADER */}
            <div className='flex items-center justify-center'>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 3 }}
                className={`inline-flex items-center justify-center transition-all text-6xl md:text-7xl lg:text-8xl z-30 from-${selectedTab.ratio1} to-${selectedTab.ratio2} from-${selectedTab.color1} to-${selectedTab.color2} bg-gradient-to-r text-transparent bg-clip-text text-center mt-[30px] mb-[80px]`}
              >
                <i className='flex items-center fi fi-rr-circle-user mr-[20px] text-transparent bg-clip-text'></i>
                <p className='flex items-center italic font-black tracking-widest text-transparent capitalize bg-clip-text '>
                  {lang == 0 ? 'CAPABILITY' : '能力'}
                </p>
              </motion.div>
            </div>
            {/* Content */}
            <motion.div>
              <motion.ul
                layout
                variants={Database.Animation.Variant.Welcomevisblecontainer}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                className='flex justify-between w-[100%] text-center gap-x-[3%] lg:gap-x-[10%] overflow-auto scrollbar-hide pb-[30px]'
              >
                {tabs.map((tab, index) => (
                  <motion.button
                    key={tab.label}
                    variants={{
                      hidden: { opacity: 0, pointerEvents: 'none' },
                      visible: { opacity: 1, pointerEvents: 'auto' },
                    }}
                    transition={{ duration: 1, delay: index * 0.15 }}
                    className='inline-flex items-start w-[12%]  text-[13px]  md:text-[20px] lg:text-[25px] font-[700]'
                    onClick={() => handleTabChange(tab)}
                  >
                    <div className='flex flex-col'>
                      <div
                        className={`flex md:flex-row flex-col-reverse  bg-gradient-to-br gap-[10px] items-center text-transparent bg-clip-text from-${tab.ratio1} to-${tab.ratio2} from-${tab.color1} to-${tab.color2}`}
                      >
                        <h3 className=''>{tab.label[lang]}</h3>
                        <motion.div
                          initial={false}
                          animate={{
                            opacity: tab === selectedTab ? 1 : 0,
                            scale: tab === selectedTab ? 1 : 0,
                          }}
                          transition={{ duration: 0.2, ease: 'easeOut' }}
                          className={`w-[50px] rounded-full bg-gradient-to-r from-[-100%] to-[200%] from-${tab.color1} to-${tab.color2}`}
                        >
                          <N
                            className={`rounded-full bg-black px-[10px] p-[1px] text-[15px] font-[700] text-transparent bg-clip-text md:text-[13px] lg:text-[15px]`}
                            n={content.skills.length}
                            d={3}
                          />
                        </motion.div>
                      </div>

                      {tab === selectedTab ?
                        <motion.div
                          className={`mt-[10px] from-[-150%] to-[150%] from-${tab.color1} to-${tab.color2} bg-gradient-to-r w-full h-[3px] lg:h-[6px] rounded-full z-50`}
                          layoutId='underline'
                        />
                      : null}
                    </div>
                  </motion.button>
                ))}
              </motion.ul>
              <SkillContent
                key={`${selectedTab.contentKey}-${lang}`}
                content={content}
                selectedTab={selectedTab}
                expanded={expanded}
              />
              <button
                disabled={content.skills.length <= 12}
                className='max-w-3xl h-[30px] flex items-center gap-[20px] mx-auto my-4 text-white/50 text-[15px] lg:text-[20px]'
              >
                {content.skills.length > 12 && (
                  <Toggle
                    isExpanded={expanded}
                    text={
                      expanded ?
                        [`Collapse`, '折叠'][lang]
                      : [
                          `Expand remain ${content.skills.length - 12}`,
                          `展开剩余 ${content.skills.length - 12}`,
                        ][lang]
                    }
                    onToggle={() => {
                      setExpanded(!expanded);
                    }}
                  />
                )}
              </button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Skill;
