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
    title: lang == 0 ? 'Take Ownership' : '主动负责',

    text:
      lang == 0 ?
        SelectText(
          'I take [ownership] beyond assigned tasks — from implementation and testing to deployment, debugging, and [production reliability].',
          'yellow-500',
          '\t ',
        )
      : SelectText(
          '我不仅完成被分配的任务，也会主动关注[实现、测试、部署和生产问题]，对最终的[交付结果]负责。',
          'yellow-500',
        ),
  },

  {
    title: lang == 0 ? 'Solve the Root Cause' : '解决根本问题',

    text:
      lang == 0 ?
        SelectText(
          'I break complex problems into measurable parts, identify the [root cause], and focus on solutions that improve [performance and reliability].',
          'yellow-500',
          '\t ',
        )
      : SelectText(
          '我会将复杂问题拆解成可验证的部分，找到真正的[根本原因]，并通过工程方案改善[性能与可靠性]。',
          'yellow-500',
        ),
  },

  {
    title: lang == 0 ? 'Product-Minded' : '产品思维',

    text:
      lang == 0 ?
        SelectText(
          'I think beyond whether a feature simply works. I care about [user experience], maintainability, performance, and the [business impact] behind technical decisions.',
          'yellow-500',
          '\t ',
        )
      : SelectText(
          '我不会只关注功能是否能够运行，也会考虑[用户体验]、可维护性、性能，以及技术决策最终带来的[业务价值]。',
          'yellow-500',
        ),
  },

  {
    title: lang == 0 ? 'Work Better Together' : '高效协作',

    text:
      lang == 0 ?
        SelectText(
          'I communicate with [clear context and evidence], align frontend and backend expectations, and collaborate to help the team make [better decisions faster].',
          'yellow-500',
          '\t ',
        )
      : SelectText(
          '我重视有[上下文和事实依据]的沟通，主动对齐前后端预期，与团队协作，更快做出[更好的决策]。',
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
        className='rounded-[28px] p-[20px]  lg:p-[40px] flex-1 h-full flex flex-col'
      >
        <motion.div
          initial={{ x: 30, scale: 0.9 }}
          whileInView={{ x: 0, scale: 1 }}
          viewport={{ once: true, margin: '-30%' }}
          transition={{
            ease: [0.455, 0.03, 0.515, 0.955],
            duration: 0.7,
          }}
          className=' flex w-full  md:-ml-[130px] lg:-ml-[180px]  xl:-ml-[180px] -ml-[100px] min-h-[300px]  h-full items-center '
          style={{
            backgroundImage: `url(${Database.PersonalInfo.Capability.graphs.code})`,
            backgroundSize: '100% auto',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            filter: 'drop-shadow(0px 20px 26px rgba(0, 0, 0, 0.3))',
          }}
        ></motion.div>
        <motion.div className='gap-y-[60px] pb-[80px] flex flex-col h-full'>
          {content.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: '-30%' }}
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
                className='text-white py-4 text-[30px] capitalize'
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
