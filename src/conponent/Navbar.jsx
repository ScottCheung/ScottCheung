import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useTime, AnimatePresence } from "framer-motion";
import data from '../Datebase.json';
import { hideRow, bgPic, useLanguage, SelectText,scrollToHash } from '../help/helpFunction';
// import { Trans } from "@lingui/macro";


const navbarItem = data.Navbar.navbarItem;
const navLocation = data.Navbar.Location;




function Navbar({ topTextColor }) {
  const [lang, setLang] = useState(parseInt(localStorage.getItem('lang')) || 0);
  const isTopTextColorWhite = topTextColor;
  const scrollTo = scrollToHash();
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(true);
  const [isTop, setIsTop] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isOpened, setIsOpened] = useState(false);
  const currentPage = window.location.pathname;
  const isHomeOrRoot = (currentPage === ('/') || currentPage === ('/home'))
  const [currentTime, setCurrentTime] = useState(new Date());



  
  const handleLangToggle = () => {

    const newLang = lang === 0 ? 1 : 0;
    setLang(newLang);
    localStorage.setItem('lang', newLang);
    
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    function handleScroll1() {
      if (window.scrollY < 1) {
        setIsExpanded(true);
      } else {
        setIsExpanded(false);
      }
    }
    function handleScroll2() {
      if (window.scrollY < 1) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    }
    function handleResize() {
      setWindowWidth(window.innerWidth);
    };

    let scrollTimer;

    function handleScrollStatus(event) {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        if (Math.abs(event.deltaY) > 100) {
          setIsScrolling(true);
        } else {
          setIsScrolling(false);
        }
      }, []);
    }


    window.addEventListener('scroll', handleScroll1);
    window.addEventListener('scroll', handleScroll2);
    window.addEventListener('wheel', handleScrollStatus);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll1);
      window.removeEventListener('scroll', handleScroll2);
      window.removeEventListener('wheel', handleScrollStatus);
      window.removeEventListener('resize', handleResize);
      clearInterval(intervalId);
    };
  }, []);

  const navbar = (
    <AnimatePresence> 
    <motion.div 
    layout
    className='smoothchange z-50 top-0 sticky '>
      <nav
        className={`transition-all fixed w-full flex flex-col`}
      >

        <motion.div
          initial={{ opacity: 0,y:60 }}
          animate={{ opacity: 1,y:0 }}
          layout
          transition={{ transition: { duration: 1 } }}
          className={`flex flex-col w-full 
        ${windowWidth < 768
              ? `p-3  ${isTop ? `h-auto` : `h-auto`}`
              : `${isTop ? `${isHomeOrRoot ? 'px-[5%] pt-[12vh] ' : 'pt-3'} h-auto` : ''}  md:px-10`
            }
        ${isScrolling
              ? `${isTop ? '' : 'backdrop-blur-lg bg-white/0 shadow-xl'}`
              : `${isTop ? '' : 'backdrop-blur-lg bg-white/95 shadow-xl'}`
            }`}>
          <div className='w-full flex justify-center items-center'>
            <div className='container lg:px-[10%]'>
              <div className='smoothchange w-full flex justify-between place-items-center'>
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.9 }}
                      layout
                      data-popover-target="popover-user-profile" type="button"
                      className='flex'
                    >
                      <a href='/info' style={{ animationDelay: `${0.5}s` }}  classname="animate__animated animate__fadeInRight animate_slow"  >
                        <div className="flex item-center">
                          <div className='flex justify-center items-center'> 
                            <img  className={`smoothchange animate__animated animate__zoomIn  ${isTop ? 'w-20' : 'w-16'}  rounded-md shadow-lg`}
                              src={"https://3o.hk/images/2024/01/14/avatar.jpg" ? "https://3o.hk/images/2024/01/14/avatar.jpg" : "/Graphs/home/avatar.jpg"}
                              alt="Xianzhe's Page" width="100" height="100"></img>
                          </div>
                          <div className="flex-col flex  ml-3">
                            <div style={{ animationDelay: `${0.3}s` }} className={`smoothchange animate__animated animate__zoomIn hover:animate__pulse  font-semibold ${isTop ? `${isTopTextColorWhite ? "text-white" : ""} mb-[10px] text-[15px]  md:mb-[8px] md:text-[17px] lg:mb-0 lg:text-[25px]` : 'text-xl py-2'}`}>{data.Navbar.Avatar.Webname[lang]}</div>
                            <div href='/info' style={{ animationDelay: `${0.5}s` }} className={`smoothchange animate__animated animate__zoomIn hover:animate__pulse text-left ${isTop ? `${isTopTextColorWhite ? "text-white" : ""}  text-lg` : 'text-base'}`}> {data.Navbar.Avatar.helloword[lang]} | {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                          </div>
                        </div>
                      </a>
                    </motion.button>
     
                    <div data-popover id="popover-user-profile" role="tooltip" class="m-3 rounded-[20px] absolute z-10 invisible flex w-[300px] text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 shadow-sm opacity-0 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600">
                      <div class="p-6 flex space-x-4">
                        <div class="flex items-center justify-between">
                          <img class="w-24 h-24 rounded-full" src={"https://3o.hk/images/2024/01/14/avatar.jpg" ? "https://3o.hk/images/2024/01/14/avatar.jpg" : "/Graphs/home/avatar.jpg"} />
                          <div>
                          </div>
                        </div>
                        <div>
                          <p class="text-base  font-semibold leading-none text-gray-900 dark:text-white">
                            <div className='text-3xl'>Click to know me better</div>
                          </p>
                          <p class="mb-3 text-sm font-normal">
                            <a href="#" class="hover:underline text-2xl">@Scottt1110</a>
                          </p>
                        </div>
                      </div>
                      <div data-popper-arrow></div>
                    </div>




                <div className='flex items-center max-w-[60%] overflow-show'>

                  {windowWidth > 876 &&
                    <motion.div
                      layout
                      id="main-navigation"
                      style={{
                        display: '-webkit-box', WebkitBoxOrient: 'horizontal', overflow: 'hidden',
                        WebkitScrollbarButton: {
                          display: 'none',
                        },
                      }}
                      class="place-items-center items-center flex justify-center  w-full text-center my-3  ">
                      {navbarItem.map((item, index) => (

                        <div>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            layout
                          >
                            <a
                              href={item.href}
                              key={index}
                              style={{ animationDelay: `${index * 0.2}s` }}
                              data-popover-target={`nav-des-${index}`}
                              type="button"
                              className={`rounded-[5px] smoothchange items-center  ${isTop ? `${index === (navbarItem.length - 1) ? `ml-4` : `mx-4`}` : ` ${index === (navbarItem.length - 1) ? `ml-1` : `mx-1`}`} animate__animated animate__fadeInUp relative inline-flex items-center  px-6 py-3 text-[20px] font-medium text-center ${isTopTextColorWhite & isTop ? "text-white" : ""} rounded-lg hover:bg-gray-900/20  `}>
                              <div class=" w-11 h-11 mr-3 items-center">
                                <div class="flex-shrink-0">
                                  <i className={`${isTopTextColorWhite & isTop ? 'text-white text-[20px]' : 'text-gray-900 text-[17px]'}  fi ${item.icon}`}></i></div>
                              </div>
                              <div className={`${isTopTextColorWhite & isTop ? 'text-white text-[20px]' : 'text-gray-900 text-[15px]'} md:hidden lg:flex `}>{item.name[lang]}</div>
                            </a>

                          </motion.button>

                          <div
                          data-popover
                          id={`nav-des-${index}`} 
                          role="tooltip" 
                          class="absolute z-10 invisible inline-flex w-64 text-gray-500 transition-opacity duration-300 bg-white rounded-[14px] shadow-2xl opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
                            <div class="px-6 py-4">
                              <p className='text-[13px] text-left font-mono'>{item.des[lang]}</p>
                              <span className='text-center text-[16px]'>{item.expression}</span>
                            </div>
                            <div data-popper-arrow></div>
                          </div>
                        </div>



                      ))}
                    </motion.div>}
                    <div class="ml-[20px] flex items-center">
                    {<motion.button
                      whileHover={isTop ? { scale: 1.2 } : { scale: 1.2 }}
                      animate={isTop ? { scale: 1 } : { scale: 1 }}
                      whileTap={{ scale: 1.1 }}
                      type='button'
                      layout
                      data-popover-target="lang"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLangToggle();
                          // navigate("/");
                          window.location.reload();
                      }}
                      >
                      <span class={`${windowWidth < 768 ? '' : ''} ExpandButton`}>
                        <i 
                        style={{ animationDelay: `${4* 0.2}s` }}
                        className={`animate__animated animate__fadeInUp mt-3 fi fi-rr-globe ${isTopTextColorWhite & isTop ? 'text-white text-[20px]' : 'text-gray-900 text-[17px]'} `} />
                      </span>
                    </motion.button>}
                    <div
                          data-popover
                          id="lang"
                          role="tooltip" 
                          class="absolute z-10 invisible justify-center flex w-auto text-gray-500 text-center transition-opacity duration-300 bg-white rounded-[14px] shadow-2xl opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
                            <div class="px-6 py-4 flex items-center flex-col">
                              <span className='text-center text-[15px] font-semibold'>{(lang==0)&&"点击切换中文"}{(lang==1)&&"Switch to English"}</span>
                              <span className='text-[14px] text-center font-semibold'>{(lang==1)&&"点击切换英文"}{(lang==0)&&"Switch to Chinese"}</span>
                            </div>
                            <div data-popper-arrow></div>
                          </div>
    
                    {isHomeOrRoot &&
                      <motion.button
                        initial={{ rotate: 180 }}
                        whileHover={{ scale: 1.2 }}
                        animate={isExpanded ? { rotate: 0 } : { rotate: 180 }}
                        whileTap={{ scale: 0.8 }}
                        type='button'
                        layout
                        onClick={(e) =>
                          e.preventDefault() & setIsExpanded(!isExpanded) & (isTop && setIsOpened(!isOpened))}>
                        <span class={`${windowWidth < 768 ? 'mx-5' : 'hover:bg-gray-900/10'} ExpandButton`}>
                          <i 
                          style={{ animationDelay: `${5* 0.2}s` }}
                          className={`animate__animated animate__fadeInUp smoothchange mt-1 ${windowWidth < 768 ? 'text-[20px] ' : 'text-3xl p-5'} ${isTop ? 'text-white text-bold' : ''} fi fi-br-angle-up`} />
                        </span>
                      </motion.button>}
                    {windowWidth < 1024 && <button
                      style={{ animationDelay: `${0.4}s` }}
                      type="button" class={`mr-10px `}
                      onClick={(e) => e.preventDefault() & setIsOpened(!isOpened) & (isTop && setIsExpanded(!isExpanded))}>
                        <span class={`${windowWidth < 768 ? '' : ''} ExpandButton`}>
                        <i 
                        style={{ animationDelay: `${4* 0.2}s` }}
                        className={`animate__animated animate__fadeInUp mt-3 fi ${!isOpened ? 'fi fi-rr-menu-burger ' : 'fi fi-rr-circle-xmark'} ${isTopTextColorWhite & isTop ? 'text-white text-[20px]' : 'text-gray-900 text-[17px]'} `} />
                      </span>

                    </button>}
                  </div>


                </div>

              </div>
              
              {windowWidth <= 1024 && isOpened && <div class={`w-full`}>
                <div
                  className="z-20  w-full divide-y divide-gray-100 rounded-lg shadow "
                >
                </div>
                <div class={`rounded-2xl ${isTop ? 'backdrop-blur-md ' : 'divide-y divide-gray-200'}`}>
                  {navbarItem.map((item, index) => (
                    <motion.div
                      layout
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <a style={{ animationDelay: `${index * 0.2}s` }} key={index} href={item.href} class={`py-5 animate__animated animate__zoomIn flex place-items-center items-center px-4 ${isTop ? 'hover:bg-gray-900/50 rounded-2xl' : 'hover:bg-gray-300/50 '}`}>
                        <div class="flex-shrink-0">
                          <div class="rounded-full w-24 h-24 items-center flex justify-center">
                            <i className={`${isTopTextColorWhite & isTop ? 'text-white' : 'text-gray-900'} text-5xl fi ${item.icon}`}></i></div>
                        </div>
                        <div class="w-full ps-2">
                          <div class={`${isTopTextColorWhite & isTop ? 'text-white' : 'text-gray-900'} font-bold text-4xl`}>{item.name}</div>
                          <div class={`${isTopTextColorWhite & isTop ? 'text-white' : 'text-gray-900'} text-xs text-blue-500 `}>{item.des}</div>
                        </div>
                      </a></motion.div>))}
                </div>
              </div>
              }

              {/* 二级NavbarLocation */}       
              {isHomeOrRoot && (isExpanded || isTop) && 
              (<motion.div 
                layout
                transition={{ type: "spring", duration: 1 }}
                initial={{opacity: 0,scale:0}}
                animate={{opacity:1,scale:1}}
                exit={{ opacity: 0,scale:0 }}

                className={`w-full ${!isExpanded
                ? 'hidden items-center justify-center'
                : ` items-center justify-center  ${isTop ? 'hidden' : ''}  `
                }`}>
                <motion.div
                  class={`w-full animate__animated   justify-between flex rounded-full items-center ${isExpanded ? ('my-8') : (``)}  ${isTop ? ('backdrop-blur-md bg-white/50 shadow-xl animate__slideInUp') : (`border divide-x  border-gray-900  divide-gray-900 animate__zoomIn`)}`} >
                  {navLocation.map((item, index) => (

                    <a key={index} href={item.id} style={{ animationDelay: `${index * 0.17}s` }} className={`flex  w-full h-full  justify-center animate__zoomIn ${isTop ? 'text-black  ' : 'text-gray-900  '} ${index === 0 ? 'rounded-s-full' : ''} ${index === (navLocation.length - 1) ? 'rounded-e-full' : ''} animate__animated  opacity-80 hover:opacity-100 font-medium hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-sky-500 focus:bg-sky-900 focus:text-white :border-white `}>
                      <motion.div
                        layout
                        style={{ borderRadius: 20 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        whileFocus={{ scale: 1 }}
                        className='w-full'
                      >
                        <div className='icon  text-center  content-center  py-2 my-3'>
                          {isTop ? (<i className={` flex fi justify-center  py-1 text-[15px]  ${item.logo}`}></i>) : (<></>)}
                          <div className='w-full h-full flex text-center justify-center lg:text-full text-[15px]'>{!isTop ? (windowWidth > 784 && <i className={` flex fi justify-center mt-1 text-[10px] sm:text-[10px] md:text-[15px] lg:text-[18px] mr-2 ${item.logo}`}></i>) : (<></>)} {item.label[lang]}</div>
                        </div>
                      </motion.div>
                    </a>

                  ))}
                </motion.div>
              </motion.div>)}
            </div>
          </div>
        </motion.div>
      </nav>
    </motion.div>
    </AnimatePresence>
  );

  return (
    <motion.div
    className='smoothchange'
    layout
    >
      {navbar}
    </motion.div>
  );
}

export default Navbar;
