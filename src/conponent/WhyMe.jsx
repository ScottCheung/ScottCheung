import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Database from '../Datebase.json';
import { hideRow, bgPic, useLanguage, SelectText } from '../help/helpFunction';
import More from './More';
import { Link, useNavigate } from 'react-router-dom';
import CtButton from './ctButton';

const Welcomevisblecontainer =
  Database.Animation.Variant.Welcomevisblecontainer;
const StagerFadeInUp = Database.Animation.Transition.StagerFadeInUp;
const WelcomeItem = Database.Animation.Variant.WelcomeItem;

function WhyMe({ hideTittle }) {
  const data = Database.PersonalInfo.StudyExperience;
  const lang = useLanguage();
  const keyfeature = Database.PersonalInfo.WhyMe[lang];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [selectedWhyMeItem, setSelectedWhyMeItem] = useState(null);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
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

  const adjustPaddingForScrollbar = () => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    return scrollbarWidth;
  };

  const BanScroll = () => {
    const scrollbarWidth = adjustPaddingForScrollbar(); // 获取滚动条宽度
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`; // 应用动态计算的滚动条宽度
    document.getElementById('navbar').style.marginRight = `${scrollbarWidth}px`; // 应用动态计算的滚动条宽度
    document.getElementById('navbar').style.opacity = 0;
  };

  const UnBanScroll = () => {
    document.body.style.overflow = 'auto';
    document.body.style.paddingRight = '0px'; // 重置paddingRight
    document.getElementById('navbar').style.marginRight = '0px'; // 重置paddingRight
    document.getElementById('navbar').style.opacity = 1;
  };

  // 监听窗口大小变化，重新调整滚动条空间
  // window.addEventListener('resize', scrollbarWidth);

  const WhyMe = (
    <div className='w-full h-full  mb-[10vh] relative flex'>
      <div className='w-full h-full '>
        {/* 引导按钮 */}
        <motion.div
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, rotate: 180 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.455, 0.03, 0.515, 0.955],
          }}
          className=''
        ></motion.div>
        {/* 一级标题 */}
        <div
          id='WhyMe'
          className={`${hideTittle ? 'hidden' : ''} flex justify-center pt-36`}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              ease: [0.455, 0.03, 0.515, 0.955],
              duration: 1,
            }}
            className='animate__animated animate__fadeInUp items-center flex justify-center'
          >
            <div className='animate__animated animate__zoomIn'>
              <i className=' fi text-5xl lg:text-8xl  fi-rr-lightbulb-on mr-3 pt-3 '></i>
            </div>
            <h2 className='animate__animated animate__zoomIn text-5xl lg:text-8xl font-bold font-mono'>
              {lang == 0 && 'Why me?'}
              {lang == 1 && '优势'}
            </h2>
          </motion.div>
        </div>
        {/* Item 容器 */}
        <AnimatePresence>
          <section className='section section-incentive background-alt staggered-end'>
            <div className='gallery gallery-align-start gallery-icon-cards'>
              <div className='scroll-visblecontainer'>
                <div className='item-visblecontainer'>
                  <motion.ul
                    variants={Welcomevisblecontainer}
                    initial='hidden'
                    whileInView='visible'
                    // viewport={{ once: true }}
                    exit={{ opacity: 0 }}
                    viewport={{ margin: '-30%' }}
                    className='card-set p-[20px] overflow-hidden'
                    role='list'
                  >
                    {keyfeature.map((feature, index) => (
                      <motion.div
                        // href={feature.href}
                        layoutId={feature.advantage}
                        onClick={() => {
                          setSelectedWhyMeItem(feature);
                          BanScroll();
                        }}
                        key={index}
                        variants={WelcomeItem}
                        transition={StagerFadeInUp}
                        whileHover={{ scale: 1.001 }}
                        whileTap={{ scale: 0.99 }}
                        className='gallery-item grid-item current'
                      >
                        <div className='icon-card card-visblecontainer'>
                          <div className='card '>
                            <motion.span
                              className='absolute top-0 left-0 right-0 bottom-0 -z-20 overflow-hidden rounded-[28px] first-letter:'
                              layoutId={feature.pic[0]}
                              layout='position'
                              style={
                                !hideTittle
                                  ? {
                                      ...bgPic(
                                        feature.pic[0],
                                        '100% auto',
                                        'center bottom',
                                      ),
                                    }
                                  : null
                              }
                            ></motion.span>
                            <div
                              className={`${
                                hideTittle
                                  ? `${
                                      windowWidth > 768
                                        ? 'bg-gray-100'
                                        : 'bg-gray-900/80'
                                    }  `
                                  : 'bg-white/40 -z-30'
                              }  card-modifier  fixed-width bg-button card-padding has-trigger-button`}
                            >
                              <div className='card-viewport-content'>
                                <div className='icon-card-content'>
                                  <div className=''>
                                    <div className={``}>
                                      <motion.div
                                        layoutId={feature.icon}
                                        className='items-center flex justify-start'
                                      >
                                        <i
                                          style={{
                                            animationDelay: `${index * 0.2}s`,
                                          }}
                                          className={`${
                                            feature.icon
                                          } fi animate__animated animate__delay-3s  animate__zoomIn animate__slow text-6xl ${
                                            feature.color1 +
                                            ' ' +
                                            feature.color2
                                          } flex-shrink-0 bg-clip-text text-transparent bg-gradient-to-br`}
                                        ></i>
                                      </motion.div>
                                      <div className='py-6 sm:py-3 flex justify-start'>
                                        <motion.div
                                          layoutId={feature.advantage + 'title'}
                                          style={{
                                            animationDelay: `${index * 0.2}s`,
                                          }}
                                          className={`animate__animated  animate__delay-3s animate__zoomIn animate__slow typography-card-headline ${
                                            feature.color1 +
                                            ' ' +
                                            feature.color2
                                          } flex-shrink-0 bg-clip-text text-transparent bg-gradient-to-r`}
                                        >
                                          {feature.advantage}
                                        </motion.div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className={`${
                                      hideTittle ? 'hidden' : ''
                                    } copy-visblecontainer md:h-[450px] h-[290px]`}
                                  >
                                    <div
                                      style={{
                                        ...hideRow(3),
                                        animationDelay: `${index * 0.3}s`,
                                      }}
                                      className={`text-full  my-7 animate__animated  animate__fadeInUp text-gray-600  card-description text-justify `}
                                    >
                                      {feature.description}
                                    </div>
                                    <More
                                      color={`  ${
                                        feature.color1 + ' ' + feature.color2
                                      } bg-gradient-to-br text-transparent bg-clip-text `}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div></div>
                            </div>
                          </div>
                          {windowWidth < 1024 && (
                            <a
                              href={feature.href}
                              className='anz-card-modal-link z-50 '
                            >
                              <button
                                className='card-modal-trigger modal-trigger card-cta-modal-button'
                                type='link'
                              >
                                <div className='modal-trigger-visblecontainer'>
                                  <span
                                    className={`${
                                      hideTittle
                                        ? `${
                                            feature.color1 +
                                            ' ' +
                                            feature.color2
                                          } bg-gradient-to-br card-cta-modal-button-icon opacity-80`
                                        : 'card-cta-modal-button-icon'
                                    }  `}
                                  >
                                    <svg
                                      xmlns='http://www.w3.org/2000/svg'
                                      viewBox='8 8 20 20'
                                      className='card-cta-modal-button-small-icon card-modal-button-small-icon'
                                    >
                                      <path d='M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z'></path>
                                    </svg>
                                  </span>
                                </div>
                              </button>
                            </a>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </motion.ul>
                </div>
              </div>
            </div>
          </section>
        </AnimatePresence>
      </div>
      {/* <div className='relative w-[200vw] h-[200vh]  top-0 left-0 right-0 bottom-0  bg-black/70 backdrop-blur-[20px] z-50'></div> */}
      {selectedWhyMeItem && (
        <span
          onClick={() => {
            setSelectedWhyMeItem(null);
            UnBanScroll();
          }}
          className={`absolute top-0 left-0 right-0 bottom-0 w-[100vw] h-[100vh]  justify-center items-center ${
            // selectedWhyMeItem.color1 +
            // '/10' +
            // ' ' +
            // selectedWhyMeItem.color2 +
            '/10'
          } bg-gradient-to-bfrom-black/50 to- bg-black/50  backdrop-blur-[20px]  justify-center items-center z-40`}
        >
          <motion.span
            layoutId={selectedWhyMeItem.pic[0]}
            className='fixed  right-0 bottom-0 w-[100vw] h-[100vh] -z-50'
            style={
              (windowWidth > 768 && {
                ...bgPic(selectedWhyMeItem.pic[0], '40% auto', 'bottom right'),
              }) ||
              null
            }
          ></motion.span>

          <motion.div
            onClick={(event) => {
              event.stopPropagation();
              setSelectedWhyMeItem(feature);
              BanScroll();
            }}
            layoutId={selectedWhyMeItem.advantage}
            className={`mx-[10%] mt-[10%]  mr-[40%] -mb-[20vh] pb-[20vh] shadow-[30px] bg-white backdrop-blur-[200px] rounded-[40px] p-[40px] flex  gap-x-[30px] z-50 relative`}
          >
            <motion.div
              layout
              className='flex flex-col h-full gap-y-[30px] z-50'
            >
              {keyfeature.map((feature, index) => (
                <motion.button
                  initial={{ x: -25 }}
                  whileHover={{ x: -15 }}
                  whileTap={{ x: 0 }}
                  onClick={(event) => {
                    event.stopPropagation();
                    setSelectedWhyMeItem(null);
                    setTimeout(() => {
                      setSelectedWhyMeItem(feature);
                    }, 300);
                    BanScroll();
                  }}
                  transition={{ duration: 0.05 }}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                  className={`flex hover:shadow-6xl animate__animated animate__zoomIn shadow-md items-center py-[15px] justify-center bg-gradient-to-br w-[15vw] -ml-[40px]  rounded-r-full ${
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
            <div className='flex flex-col '>
              <CtButton
                type={'x'}
                key={'close'}
                position={'top-[40px] right-[40px] ESC'}
                btnsize={'30px'}
                icon={'w-[10px] h-[10px] rotate-0'}
                className='z-50'
                onClick={() => {
                  setSelectedWhyMeItem(null);
                  UnBanScroll();
                }}
              />
              <div className='flexjustify-start items-center '>
                <motion.div
                  layoutId={selectedWhyMeItem.icon}
                  className='flex-shrink-0   '
                >
                  <div
                    className={`flex justify-center items-center ${
                      selectedWhyMeItem.color1 + ' ' + selectedWhyMeItem.color2
                    } bg-gradient-to-br rounded-full w-[100px] h-[100px]`}
                  >
                    <motion.div className='text-white text-[50px] mt-[10px]'>
                      <i className={`fi  ${selectedWhyMeItem.icon}`}></i>
                    </motion.div>
                  </div>
                </motion.div>
                <div className='flex gap-x-[30px] items-center'>
                  <motion.h3
                    layoutId={selectedWhyMeItem.advantage + 'title'}
                    className={`text-[50px] font-semibold leading-normal mb-2 ${
                      selectedWhyMeItem.color1 + ' ' + selectedWhyMeItem.color2
                    } bg-clip-text text-transparent bg-gradient-to-br mb-2`}
                  >
                    {selectedWhyMeItem.advantage}
                  </motion.h3>
                  <a
                    className='flex w-[50px] h-[50px] rounded-full bg-gray-400/20 flex justify-center items-center  hover:scale-105    z-50'
                    href={selectedWhyMeItem.href}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='8 8 20 20'
                      className='w-[20px] h-[20px]'
                    >
                      <path d='M23.5587,16.916 C24.1447,17.4999987 24.1467,18.446 23.5647,19.034 L16.6077,26.056 C16.3147,26.352 15.9287,26.4999987 15.5427,26.4999987 C15.1607,26.4999987 14.7787,26.355 14.4867,26.065 C13.8977,25.482 13.8947,24.533 14.4777,23.944 L20.3818,17.984 L14.4408,12.062 C13.8548,11.478 13.8528,10.5279 14.4378,9.941 C15.0218,9.354 15.9738,9.353 16.5588,9.938 L23.5588,16.916 L23.5587,16.916 Z'></path>
                    </svg>
                  </a>
                </div>
              </div>
              <motion.div className='-mb-[10vh] max-h-[80vh] overflow-y-auto scrollbar-hide scroll-smooth gradient-mask pt-[10vh] pb-[30vh]'>
                <div
                  className={`pb-[30px] relative flex flex-col  break-words`}
                >
                  <motion.div children=' '>
                    <motion.div
                      className={` ${
                        selectedWhyMeItem.color1 +
                        ' ' +
                        selectedWhyMeItem.color2
                      } bg-clip-text text-transparent bg-gradient-to-br text-[15px] md:text-[23px] animate__animated animate__zoomIn `}
                    >
                      {selectedWhyMeItem.description
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
      )}
    </div>
  );

  return WhyMe;
}

export default WhyMe;
