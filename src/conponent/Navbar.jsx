import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import data from '../Datebase.json';
const navbarItem = data.Navbar.navbarItem;
const navLocation = data.Navbar.Location;


function Navbar( {topTextColor} ) {
  const isTopTextColorWhite = topTextColor; //True of false
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(true);
  const [isTop, setIsTop] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isOpened, setIsOpened] = useState(false);
  const currentPage = window.location.pathname;
  const isHomeOrRoot = (currentPage === ('/') || currentPage === ('/home'))

  useEffect(() => {
    function handleScroll1() {
      if (window.scrollY < 1) {
        setIsExpanded(true);
      } else {
        setIsExpanded(false);
      }
    }
    function handleScroll2() {
      if (window.scrollY < 5) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    }
    function handleResize() {
      setWindowWidth(window.innerWidth);
    };

    function handleScrollStatus(event) {
      if (Math.abs(event.deltaY) > 30) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
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
    };
  }, []);

  const navbar = (
    <div className='smoothchange z-50 top-0 sticky '>
      <motion.nav
        className={`transition-all fixed w-full flex flex-col`}
        >

        <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{type:"spring",transition:{duration:.2}}}
        
        className={` justify-between flex flex-col w-full 
        ${windowWidth < 768
            ? `p-3  ${isTop ? `h-auto`:`h-auto`}`
            : `${isTop ? `${isHomeOrRoot ? 'px-[5%] pt-[6%] ' : 'pt-3'} h-auto` : ''}  md:px-10`
          }
        ${isScrolling
            ? `${isTop ? '' : 'backdrop-blur-md bg-white/50 shadow-xl'}`
            : `${isTop ? '' : 'backdrop-blur-md bg-white/95 shadow-xl'}`
          }`}>
          <div className='container smoothchange'>
            <div className='smoothchange w-full flex justify-between place-items-center'>
              <div classname="smoothchange flex justify-between place-items-center ">
                <div classname={`smoothchange flex hover:bg-gray-900/10`}>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.9 }}
                  layout
                  >
                  <Link to='/' classname="animate__animated animate__zoomIn " style={{ animationDelay: `${0.2}s` }} >
                    <div className="flex item-center">
                        <img style={{ animationDelay: `${0.2}s` }} className={`smoothchange animate__animated animate__zoomIn  ${isTop ? 'w-20' : 'w-16'}  rounded-md shadow-lg`}
                          src="/Graphs/home/avatar.jpg"
                          alt="Xianzhe's Page" width="100" height="100"></img>
                      <div className="flex-inline mt-2 ml-3">
                        <div style={{ animationDelay: `${0.3}s` }} className={`smoothchange animate__animated animate__zoomIn hover:animate__pulse  font-semibold ${isTop? `${isTopTextColorWhite? "text-white":""}  text-3xl` : 'text-xl'}`}>Xianzhe's Page</div>
                        <div href='/' style={{ animationDelay: `${0.4}s` }} className={`smoothchange animate__animated animate__zoomIn hover:animate__pulse mt-2 ${isTop? `${isTopTextColorWhite? "text-white":""}  text-lg` : 'text-base'}`}>Welcome to my Page</div>
                      </div>
                    </div>
                  </Link>
                  </motion.div>
                </div>
              </div>
              <div className='flex'>
                <div class="navbar-toggle-wrapper">
                  {isHomeOrRoot && 
                  <motion.button
                  initial={{rotate:180}}
                  whileHover={{ scale: 1.01 }}
                  animate={isExpanded? {rotate:0}:{rotate:180}}
                  whileTap={{ scale: 0.8}}
                  type='button'
                  layout
                  onClick={(e) =>
                    e.preventDefault() & setIsExpanded(!isExpanded)}>
                    <span class={`${windowWidth < 768? 'mx-5':'hover:bg-gray-900/10'} ExpandButton`}>
                    <i className={`smoothchange mt-1 ${windowWidth < 768? 'text-[20px] ':'text-3xl p-5'} ${isTop ? 'text-white text-bold' : ''} fi fi-br-angle-up`} />
                    </span>
                    </motion.button>}

                  
        
                  {windowWidth < 768 && <button
                    style={{ animationDelay: `${0.4}s` }}
                    type="button" class={`${windowWidth < 768? 'ml-5':'hover:bg-gray-900/10'} items-center place-items-center flex justify-center  animate__animated animate__rotateIn w-24 h-24 m-2 rounded-full  bg-gray-200  text-center  shadow-none `}
                    onClick={(e) =>
                      e.preventDefault() & setIsOpened(!isOpened)}
                  >
                    <i className={`smoothchange  mt-1 ${windowWidth < 768? 'text-[20px] ':'text-3xl p-5'} ${isTopTextColorWhite&isTop ? 'text-white text-bold' : ''} ${!isOpened ? 'fi fi-rr-menu-burger ' : 'fi fi-rr-circle-xmark'}`} />
                  </button>}
                  

                </div>
                {windowWidth > 768 && <motion.div 
                layout
                id="main-navigation" class="place-items-center items-center flex justify-center  w-full text-center my-3">
                  {navbarItem.map((item, index) => (

                    <div>
                      <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}>
                                              <a
                          href={item.href}
                          key={index}
                          style={{ animationDelay: `${index * 0.2}s` }}
                          data-popover-target={`nav-des-${index}`}
                          type="button"
                          className={`smoothchange items-center  ${isTop ? `${index === (navbarItem.length - 1)? `ml-10`:`mx-10`}` : ` ${index === (navbarItem.length - 1)? `ml-3`:`mx-3`}`} animate__animated animate__fadeInUp relative inline-flex items-center  px-6 py-3 text-[20px] font-medium text-center ${isTopTextColorWhite&isTop? "text-white":""} rounded-lg hover:bg-gray-900/20  `}>
                          <div class="rounded-full w-11 h-11 mr-3 items-center">
                            <i className={`${isTopTextColorWhite&isTop ? 'text-white text-[20px]' : 'text-gray-900 text-[17px]'}  fi ${item.icon}`}></i></div>
                          <div className={`${isTopTextColorWhite&isTop ? 'text-white text-[20px]' : 'text-gray-900 text-[15px]'}`}>{item.name}</div>
                        </a>

                    </motion.button>

                        <div data-popover id={`nav-des-${index}`}  role="tooltip" class="absolute z-10 invisible  inline-flex w-64 text-gray-500 transition-opacity duration-300 bg-white rounded-[14px] shadow-2xl opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
                            <div class="px-6 py-4">
                                <p className='text-[13px] text-left font-mono'>{item.des}</p>
                                <span className='text-center text-[16px]'>{item.expression}</span>
                            </div>
                            <div data-popper-arrow></div>
                        </div>
                        </div>
                    
                    

                  ))}
                </motion.div>}


              </div>

            </div>
            {windowWidth < 768 && isOpened && <div class={`w-full`}>
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
                  <a style={{ animationDelay: `${index * 0.2}s` }} key={index} href={item.name} class={`py-5 animate__animated animate__zoomIn flex place-items-center items-center px-4 ${isTop ? 'hover:bg-gray-900/50 rounded-2xl' : 'hover:bg-gray-300/50 '}`}>
                    <div class="flex-shrink-0">
                      <div class="rounded-full w-24 h-24 items-center flex justify-center">
                        <i className={`${isTopTextColorWhite&isTop ? 'text-white' : 'text-gray-900'} text-5xl fi ${item.icon}`}></i></div>
                    </div>
                    <div class="w-full ps-2">
                      <div class={`${isTopTextColorWhite&isTop ? 'text-white' : 'text-gray-900'} font-bold text-4xl`}>{item.name}</div>
                      <div class={`${isTopTextColorWhite&isTop ? 'text-white' : 'text-gray-900'} text-xs text-blue-500 `}>{item.des}</div>
                    </div>
                  </a></motion.div>))}
              </div>
            </div>
            }
            {isHomeOrRoot && (isExpanded || isTop) && (<div className={`w-full ${!isExpanded
              ? 'hidden items-center justify-center'
              : ` items-center justify-center  ${isTop ? 'pt-[65vh] ' : ''}  `
              }`}>
              <motion.div 
              layout

              transition={{type:"spring",duration:0.3}}
              class={`w-full animate__animated   justify-between flex rounded-full items-center ${isExpanded ? ('my-8') : (``)}  ${isTop ? ('backdrop-blur-md bg-white/50 shadow-xl animate__slideInUp animate__fast') : (`border divide-x  border-gray-900  divide-gray-900 animate__zoomIn`)}`} >
                {navLocation.map((item, index) => (
                  
                  <a key={index} href={item.id} style={{ animationDelay: `${index * 0.12}s` }} className={`flex  w-full h-full  justify-center  ${isTop ? 'text-black ' : 'text-gray-900'} animate__zoomIn ${index === 0 ? 'rounded-s-full' : ''} ${index === (navLocation.length - 1) ? 'rounded-e-full' : ''} animate__animated  opacity-80 hover:opacity-100 font-medium hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-sky-500 focus:bg-sky-900 focus:text-white :border-white `}>
                    <motion.div 
                    layout 
                    style={{ borderRadius: 20 }}
                    whileHover={{ scale: 1.05}}
                    whileTap={{ scale: 0.95 }}
                    whileFocus={{ scale: 1 }}
                    className='w-full'
                  >
                    <div className='icon  text-center  content-center  py-2 my-3'>
                      {isTop ? (<i className={` flex fi justify-center  py-1 text-[12px] sm:text-[13px] md:text-[15px] lg:text-[20px] ${item.logo}`}></i>) : (<></>)}
                      <div className='w-full h-full flex text-center justify-center lg:text-full text-[7px] sm:text-[7px] md:text-[10px] lg:text-[18px]'>{!isTop ? (windowWidth > 784 && <i className={` flex fi justify-center mt-1 text-[10px] sm:text-[10px] md:text-[15px] lg:text-[18px] mr-2 ${item.logo}`}></i>) : (<></>)} {item.label}</div>
                    </div>
                    </motion.div>
                  </a>
                  
                ))}
              </motion.div>
            </div>)}


          </div>
        </motion.div>
      </motion.nav>
    </div>
  );

  return (
    <div>
      {navbar}
    </div>
  );
}

export default Navbar;
