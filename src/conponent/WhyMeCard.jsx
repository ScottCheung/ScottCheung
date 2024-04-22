import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Database from '../Datebase.json';
import { hideRow, bgPic, useLanguage, SelectText } from '../help/helpFunction';
import More from './More';
import { Link, useNavigate } from 'react-router-dom';
import CtButton from './ctButton';
import { useAppContext } from '../help/ContextManager';

const Welcomevisblecontainer =
  Database.Animation.Variant.Welcomevisblecontainer;
const StagerFadeInUp = Database.Animation.Transition.StagerFadeInUp;
const WelcomeItem = Database.Animation.Variant.WelcomeItem;

function WhymeCard() {
  const { Components, setComponents, whymeCard, setWhymeCard } =
    useAppContext();
  const data = Database.PersonalInfo.StudyExperience;
  const lang = useLanguage();
  const keyfeature = Database.PersonalInfo.WhyMe[lang];
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
    setComponents((prevComponents) => ({
      ...prevComponents,
      NavBar: 'hide',
      whymeCard: 'visible',
    }));
    BanScroll();
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
  const WhymeCard = Components.whymeCard === 'visible' && (
    <div className='w-full h-[100vh] fixed top-0 bottom-0 left-0 right-0 z-50 '>
      <span
        onClick={() => {
          closeCard();
        }}
        className={`absolute top-0 left-0 right-0 bottom-0 w-[100vw] h-[100vh]  justify-center items-center z-50 ${
          whymeCard.color1 + '/10' + ' ' + whymeCard.color2 + '/10'
        } bg-gradient-to-br  backdrop-blur-[20px]  justify-center items-center z-40`}
      >
        <motion.span
          layout
          layoutId={whymeCard.pic[0]}
          className='fixed  right-0 bottom-0 w-[100vw] h-[100vh] -z-50'
          style={
            {
              willChange: 'transform',
              ...bgPic(whymeCard.pic[0], '40% auto', 'bottom right'),
            } || null
          }
        ></motion.span>

        <motion.div
          // layout
          // transition={{ duration: 0.5 }}
          style={{ willChange: 'transform' }}
          onClick={(event) => {
            event.stopPropagation();
            openCard(whymeCard);
          }}
          layoutId={whymeCard.advantage}
          className={` top-[10vh] left-[10vw]   right-[40vw] -bottom-[20vh] pb-[20vh] shadow-[30px] bg-white backdrop-blur-[200px] transform-gpu  rounded-[40px] p-[40px] flex   gap-x-[30px] z-50 fixed`}
        >
          <motion.div layout className='flex flex-col h-full gap-y-[30px] z-50'>
            {keyfeature.map((feature, index) => (
              <motion.button
                initial={{ x: -25 }}
                whileHover={{ x: -15 }}
                whileTap={{ x: 0 }}
                onClick={(event) => {
                  event.stopPropagation();
                  closeCard;
                  setTimeout(() => {
                    openCard(feature);
                  }, 500);
                }}
                transition={{ duration: 0.05 }}
                style={{
                  animationDelay: `${index * 0.1 + 0.3}s`,
                }}
                className={`${
                  whymeCard.advantage === feature.advantage ? 'hidden' : ''
                } flex hover:shadow-6xl animate__animated animate__zoomIn shadow-md items-center py-[15px] justify-center bg-gradient-to-br w-[15vw] -ml-[40px]  rounded-r-full ${
                  feature.color1 + ' ' + feature.color2
                } `}
              >
                <div className='flex flex-col items-center justify-center text-l text-white '>
                  <i
                    className={`${feature.icon} fi  text-5xl text-white flex-shrink-0 bg-clip-text text-transparent bg-gradient-to-br`}
                  ></i>
                  <p className='font-black '>{feature.advantage}</p>
                </div>
              </motion.button>
            ))}
          </motion.div>
          <div className='flex flex-col z-50'>
            <CtButton
              type={'x'}
              key={'close'}
              position={'top-0 -right-[120px] ESC'}
              btnsize={'60px'}
              icon={'w-[20px] h-[20px] rotate-0'}
              className='z-50'
              onClick={(event) => {
                event.stopPropagation();
                closeCard();
              }}
            />
            <div className='flex justify-start items-center gap-x-[10px]'>
              <motion.div
                style={{ willChange: 'transform' }}
                className='flex-shrink-0   '
              >
                <div
                  className={`flex justify-center items-center ${
                    whymeCard.color1 + ' ' + whymeCard.color2
                  } bg-gradient-to-br rounded-full w-[60px] h-[60px]`}
                >
                  <motion.div className='text-white text-[30px] mt-[10px]'>
                    <i className={`fi  ${whymeCard.icon}`}></i>
                  </motion.div>
                </div>
              </motion.div>
              <div className='flex gap-x-[30px] items-center'>
                <motion.h3
                  style={{ willChange: 'transform' }}
                  layoutId={whymeCard.advantage + 'title'}
                  className={`text-[30px] font-semibold leading-normal mb-2 ${
                    whymeCard.color1 + ' ' + whymeCard.color2
                  } bg-clip-text text-transparent bg-gradient-to-br mb-2`}
                >
                  {whymeCard.advantage}
                </motion.h3>
                <a
                  className='flex w-[30px] h-[30px] mb-[10px] rounded-full bg-gray-400/20  justify-center items-center  hover:scale-105    z-50'
                  href={whymeCard.href}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='8 8 20 20'
                    className='w-[15px] h-[15px]'
                  >
                    <path d='M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z'></path>
                  </svg>
                </a>
              </div>
            </div>
            <motion.div className='-mb-[10vh] max-h-[80vh] overflow-y-auto scrollbar-hide scroll-smooth gradient-mask pt-[10vh] pb-[30vh]'>
              <div className={`pb-[30px] relative flex flex-col  break-words`}>
                <motion.div children=' '>
                  <motion.div
                    style={{ animationDelay: `0.3s` }}
                    className={` ${
                      whymeCard.color1 + ' ' + whymeCard.color2
                    } bg-clip-text text-transparent bg-gradient-to-br text-[15px] md:text-[23px] animate__animated animate__zoomIn `}
                  >
                    {whymeCard.description
                      .split('\n')
                      .map((paragraph, index) => (
                        <motion.div key={index}>
                          <p className='mb-2 text-between'>
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
        </motion.div>
      </span>
    </div>
  );

  return WhymeCard;
}

export default WhymeCard;
