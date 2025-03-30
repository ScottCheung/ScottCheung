/** @format */

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useTime, AnimatePresence } from 'framer-motion';
import { useAppContext } from '../../help/ContextManager.js';
import data from './Navbardata.json';
import { scrollToHash } from '../../help/helpFunction.js';
import packageinfo from '../../../package.json';
import Underline from '../../ui/underline.tsx';
import ContactDocker from '../contactDocker';
import Project from '../project.jsx';
import MenuButtonsSmall from './MenuButtonsSmall.tsx';

import Toast from '../toast.jsx';
const version = packageinfo.version.toString();

// 创建更新日期对象
const updateDate = new Date(packageinfo.lastPublishedAt.toString());

// 获取当前日期
const currentDate = new Date();

// 计算日期差异（毫秒数差异）
const timeDifference = currentDate - updateDate;

// 将毫秒数差异转换为天数差异
const dayDifference = timeDifference / (1000 * 3600 * 24);
const daysBetween = Math.floor(dayDifference);

// 判断是否是今天
const isToday = Math.abs(daysBetween) == 0;

// 判断是否在一周内
const isWithinOneWeek = Math.abs(daysBetween) <= 7;

// 提取更新日期的日和月
const updateDay = updateDate.getUTCDate();
const updateMonth = updateDate.getUTCMonth() + 1; // 月份是从0开始的，所以要加1

// 格式化更新日期
const updateTime = [
  `${updateDay} ${new Date(2000, updateMonth - 1, 1).toLocaleString('en-US', { month: 'long' })}`,
  `${updateMonth} 月 ${updateDay} 日`,
];

const navbarItem = data.navbarItem;

