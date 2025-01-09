/** @format */

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Database from '../data/Database.json';
import { hideRow, bgPic, useLanguage, SelectText } from '../help/helpFunction';
import More from './More';
import { Link, useNavigate } from 'react-router-dom';
import CtButton from './ctButton';
import { useAppContext } from '../help/ContextManager';
import Loading from './Loading';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // delay: 0.3,
      staggerChildren: 0.1,
    },
  },
};

function WhymeCard() {
  const [show, setShow] = useState(true);
  const [showLowRes, setShowLowRes] = useState(true);
  const { Components, setComponents, whymeCard, setWhymeCard } =
    useAppContext();
  const data = Database.PersonalInfo.Education;
  const lang = useLanguage();
  const keyfeature = Database.PersonalInfo.WhyMe[lang];
  const adjustPaddingForScrollbar = () => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    return scrollbarWidth;
  };
  useEffect(() => {
    const handleKeyPress = (event) => {
      // 检查按下的键是否是回车键或者 ESC 键
      if (event.key === 'Enter' || event.key === 'Escape') {
        // 找到所有包含 ENTER 或 ESC 类的元素
        const buttons = document.querySelectorAll('.ENTER, .ESC');

        // 遍历每个元素
        buttons.forEach((button) => {
          // 检查元素类名中是否包含 'ENTER' 或 'ESC'
          const hasEnterClass = button.classList.contains('ENTER');
          const hasEscClass = button.classList.contains('ESC');

          // 如果按下的是回车键，并且元素包含 'ENTER' 类，则触发点击事件
          if (event.key === 'Enter' && hasEnterClass) {
            button.click();
          }

          // 如果按下的是 ESC 键，并且元素包含 'ESC' 类，则触发点击事件
          if (event.key === 'Escape' && hasEscClass) {
            button.click();
          }
        });
      }
    };

    // 添加事件监听器
    document.addEventListener('keydown', handleKeyPress);

    // 组件卸载时移除事件监听器
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);
  useEffect(() => {
    // 监听 Components.whymeCard 的值变化
    if (Components.whymeCard === 'visible') {
      setShow(true);
    } else if (Components.whymeCard === 'hide') {
      setShow(false);
    }
  }, [Components.whymeCard]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLowRes(false);
    }, 1200);

    return () => clearTimeout(timer); // 清理计时器
  }, []);

  const BanScroll = () => {
    const scrollbarWidth = adjustPaddingForScrollbar(); // 获取滚动条宽度
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`; // 应用动态计算的滚动条宽度
  };

  const UnBanScroll = () => {
    document.body.style.overflow = 'auto';
    document.body.style.paddingRight = '0px'; // 重置paddingRight
  };

  const openCard = (feature) => {
    setComponents((prevComponents) => ({
      ...prevComponents,
      NavBar: 'visible',
      whymeCard: 'hide',
    }));

    setTimeout(() => {
      setWhymeCard(feature);
      setComponents((prevComponents) => ({
        ...prevComponents,
        NavBar: 'hide',
        whymeCard: 'visible',
      }));
      BanScroll();
    }, 500);
  };

  const closeCard = () => {
    setShow(false);
    setComponents((prevComponents) => ({
      ...prevComponents,
      NavBar: 'visible',
      whymeCard: 'hide',
    }));
    setWhymeCard(null);
    UnBanScroll();
  };

  const WhymeCard = show && (
    <div className='fixed top-0 bottom-0 left-0 right-0 z-40 hidden w-screen h-screen lg:block '>
      <motion.span
        layout
        onClick={() => {
          closeCard();

          event.stopPropagation();
        }}
        className={`absolute top-0 left-0 right-0 bottom-0 w-full h-full ESC  z-0 ${
          whymeCard.color1 + '/50' + ' ' + whymeCard.color2 + '/50'
        } bg-gradient-to-br  backdrop-blur-[20px]   `}
      >
        <AnimatePresence>
          {showLowRes && (
            <motion.span
              layoutId={whymeCard.advantage + 'bg'}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2.5 }}
              className='fixed bottom-0 right-0 z-10 w-full h-full animate-pulse'
              style={
                {
                  ...bgPic(whymeCard.pic[0], '35% auto', 'bottom right'),
                } || null
              }
            ></motion.span>
          )}
          {!showLowRes && (
            <motion.span
              layoutId={whymeCard.advantage + 'bg'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className='fixed bottom-0 right-0 z-20 w-full h-full '
              style={
                {
                  ...bgPic(whymeCard.pic[1], '35% auto', 'bottom right'),
                  filter: 'drop-shadow(0px 20px 26px rgba(0, 0, 0, 0.3))',
                } || null
              }
            ></motion.span>
          )}
        </AnimatePresence>

        <motion.div
          onClick={(event) => {
            // event.stopPropagation();
            // openCard(whymeCard);
          }}
          className={` top-[10vh]   -bottom-[20vh]   shadow-[30px] z-50 fixed`}
        >
          <AnimatePresence mode='wait'>
            {/* {show && ( */}
            <motion.div
              // layout
              onClick={(event) => {
                event.stopPropagation();
              }}
              layoutId={whymeCard.advantage}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className='flex relative  bg-white h-[100vh] lg:ml-[10vw] ml-[50px] mr-[200px] lg:mr-[35vw] -mb-[20vh] rounded-[40px] py-[40px] px-[28px] z-50 '
            >
              <div className='flex gap-x-[20px]'>
                <motion.div
                  layout
                  className='flex flex-col h-full gap-y-[35px] z-50'
                >
                  {keyfeature.map((feature, index) => (
                    <motion.button
                      layout
                      key={index + feature.advantage}
                      onClick={(event) => {
                        event.stopPropagation();
                        closeCard();
                        openCard(feature);
                      }}
                      style={
                        { animationDelay: `${index * 0.05 + 0.3}s` } || null
                      }
                      className={`${
                        whymeCard.advantage === feature.advantage ?
                          'hidden'
                        : 'animate__animated animate__fadeInUp'
                      } flex hover:shadow-6xl shadow-md items-start py-[20px] justify-center bg-gradient-to-br from-[-20%] to-[120%] w-[10vw] mr-[30px] -ml-[28px] rounded-r-full ${
                        feature.color1 + ' ' + feature.color2
                      } `}
                    >
                      <div className='flex flex-col items-center justify-start text-white gap-[10px]'>
                        <i
                          className={`${feature.icon} flex justify-start fi text-5xl text-white flex-shrink-0 bg-clip-text text-transparent bg-gradient-to-br`}
                        ></i>
                        <p
                          className={`${window.innerWidth < 1280 ? 'hidden' : 'flex'}  justify-start font-[600] text-[12px]`}
                        >
                          {feature.advantage}
                          {/* {window.innerWidth} */}
                        </p>
                      </div>
                    </motion.button>
                  ))}
                </motion.div>
                <div className='z-50 flex flex-col'>
                  <CtButton
                    type={'x'}
                    key={'close'}
                    position={'top-0 -right-[120px] ESC  '}
                    btnsize={'60px'}
                    icon={'w-[20px] h-[20px] rotate-0'}
                    className='z-50'
                    onClick={(event) => {
                      event.stopPropagation();
                      closeCard();
                    }}
                  />
                  <div className='flex justify-start items-center gap-x-[10px]'>
                    <div className='flex gap-x-[30px] items-center'>
                      <div
                        className={`flex justify-center items-center ${
                          whymeCard.color1 + ' ' + whymeCard.color2
                        } bg-gradient-to-br rounded-full w-[60px] h-[60px]`}
                      >
                        <motion.div
                          layoutId={whymeCard.advantage + 'icon'}
                          transition={{
                            duration: 0.9,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className='text-white text-wrap text-[30px] mt-[10px]'
                        >
                          <i className={`fi  ${whymeCard.icon}`}></i>
                        </motion.div>
                      </div>
                      <motion.h3
                        transition={{
                          duration: 0.9,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        layoutId={whymeCard.advantage + 'title'}
                        className={`text-[30px] text-nowrap overflow-auto flex font-black leading-normal  ${
                          whymeCard.color1 + ' ' + whymeCard.color2
                        } bg-clip-text text-transparent bg-gradient-to-br `}
                      >
                        {whymeCard.advantage}
                      </motion.h3>
                      <motion.a
                        layout
                        className='flex  w-[50px] h-[50px] rounded-full bg-gray-400/20  justify-center items-center  hover:scale-105   z-50'
                        href={whymeCard.href}
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='8 8 20 20'
                          className='w-[25px] h-[25px] flex text-gray-500'
                        >
                          <path d='M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z'></path>
                        </svg>
                      </motion.a>
                    </div>
                  </div>
                  <motion.div
                    style={{
                      maskImage:
                        'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 1) 50px, rgba(0, 0, 0, 0.8) 95%, rgba(0, 0, 0, 0) 100%)',
                      WebkitMaskImage:
                        'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 1) 50px, rgba(0, 0, 0, 0.8) 95%, rgba(0, 0, 0, 0) 100%)',
                    }}
                    className=' max-h-[80vh] overflow-y-auto  scrollbar-hide scroll-smooth gradient-mask pt-[50px] pb-[30vh]'
                  >
                    <div
                      className={`pb-[30px] relative flex flex-col  break-words`}
                    >
                      <motion.div children=' '>
                        <motion.div
                          // style={{ animationDelay: "0.5s" }}
                          className={` ${
                            whymeCard.color1 + ' ' + whymeCard.color2
                          } bg-clip-text text-transparent bg-gradient-to-br text-[15px] md:text-[23px] animate__animated animate__fadeInUp`}
                        >
                          {whymeCard.description
                            .split('\n')
                            .map((paragraph, index) => (
                              <motion.div key={index} className=''>
                                <p className='mb-2 text-between '>
                                  {SelectText(paragraph)}
                                </p>
                                <br className='border-b' />
                              </motion.div>
                            ))}
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            {/* )} */}
          </AnimatePresence>
        </motion.div>
      </motion.span>
    </div>
  );

  return WhymeCard;
}

export default WhymeCard;
