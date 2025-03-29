/** @format */

const h1 = `font-sans tracking-wide text-sky-700 text-[30px] md:text-[50px]  font-bold  transition-all duration-1000`;
const normaltext = 'text-[15px] text-jusify transition-all duration-1000';
const h2 = `flex text-[30px]  font-black text-sky-700 group-hover:text-sky-400,
)} gap-x-[15px] items-center transition-all duration-1000`;
const printWidth = 'max-w-[1300px] mt-[50px]';
const icon = `w-[15px] text-[15px] mr-[5px] mt-[2px]  transition-all duration-1000`;
const division = `hidden items-center md:flex md:flex-1 h-[2px] m-0 rounded-full bg-sky-700 opacity-10  transition-all duration-1000`;

const h3 = `text-[15px] font-black flex items-center `;
const timetext = `text-2xl font-[500] text-gray-400 items-start transition-all duration-1000`;
const whymeIcon = `text-[20px] flex justify-center items-center text-gray-400 group-hover:text-sky-700`;
const whymelable = `text-[15px] text-gray-400 group-hover:text-sky-700`;
const contentContainer = `flex-1 flex flex-col justify-between  animate_animated animate__fadeInUp`;
const WelcomeItem = Database.Animation.Variant.WelcomeItem;
const StagerFadeInUp = Database.Animation.Transition.StagerFadeInUp;
const divisionline = `flex duration-0 flex flex-1 h-[5px] w-[2px] rounded-full bg-sky-700  transition-all duration-1000`;
const parseText = (text) => {
  const parts = text.split(/(<s>.*?<s>)/).map((part, index) => {
    if (part.startsWith('<s>') && part.endsWith('<s>')) {
      return (
        <span
          key={index}
          className={`text-sky-700 transition-all  duration-300   opacity-100 font-bold mx-[3px] `}
        >
          {part.replace(/<s>/g, '')}
        </span>
      );
    }
    return (
      <span className='text-gray-700 transition-all duration-500 ' key={index}>
        {part}
      </span>
    );
  });
  return parts;
};

import React, { useState, useEffect, useRef } from 'react';
import workData from '../data/workData.json';
import { motion, AnimatePresence } from 'framer-motion';
import Database from '../data/Database.json';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../help/helpFunction';
import CtButton from './ctButton';
import { useAppContext } from '../help/ContextManager';
import ScrollableContainer from './ScrollableContainer';

function Card({ card }) {
  return (
    <motion.div
      layout
      key={card.id}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, opacity: 0.7 }}
      layoutId={`card-container-${card.type + card.company + card.id}`}
      className={`relative bg-white transform-gppu cursor-pointer w-auto h-auto flex flex-col lg:w-[350px] lg:p-[28px] shadow-[10px] rounded-[14px] lg:rounded-[28px] overflow-hidden lg:overflow-visible  lg:group-hover:${card.backgroundColor}/20`}
    >
      <motion.div
        layout
        layoutId={`card-img-${card.id}`}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className='lg:absolute  -left-[30px] -top-[30px] right-[60px] lg:rounded-[28px]  overflow-hidden aspect-[16/9] z-30'
      >
        <motion.img
          loading='lazy'
          src={card.image}
          className='object-cover object-bottom w-full shadow-lg'
        />
      </motion.div>

      <div className='flex flex-col  p-[14px] lg:p-[0px] lg:mt-[50%]  items-start justify-start h-[100px] '>
        <motion.h1
          layoutId={`card-${card.title + card.id}`}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className='font-bold  text-[15px] md:text-[17px] lg:text-[23px] text-gray'
        >
          {card.title}
        </motion.h1>
        <motion.h2
          layoutId={`card-${card.company}`}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className='flex  text-[11px] md:text-[12px] lg:text-[17px] text-gray-400'
        >
          {card.company}
        </motion.h2>
      </div>
    </motion.div>
  );
}

function Period({ period }) {
  return (
    <motion.div
      layout
      className='-mx-[18%] mt-[120px] hidden  relative lg:flex  items-center justify-between'
    >
      <div className='absolute  -mt-[100px] opacity-60 group-hover:opacity-100 flex w-[60%] justify-between items-center py-[20px] text-[20px] text-gray-400 font-serif'>
        <motion.div
          layout
          className=' font-[500] group-hover:text-black group-hover:mb-7 mb-0 transition-all duration-500'
        >
          {period.startTime}
        </motion.div>
        <motion.div
          layout
          className='font-[500] group-hover:text-black transition-all duration-500'
        >
          {period.endTime}
        </motion.div>
      </div>
      <span className={divisionline}></span>
      <div className='absolute right-0 bg-sky-700 rounded-full w-[30px] h-[30px]'></div>
    </motion.div>
  );
}

