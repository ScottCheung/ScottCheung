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

function Skill() {
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

  const Skill = (
    // {/* stack */}
    <motion.div className='transition-all   grid-item large-span-12 tile-body-no-pad-left tile-body-no-pad-right tile-body-no-pad-bottom grid-item-stickers  z-50 -mt-[20vh] '>
      <motion.div
        id='Capability'
        className='tile transition-all   tile-rounded shadow-[40px] h-auto '
      >
        <motion.div
          className='tile-content  transition-all  h-auto relative '
          // style={{
          //   backgroundImage: `url(${Database.PersonalInfo.Capability.graphs.gallerybg[0]})`,
          //   backgroundSize: `100% auto`,
          //   backgroundRepeat: 'repeat',
          //   backgroundPosition: 'center bottle',
          // }}
        >
          <motion.div
            id='blackOverlay'
            className=' absolute   transition-all  z-0 gradient-mask '
          >
            <BG />
          </motion.div>
          <span className='absolute  top-0 bottom-0 left-0  right-0 from-[#050D19] to-slate-950 bg-gradient-to-br -z-50'></span>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              ease: [0.455, 0.03, 0.515, 0.955],
              duration: 2,
            }}
            className={`transition-all   pb-24 tile-header z-40 typography-section-intro-headline section-intro-headline from-${selectedTab.color1} to-${selectedTab.color2} bg-gradient-to-br text-transparent bg-clip-text text-center pt-[70px] `}
          >
            <i className=' fi text-5xl lg:text-8xl fi-rr-circle-user mr-[20px] pt-3 '></i>
            {lang == 0 && 'Capability'}
            {lang == 1 && '能力'}
          </motion.div>
          <motion.div className='z-30  '>
            <motion.ul
              variants={Welcomevisblecontainer}
              initial='hidden'
              whileInView='visible'
              // viewport={{ once: true }}

              className=' tile-header flex  relative justify-between text-center  w-full  gap-x-[10%] overflow-auto  scrollbar-hide'
            >
              {tabs.map((tab, index) => (
                <motion.button
                  key={tab.label}
                  role='presentation'
                  variants={{
                    hidden: {
                      opacity: 0,
                      pointerEvents: 'none',
                    },
                    visible: {
                      opacity: 1,
                      pointerEvents: 'auto',
                    },
                  }}
                  transition={{ duration: 1, delay: index * 0.3 }}
                  className={` transition-all inline-flex  items-start  tile-headline typography-subsection-headline `}
                  onClick={() => setSelectedTab(tab)}
                  // onMouseEnter={() => setSelectedTab(tab)}
                >
                  <div className='flex flex-col'>
                    <h3
                      className={` bg-gradient-to-br text-transparent bg-clip-text from-${tab.color1} to-${tab.color2} `}
                    >
                      {tab.label[lang]}
                    </h3>
                    {tab === selectedTab ? (
                      <motion.div
                        className={`from-${tab.color1} to-${tab.color2} bg-gradient-to-br w-full   h-[6px]  rounded-full z-50`}
                        layoutId='underline'
                      />
                    ) : null}
                  </div>
                </motion.button>
              ))}
            </motion.ul>
            <AnimatePresence>
              <motion.div
                key={selectedTab.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className='tile-header transition-all tranform-all  '
              >
                {/* {selectedTab.content} */}
                {(selectedTab.label[lang] == 'Frontend' ||
                  selectedTab.label[lang] == '前端') && (
                  <motion.div
                    layoutId='abilitiy'
                    className='flex w-full flex-col'
                  >
                    {/* Front-end */}
                    <motion.div className='mt-[20px]'>
                      <h3 className='tile-headline typography-subsection-headline from-red-500 to-red-700 bg-gradient-to-br text-transparent bg-clip-text'>
                        {lang == 0 && 'Front-end'}
                        {lang == 1 && '前端'}
                      </h3>
                      <p className='tile-copy from-red-500 to-red-700 bg-gradient-to-br text-transparent bg-clip-text'>
                        {lang == 0 && (
                          <motion.div>
                            <p className='py-10  text-[17px] '>
                              I am capable of designing and implementing
                              frontend interfaces that are attractive, highly
                              interactive, ensuring users have an outstanding
                              user experience. My frontend expertise not only
                              spans a wide range of technologies but also
                              emphasizes interface design and user experience. I
                              am dedicated to crafting modern applications that
                              are not only visually appealing and elegant but
                              also powerful in functionality.
                            </p>
                            <ul className=' text-[17px] '>
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
                                proficiently use the React framework. I can
                                build efficient and maintainable single-page
                                applications (SPAs) and adeptly handle
                                component-based development.
                              </li>
                              <li>
                                <strong className='font-black py-4'>
                                  CSS Lib:
                                </strong>{' '}
                                I am familiar with using{' '}
                                <strong className='font-black underline'>
                                  Tailwind CSS
                                </strong>
                                , a practical CSS framework. In addition, I am
                                skilled in mainstream UI libraries such as
                                Bootstrap and MUI, enabling me to quickly and
                                flexibly construct modern user interfaces.
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
                                Spring. I can leverage their powerful animation
                                and prototyping tools to provide users with a
                                smooth interactive experience.
                              </li>
                            </ul>
                          </motion.div>
                        )}
                        {lang == 1 && (
                          <motion.div>
                            <p className='py-10  text-[17px]  '>
                              我能够设计并实现具有吸引力、高度交互性的前端界面，确保用户获得出色的使用体验。我的前端能力不仅体现在技术广度上，同时注重界面设计和用户体验，致力于打造既美观优雅又功能强大的现代化应用程序。
                            </p>
                            <ul className=' text-[17px] '>
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
                        className='justify-center items-center w-full h-full grid  gap-y-[50px]'
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
                            transition={{ duration: 0.7 }}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.95, duration: 0.2 }}
                            className='grid-item large-span-2 medium-span-3 small-span-4 h-full'
                          >
                            <motion.div className='flex-shrink-0 flex justify-center'>
                              <img
                                key={index}
                                className='w-[50px] h-[50px] md:w-[60px] md:h-[60px]  from-red-500 to-red-700 bg-gradient-to-br p-2 rounded-[9px]'
                                src={app.image}
                                alt={app.name}
                              />
                            </motion.div>
                            <motion.div className='text-[18px] lg:text-[20px] font-semibold md:text-[20px] text-center pt-[20px] from-red-500 to-red-700 bg-gradient-to-br text-transparent bg-clip-text'>
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
                  <motion.div
                    layoutId='abilitiy'
                    className='flex w-full flex-col'
                  >
                    {/* Back-end */}
                    <motion.div className=' mt-[20px] '>
                      <h3 className='tile-headline typography-subsection-headline from-orange-500 to-amber-500 bg-gradient-to-br text-transparent bg-clip-text transition-all  '>
                        {lang == 0 && 'Backend'}
                        {lang == 1 && '后端'}
                      </h3>
                      <p className='tile-copy  from-orange-500 to-amber-500  bg-gradient-to-br text-transparent bg-clip-text'>
                        {lang == 0 && (
                          <motion.div>
                            <p className='py-10  text-[17px]  '>
                              I specialize in backend technologies and
                              demonstrate proficiency in the following areas
                              MySQL / PostgreSQL / JSON.
                            </p>
                            <ul className=' text-[17px]'>
                              <li>
                                <strong className='font-black py-4'>
                                  MySQL:
                                </strong>{' '}
                                I am experienced in working with{' '}
                                <strong className='font-black py-4'>
                                  MySQL
                                </strong>
                                , utilizing it for various backend development
                                tasks.
                              </li>
                              <li>
                                <strong className='font-black py-4'>
                                  PostgreSQL:
                                </strong>{' '}
                                I have proficiency in{' '}
                                <strong className='font-black py-4'>
                                  PostgreSQL
                                </strong>
                                , applying it to build robust and efficient
                                database solutions.
                              </li>
                              <li>
                                <strong className='font-black py-4'>
                                  JSON:
                                </strong>{' '}
                                I am adept at working with{' '}
                                <strong className='font-black py-4'>
                                  JSON
                                </strong>
                                , ensuring seamless data interchange between the
                                frontend and backend.
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
                            <p className='py-10  text-[17px]  '>
                              我在后端技术方面拥有专业的技能，展示出对以下领域的熟练掌握：
                            </p>
                            <ul className=' text-[17px]'>
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
                        className='justify-center items-center w-full h-full grid   content-center'
                      >
                        {BackendEnd.map((app, index) => (
                          <motion.div
                            key={index}
                            variants={WelcomeItem}
                            transition={{ duration: 0.7 }}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.95, duration: 0.2 }}
                            className='grid-item large-span-2 medium-span-3 small-span-4 h-full'
                          >
                            <motion.div className='flex-shrink-0 flex justify-center'>
                              <img
                                key={index}
                                className='w-[50px] h-[50px] md:w-[60px] md:h-[60px]   from-orange-500 to-amber-500  bg-gradient-to-br p-2 rounded-[9px]'
                                src={app.image}
                                alt={app.name}
                              />
                            </motion.div>
                            <motion.div className='text-[18px] lg:text-[20px]  font-semibold md:text-[20px] text-center pt-[20px] from-orange-500 to-amber-500  bg-gradient-to-br text-transparent bgrid-colslip-text'>
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
                  <motion.div
                    layoutId='abilitiy'
                    className='flex w-full flex-col'
                  >
                    {/* Database */}
                    <motion.div className=' mt-[20px] w-full'>
                      <h3 className='tile-headline typography-subsection-headline from-sky-500 to-emerald-500 bg-gradient-to-br text-transparent bg-clip-text'>
                        {lang == 0 && 'Database'}
                        {lang == 1 && '数据库'}
                      </h3>
                      <p className='tile-copy  from-sky-500 to-emerald-500 bg-gradient-to-br text-transparent bg-clip-text'>
                        {lang == 0 && (
                          <motion.div>
                            <p className='py-10  text-[17px] '>
                              In the realm of database management, I bring forth
                              a wealth of expertise, showcasing proficiency in
                              various key areas:
                            </p>
                            <ul className=' text-[17px] '>
                              <li>
                                <strong className='font-black py-4'>
                                  MySQL:
                                </strong>{' '}
                                I am well-versed in MySQL, leveraging its
                                capabilities for efficient and reliable database
                                operations. My skills encompass common
                                operations such as querying tables, creating
                                tables, building views, and performing
                                operations like filtering and sorting based on
                                conditions. I am proficient in CRUD operations
                                and other essential database manipulations.
                              </li>
                              <li>
                                <strong className='font-black py-4'>
                                  PostgreSQL:
                                </strong>{' '}
                                I have comprehensive knowledge of PostgreSQL,
                                utilizing it to construct robust and scalable
                                database solutions. My expertise extends to
                                advanced PostgreSQL functionalities, ensuring
                                optimal performance and reliability in database
                                management.
                              </li>
                              <li>
                                <strong className='font-black py-4'>
                                  Database Design:
                                </strong>{' '}
                                I excel in designing well-structured and
                                optimized database architectures tailored to the
                                specific requirements of diverse applications.
                              </li>
                              <li>
                                <strong className='font-black py-4'>
                                  Python Data Processing:
                                </strong>{' '}
                                Proficient in Python, I leverage popular
                                libraries like Pandas for efficient data
                                processing. I am adept at using data
                                visualization tools, including Tableau, to
                                create insightful graphs and charts, enhancing
                                the interpretability of processed data.
                              </li>
                              <li>
                                <strong className='font-black py-4'>
                                  Data Analysis:
                                </strong>{' '}
                                Proficient in algorithmic data analysis, I
                                leverage statistical methods, data mining, and
                                machine learning techniques to extract valuable
                                insights from complex datasets. This aids in
                                informed decision-making and strategy
                                development.
                              </li>
                            </ul>
                          </motion.div>
                        )}
                        {lang == 1 && (
                          <motion.div>
                            <p className='py-10  text-[17px]  '>
                              在数据库管理领域，我拥有丰富的专业知识，展示出对以下关键领域的熟练掌握：
                            </p>
                            <ul className=' text-[17px] '>
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
                        className='justify-center items-center w-full h-full grid   content-center'
                      >
                        {database.map((app, index) => (
                          <motion.div
                            key={index}
                            variants={WelcomeItem}
                            transition={{ duration: 0.7 }}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.95, duration: 0.2 }}
                            className='grid-item large-span-2 medium-span-3 small-span-4 h-full'
                          >
                            <motion.div className='flex-shrink-0 flex justify-center'>
                              <img
                                key={index}
                                className='w-[50px] h-[50px] md:w-[60px] md:h-[60px]   from-sky-500 to-emerald-500 bg-gradient-to-br p-2 rounded-[9px]'
                                src={app.image}
                                alt={app.name}
                              />
                            </motion.div>
                            <motion.div className='text-[18px] lg:text-[20px]  font-semibold md:text-[20px] text-center pt-[20px] from-sky-500 to-emerald-500 bg-gradient-to-br text-transparent bg-clip-text'>
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
                  <motion.div
                    layoutId='abilitiy'
                    className='flex w-full flex-col'
                  >
                    {/* Algorithm */}
                    <motion.div className=' mt-[20px]'>
                      <h3 className='tile-headline typography-subsection-headline from-cyan-500 to-blue-500 bg-gradient-to-br text-transparent bg-clip-text'>
                        {lang == 0 && 'Algorithm'}
                        {lang == 1 && '算法'}
                      </h3>
                      <p className='tile-copy  from-cyan-500 bg-gradient-to-br to-blue-500 text-transparent bgrid-colslip-text'>
                        {lang == 0 && (
                          <motion.div>
                            <p className='py-10  text-[17px] '>
                              My proficiency in algorithm development spans
                              various specialized areas, showcasing a deep
                              understanding and practical application of
                              advanced concepts. Here are some key domains I
                              excel in:
                            </p>
                            <ul className=' text-[17px] '>
                              <li>
                                <strong className='font-black py-4'>
                                  Machine Learning:
                                </strong>{' '}
                                With an in-depth knowledge of machine learning
                                algorithms, I specialize in their application to
                                analyze and interpret data, make predictions,
                                and optimize decision-making processes. From
                                regression and clustering to classification
                                models, I am well-versed in creating effective
                                solutions.
                              </li>
                              <li>
                                <strong className='font-black py-4'>
                                  Deep Learning:
                                </strong>{' '}
                                My expertise extends to deep learning, where I
                                leverage neural networks to handle complex tasks
                                such as image recognition, natural language
                                processing, and pattern recognition. I have
                                practical experience implementing convolutional
                                neural networks (CNNs) and recurrent neural
                                networks (RNNs) in real-world scenarios.
                              </li>
                              <li>
                                <strong className='font-black py-4'>
                                  Natural Language Processing:
                                </strong>{' '}
                                In the realm of natural language processing, I
                                am adept at developing algorithms that enable
                                applications to understand, interpret, and
                                generate human-like language. This includes text
                                classification, sentiment analysis, and language
                                generation models.
                              </li>
                              <li>
                                <strong className='font-black py-4'>
                                  Recommender Systems:
                                </strong>{' '}
                                I have hands-on experience in developing
                                recommender systems, utilizing collaborative
                                filtering, content-based filtering, and hybrid
                                approaches. My focus is on analyzing user
                                preferences and behavior to provide personalized
                                recommendations, enhancing user engagement.
                              </li>
                            </ul>
                          </motion.div>
                        )}
                        {lang == 1 && (
                          <motion.div>
                            <p className='py-10  text-[17px]  '>
                              我在算法开发方面具备深厚的知识，展现出对各种专业领域的深刻理解和实际应用。以下是我在一些关键领域的突出表现：
                            </p>
                            <ul className=' text-[17px] '>
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
                        className='justify-center items-center w-full h-full grid   content-center'
                      >
                        {algorithm.map((app, index) => (
                          <motion.div
                            key={index}
                            variants={WelcomeItem}
                            transition={{ duration: 0.7 }}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.95, duration: 0.2 }}
                            className='grid-item large-span-2 medium-span-3 small-span-4 h-full'
                          >
                            <motion.div className='flex-shrink-0 flex justify-center'>
                              <img
                                key={index}
                                className='w-[50px] h-[50px] md:w-[60px] md:h-[60px]   from-cyan-500 bg-gradient-to-br to-blue-500  p-2 rounded-[9px]'
                                src={app.image}
                                alt={app.name}
                              />
                            </motion.div>
                            <motion.div className='text-[18px] lg:text-[20px]  font-semibold md:text-[20px] text-center pt-[20px] from-cyan-500 bg-gradient-to-br to-blue-500 text-transparent bgrid-colslip-text'>
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
                  <motion.div
                    layoutId='abilitiy'
                    className='flex w-full flex-col'
                  >
                    {/* Other */}
                    <motion.div className=' mt-[20px]'>
                      <h3 className='tile-headline typography-subsection-headline from-indigo-500 to-pink-500 bg-gradient-to-br text-transparent bg-clip-text'>
                        {lang == 0 && 'Other'}
                        {lang == 1 && '其他'}
                      </h3>
                      <p className='tile-copy  from-indigo-500 to-pink-500 bg-gradient-to-br text-transparent bg-clip-text'>
                        {lang == 0 && (
                          <motion.div>
                            <p className='py-10  text-[17px] '>
                              My expertise extends beyond algorithmic
                              development, encompassing a diverse set of skills
                              and technologies that contribute to comprehensive
                              project execution. Here are some additional areas
                              where I excel:
                            </p>
                            <ul className=' text-[17px] '>
                              <li>
                                <strong className='font-black py-4'>
                                  GitHub:
                                </strong>{' '}
                                Proficient in version control, I leverage GitHub
                                for collaborative development, code review, and
                                repository management. This ensures seamless
                                collaboration with team members and efficient
                                project tracking.
                              </li>
                              <li>
                                <strong className='font-black py-4'>
                                  SSH:
                                </strong>{' '}
                                I am skilled in Secure Shell (SSH) protocol,
                                enabling secure access to servers for remote
                                development, file transfer, and secure
                                communication. This enhances the security and
                                efficiency of the development process.
                              </li>
                              <li>
                                <strong className='font-black py-4'>
                                  Linux:
                                </strong>{' '}
                                I am experienced in working with Linux-based
                                environments, realise basic command-line
                                operations, system administration, and shell
                                scripting. This proficiency contributes to
                                efficient development and server management.
                              </li>
                              <li>
                                <strong className='font-black py-4'>
                                  Docker:
                                </strong>{' '}
                                I have practical experience with Docker
                                implementation, utilizing containerization for
                                seamless deployment and scalability of
                                applications. This enhances consistency across
                                different environments and facilitates efficient
                                collaboration.
                              </li>
                            </ul>
                          </motion.div>
                        )}
                        {lang == 1 && (
                          <motion.div>
                            <p className='py-10  text-[17px]  '>
                              我的专业知识不仅限于算法和开发，还涵盖了一系列其他技能和技术，有助于全面执行项目。以下是我在其他方面的卓越表现：
                            </p>
                            <ul className=' text-[17px] '>
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
                        className='justify-between items-center w-full h-full grid  content-center mb-24 '
                      >
                        {other.map((app, index) => (
                          <motion.div
                            key={index}
                            variants={WelcomeItem}
                            transition={{ duration: 0.7 }}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.95, duration: 0.2 }}
                            className='grid-item large-span-2 medium-span-3 small-span-4 h-full'
                          >
                            <motion.div
                              className={` flex-shrink-0 flex justify-center `}
                            >
                              <img
                                key={index}
                                className='w-[50px] h-[50px] md:w-[60px] md:h-[60px]   from-indigo-500 to-pink-500 bg-gradient-to-br  p-2 rounded-[9px]'
                                src={app.image}
                                alt={app.name}
                              />
                            </motion.div>
                            <motion.div className='text-[18px] lg:text-[20px]  font-semibold md:text-[20px] text-center pt-[20px] from-indigo-500 to-pink-500 bg-gradient-to-br text-transparent bg-clip-text'>
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
        </motion.div>
      </motion.div>
    </motion.div>
  );

  return Skill;
}

export default Skill;