function Navbar({
  topTextColor,
  BG,

  extra,
  setIsPaused,
}) {
  const { Components } = useAppContext();
  const [hoverTab, setHoverTab] = useState(-1);
  const handleTabChange = (index) => {
    setHoverTab(index);
  };
  const [currentVersion, setCurrentVersion] = useState(
    localStorage.getItem('Current version') || null,
  );
  const [lang, setLang] = useState(parseInt(localStorage.getItem('lang')) || 0);

  const updateMessage =
    isToday ? ['Today', '今天'][lang]
    : isWithinOneWeek ? `${Math.abs(daysBetween)} ${['days ago', '天前'][lang]}`
    : updateTime[lang];

  const isTopTextColorWhite = topTextColor;
  const scrollTo = scrollToHash();
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(true);
  const [isTop, setIsTop] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isOpened, setIsOpened] = useState(false);
  const currentPage = window.location.pathname;
  const isHomeOrRoot = currentPage === '/' || currentPage === '/home';
  const [selectedTab, setSelectedTab] = useState(null);
  const buttonStyles = {
    '--scrim-background-color': 'rgb(66, 66, 66)',
    '--scrim-hover-background-color': '#37373a',
    '--scrim-active-background-color': '#2f2f32',
    '--icon-color': '#f7f7f7',
    '--icon-interaction-color': 'rgb(255, 255, 255)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    height: '36px',
    width: '36px',
    outline: 'none',
    position: 'absolute',
    zIndex: 1,
    right: '20px',
    bottom: '20px',
    margin: 0,
    padding: 0,
    border: 0,
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'background-color 100ms linear, color 100ms linear',
    backgroundColor: 'var(--scrim-background-color)',
    color: 'var(--icon-color)',
  };
  const iconStyles = {
    fill: 'currentColor',
    pointerEvents: 'none',
  };
  const BTN = (functionName) => {
    const functions = {
      lang0: () => {
        setLang('0');
        localStorage.setItem('lang', '0');
        window.location.reload();
      },
      lang1: () => {
        setLang('1');
        localStorage.setItem('lang', '1');
        window.location.reload();
      },
      LangToggle: () => {
        const newLang = lang === 0 ? 1 : 0;
        setLang(newLang);
        localStorage.setItem('lang', newLang);
        window.location.reload();
      },
    };

    return () => {
      if (typeof functions[functionName] === 'function') {
        functions[functionName]();
      } else {
        // console.warn(`Function '${functionName}' not found.`);
        null;
      }
    };
  };

  useEffect(() => {
    function handleScroll1() {
      if (window.scrollY < 0.0001) {
        setIsExpanded(true);
        setIsTop(true);
        setIsScrolling(false);
      } else {
        setIsExpanded(false);
        setIsTop(false);
        setSelectedTab(null);
      }
    }

    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    let scrollTimer;
    function handleScrollStatus(event) {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        if (event.deltaY > 10) {
          setIsScrolling(true);
        } else if (event.deltaY < 0) {
          setIsScrolling(false);
        }
      }, []);
    }

    window.addEventListener('scroll', handleScroll1);
    window.addEventListener('wheel', handleScrollStatus);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll1);
      window.removeEventListener('wheel', handleScrollStatus);
      window.removeEventListener('resize', handleResize);
    };
  }, [isExpanded, selectedTab]);

  const navbar = (
    <AnimatePresence>
      <motion.div
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className={` z-50 h-0 duration-700 fixed   overflow-x-clip ${
          isScrolling || Components.NavBar === 'hide' ?
            '  -top-[100px]'
          : ' -top-[2px] lg:top-0 '
        }  `}
      >
        <motion.nav
          layout
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className={` w-[${windowWidth}px] overflow-hidden flex flex-col`}
        >
          <motion.div
            onMouseLeave={() => {
              setSelectedTab(null);
              handleTabChange(-1);
              setIsPaused(false);
            }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            layout
            className={`flex flex-col w-screen  ${BG} overflow-hidden
        ${
          windowWidth < 768 ?
            ` pr-[5%]  ${isTop && isOpened ? `backdrop-blur-[20px] ${isTopTextColorWhite ? 'bg-black/50' : 'bg-white/50'} ` : ' '}`
          : ` ${isTop && isHomeOrRoot ? ' lg:pt-[50px] ' : ''} 
              `
        }
        ${
          isScrolling ?
            ` backdrop-blur-[20px]  bg-white/90`
          : `${
              !isTop &&
              `backdrop-blur-[20px]  border-b-[1px] border-gray-300 bg-white lg:bg-opacity-90 `
            }`
        }`}
          >
            <motion.div className='flex items-center justify-center w-full '>
              <motion.div
                layout
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className={`flex items-center justify-center flex-col  relative w-full '`}
              >
                {/* 最主要的内容 */}
                <motion.div
                  layout='position'
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className='flex items-center justify-between w-full max-w-[1200px] '
                >
                  <motion.button
                    layout
                    transition={{
                      duration: 1.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{ scale: 1.01, transition: { duration: 1 } }}
                    whileTap={{ scale: 0.99 }}
                    className='z-50 flex items-center justify-center h-full '
                  >
                    <a
                      href='/info'
                      className='inline-flex items-center gap-x-[10px] justify-center h-full welcomeanimation'
                    >
                      <motion.img
                        layout
                        className={`flex items-center required justify-center m-4    ${isTop ? 'w-16 h-16 lg:w-32 lg:h-32 rounded-lg' : 'w-[30px] h-[30px] md:w-20 md:h-20 lg:w-28 lg:h-28 rounded-[7px]'} shadow-lg`}
                        src='https://img.picgo.net/2024/12/06/avatar16e4aacd08d86884.jpg'
                        alt="Xianzhe's Page"
                      />

                      <div
                        className={`hidden  lg:flex flex-1 flex-col justify-between h-full `}
                      >
                        <motion.div
                          style={{ fontFamily: 'Hey August, sans-serif' }}
                          className={`flex flex-1 mb-2 text-nowrap text-left tracking-widest items-start justify-start  duration-1000 transition-all  ${isTop ? `${isTopTextColorWhite ? 'text-white' : ''} text-[17px]  md:text-[30px] lg:text-[35px] ` : 'text-[20px] lg:text-[25px]'}`}
                        >
                          {data.Avatar.Webname[lang]}
                        </motion.div>
                        <motion.div
                          href='/info'
                          style={{ animationDelay: '0.5s' }}
                          className={`flex text-nowrap  transition-all  duration-1000 text-left ${isTop ? `${isTopTextColorWhite ? 'text-white' : ''} text-[13px]` : 'text-[10px]'}`}
                        >
                          {data.Avatar.helloword[lang]}
                          <p
                            className={
                              windowWidth < 876 ? 'hidden' : (
                                'flex ml-[7px] gap-x-[10px]'
                              )
                            }
                          >
                            <span>|</span>
                            <span
                              className={
                                isWithinOneWeek ?
                                  isTop && isTopTextColorWhite ?
                                    'text-sky-200 font-[600]'
                                  : 'text-sky-700'
                                : ''
                              }
                            >
                              {` ${updateMessage} ${['Updates', '更新'][lang]} ${version} `}
                            </span>
                          </p>
                        </motion.div>
                      </div>
                    </a>
                  </motion.button>

                  <motion.div
                    className={`flex items-center  ${
                      windowWidth < 876 ? 'w-[50%]' : 'w-[70%]'
                    } gap-[30px] justify-end `}
                  >
                    <AnimatePresence>
                      {windowWidth > 876 && (
                        <motion.div
                          layout='position'
                          key='navbarItem'
                          transition={{ duration: 0.3 }}
                          exit={{
                            opacity: 0,
                            scale: 0,
                            x: -100,
                            transition: { duration: 1 },
                          }}
                          className={` ${
                            isTop ? 'gap-x-4' : 'gap-x-1'
                          } flex overflow-x-clip px-[10px] `}
                        >
                          {navbarItem.map((item, index) => (
                            <motion.div
                              layout='position'
                              onMouseEnter={() => setIsPaused(true)}
                              key={item.name}
                              initial={{ opacity: 0, y: 30 }}
                              animate={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                  duration: 1,
                                  delay: 0.15 * index,
                                },
                              }}
                              exit={{ opacity: 0, y: 30 }}
                              className='relative group'
                            >
                              <motion.a
                                href={item.href}
                                key={index}
                                onClick={BTN(item.button)}
                                onMouseEnter={() => {
                                  handleTabChange(index);
                                  setSelectedTab(item.name[0]);
                                }}
                                style={{
                                  animationDelay: `${index * 0.2}s`,
                                }}
                                whileTap={{ scale: 0.95 }}
                                type='button'
                                className={` rounded-[5px] items-center justify-center gap-[5px] font-medium text-center ${
                                  isTopTextColorWhite & isTop ?
                                    'text-white flex flex-col px-12 py-12 hover:bg-gray-900/20'
                                  : 'flex flex-col px-8 py-6'
                                } rounded-full lg:mx-3  transition-all duration-1000`}
                              >
                                <div className='flex items-center justify-center w-full '>
                                  <i
                                    className={`flex transition-all duration-1000 items-center ${
                                      isTopTextColorWhite & isTop ?
                                        'text-white text-[25px]'
                                      : 'text-gray-900 text-[23px]'
                                    }  fi ${item.icon}`}
                                  ></i>
                                </div>
                                <div
                                  className={` relative transition-all duration-1000 items-center ${
                                    isTopTextColorWhite & isTop ?
                                      'text-white text-[15px] flex'
                                    : 'text-gray-900 text-[15px]'
                                  } md:hidden lg:flex`}
                                >
                                  {item.name[lang]}
                                  <AnimatePresence>
                                    {hoverTab === index && (
                                      <Underline
                                        height={isTop ? 1 : 1.5}
                                        alwaysShow={true}
                                        color={
                                          isTopTextColorWhite && isTop ? 'white'
                                          : 'sky'
                                        }
                                        margintop={isTop ? 3 : 5}
                                      />
                                    )}
                                  </AnimatePresence>
                                </div>
                              </motion.a>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                    {/* 下拉菜单按钮 */}
                    {windowWidth < 1024 && (
                      <button
                        style={{
                          animationDelay: `${navbarItem.length * 0.07}s`,
                        }}
                        type='button'
                        className={`py-6 pl-6  welcomeanimation `}
                        onClick={(e) =>
                          e.preventDefault() &
                          setIsOpened(!isOpened) &
                          (isTop && setIsExpanded(!isExpanded))
                        }
                      >
                        <motion.svg
                          className='w-10 h-10'
                          width='18'
                          height='18'
                          viewBox='0 0 18 18'
                          style={{
                            color:
                              isTopTextColorWhite & isTop ?
                                'fill-white text-bold'
                              : 'fill-gray-700 ',
                          }}
                        >
                          <motion.polyline
                            fill={
                              isTopTextColorWhite & isTop ? 'white' : 'gray'
                            }
                            stroke={
                              isTopTextColorWhite & isTop ? 'white' : (
                                'currentColor'
                              )
                            }
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            points='2 12, 16 12'
                            animate={{
                              points:
                                !isOpened ?
                                  '2 12, 16 12; 2 9, 16 9; 3.5 15, 15 3.5'
                                : '3.5 15, 15 3.5; 2 9, 16 9; 2 12, 16 12',
                            }}
                          />
                          <motion.polyline
                            fill={
                              isTopTextColorWhite & isTop ? 'white' : 'gray'
                            }
                            stroke={
                              isTopTextColorWhite & isTop ? 'white' : (
                                'currentColor'
                              )
                            }
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            points='2 5, 16 5'
                            animate={{
                              points:
                                !isOpened ?
                                  '2 5, 16 5; 2 9, 16 9; 3.5 3.5, 15 15'
                                : '3.5 3.5, 15 15; 2 9, 16 9; 2 5, 16 5',
                            }}
                          />
                        </motion.svg>
                      </button>
                    )}
                  </motion.div>
                </motion.div>
                {/* menu button */}
                {windowWidth <= 786 && isOpened && (
                  <MenuButtonsSmall
                    data={navbarItem}
                    textColor={topTextColor}
                    setIsOpened={setIsOpened}
                    isTop={isTop}
                    lang={lang}
                  />
                )}
                <motion.div className='relative flex justify-center w-full'>
                  {/* 二级菜单 */}

                  {navbarItem.map(
                    (navItem, navIndex) =>
                      navItem.scondMenu &&
                      selectedTab === navItem.name[0] &&
                      navItem.name[0] !== 'Project' &&
                      navItem.name[0] !== 'Contact' && (
                        <AnimatePresence>
                          <motion.div
                            key={'isExpanded' + navIndex}
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 30, opacity: 0 }}
                            transition={{
                              duration: 1,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            layoutId='isExp'
                            className={`w-full flex my-[20px] mb-[50px] max-w-[1200px] px-[3%]  ${
                              !isExpanded && selectedTab !== navItem.name[1] ?
                                ' items-center justify-center'
                              : 'items-center justify-center'
                            }`}
                          >
                            <motion.div
                              className={`w-full justify-between flex items-center ${
                                isExpanded ? 'my-8' : ''
                              }
                           ${
                             isTop ?
                               `${
                                 isTopTextColorWhite ? 'bg-white/70' : (
                                   ' text-sky-950 bg-sky-200/30 border border-sky-950'
                                 )
                               }  backdrop-blur-md  mt-[50px] rounded-[28px]`
                             : ' divide-x border bg-sky-200/30 mt-[50px] divide-gray-900/0 rounded-full border-gray-400'
                           }`}
                            >
                              {navItem.scondMenu.map((item, index) => (
                                <motion.a
                                  layout
                                  target={item.blank && '_blank'}
                                  rel={item.blank && 'noopener noreferrer'}
                                  key={index}
                                  href={item.link}
                                  animate={{ width: '100%' }}
                                  whileHover={{ width: '120%' }}
                                  whileTap={{ width: '100%' }}
                                  style={{
                                    animationDelay: `${index * 0.1}s`,
                                    animationDuration: `${0.7}s`,
                                  }}
                                  transition={{
                                    duration: 1,
                                    ease: [0.22, 1, 0.36, 1],
                                  }}
                                  className={`flex w-full ${!isTop && `rounded-full`} justify-center welcomeanimation ${index === 0 && (isTop ? `rounded-l-[28px]` : `rounded-full`)} ${
                                    index === navItem.scondMenu.length - 1 &&
                                    (isTop ? `rounded-r-[28px]` : (
                                      `rounded-full`
                                    ))
                                  } opacity-80 hover:opacity-100 font-medium hover:shadow-2xl hover:bg-sky-900 hover:text-white focus:z-10 `}
                                >
                                  <motion.button
                                    layout
                                    style={{ borderRadius: 20 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    whileFocus={{ scale: 1 }}
                                    onClick={BTN(item.button)}
                                    className='w-full'
                                  >
                                    <div className='flex flex-col items-center justify-center px-2 py-[20px] my-3 text-center gap-y-2 '>
                                      {(isTop || item.detail) && (
                                        <i
                                          className={`flex fi justify-center ${
                                            isTop &&
                                            ' text-[17px] md:text-[20px] lg:text-[23px]'
                                          } ${item.icon}`}
                                        ></i>
                                      )}

                                      {item.name && (
                                        <div
                                          className={`gap-x-4 gap-y-2 flex h-full justify-center items-center w-full ${
                                            isTop &&
                                            'text-[17px] md:text-[20px] lg:text-[23px] gap-x-0'
                                          }`}
                                        >
                                          {!isTop &&
                                            window.innerWidth > 784 && (
                                              <i
                                                className={`flex fi justify-center  text-[14px] md:text-[15px] lg:text-[18px]  ${item.icon}`}
                                              ></i>
                                            )}

                                          <p className='flex items-center justify-center text-[14px] md:text-[15px] lg:text-[18px]'>
                                            {item.name[lang]}
                                          </p>

                                          {item.status && (
                                            <i
                                              className={` flex ${
                                                isTop && ' lg:mx-2'
                                              } justify-center items-center text-[15px] pb-[10px] ${item.status}`}
                                            ></i>
                                          )}
                                        </div>
                                      )}

                                      {item.detail && (
                                        <p className='flex items-center justify-center w-full text-base'>
                                          {item.detail[lang]}
                                        </p>
                                      )}
                                    </div>
                                  </motion.button>
                                </motion.a>
                              ))}
                            </motion.div>
                          </motion.div>
                        </AnimatePresence>
                      ),
                  )}

                  {selectedTab === 'Contact' && (
                    <motion.div
                      layoutId='isExp'
                      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                      className={`${isTop && topTextColor ? 'bg-white/30 ' : 'bg-sky-200/30 border-gray-400 border hover:border-0'} mt-[50px] w-full flex my-[20px] mb-[50px] max-w-[1200px] px-[3%]  hover:bg-transparent rounded-[28px]`}
                    >
                      <ContactDocker
                        themeColor={isTop && topTextColor ? 'white' : ' sky'}
                      />
                    </motion.div>
                  )}

                  {selectedTab === 'Project' && (
                    <motion.div
                      layoutId='isExp'
                      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                      className={` overflow-visible  w-full flex mt-[20px]   rounded-[28px]`}
                    >
                      <Project />
                    </motion.div>
                  )}
                </motion.div>
                {extra}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.nav>
      </motion.div>

      {/* toTop buttom */}

      <motion.button
        key='toTop'
        transition={{ duration: 1.2 }}
        whileTap={{ scale: 0.9, opacity: 1 }}
        whileHover={{ scale: 1.1, opacity: 1 }}
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }}
        className={`fixed bottom-10 md:bottom-14 lg:bottom-48 transition-all duration-1000 ${isTop || isScrolling || Components.NavBar !== 'visible' ? '-right-[80px]' : 'right-10 md:right-14 lg:right-48'} z-50  `}
      >
        <div className='px-4 py-2 text-white rounded-full lg:scale-150'>
          <div className='modal-trigger-visblecontainer '>
            <motion.span
              initial={{ rotate: 90 }}
              whileTap={{ scale: 0.9, opacity: 0.8, rotate: 270 }}
              className='bg-white opacity-70 hover:opacity-100 '
              style={buttonStyles}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='8 8 20 20'
                style={iconStyles}
                className=' w-[18px] h-[18px] text-white rotate-180'
              >
                <path d='M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z'></path>
              </svg>
            </motion.span>
          </div>
        </div>
      </motion.button>

      <div className='relative z-50 '>
        <div
          id='toast-root'
          className='fixed flex flex-col top-40 right-20 '
        ></div>
      </div>
      <AnimatePresence>
        {/* 人物对话弹窗 */}
        {selectedTab != null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 left-0 z-40  bottom-0  right-0  w-full h-full  backdrop-blur-[30px] ${isTopTextColorWhite && isTop ? 'bg-gray-900/50' : 'bg-white/70'} `}
          >
            <motion.div
              style={{
                backgroundImage: `url(${windowWidth > 1024 && data.dialog})`,
                backgroundSize:
                  selectedTab === 'Project' || selectedTab === 'Contact' ?
                    `15% auto`
                  : `25% auto`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left bottom',
                filter: 'drop-shadow(0px 20px 26px rgba(0, 0, 0, 0))',
              }}
              className='hidden w-full h-full transition-all duration-500 lg:flex'
            ></motion.div>

            {navbarItem.map(
              (item, index) =>
                selectedTab === item.name[0] && (
                  <motion.div
                    key={item.name[0] + index + 'introduction'}
                    className={`absolute hidden  lg:inline-flex  ${selectedTab === 'Project' || selectedTab === 'Contact' ? `left-[15%] bottom-[3vw] scale-[0.6] max-w-[420px]` : `left-[25%] bottom-[10vw] max-w-[420px] `}  welcomeanimation transition-all bg-sky-900   rounded-r-[35px] rounded-tl-[35px] overflow-hidden  `}
                  >
                    <div className='p-[28px] lg:p-[40px] flex rounded-e-[28px] rounded-es-[28px] flex-col w-full  leading-1.5    darrk:bg-gray-700/20'>
                      <p className='text-[20px] lg:text-[25px]  darrk:text-gray-900 text-white  '>
                        {item.des[lang]}
                      </p>
                      <span className='text-center text-[30px] darrk:text-gray-900 text-white '>
                        {item.expression}{' '}
                      </span>
                      <div className='group relative my-2.5 hidden'>
                        <div className='absolute flex items-center justify-center w-full transition-opacity duration-300 rounded-lg opacity-0 bg-gray-900/50 group-hover:opacity-100'>
                          <button
                            data-tooltip-target='download-image'
                            className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 focus:ring-4 focus:outline-none darrk:text-white focus:ring-gray-50'
                          >
                            <svg
                              className='w-5 h-5 text-white'
                              aria-hidden='true'
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 16 18'
                            >
                              <path
                                stroke='currentColor'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3'
                              />
                            </svg>
                          </button>
                        </div>
                        <img
                          loading='lazy'
                          src='/docs/images/blog/image-1.jpg'
                          className='rounded-lg'
                        />
                      </div>
                    </div>
                  </motion.div>
                ),
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatePresence>
  );

  return navbar;
}

export default Navbar;
