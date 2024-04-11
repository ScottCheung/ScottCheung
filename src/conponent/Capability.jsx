import React, { useState, useEffect } from 'react';
import Database from '../Datebase.json';
import { motion, AnimatePresence } from 'framer-motion';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { hideRow, bgPic, useLanguage, SelectText } from '../help/helpFunction';
import { Link } from 'react-router-dom';
import N from './Num';

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

function Capability() {
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

  const Capability = (
    <>
      <motion.div className=' grid visblecontainer section-sapphire py-48 '>
        {/* stack */}
        <motion.div
          layout
          className='transition-all duration-500 grid-item large-span-12 tile-body-no-pad-left tile-body-no-pad-right tile-body-no-pad-bottom grid-item-stickers  mt-[-25vh]'
        >
          <motion.div
            layout
            id='Capability'
            className='tile transition-all duration-500 tile-rounded shadow-[40px] h-auto '
          >
            <motion.div
              layout
              transition={{ transition: { duration: 1 } }}
              className='tile-content bg-gray-950/90 transition-all duration-500 h-auto min-h-[100vh]'
              style={{
                backgroundImage: `url(${Database.PersonalInfo.Capability.graphs.gallerybg[1]})`,
                backgroundSize: `100% auto`,
                backgroundRepeat: 'repeat',
                backgroundPosition: 'center bottle',
              }}
            >
              <div
                className='tile-content bg-gray-950/90 transition-all duration-500 h-auto min-h-[100vh] transition-all duration-500'
                style={{
                  backgroundImage: `url(${Database.PersonalInfo.Capability.graphs.gallerybg[0]})`,
                  backgroundSize: `100% auto`,
                  backgroundRepeat: 'repeat',
                  backgroundPosition: 'center bottle',
                }}
              >
                <motion.span
                  id='blackOverlay'
                  className='w-full h-full absolute opacity-75 bg-black transition-all duration-500 transition-all duration-500'
                ></motion.span>
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    ease: [0.455, 0.03, 0.515, 0.955],
                    duration: 2,
                  }}
                  className={`transition-all duration-500 pb-24 tile-header z-40 typography-section-intro-headline section-intro-headline from-${selectedTab.color1} to-${selectedTab.color2} bg-gradient-to-r text-transparent bg-clip-text text-center pt-[70px] `}
                >
                  <i className=' fi text-5xl lg:text-8xl fi-rr-circle-user mr-[20px] pt-3 '></i>
                  {lang == 0 && 'Capability'}
                  {lang == 1 && '能力'}
                </motion.div>
                <motion.div layout className='z-30  '>
                  <motion.ul
                    variants={Welcomevisblecontainer}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                    layout
                    className='flex tile-header  justify-between min-h-[70px]  text-center  w-full pt-[15px]'
                  >
                    {tabs.map((tab) => (
                      <motion.li
                        key={tab.label}
                        role='presentation'
                        variants={{
                          hidden: {
                            opacity: 0,
                            y: '20px',
                            scale: 0.95,
                            pointerEvents: 'none',
                          },
                          visible: {
                            opacity: 1,
                            y: '0px',
                            scale: 1,
                            pointerEvents: 'auto',
                          },
                        }}
                        transition={StagerFadeInUp}
                        whileHover={{ scale: 1.01, opacity: 1 }}
                        whileTap={{ scale: 0.99 }}
                        className={`transition-all duration-500 w-full tile-headline typography-subsection-headline ${
                          tab === selectedTab
                            ? ' text-[14px] md:text-[20px] lg:text-[26px]'
                            : 'hover:opacity-100 transition-opacity duration-500  text-[12px] md:text-[15px] lg:text-[20px]'
                        } tile-headline typography-subsection-headline`}
                        onClick={() => setSelectedTab(tab)}
                      >
                        <motion.button
                          layout
                          whileTap={{ opacity: 0.95, scale: 0.95 }}
                          whileHover={{ opacity: 1, scale: 1.05 }}
                          whileFocus={{ opacity: 1, scale: 1.2 }}
                          transition={{ duration: 0.4 }}
                          className={`flex w-full md:min-h-[20px] lg:min-h-[30px] justify-center  px-[5px]  bg-gradient-to-r text-transparent bg-clip-text from-${tab.color1} to-${tab.color2}`}
                        >
                          {tab.label[lang]}
                        </motion.button>
                        {tab === selectedTab ? (
                          <motion.div
                            transition={{
                              duration: 0.5,
                              ease: [0.645, 0.045, 0.355, 1],
                            }}
                            className={`from-${tab.color1} to-${tab.color2} bg-gradient-to-r  w-full h-[3px] mt-[15px] rounded-full z-50`}
                            layoutId='underline'
                          />
                        ) : null}
                      </motion.li>
                    ))}
                  </motion.ul>
                  {/* <motion.div className='tile-header pt-[3px]'>
                    <motion.div className={`from-${selectedTab.color1} to-${selectedTab.color2} bg-gradient-to-r w-full h-[5px] mt-[15px] rounded-full `} />
                </motion.div> */}
                  <AnimatePresence mode='wait'>
                    <motion.div
                      layout
                      key={selectedTab.label}
                      initial={{ x: 30, opacity: 0, scale: 0.97 }}
                      animate={{ x: 0, opacity: 1, scale: 1 }}
                      exit={{ x: -30, opacity: 0, scale: 0.97 }}
                      transition={{ duration: 0.35 }}
                      className='tile-header transition-all duration-500'
                    >
                      {/* {selectedTab.content} */}
                      {(selectedTab.label[lang] == 'Frontend' ||
                        selectedTab.label[lang] == '前端') && (
                        <motion.div className='flex w-full flex-col'>
                          {/* Front-end */}
                          <motion.div layout className='mt-[20px]'>
                            <h3 className='tile-headline typography-subsection-headline from-red-500 to-red-700 bg-gradient-to-r text-transparent bg-clip-text'>
                              {lang == 0 && 'Front-end'}
                              {lang == 1 && '前端'}
                            </h3>
                            <p className='tile-copy from-red-500 to-red-700 bg-gradient-to-r text-transparent bg-clip-text'>
                              {lang == 0 && (
                                <motion.div>
                                  <p className='py-10 text-[17px] font-[700]'>
                                    I am capable of designing and implementing
                                    frontend interfaces that are attractive,
                                    highly interactive, ensuring users have an
                                    outstanding user experience. My frontend
                                    expertise not only spans a wide range of
                                    technologies but also emphasizes interface
                                    design and user experience. I am dedicated
                                    to crafting modern applications that are not
                                    only visually appealing and elegant but also
                                    powerful in functionality.
                                  </p>
                                  <ul className='text-[15px] '>
                                    <li>
                                      <strong className='font-black py-4'>
                                        HTML / CSS / JavaScript:
                                      </strong>{' '}
                                      I am proficient in using{' '}
                                      <strong className='font-black py-4'>
                                        HTML / CSS / JavaScript
                                      </strong>{' '}
                                      for web development, capable of creating
                                      well-structured, visually appealing, and
                                      interactively rich user interfaces.
                                    </li>
                                    <li>
                                      <strong className='font-black py-4'>
                                        React:
                                      </strong>{' '}
                                      I have an in-depth understanding and
                                      proficiently use the React framework. I
                                      can build efficient and maintainable
                                      single-page applications (SPAs) and
                                      adeptly handle component-based
                                      development.
                                    </li>
                                    <li>
                                      <strong className='font-black py-4'>
                                        CSS Lib:
                                      </strong>{' '}
                                      I am familiar with using{' '}
                                      <strong className='font-black underline'>
                                        Tailwind CSS
                                      </strong>
                                      , a practical CSS framework. In addition,
                                      I am skilled in mainstream UI libraries
                                      such as Bootstrap and MUI, enabling me to
                                      quickly and flexibly construct modern user
                                      interfaces.
                                    </li>
                                    <li>
                                      <strong className='font-black py-4'>
                                        Animation Lib:
                                      </strong>{' '}
                                      I am proficient in utilizing{' '}
                                      <strong className='font-black underline'>
                                        Framer
                                      </strong>
                                      . Additionally, I am well-versed in common
                                      animation libraries like AnimationCss and
                                      Spring. I can leverage their powerful
                                      animation and prototyping tools to provide
                                      users with a smooth interactive
                                      experience.
                                    </li>
                                  </ul>
                                </motion.div>
                              )}
                              {lang == 1 && (
                                <motion.div>
                                  <p className='py-10 text-[17px] font-[700] '>
                                    我能够设计并实现具有吸引力、高度交互性的前端界面，确保用户获得出色的使用体验。我的前端能力不仅体现在技术广度上，同时注重界面设计和用户体验，致力于打造既美观优雅又功能强大的现代化应用程序。
                                  </p>
                                  <ul className='text-[15px] '>
                                    <li>
                                      <strong className='font-black py-4'>
                                        HTML / CSS / JavaScript:
                                      </strong>{' '}
                                      我精通使用{' '}
                                      <strong className='font-black py-4'>
                                        HTML / CSS / JavaScript
                                      </strong>{' '}
                                      进行网页开发，能够创建结构清晰、样式美观、交互丰富的用户界面。
                                    </li>
                                    <li>
                                      <strong className='font-black py-4'>
                                        React:
                                      </strong>{' '}
                                      我深入了解并熟练运用 React
                                      框架，能够构建高效、可维护的单页应用（SPA），并灵活处理组件化开发。
                                    </li>
                                    <li>
                                      <strong className='font-black py-4'>
                                        CSS Lib:
                                      </strong>{' '}
                                      我熟悉使用 <strong>Tailwind CSS</strong>{' '}
                                      这一实用的 CSS
                                      框架，除此以外，我还熟练诸如Bootstramp，MUI等主流UI库，能够快速而灵活地构建现代化的用户界面。
                                    </li>
                                    <li>
                                      <strong className='font-black py-4'>
                                        Animation Lib:
                                      </strong>{' '}
                                      我熟练掌握 <strong>Framer</strong>
                                      。除此以外，常见的AnimationCss，Spring等主流UI库我也可以熟练运用。能够运用其强大的动画和原型工具，为用户提供流畅的交互体验。
                                    </li>
                                  </ul>
                                </motion.div>
                              )}
                            </p>
                          </motion.div>
                          <motion.div className='pt-[70px] pb-[140px]'>
                            <motion.div
                              variants={fastWelcomevisblecontainer}
                              initial='hidden'
                              whileInView='visible'
                              viewport={{ once: true }}
                              className='flex justify-center items-center w-full h-full grid grid-cols-5 '
                            >
                              {frontEnd.map((app, index) => (
                                <motion.div
                                  key={index}
                                  variants={{
                                    hidden: {
                                      opacity: 0,
                                      y: '30px',
                                      scale: 0.9,
                                    },
                                    visible: {
                                      opacity: 1,
                                      y: '0px',
                                      scale: 1,
                                    },
                                  }}
                                  transition={StagerFadeInUp}
                                  whileHover={{ scale: 1.2 }}
                                  whileTap={{ scale: 0.9, duration: 0.7 }}
                                  layout
                                >
                                  <motion.div className='flex-shrink-0 flex justify-center'>
                                    <img
                                      key={index}
                                      className='w-[35px] h-[35px] md:w-18 md:w-18 lg:w-24 lg:h-24 from-red-500 to-red-700 bg-gradient-to-br p-2 rounded-[9px]'
                                      src={app.image}
                                      alt={app.name}
                                    />
                                  </motion.div>
                                  <motion.div className='text-[7px] md:text-[12px] font-semibold lg:text-[15px] text-center pt-[20px] from-red-500 to-red-700 bg-gradient-to-r text-transparent bg-clip-text'>
                                    {app.name}
                                  </motion.div>
                                </motion.div>
                              ))}
                            </motion.div>
                          </motion.div>
                        </motion.div>
                      )}
                      {(selectedTab.label[lang] == 'Backend' ||
                        selectedTab.label[lang] == '后端') && (
                        <motion.div className='flex w-full flex-col'>
                          {' '}
                          {/* Back-end */}
                          <motion.div className=' mt-[20px] '>
                            <h3 className='tile-headline typography-subsection-headline from-orange-500 to-amber-500 bg-gradient-to-r text-transparent bg-clip-text transition-all duration-500'>
                              {lang == 0 && 'Backend'}
                              {lang == 1 && '后端'}
                            </h3>
                            <p className='tile-copy  from-orange-500 to-amber-500  bg-gradient-to-r text-transparent bg-clip-text'>
                              {lang == 0 && (
                                <motion.div>
                                  <p className='py-10 text-[17px] font-[700] '>
                                    I specialize in backend technologies and
                                    demonstrate proficiency in the following
                                    areas MySQL / PostgreSQL / JSON.
                                  </p>
                                  <ul className='text-[15px]'>
                                    <li>
                                      <strong className='font-black py-4'>
                                        MySQL:
                                      </strong>{' '}
                                      I am experienced in working with{' '}
                                      <strong className='font-black py-4'>
                                        MySQL
                                      </strong>
                                      , utilizing it for various backend
                                      development tasks.
                                    </li>
                                    <li>
                                      <strong className='font-black py-4'>
                                        PostgreSQL:
                                      </strong>{' '}
                                      I have proficiency in{' '}
                                      <strong className='font-black py-4'>
                                        PostgreSQL
                                      </strong>
                                      , applying it to build robust and
                                      efficient database solutions.
                                    </li>
                                    <li>
                                      <strong className='font-black py-4'>
                                        JSON:
                                      </strong>{' '}
                                      I am adept at working with{' '}
                                      <strong className='font-black py-4'>
                                        JSON
                                      </strong>
                                      , ensuring seamless data interchange
                                      between the frontend and backend.
                                    </li>
                                    <li>
                                      <strong className='font-black py-4'>
                                        TablePlus:
                                      </strong>{' '}
                                      I am proficient in using{' '}
                                      <strong className='font-black py-4'>
                                        TablePlus
                                      </strong>{' '}
                                      for efficient database management and
                                      development.
                                    </li>
                                  </ul>
                                </motion.div>
                              )}
                              {lang == 1 && (
                                <motion.div>
                                  <p className='py-10 text-[17px] font-[700] '>
                                    我在后端技术方面拥有专业的技能，展示出对以下领域的熟练掌握：
                                  </p>
                                  <ul className='text-[15px]'>
                                    <li>
                                      <strong className='font-black py-4'>
                                        MySQL:
                                      </strong>{' '}
                                      我熟练运用MySQL，将其应用于各种后端开发任务。我的技能包括常见操作，如查询表、创建表、构建视图，并执行基于条件的过滤和排序等操作。我熟练掌握CRUD操作等数据库基本操作。
                                    </li>
                                    <li>
                                      <strong className='font-black py-4'>
                                        PostgreSQL:
                                      </strong>{' '}
                                      我精通PostgreSQL，将其应用于构建强大而高效的数据库解决方案。我的专业知识涵盖了高级PostgreSQL功能，确保在数据库管理中实现最佳性能和可靠性。
                                    </li>
                                    <li>
                                      <strong className='font-black py-4'>
                                        JSON:
                                      </strong>{' '}
                                      我熟练处理JSON，确保前后端之间无缝的数据交换。
                                    </li>
                                    <li>
                                      <strong className='font-black py-4'>
                                        TablePlus:
                                      </strong>{' '}
                                      我熟练使用TablePlus进行高效的数据库管理和开发。我了解设计结构良好且优化的数据库架构，以满足不同应用程序的特定要求。
                                    </li>
                                  </ul>
                                </motion.div>
                              )}
                            </p>
                          </motion.div>
                          <motion.div className='pt-[70px] pb-[140px]'>
                            <motion.div
                              variants={fastWelcomevisblecontainer}
                              initial='hidden'
                              whileInView='visible'
                              viewport={{ once: true }}
                              className='flex justify-center items-center w-full h-full grid grid-cols-5 content-center'
                            >
                              {BackendEnd.map((app, index) => (
                                <motion.div
                                  key={index}
                                  variants={WelcomeItem}
                                  transition={StagerFadeInUp}
                                  whileHover={{ scale: 1.2 }}
                                  whileTap={{ scale: 0.9 }}
                                  layout
                                >
                                  <motion.div className='flex-shrink-0 flex justify-center'>
                                    <img
                                      key={index}
                                      className='w-[35px] h-[35px] md:w-18 md:w-18 lg:w-24 lg:h-24 from-orange-500 to-amber-500  bg-gradient-to-br p-2 rounded-[9px]'
                                      src={app.image}
                                      alt={app.name}
                                    />
                                  </motion.div>
                                  <motion.div className='text-[7px] md:text-[12px] font-semibold lg:text-[15px] text-center pt-[20px] from-orange-500 to-amber-500  bg-gradient-to-br text-transparent bgrid-colslip-text'>
                                    {app.name}
                                  </motion.div>
                                </motion.div>
                              ))}
                            </motion.div>
                          </motion.div>
                        </motion.div>
                      )}
                      {(selectedTab.label[lang] == 'DataBase' ||
                        selectedTab.label[lang] == '数据库') && (
                        <motion.div className='flex w-full flex-col'>
                          {/* Database */}
                          <motion.div className=' mt-[20px] w-full'>
                            <h3 className='tile-headline typography-subsection-headline from-sky-500 to-emerald-500 bg-gradient-to-r text-transparent bg-clip-text'>
                              {lang == 0 && 'Database'}
                              {lang == 1 && '数据库'}
                            </h3>
                            <p className='tile-copy  from-sky-500 to-emerald-500 bg-gradient-to-r text-transparent bg-clip-text'>
                              {lang == 0 && (
                                <motion.div>
                                  <p className='py-10 text-[17px] font-[700]'>
                                    In the realm of database management, I bring
                                    forth a wealth of expertise, showcasing
                                    proficiency in various key areas:
                                  </p>
                                  <ul className='text-[15px] '>
                                    <li>
                                      <strong className='font-black py-4'>
                                        MySQL:
                                      </strong>{' '}
                                      I am well-versed in MySQL, leveraging its
                                      capabilities for efficient and reliable
                                      database operations. My skills encompass
                                      common operations such as querying tables,
                                      creating tables, building views, and
                                      performing operations like filtering and
                                      sorting based on conditions. I am
                                      proficient in CRUD operations and other
                                      essential database manipulations.
                                    </li>
                                    <li>
                                      <strong className='font-black py-4'>
                                        PostgreSQL:
                                      </strong>{' '}
                                      I have comprehensive knowledge of
                                      PostgreSQL, utilizing it to construct
                                      robust and scalable database solutions. My
                                      expertise extends to advanced PostgreSQL
                                      functionalities, ensuring optimal
                                      performance and reliability in database
                                      management.
                                    </li>
                                    <li>
                                      <strong className='font-black py-4'>
                                        Database Design:
                                      </strong>{' '}
                                      I excel in designing well-structured and
                                      optimized database architectures tailored
                                      to the specific requirements of diverse
                                      applications.
                                    </li>
                                    <li>
                                      <strong className='font-black py-4'>
                                        Python Data Processing:
                                      </strong>{' '}
                                      Proficient in Python, I leverage popular
                                      libraries like Pandas for efficient data
                                      processing. I am adept at using data
                                      visualization tools, including Tableau, to
                                      create insightful graphs and charts,
                                      enhancing the interpretability of
                                      processed data.
                                    </li>
                                    <li>
                                      <strong className='font-black py-4'>
                                        Data Analysis:
                                      </strong>{' '}
                                      Proficient in algorithmic data analysis, I
                                      leverage statistical methods, data mining,
                                      and machine learning techniques to extract
                                      valuable insights from complex datasets.
                                      This aids in informed decision-making and
                                      strategy development.
                                    </li>
                                  </ul>
                                </motion.div>
                              )}
                              {lang == 1 && (
                                <motion.div>
                                  <p className='py-10 text-[17px] font-[700] '>
                                    在数据库管理领域，我拥有丰富的专业知识，展示出对以下关键领域的熟练掌握：
                                  </p>
                                  <ul className='text-[15px] '>
                                    <li>
                                      <strong className='font-black py-4'>
                                        MySQL:
                                      </strong>{' '}
                                      我精通MySQL，充分发挥其在高效可靠数据库操作方面的能力。我的技能包括常见操作，如查询表、创建表、构建视图，并执行基于条件的过滤和排序等操作。我熟练掌握CRUD操作等数据库基本操作。
                                    </li>
                                    <li>
                                      <strong className='font-black py-4'>
                                        PostgreSQL:
                                      </strong>{' '}
                                      我全面了解PostgreSQL，将其用于构建强大而可扩展的数据库解决方案。我的专业知识涵盖了高级PostgreSQL功能，确保在数据库管理中实现最佳性能和可靠性。
                                    </li>
                                    <li>
                                      <strong className='font-black py-4'>
                                        数据库设计:
                                      </strong>{' '}
                                      我了解设计结构良好且优化的数据库架构，以满足不同应用程序的特定要求。
                                    </li>
                                    <li>
                                      <strong className='font-black py-4'>
                                        Python数据处理:
                                      </strong>{' '}
                                      精通Python，我利用流行的库如Pandas进行高效的数据处理。我擅长使用数据可视化工具，包括Tableau等，创建深入的图表，增强对处理后数据的解释性。
                                    </li>
                                    <li>
                                      <strong className='font-black py-4'>
                                        数据分析:
                                      </strong>{' '}
                                      在算法数据分析方面，我运用统计方法、数据挖掘和机器学习技术，从复杂数据集中提取有价值的见解。这有助于明智的决策和战略制定。
                                    </li>
                                  </ul>
                                </motion.div>
                              )}
                            </p>
                          </motion.div>
                          <motion.div className='pt-[70px] pb-[140px]'>
                            <motion.div
                              variants={fastWelcomevisblecontainer}
                              initial='hidden'
                              whileInView='visible'
                              viewport={{ once: true }}
                              className='flex justify-center items-center w-full h-full grid grid-cols-5 content-center'
                            >
                              {database.map((app, index) => (
                                <motion.div
                                  key={index}
                                  variants={WelcomeItem}
                                  transition={StagerFadeInUp}
                                  whileHover={{ scale: 1.2 }}
                                  whileTap={{ scale: 0.9 }}
                                  layout
                                >
                                  <motion.div className='flex-shrink-0 flex justify-center'>
                                    <img
                                      key={index}
                                      className='w-[35px] h-[35px] md:w-18 md:w-18 lg:w-24 lg:h-24 from-sky-500 to-emerald-500 bg-gradient-to-br p-2 rounded-[9px]'
                                      src={app.image}
                                      alt={app.name}
                                    />
                                  </motion.div>
                                  <motion.div className='text-[7px] md:text-[12px] font-semibold lg:text-[15px] text-center pt-[20px] from-sky-500 to-emerald-500 bg-gradient-to-r text-transparent bg-clip-text'>
                                    {app.name}
                                  </motion.div>
                                </motion.div>
                              ))}
                            </motion.div>
                          </motion.div>
                        </motion.div>
                      )}
                      {(selectedTab.label[lang] == 'Algorithm' ||
                        selectedTab.label[lang] == '算法') && (
                        <motion.div className='flex w-full flex-col'>
                          {/* Algorithm */}
                          <motion.div className=' mt-[20px]'>
                            <h3 className='tile-headline typography-subsection-headline from-cyan-500 to-blue-500 bg-gradient-to-r text-transparent bg-clip-text'>
                              {lang == 0 && 'Algorithm'}
                              {lang == 1 && '算法'}
                            </h3>
                            <p className='tile-copy  from-cyan-500 bg-gradient-to-r to-blue-500 text-transparent bgrid-colslip-text'>
                              {lang == 0 && (
                                <motion.div>
                                  <p className='py-10 text-[17px] font-[700]'>
                                    My proficiency in algorithm development
                                    spans various specialized areas, showcasing
                                    a deep understanding and practical
                                    application of advanced concepts. Here are
                                    some key domains I excel in:
                                  </p>
                                  <ul className='text-[15px] '>
                                    <li>
                                      <strong className='font-black py-4'>
                                        Machine Learning:
                                      </strong>{' '}
                                      With an in-depth knowledge of machine
                                      learning algorithms, I specialize in their
                                      application to analyze and interpret data,
                                      make predictions, and optimize
                                      decision-making processes. From regression
                                      and clustering to classification models, I
                                      am well-versed in creating effective
                                      solutions.
                                    </li>
                                    <li>
                                      <strong className='font-black py-4'>
                                        Deep Learning:
                                      </strong>{' '}
                                      My expertise extends to deep learning,
                                      where I leverage neural networks to handle
                                      complex tasks such as image recognition,
                                      natural language processing, and pattern
                                      recognition. I have practical experience
                                      implementing convolutional neural networks
                                      (CNNs) and recurrent neural networks
                                      (RNNs) in real-world scenarios.
                                    </li>
                                    <li>
                                      <strong className='font-black py-4'>
                                        Natural Language Processing:
                                      </strong>{' '}
                                      In the realm of natural language
                                      processing, I am adept at developing
                                      algorithms that enable applications to
                                      understand, interpret, and generate
                                      human-like language. This includes text
                                      classification, sentiment analysis, and
                                      language generation models.
                                    </li>
                                    <li>
                                      <strong className='font-black py-4'>
                                        Recommender Systems:
                                      </strong>{' '}
                                      I have hands-on experience in developing
                                      recommender systems, utilizing
                                      collaborative filtering, content-based
                                      filtering, and hybrid approaches. My focus
                                      is on analyzing user preferences and
                                      behavior to provide personalized
                                      recommendations, enhancing user
                                      engagement.
                                    </li>
                                  </ul>
                                </motion.div>
                              )}
                              {lang == 1 && (
                                <motion.div>
                                  <p className='py-10 text-[17px] font-[700] '>
                                    我在算法开发方面具备深厚的知识，展现出对各种专业领域的深刻理解和实际应用。以下是我在一些关键领域的突出表现：
                                  </p>
                                  <ul className='text-[15px] '>
                                    <li>
                                      <strong className='font-black py-4'>
                                        机器学习:
                                      </strong>{' '}
                                      我深刻理解机器学习算法，专注于其在数据分析和解释、预测以及优化决策过程中的应用。从回归和聚类到分类模型，我精通创建有效的解决方案。
                                    </li>
                                    <li>
                                      <strong className='font-black py-4'>
                                        深度学习:
                                      </strong>{' '}
                                      我的专业知识涵盖深度学习，利用神经网络处理复杂任务，如图像识别、自然语言处理和模式识别。我在实际场景中实施卷积神经网络（CNN）和循环神经网络（RNN）。
                                    </li>
                                    <li>
                                      <strong className='font-black py-4'>
                                        自然语言处理:
                                      </strong>{' '}
                                      在自然语言处理领域，我擅长开发算法，使应用程序能够理解、解释和生成类似人类的语言。这包括文本分类、情感分析和语言生成模型。
                                    </li>
                                    <li>
                                      <strong className='font-black py-4'>
                                        推荐系统:
                                      </strong>{' '}
                                      我有在推荐系统开发方面的实际经验，利用协同过滤、基于内容的过滤和混合方法。我专注于分析用户偏好和行为，提供个性化的推荐，增强用户参与度。
                                    </li>
                                  </ul>
                                </motion.div>
                              )}
                            </p>
                          </motion.div>
                          <motion.div className='pt-[70px] pb-[140px]'>
                            <motion.div
                              variants={fastWelcomevisblecontainer}
                              initial='hidden'
                              whileInView='visible'
                              viewport={{ once: true }}
                              className='flex justify-center items-center w-full h-full grid grid-cols-5 content-center'
                            >
                              {algorithm.map((app, index) => (
                                <motion.div
                                  key={index}
                                  variants={WelcomeItem}
                                  transition={StagerFadeInUp}
                                  whileHover={{ scale: 1.2 }}
                                  whileTap={{ scale: 0.9 }}
                                  layout
                                >
                                  <motion.div className='flex-shrink-0 flex justify-center'>
                                    <img
                                      key={index}
                                      className='w-[35px] h-[35px] md:w-18 md:w-18 lg:w-24 lg:h-24 from-cyan-500 bg-gradient-to-br to-blue-500  p-2 rounded-[9px]'
                                      src={app.image}
                                      alt={app.name}
                                    />
                                  </motion.div>
                                  <motion.div className='text-[7px] md:text-[12px] font-semibold lg:text-[15px] text-center pt-[20px] from-cyan-500 bg-gradient-to-r to-blue-500 text-transparent bgrid-colslip-text'>
                                    {app.name}
                                  </motion.div>
                                </motion.div>
                              ))}
                            </motion.div>
                          </motion.div>
                        </motion.div>
                      )}
                      {(selectedTab.label[lang] == 'Other' ||
                        selectedTab.label[lang] == '其他') && (
                        <motion.div className='flex w-full flex-col'>
                          {/* Other */}
                          <motion.div className=' mt-[20px]'>
                            <h3 className='tile-headline typography-subsection-headline from-indigo-500 to-pink-500 bg-gradient-to-r text-transparent bg-clip-text'>
                              {lang == 0 && 'Other'}
                              {lang == 1 && '其他'}
                            </h3>
                            <p className='tile-copy  from-indigo-500 to-pink-500 bg-gradient-to-r text-transparent bg-clip-text'>
                              {lang == 0 && (
                                <motion.div>
                                  <p className='py-10 text-[17px] font-[700]'>
                                    My expertise extends beyond algorithmic
                                    development, encompassing a diverse set of
                                    skills and technologies that contribute to
                                    comprehensive project execution. Here are
                                    some additional areas where I excel:
                                  </p>
                                  <ul className='text-[15px] '>
                                    <li>
                                      <strong className='font-black py-4'>
                                        GitHub:
                                      </strong>{' '}
                                      Proficient in version control, I leverage
                                      GitHub for collaborative development, code
                                      review, and repository management. This
                                      ensures seamless collaboration with team
                                      members and efficient project tracking.
                                    </li>
                                    <li>
                                      <strong className='font-black py-4'>
                                        SSH:
                                      </strong>{' '}
                                      I am skilled in Secure Shell (SSH)
                                      protocol, enabling secure access to
                                      servers for remote development, file
                                      transfer, and secure communication. This
                                      enhances the security and efficiency of
                                      the development process.
                                    </li>
                                    <li>
                                      <strong className='font-black py-4'>
                                        Linux:
                                      </strong>{' '}
                                      I am experienced in working with
                                      Linux-based environments, realise basic
                                      command-line operations, system
                                      administration, and shell scripting. This
                                      proficiency contributes to efficient
                                      development and server management.
                                    </li>
                                    <li>
                                      <strong className='font-black py-4'>
                                        Docker:
                                      </strong>{' '}
                                      I have practical experience with Docker
                                      implementation, utilizing containerization
                                      for seamless deployment and scalability of
                                      applications. This enhances consistency
                                      across different environments and
                                      facilitates efficient collaboration.
                                    </li>
                                  </ul>
                                </motion.div>
                              )}
                              {lang == 1 && (
                                <motion.div>
                                  <p className='py-10 text-[17px] font-[700] '>
                                    我的专业知识不仅限于算法和开发，还涵盖了一系列其他技能和技术，有助于全面执行项目。以下是我在其他方面的卓越表现：
                                  </p>
                                  <ul className='text-[15px] '>
                                    <li>
                                      <strong className='font-black py-4'>
                                        GitHub:
                                      </strong>{' '}
                                      精通版本控制，我利用GitHub进行协作开发、代码审查和仓库管理。这确保了与团队成员的无缝合作和项目的高效跟踪。
                                    </li>
                                    <li>
                                      <strong className='font-black py-4'>
                                        SSH:
                                      </strong>{' '}
                                      我熟练掌握安全外壳协议（SSH），实现对服务器的安全访问，用于远程开发、文件传输和安全通信。这提高了开发过程的安全性和效率。
                                    </li>
                                    <li>
                                      <strong className='font-black py-4'>
                                        Linux:
                                      </strong>{' '}
                                      我有在基于Linux的环境中工作的经验，了解基本的命令行操作、系统管理和Shell脚本。这种熟练程度有助于高效的开发和服务器管理。
                                    </li>
                                    <li>
                                      <strong className='font-black py-4'>
                                        Docker:
                                      </strong>{' '}
                                      我在Docker实施方面有实际经验，利用容器化实现应用程序的无缝部署和扩展性。这提高了在不同环境中的一致性，并促进了高效的协作。
                                    </li>
                                  </ul>
                                </motion.div>
                              )}
                            </p>
                          </motion.div>
                          <motion.div className='pt-[70px] pb-[140px]'>
                            <motion.div
                              variants={fastWelcomevisblecontainer}
                              initial='hidden'
                              whileInView='visible'
                              viewport={{ once: true }}
                              className='flex justify-between items-center w-full h-full grid grid-cols-5 content-center mb-24 '
                            >
                              {other.map((app, index) => (
                                <motion.div
                                  key={index}
                                  variants={WelcomeItem}
                                  transition={StagerFadeInUp}
                                  whileHover={{ scale: 1.2 }}
                                  whileTap={{ scale: 0.9 }}
                                  layout
                                >
                                  <motion.div
                                    className={` flex-shrink-0 flex justify-center `}
                                  >
                                    <img
                                      key={index}
                                      className='w-[35px] h-[35px] md:w-18 md:w-18 lg:w-24 lg:h-24 from-indigo-500 to-pink-500 bg-gradient-to-br  p-2 rounded-[9px]'
                                      src={app.image}
                                      alt={app.name}
                                    />
                                  </motion.div>
                                  <motion.div className='text-[7px] md:text-[12px] font-semibold lg:text-[15px] text-center pt-[20px] from-indigo-500 to-pink-500 bg-gradient-to-r text-transparent bg-clip-text'>
                                    {app.name}
                                  </motion.div>
                                </motion.div>
                              ))}
                            </motion.div>
                          </motion.div>
                        </motion.div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* good user */}
        <motion.div
          className='grid-item large-span-6 small-span-12 grid-item-check-in will-change carnival-item-in-view '
          data-component-list='CarnivalInlineVideo TileOverlay WillChange'
          data-analytics-section-engagement='name:let your friend know when you arrive safely'
          data-tile-name='check-in'
        >
          <motion.div className='tile tile-rounded tile-with-overlay'>
            <motion.div
              className='tile-content'
              style={{ background: 'linear-gradient(135deg,#3d44c3,#6dffe8)' }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: '10px' }}
                whileInView={{ opacity: 1, scale: 1, y: '0px' }}
                transition={{
                  ease: [0.455, 0.03, 0.515, 0.955],
                  duration: 1.3,
                }}
                className='tile-header'
              >
                <motion.div className='tile-headline typography-subsection-headline text-white'>
                  {lang == 0 && 'Good User'}
                  {lang == 1 && '绝对的能手'}
                </motion.div>
                <p className='tile-copy typography-subsection-copy text-white'>
                  {lang == 0 &&
                    SelectText(
                      "As a proficient user, I've mastered every app I need, ensuring that work is [flawless] and [efficient].",
                      'yellow-500',
                    )}
                  {lang == 1 &&
                    SelectText(
                      '作为一位熟练的使用者，我掌握了我所需的每个应用程序，确保每一项工作都完成得[无懈可击]且[高效]。',
                      'yellow-500',
                    )}
                </p>
              </motion.div>
              <motion.div className='tile-body'>
                <motion.div
                  variants={fastWelcomevisblecontainer}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true }}
                  className='flex justify-center items-center w-full h-full grid grid-cols-4 content-center mb-24 bg-white/30 p-20 rounded-[18px]'
                >
                  {apps.map((app, index) => (
                    <motion.div
                      key={index}
                      variants={{
                        hidden: {
                          opacity: 0,
                          y: '30px',
                          scale: 0.95,
                        },
                        visible: {
                          opacity: 1,
                          y: '0px',
                          scale: 1,
                        },
                      }}
                      transition={{ StagerFadeInUp }}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      layout
                    >
                      <motion.div className='flex-shrink-0 flex justify-center'>
                        <img
                          key={index}
                          className='w-24 h-24  p-2 rounded-[9px]'
                          src={app.src}
                          alt={app.alt}
                        />
                      </motion.div>
                      <motion.div className='text-center pt-3 text-yellow-900 font-[500]'>
                        {app.alt}
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
            <input
              type='checkbox'
              className='tile-overlay-toggle'
              id='tile-overlay-toggle-check-in'
            />
            <motion.div className='tile-overlay'>
              <label
                tabIndex={0}
                className='tile-button-wrapper'
                htmlFor='tile-overlay-toggle-check-in'
              >
                <span className='tile-button'>
                  <svg
                    className='tile-icon-alt'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                  >
                    <path d='M18.5,8.51h-7v-7A1.5,1.5,0,0,0,10,0h0A1.5,1.5,0,0,0,8.5,1.5v7h-7a1.5,1.5,0,0,0,0,3h7v7A1.5,1.5,0,0,0,10,20h0a1.5,1.5,0,0,0,1.5-1.5v-7h7a1.5,1.5,0,0,0,0-3Z' />
                  </svg>
                </span>
                <span
                  className='tile-button-text'
                  role='button'
                  aria-expanded='false'
                  aria-controls='content-toggle-check-in'
                ></span>
              </label>
              <motion.div
                className='tile-overlay-content'
                style={{
                  background: 'linear-gradient(135deg,#3d44c3,#6dffe8)',
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    ease: [0.455, 0.03, 0.515, 0.955],
                    duration: 1,
                    delayChildren: 0,
                  }}
                  className='tile-overlay-header'
                  id='content-toggle-check-in'
                >
                  <h3 className='tile-overlay-headline typography-subsection-headline'>
                    {lang == 0 && 'Good User'}
                    {lang == 1 && '绝对的能手'}
                  </h3>
                </motion.div>
                <motion.div className='tile-overlay-body'>
                  <p className='tile-overlay-copy typography-subsection-copy'>
                    {lang == 0 &&
                      "I have accumulated extensive experience in the IT field, proficiently mastering a variety of professional software. For example, I am well-versed in the Microsoft Office suite, including Word, Excel, and PowerPoint, allowing me to efficiently handle document editing, data analysis, and presentation creation. Additionally, I possess expertise in Adobe's suite of software, such as Photoshop, Illustrator, and After Effects, enabling me to craft exquisite designs and animated effects. Regarding development, I excel in utilizing tools like Visual Studio Code, PyCharm, and other IDEs, along with version control tools like GitHub. In past projects, I have successfully leveraged these software tools to accomplish a diverse range of tasks, showcasing my professional skills and demonstrating a high level of proficiency. I have a strong passion for learning new technologies, consistently staying updated on the latest industry trends to uphold my competitiveness."}
                    {lang == 1 &&
                      '在IT领域，我积累了丰富的经验，熟练掌握了多种专业软件。例如，我熟悉Microsoft Office套件，包括Word、Excel和PowerPoint，使我能够高效进行文档编辑、数据分析和演示文稿创建。此外，我精通Adobe软件套件，如Photoshop、Illustrator和After Effects，使我能够实现精致的设计和动画效果。在开发方面，我擅长使用诸如Visual Studio Code、PyCharm等集成开发环境（IDE）。其次，也熟悉GitHub等版本控制工具。在过去的项目中，我成功地运用这些软件工具完成了各种任务，展示了我的专业技能和高水平的熟练程度。我对学习新技术充满兴趣，始终保持对行业最新趋势的更新，以保持自己的竞争力。'}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* High Quality */}
        <motion.div className='grid-item large-span-6 small-span-12 grid-item-check-in will-change carnival-item-in-view min-h-[650px]'>
          {/* 半透明要改 */}
          <motion.div className='tile tile-rounded tile-with-overlay bg-white'>
            <motion.div
              className='tile-content'
              style={{
                backgroundImage: `url(${Database.PersonalInfo.Capability.graphs.code[1]})`,
                backgroundSize: '100% auto',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center bottom',
              }}
            >
              <div
                className='tile-content'
                style={{
                  backgroundImage: `url(${Database.PersonalInfo.Capability.graphs.code[0]})`,
                  backgroundSize: '100% auto',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center bottom',
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 60, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    ease: [0.455, 0.03, 0.515, 0.955],
                    duration: 1.3,
                    delay: 0.4,
                  }}
                  className='tile-header'
                >
                  <h3 className='tile-headline typography-subsection-headline'>
                    {lang == 0 && 'High Quality? Not just for code'}
                    {lang == 1 && '完美？不止是代码'}
                  </h3>
                  {/* 完美主义 内容 */}
                  <p className='tile-copy typography-subsection-copy'>
                    {lang == 0 &&
                      SelectText(
                        'As a perfectionist, I approach every project I handle with a commitment to high quality, ensuring that every aspect is flawless. I meticulously consider details such as [code quality], [user usability], [aesthetics], and more. Perfection, for me, extends across all facets of the project and life.',
                        'blue-700',
                        '\t ',
                      )}
                    {lang == 1 &&
                      SelectText(
                        '作为追求卓越之人，我在交付每个项目时都致力于确保各个方面都无可挑剔。这包括[代码质量]、[用户可用性]、[美感]等各个方面。对我而言，追求完美不仅体现在项目中，也延伸至生活的方方面面。这种执着于高质量的态度通常能够带来更好的结果和用户体验。在工作中，不断追求卓越有助于提高产品的竞争力，并确保用户对我的工作产生积极的体验和印象。',
                        'blue-700',
                      )}
                  </p>
                </motion.div>
                <motion.div className='tile-body'>
                  <motion.div className='overview-messages-image-visblecontainer large-centered'>
                    <figure role='img' className='overview-messages-check-in' />
                    <span aria-hidden='true'>
                      <motion.div className='inline-video-visblecontainer inline-video-check-in inline-video-is-webm loaded ended'>
                        <figure
                          className='start-frame'
                          aria-hidden='true'
                          data-anim-lazy-image-download-complete=''
                        />
                        <figure
                          className='static-frame end-frame'
                          aria-hidden='true'
                          data-anim-lazy-image-download-complete=''
                        />
                      </motion.div>
                    </span>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* row2-left */}
        <motion.div
          className='grid-item large-span-8 medium-span-6 small-span-12 grid-item-swipe-reply carnival-item-in-view h-auto'
          data-component-list='CarnivalInlineVideo'
          data-analytics-section-engagement='name:catch up and swipe to reply'
          data-tile-name='swipe-reply'
        >
          <motion.div className='tile tile-rounded'>
            {/* 半透明要改 */}
            <motion.div className='tile-content bg-white'>
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
                    <img
                      src='https://www.svgrepo.com/show/521591/css.svg'
                      alt=''
                    />
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
                    <img
                      src='https://www.svgrepo.com/show/38133/ui8.svg'
                      alt=''
                    />
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
                    <img
                      src='https://www.svgrepo.com/show/521591/css.svg'
                      alt=''
                    />
                    <p className='text-2xl text-black'>DL</p>
                  </motion.div>
                  <motion.div className='flex justify-center items-center flex-col w-24'>
                    <img
                      src='https://www.svgrepo.com/show/521714/js.svg'
                      alt=''
                    />
                    <p className='text-2xl text-black'>NLP</p>
                  </motion.div>
                  <motion.div className='flex justify-center items-center flex-col w-24'>
                    <img
                      src='https://www.svgrepo.com/show/521714/js.svg'
                      alt=''
                    />
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
                    <img
                      src='https://www.svgrepo.com/show/438984/ssh.svg'
                      alt=''
                    />
                    <p className='text-2xl text-black'>SSH</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        {/* row2-right */}
        <motion.div
          initial={{ scale: 0, y: 330, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          id={`infj`}
          role='tooltip'
          className='m-[20px] absolute z-50 invisible rounded-[28px] flex w-[300px] md:w-[400px] lg:w-[800px]  transition-opacity duration-300 backdrop-blur-lg bg-white/80 shadow-2xl opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800'
        >
          <motion.div className='p-[40px]'>
            <p className='text-[17px] md:text-[18px] lg:text-[20px] text-gray-900  py-4 text-center font-black '>
              {lang == 0 && 'Click to learn infj'}
              {lang == 1 && '点击了解infj人格'}
            </p>
            <motion.div className='text-[14px] md:text-[15px] lg:text-[14px] text-gray-500 text-left font-mono'>
              {personality.Mbti[lang].split('\n').map((paragraph, index) => (
                <motion.div key={index}>
                  <p className='mb-2'>{SelectText(paragraph)}</p>
                  <br className='border-b' />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div tooltip-arrow></motion.div>
        </motion.div>

        <motion.div
          className='grid-item large-span-4 medium-span-6 small-span-12 grid-item-search min-h-[930px]'
          data-analytics-section-engagement='name:search filters'
          data-tile-name='search'
        >
          <motion.div className='tile tile-rounded'>
            <motion.div
              className='tile-content bg-[#fed9d3]'
              style={{
                backgroundImage: `url(${Database.PersonalInfo.Capability.graphs.infj[1]})`,
                backgroundSize: '100% auto',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center bottom',
              }}
            >
              <div
                className='tile-content'
                style={{
                  backgroundImage: `url(${Database.PersonalInfo.Capability.graphs.infj[0]})`,
                  backgroundSize: '100% auto',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center bottom',
                }}
              >
                <motion.div className='tile-header'>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      ease: [0.455, 0.03, 0.515, 0.955],
                      duration: 2,
                      delayChildren: 0,
                    }}
                    className='flex justify-between'
                  >
                    <h3 className='tile-headline typography-subsection-headline py-4 text-gray-600'>
                      {lang == 0 && 'Personality'}
                      {lang == 1 && '人格类型'}
                    </h3>
                    <a
                      data-tooltip-target={`infj`}
                      data-tooltip-placement={'bottom'}
                      href='https://www.16personalities.com/infj-personality'
                      className='flex jusitify-between items-center '
                    >
                      <p className='tile-headline text-xl typography-subsection-headline text-gray-600 '>
                        {lang == 0 && 'INFJ'}
                        {lang == 1 && '绿老头'}
                      </p>

                      <i className='ml-2 fi fi-rr-interrogation flex justify-end items-center my-0'></i>
                    </a>
                  </motion.div>

                  <motion.div
                    variants={ProgressBarvisblecontainer}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                    className='space-y-8 '
                  >
                    {personality.feature[lang].map((per, index) => (
                      <motion.div>
                        <motion.div
                          key={index}
                          className={`${
                            per.color1 + ' ' + per.color2
                          } flex justify-between bg-gradient-to-r text-transparent bg-clip-text`}
                        >
                          <motion.div className='text-2xl font-normal'>
                            {per.name}
                          </motion.div>
                          <motion.div className='typography-subsection-copy flex'>
                            <N className='' n={per.label} d={1.5} /> %
                          </motion.div>
                        </motion.div>
                        <motion.div className='w-full bg-white/20 rounded-full h-4 mb-4 dark:bg-gray-700'>
                          <motion.div
                            key={index}
                            variants={{
                              hidden: { width: '0%' },
                              visible: {
                                width: `${per.column}`,
                              },
                            }}
                            transition={ProgressBar}
                            viewport={{ once: true }}
                            className={`${
                              per.color1 + ' ' + per.color2
                            } bg-gradient-to-r  h-4 rounded-full`}
                            style={{ width: `0%` }}
                          ></motion.div>
                        </motion.div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
                <motion.div
                  variants={ProgressBarvisblecontainer}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true }}
                  className='tile-header'
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      ease: [0.455, 0.03, 0.515, 0.955],
                      duration: 2,
                      delayChildren: 1,
                    }}
                    className='flex justify-between'
                  >
                    <h3 className='tile-headline typography-subsection-headline py-4 text-gray-600'>
                      {lang == 0 && 'Language'}
                      {lang == 1 && '语言能力'}
                    </h3>
                    <a
                      href='https://en.wikipedia.org/wiki/Multilingualism'
                      className=' tile-headline text-xl typography-subsection-headline py-4 text-gray-600'
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
                          } flex justify-between bg-gradient-to-r text-transparent bg-clip-text`}
                        >
                          <motion.div className='text-2xl font-normal'>
                            {personality.name}
                          </motion.div>
                          <motion.div className='typography-subsection-copy flex'>
                            <N n={personality.label} d={1.5} />
                          </motion.div>
                        </motion.div>
                        <motion.div className='w-full bg-white/20 rounded-full h-4 mb-4 dark:bg-gray-700'>
                          <motion.div
                            key={index}
                            variants={{
                              hidden: { width: '0%' },
                              visible: {
                                width: `${personality.column}`,
                              },
                            }}
                            transition={ProgressBar}
                            className={`${
                              personality.color1 + ' ' + personality.color2
                            } bg-gradient-to-r  h-4 rounded-full`}
                            style={{ width: `0%` }}
                          ></motion.div>
                        </motion.div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        {/* <motion.div
      className="grid-item large-span-6 small-span-12 grid-item-location"
      data-analytics-section-engagement="name:a new way to share and view locations"
      data-tile-name="location"
    >
      <motion.div className="tile tile-rounded">
        <motion.div className="tile-content">
          <motion.div className="tile-header">
            <h3 className="tile-headline typography-subsection-headline">
              以新方式分享和檢視位置
            </h3>
            <p className="tile-copy typography-subsection-copy">
              使用加號按鈕分享你的位置，或要求好友分享所在的位置。還可在對話中，直接查看對方分享的位置。
            </p>
          </motion.div>
          <motion.div className="tile-body">
            <glass-visblecontainer
              className="glass-hardware portrait-hardware1 large-centered"
              data-anim-lazy-image-download-complete=""
            >
              <glass-hardware
                role="img"
                aria-label="iPhone 上的 iMessage 顯示使用者正在分享他們的位置。"
              />
              <glass-screen></glass-screen>
            </glass-visblecontainer>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
    <motion.div
      className="grid-item large-span-6 small-span-12 grid-item-transcript"
      data-analytics-section-engagement="name:read an audio message from transcription"
      data-tile-name="transcript"
    >
      <motion.div className="tile tile-rounded">
        <motion.div className="tile-content">
          <motion.div className="tile-header">
            <h3 className="tile-headline typography-subsection-headline">
              將語音訊息轉換為文字
            </h3>
            <p className="tile-copy typography-subsection-copy">
              語音訊息現在可以轉換成文字，讓你當下看到內容並於稍後再聽。
            </p>
          </motion.div>
          <motion.div className="tile-body">
            <figure
              role="img"
              className="overview-messages-transcript large-centered"
              aria-label="聽寫記錄展示未打開的語音訊息內容被轉換成文字。"
              data-anim-lazy-image-download-complete=""
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div> */}
      </motion.div>
    </>
  );

  return <motion.div className='bg-gray-200/10'>{Capability}</motion.div>;
}

export default Capability;
