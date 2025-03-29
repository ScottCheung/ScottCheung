/** @format */

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { hideRow, useLanguage } from '../help/helpFunction';

import { Link } from 'react-router-dom';
import { Return } from 'three/examples/jsm/nodes/Nodes';
const navLocation = [
  {
    href: '/#Education',
    label: ['Education', '教育'],
    icon: 'fi-rr-book',
    color1: 'from-red-500',
    color2: 'to-red-700',
  },
  {
    href: '/#Capability',
    label: ['Capability', '能力'],
    icon: 'fi-rr-user',
    color1: 'from-orange-500',
    color2: 'to-amber-500',
  },
  {
    href: '/#WorkExperience',
    label: ['Work', '工作'],
    icon: 'fi-rr-tool-box',
    color1: 'from-cyan-500',
    color2: 'to-blue-500',
  },
  {
    href: '/#AboutMe',
    label: ['About Me', '关于'],
    icon: 'fi-rr-comment-heart',
    color1: 'from-sky-500',
    color2: 'to-emerald-500',
  },
  {
    href: '/#WhyMe',
    label: ['Why me', '优势'],
    icon: 'fi-rr-lightbulb-on',
    color1: 'from-indigo-500',
    color2: 'to-pink-500',
  },
  {
    label: ['Work', '工作'],
    href: '/work',
    icon: 'fi-rr-tool-box',
  },
  {
    href: '/Life',
    label: ['Life', '生活'],
    icon: 'fi-rr-mountains',
  },
  {
    href: '/project',
    label: ['Project', '项目'],
    icon: 'fi-rr-folder',
  },
  {
    label: ['Contact', '联络'],
    href: '/Contact',
    icon: 'fi-rr-following',
  },
  {
    label: ['BLog', '播客'],
    href: '/#Blog',
    icon: 'fi-rr-lock',
    status: false,
  },
];

export function more() {
  const lang = useLanguage();
  const [status, setStatus] = useState(false);
  const handleClick = () => {
    setStatus(true);
    setTimeout(() => {
      setStatus(false);
    }, 3000);
  };
  return (
    <AnimatePresence>
      <motion.div className='pt-[50px]  w-full flex flex-col justify-center'>
        <motion.div
          layout
          className={`w-full lg:hidden grid  grid-cols-10 gap-y-[20px] transition-all  bg-white/10 backdrop-blur-[15px]`}
        >
          {navLocation.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              onClick={handleClick}
              style={{ animationDelay: `${index * 0.07}s` }}
              className={`col-span-2 flex group w-full h-full  justify-center animate__zoomIn animate_animated  text-black `}
            >
              <motion.div layout whileTap={{ scale: 0.95 }} className=''>
                <div className='rounded-full bg-sky-100 w-[50px] h-[50px] flex justify-center items-center active:text-white active:bg-sky-900  '>
                  {' '}
                  <i
                    className={` flex fi justify-center  py-2 text-[20px]  ${item.icon}`}
                  ></i>
                </div>

                <p className='w-full mt-[15px] h-full flex text-center justify-center lg:text-full text-[12px] md:text-[15px]'>
                  {item.label[lang]}
                </p>
              </motion.div>
            </motion.a>
          ))}
        </motion.div>
        {/* {status && ( */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{
            opacity: status ? 1 : 0,
            y: status ? 0 : 10,
          }}
          transition={{ ease: [0.455, 0.03, 0.515, 0.955], duration: 0.7 }}
          className='text-[15px]  text-gray-400 justify-center w-full flex  px-[10px] py-[10px]'
        >
          {
            [
              'Blog Coming Soon... Under development',
              '播客功能正在开发，请期待～',
            ][lang]
          }
        </motion.p>
        {/* )} */}
      </motion.div>
    </AnimatePresence>
  );
}

export default more;
