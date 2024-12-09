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

function Highquality() {
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
  // const content = [
  //   {
  //     title: lang == 0 ? 'Perfect For Everything' : '完美? 方方面面',
  //     text:
  //       lang == 0 ?
  //         SelectText(
  //           'As a perfectionist, I approach every project I handle with a commitment to high quality, ensuring that every aspect is flawless. I meticulously consider details such as [code quality], [user usability], [aesthetics], and more. Perfection, for me, extends across all facets of the project and life.',
  //           'yellow-300',
  //           '\t ',
  //         )
  //       : SelectText(
  //           '作为追求卓越之人，我在交付每个项目时都致力于确保各个方面都无可挑剔。这包括[代码质量]、[用户可用性]、[美感]等各个方面。对我而言，追求完美不仅体现在项目中，也延伸至生活的方方面面。这种执着于高质量的态度通常能够带来更好的结果和用户体验。在工作中，不断追求卓越有助于提高产品的竞争力，并确保用户对我的工作产生积极的体验和印象。',
  //           'yellow-300',
  //         ),
  //   },
  //   {
  //     title: lang == 0 ? 'Always Can-do Attitude' : '永不言败',
  //     text:
  //       lang == 0 ?
  //         SelectText(
  //           'As a perfectionist, I approach every project I handle with a commitment to high quality, ensuring that every aspect is flawless. I meticulously consider details such as [code quality], [user usability], [aesthetics], and more. Perfection, for me, extends across all facets of the project and life.',
  //           'yellow-300',
  //           '\t ',
  //         )
  //       : SelectText(
  //           '作为追求卓越之人，我在交付每个项目时都致力于确保各个方面都无可挑剔。这包括[代码质量]、[用户可用性]、[美感]等各个方面。对我而言，追求完美不仅体现在项目中，也延伸至生活的方方面面。这种执着于高质量的态度通常能够带来更好的结果和用户体验。在工作中，不断追求卓越有助于提高产品的竞争力，并确保用户对我的工作产生积极的体验和印象。',
  //           'yellow-300',
  //         ),
  //   },
  //   {
  //     title: lang == 0 ? 'Result-Oriented' : '完美? 方方面面',
  //     text:
  //       lang == 0 ?
  //         SelectText(
  //           'As a perfectionist, I approach every project I handle with a commitment to high quality, ensuring that every aspect is flawless. I meticulously consider details such as [code quality], [user usability], [aesthetics], and more. Perfection, for me, extends across all facets of the project and life.',
  //           'yellow-300',
  //           '\t ',
  //         )
  //       : SelectText(
  //           '作为追求卓越之人，我在交付每个项目时都致力于确保各个方面都无可挑剔。这包括[代码质量]、[用户可用性]、[美感]等各个方面。对我而言，追求完美不仅体现在项目中，也延伸至生活的方方面面。这种执着于高质量的态度通常能够带来更好的结果和用户体验。在工作中，不断追求卓越有助于提高产品的竞争力，并确保用户对我的工作产生积极的体验和印象。',
  //           'yellow-300',
  //         ),
  //   },
  // ];

  const content = [
    {
      title: lang == 0 ? 'Detail-Oriented' : '注重细节',
      text:
        lang == 0 ?
          SelectText(
            'I focus on [Code quality], [Usability], and [Design clarity], ensuring every aspect of the project meets high standards.',
            'yellow-500',
            '\t ',
          )
        : SelectText(
            '我专注于[代码质量]、[可用性]和[设计清晰度]，确保项目的每个方面都达到高标准。',
            'yellow-500',
          ),
    },
    {
      title: lang == 0 ? 'Problem Solver' : '解决问题',
      text:
        lang == 0 ?
          SelectText(
            'I view every [challenge] as a chance to grow. I approach issues methodically and systematic to find [effective solutions].',
            'yellow-500',
            '\t ',
          )
        : SelectText(
            '我将每个[挑战]视为成长的机会。我以有逻辑且系统性地方式解决问题，找到[高效方案]。',
            'yellow-500',
          ),
    },
    {
      title: lang == 0 ? 'Goal-Driven' : '目标导向',
      text:
        lang == 0 ?
          SelectText(
            'I prioritize [results] and align my efforts with [business goals]. My aim is to deliver [impactful outcomes].',
            'yellow-500',
            '\t ',
          )
        : SelectText(
            '我重视[成果]，将自己的努力与[业务目标]对齐。我的目标是交付[有影响力的成果]。',
            'yellow-500',
          ),
    },
    {
      title: lang == 0 ? 'Team Player' : '团队协作',
      text:
        lang == 0 ?
          SelectText(
            'I believe in [collaboration] and value [team diversity]. Together, Respect, we achieve better [results].',
            'yellow-500',
            '\t ',
          )
        : SelectText(
            '我相信[协作]，重视[团队多样性]。携手合作，尊重合作伙伴，能取得更好的[成果]。',
            'yellow-500',
          ),
    },
  ];

  const Highquality = (
    <motion.div className='flex h-full w-full min-h-[1000px] col-span-12 relative md:col-span-6 lg:col-span-4'>
      {/* 半透明要改 */}
      <motion.div
        style={{
          backgroundImage: 'linear-gradient(135deg, #330867 0%, #30cfd0 100%)',
        }}
        className='rounded-[28px]  flex-1'
      >
        <motion.div className='p-[20px]  lg:p-[40px] gap-y-[60px] flex flex-col h-full'>
          <motion.div
            initial={{ y: 30, scale: 0.9 }}
            whileInView={{ y: 0, scale: 1 }}
            transition={{
              ease: [0.455, 0.03, 0.515, 0.955],
              duration: 0.7,
            }}
            className='h-full flex w-full  -ml-[130px] lg:-ml-[200px] '
            style={{
              backgroundImage: `url(${Database.PersonalInfo.Capability.graphs.code})`,
              backgroundSize: '100% auto',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center top',
              filter: 'drop-shadow(0px 20px 26px rgba(0, 0, 0, 0.3))',
            }}
          ></motion.div>
          {content.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                ease: [0.455, 0.03, 0.515, 0.955],
                duration: 1.3,
              }}
              key={index}
              className='flex flex-col '
            >
              <h3
                style={{
                  lineHeight: 1.19048,
                  fontWeight: 600,
                  letterSpacing: '0.011em',
                }}
                className='text-white py-4 text-[30px]'
              >
                {item.title}
              </h3>
              <p className='font-[600] text-left text-white/60 text-[15px] lg:text-[20px]'>
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );

  return Highquality;
}

export default Highquality;
