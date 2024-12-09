/** @format */

import React, { useState, useEffect, useRef } from 'react';
import Database from '../data/Database.json';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  easeInOut,
} from 'framer-motion';
import { hideRow, bgPic, useLanguage, SelectText } from '../help/helpFunction';
import More from './More';
import { useAppContext } from '../help/ContextManager';
import WhyMeCard from '../conponent/WhyMeCard';
import ScrollableContainer from './ScrollableContainer';

const Welcomevisblecontainer =
  Database.Animation.Variant.Welcomevisblecontainer;
const StagerFadeInUp = Database.Animation.Transition.StagerFadeInUp;
const WelcomeItem = Database.Animation.Variant.WelcomeItem;

function WhyMe({ hideTittle }) {
  const { Components, setComponents, whymeCard, setWhymeCard } =
    useAppContext();
  const data = Database.PersonalInfo.Education;
  const lang = useLanguage();
  const keyfeature = Database.PersonalInfo.WhyMe[lang];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollbarWidth, setScrollbarWidth] = useState(0);
  useEffect(() => {
    const div = document.createElement('div');
    div.style.visibility = 'hidden';
    div.style.overflow = 'scroll';
    document.body.appendChild(div);
    const scrollbarWidth = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);
    setScrollbarWidth(scrollbarWidth);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1080px)');
    const handleMediaQueryChange = (e) => setIsMobile(e.matches);
    handleMediaQueryChange(mediaQuery);
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () =>
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const adjustPaddingForScrollbar = () => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    return scrollbarWidth;
  };

  const BanScroll = () => {
    const scrollbarWidth = adjustPaddingForScrollbar(); // 获取滚动条宽度
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`; // 应用动态计算的滚动条宽度
    // document.getElementById('navbar').style.marginRight = `${scrollbarWidth}px`; // 应用动态计算的滚动条宽度
    // document.getElementById('navbar').style.opacity = 0;
  };

  const UnBanScroll = () => {
    document.body.style.overflow = 'auto';
    document.body.style.paddingRight = '0px'; // 重置paddingRight
    // document.getElementById('navbar').style.marginRight = '0px'; // 重置paddingRight
    // document.getElementById('navbar').style.opacity = 1;
  };

  const openCard = (feature) => {
    setWhymeCard(feature);
    BanScroll();
    setComponents((prevComponents) => ({
      ...prevComponents,
      NavBar: 'hide',
      whymeCard: 'visible',
    }));
  };

  const closeCard = () => {
    setComponents((prevComponents) => ({
      ...prevComponents,
      NavBar: 'visible',
      whymeCard: 'hide',
    }));
    setWhymeCard(null);
    UnBanScroll();
  };
  const ref1 = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref1,
    offset: ['-300vh', '-15vh'],
  });

  const viewwidth = window.innerWidth - scrollbarWidth;
  const width = useTransform(
    scrollYProgress,
    [0, 1],
    [`${viewwidth * -1}px`, `${viewwidth}px`],
  );
  // const width = useTransform(
  //   scrollYProgress,
  //   [0, 0.65, 1],
  //   ["-100vw", "-100vw", "0vw"],
  // );

  const WhyMe = (
    <motion.div
      ref={ref1}
      className={`lg:-mt-[50vh] pb-[10vh] w-[${viewwidth}px]`}
    >
      <motion.div
        style={{
          backgroundImage: `url(${data.pic})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          width: isMobile || hideTittle ? `${viewwidth}px` : viewwidth,
        }}
      >
        {/* Item 容器 */}

        <ScrollableContainer
          headerStyle={isMobile ? `${viewwidth}px` : width}
          headerPY='py-[10px]'
          id='WhyMe'
          gap={20}
          header={{
            cont: lang == 0 ? 'Why me?' : '优势',
            icon: 'fi-rr-lightbulb-on',
          }}
        >
          <AnimatePresence mode='wait'>
            {keyfeature.map((feature, index) => (
              <motion.div
                onClick={() => {
                  if (windowWidth > 1024 && hideTittle == null) {
                    openCard(feature);
                  }
                }}
                key={index + feature.advantage}
                className='z-40 col-span-6'
              >
                <motion.div
                  layout
                  layoutId={feature.advantage}
                  transition={{
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <motion.div className=''>
                    <motion.div
                      style={{
                        ...(!hideTittle && windowWidth > 1024 ?
                          bgPic(feature.pic[0], '100% auto', 'center bottom')
                        : {}),
                      }}
                      className={` ${hideTittle ? 'bg-gray-50' : 'bg-white/80'}  hover:scale-[1.01] transition-all duration-300 p-[14px] lg:p-[35px] rounded-[14px] lg:rounded-[28px] relative flex-shrink-0 w-auto h-auto ${hideTittle ? 'lg:w-[250px]' : 'lg:w-[350px] '}  md:h-auto `}
                    >
                      <motion.div>
                        <img
                          src={feature.pic[1]}
                          alt=''
                          className='h-0 opacity-0'
                        />
                        <motion.div
                          layoutId={feature.advantage + 'icon'}
                          transition={{
                            duration: 0.9,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className='flex items-center justify-start transform-gpuu'
                        >
                          <i
                            style={{
                              animationDelay: `${index * 0.2}s`,
                            }}
                            className={`${
                              feature.icon
                            } fi animate__animated  animate__zoomIn from-[-20%] to-[120%] ${hideTittle ? 'text-[20px] lg:text-[30px]' : 'text-[25px] lg:text-[30px] xl:text-[35px]'}  ${
                              feature.color1 + ' ' + feature.color2
                            } flex items-center lg:pb-[5px] xl:pb-[10px] bg-clip-text text-transparent bg-gradient-to-br`}
                          ></i>
                        </motion.div>
                        <div className='flex justify-start pb-6 sm:pb-3'>
                          <motion.div
                            layoutId={feature.advantage + 'title'}
                            transition={{
                              duration: 0.9,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            style={{
                              animationDelay: `${index * 0.2}s`,
                            }}
                            className={`animate__animated   animate__zoomIn  font-[700] ${hideTittle ? 'text-[15px] md:text-[17px] lg:text-[20px]' : 'text-[12px] md:text-[17px] lg:text-[25px]'}   ${
                              feature.color1 + ' ' + feature.color2
                            } flex-shrink-0 bg-clip-text text-transparent bg-gradient-to-br`}
                          >
                            {feature.advantage}
                          </motion.div>
                        </div>
                      </motion.div>

                      <div
                        className={`${
                          hideTittle || windowWidth < 1024 ? 'hidden' : ''
                        } copy-visblecontainer md:h-[480px] h-[200px] overflow-hidden`}
                      >
                        <div
                          style={{
                            ...hideRow(3),
                            animationDelay: `${index * 0.3}s`,
                          }}
                          className={`text-full  my-7 animate__animated  animate__fadeInUp text-gray-500  text-[19px]`}
                        >
                          {feature.description}
                        </div>
                        <More
                          color={`  ${
                            feature.color1 + ' ' + feature.color2
                          } bg-gradient-to-br text-transparent bg-clip-text `}
                        />
                      </div>
                      {(windowWidth < 1024 || hideTittle) && (
                        <a
                          href={feature.href}
                          className='absolute top-0 bottom-0 left-0 right-0 w-full h-full'
                        >
                          <button
                            className={`absolute right-[14px] top-[14px] lg:right-[28px] lg:top-[28px] ${
                              feature.color1 + ' ' + feature.color2
                            } bg-gradient-to-br  rounded-full w-[30px] h-[30px] flex justify-center items-center`}
                            type='link'
                          >
                            <span className={`w-[15px] h-[15px]`}>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='8 8 20 20'
                                className='fill-white'
                              >
                                <path d='M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z'></path>
                              </svg>
                            </span>
                          </button>
                        </a>
                      )}
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </ScrollableContainer>
      </motion.div>
      <AnimatePresence>
        {Components.whymeCard === 'visible' && <WhyMeCard />}
      </AnimatePresence>
    </motion.div>
  );

  return WhyMe;
}

export default WhyMe;
