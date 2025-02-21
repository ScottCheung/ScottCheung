/** @format */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Toggle from './Toggle';

interface NavbarItem {
  name: string[];
  href: string;
  icon: string;
  des: string[];
  expression: string;
  isTopShow: boolean;
  scondMenu?: any[];
}

interface NavbarSmallScreenProps {
  data: any[];
  textColor?: boolean;
  isTop?: boolean;
  lang?: number;
  setIsOpened: any;
}

const NavbarSmallScreen: React.FC<NavbarSmallScreenProps> = ({
  data,
  textColor = false,
  isTop = true,
  lang = 0,
  setIsOpened,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const BTN = (functionName: keyof typeof functions) => {
    const functions = {
      lang0: () => {
        localStorage.setItem('lang', '0');
        window.location.reload();
      },
      lang1: () => {
        localStorage.setItem('lang', '1');
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

  return (
    <div
      className={`pl-[15px] w-full -mr-[30px] py-[30px] max-h-[95vh] overflow-auto`}
    >
      {data.map((item, index) => (
        <div key={item.name[0]}>
          <AnimatePresence>
            <motion.div
              layout
              exit={{
                opacity: 0,
                scale: 0,
                transition: { duration: 0.7 },
              }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={() => toggleAccordion(index)}
            >
              <div
                style={{ animationDelay: `${index * 0.2}s` }}
                className={`flex py-5 animate__animated animate__zoomIn place-items-center items-center px-4 cursor-pointer ${
                  isTop ?
                    'hover:bg-gray-900/50 rounded-l-full'
                  : 'hover:bg-gray-300/50 rounded-l-full'
                }`}
              >
                <div className='flex-shrink-0'>
                  <div className='flex items-center justify-center w-24 h-24 rounded-full'>
                    <i
                      className={`${
                        textColor && isTop ? 'text-white' : 'text-gray-900'
                      } text-5xl fi ${item.icon}`}
                    ></i>
                  </div>
                </div>
                <div className='w-full ps-2'>
                  <div
                    className={`${
                      textColor && isTop ? 'text-white' : 'text-gray-900'
                    } font-bold text-4xl`}
                  >
                    {item.name[lang]}
                  </div>
                  <div
                    className={`${
                      textColor && isTop ? 'text-white' : 'text-gray-900'
                    } text-[10px] `}
                  >
                    {item.des[lang]}
                  </div>
                </div>

                <Toggle
                  isExpanded={openIndex === index}
                  style={
                    textColor && isTop ?
                      'text-white w-9 h-9  stroke-[2px]'
                    : 'text-gray-900 w-9 h-9  stroke-[2px]'
                  }
                />
              </div>
            </motion.div>
          </AnimatePresence>
          <AnimatePresence>
            {openIndex === index && item.scondMenu && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{
                  height: 0,
                  opacity: 0,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className='pl-[30px]  py-[30px] space-y-[20px] '>
                  {item.scondMenu.map((subItem: any, subIndex: any) => (
                    <a
                      key={subItem.name[0] + subIndex}
                      href={subItem.link}
                      onClick={() => {
                        const buttonFunction = BTN(subItem.button);
                        if (typeof buttonFunction === 'function') {
                          buttonFunction();
                        }
                        setIsOpened(false);
                      }}
                      className={`pl-[33px] flex py-6 items-center justify-between  ${
                        isTop ?
                          'hover:bg-gray-900/50 rounded-l-full'
                        : 'hover:bg-gray-300/50 rounded-l-full'
                      }`}
                    >
                      <div className='flex items-center'>
                        {' '}
                        <div className='flex items-center justify-center w-12 h-12 rounded-full'>
                          <i
                            className={`${
                              textColor && isTop ? 'text-white' : (
                                'text-gray-900'
                              )
                            } text-3xl flex fi ${subItem.icon}`}
                          ></i>
                        </div>
                        <div className='w-full ps-2'>
                          <div
                            className={`${
                              textColor && isTop ? 'text-white' : (
                                'text-gray-900'
                              )
                            } font-bold text-2xl`}
                          >
                            {subItem.name[lang]}
                          </div>
                        </div>
                      </div>
                      {subItem.status && (
                        <i
                          className={`flex pr-[20px]  justify-center items-center text-[15px] ${
                            textColor && isTop ? 'text-white' : 'text-gray-900'
                          }  ${subItem.status}`}
                        ></i>
                      )}
                      {!subItem.status && (
                        <i
                          className={`flex pr-[20px]  justify-center items-center text-[25px] ${
                            textColor && isTop ? 'text-white' : 'text-gray-900'
                          }  fi fi-rr-angle-small-right`}
                        ></i>
                      )}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default NavbarSmallScreen;