function WorkExperience() {
  const lang = useLanguage();
  const navigate = useNavigate();
  const { Components, setComponents } = useAppContext();
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
  const containerRef = useRef(null);
  const scrollToRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = containerRef.current.scrollWidth;
    }
  };
  const [selectedCard, setSelectedCard] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    BanScroll();
    setIsOpen(true);
    setComponents((prevComponents) => ({
      ...prevComponents,
      NavBar: 'hide',
    }));
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedCard(null);
    UnBanScroll();
    setComponents((prevComponents) => ({
      ...prevComponents,
      NavBar: 'visible',
    }));
  };
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

  return (
    <motion.div
      layout
      id='WorkExperience'
      className='flex flex-col items-center justify-center w-full min-h-full'
    >
      <ScrollableContainer
        toRight={true}
        gap={80}
        containerPY={80}
        header={{
          cont: lang == 0 ? 'Work Experience' : '工作经验',
          icon: 'fi-rr-tool-box',
        }}
      >
        {workData.map((card, index) => (
          <motion.button
            key={card.id}
            variants={WelcomeItem}
            transition={StagerFadeInUp}
            className='col-span-6 group'
            onClick={() => handleCardClick(card)}
          >
            <Card card={card} />
            <Period period={card} />
          </motion.button>
        ))}
      </ScrollableContainer>
      {/* </motion.div> */}
      <AnimatePresence mode='sync'>
        {isOpen && (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className='fixed  inset-0 top-0 bottom-0  w-full h-full z-30  bg-gray-900/75 backdrop-blur-[20px]'
          >
            <div className='relative flex items-center justify-center w-full h-full '>
              <CtButton
                type={'x'}
                key={'close'}
                position={'top-[30px] right-[30px] ESC  '}
                btnsize={'60px'}
                icon={'w-[20px] h-[20px] rotate-0'}
                className='z-40'
                onClick={(event) => {
                  event.stopPropagation();
                  handleClose();
                }}
              />

              {isOpen && (
                <motion.div
                  className='sticky top-0 flex '
                  layout
                  layoutId={`card-container-${
                    selectedCard.type + selectedCard.company + selectedCard.id
                  }`}
                  transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <motion.div className='relative  z-0 flex transform-gppuu lg:rounded-[28px]  flex-wrap  max-h-full lg:max-h-[90vh] overflow-auto lg:overflow-hidden  w-full gap-y-[50px]  justify-center items-start bg-white shadow-lg   '>
                    <motion.div
                      className={`${windowWidth > 1440 ? 'lg:max-w-[400px] w-full h-full' : 'w-full h-[300px]'} object-center  object-cover flex md:p-0 aspect-[4/3] z-50`}
                    >
                      <motion.img
                        loading='lazy'
                        // layout
                        layoutId={`card-img-${selectedCard.id}`}
                        transition={{
                          duration: 1.4,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        src={selectedCard.image}
                        alt='detail'
                        className='z-20 object-cover object-center w-full h-full'
                      />
                    </motion.div>

                    <motion.div className='flex flex-col w-full max-w-[800px] z-10 m-[40px] lg:pt-0 pb-[150px] lg:overflow-auto h-[70vh]    scrollbar-hide'>
                      <div className='flex flex-col gap-8 '>
                        <div className='flex items-baseline gap-12'>
                          <motion.div
                            layoutId={`card-${selectedCard.title + selectedCard.id}`}
                            transition={{
                              duration: 1,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className='flex font-bold text-7xl'
                          >
                            {selectedCard.title}
                          </motion.div>
                          {/* <motion.div
                            layoutId={
                              'card-type' +
                              selectedCard.type +
                              selectedCard.company
                            }
                            transition={{
                              duration: 0.7,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            class='flex items-center justify-center px-[20px] py-[5px] text-xl font-semibold text-sky-800 bg-sky-100 border border-sky-200 rounded-full darrk:bg-sky-600 darrk:text-sky-100 darrk:border-sky-500'
                          >
                            {selectedCard.type}
                          </motion.div> */}
                        </div>

                        <div className='flex-col items-start justify-start md:flex md:flex-row md:justify-between overflow-hidden  h-[30%]  pb-8'>
                          <motion.h2
                            layoutId={`card-${selectedCard.company}`}
                            transition={{
                              duration: 1,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className='flex w-[70%] text-[13px] md:text-[16px] lg:text-[21px] text-gray-400'
                          >
                            {selectedCard.company}
                          </motion.h2>
                          {/* duration */}
                          <div className='flex justify-end '>
                            <p className={timetext}>
                              {selectedCard.startTime +
                                ' - ' +
                                selectedCard.endTime}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className={contentContainer}>
                        <div className={normaltext + ' pb-[10vh] md:pb-[0vh]'}>
                          <p>
                            <h3 className='text-[20px] font-black'>Skill:</h3>{' '}
                            {selectedCard.skill.join(',  ')}
                          </p>
                          <h3 className='text-[20px] font-black'>
                            Achievements:
                          </h3>
                          <ul className='pl-5 '>
                            {selectedCard.points.map((item, index) => (
                              <li key={index} className='mb-2 text-justify'>
                                <strong className='block mr-2 font-semibold'>
                                  ▸ {item.title}:
                                </strong>
                                {parseText(item.description)}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default WorkExperience;
