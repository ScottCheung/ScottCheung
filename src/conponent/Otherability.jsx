/** @format */

import React, { useState, useEffect } from 'react';
import Database from '../data/Database.json';
import { motion, AnimatePresence } from 'framer-motion';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { hideRow, bgPic, useLanguage, SelectText } from '../help/helpFunction';
import { Link } from 'react-router-dom';
import N from './Num';
import BG from './gfBG';

const division = `hidden items-center md:flex md:flex-1 h-[2px] m-0 rounded-full bg-blue-500 opacity-10  transition-all duration-1000`;

const laptopMode = window.innerWidth > 1024;
const Skill = {
  icon: <i class='fi fi-rr-tool-box'></i>,
  skills: [
    {
      Management: [
        '☆ Jira',
        '☆ SWOT',
        '☆ PEST',
        '☆ Boston Matrix',
        'Gantt Chart',
        'Organizational Behavioral Analysis',
        'strategic management',
      ],
      Text: ['☆ Markdown', 'LaTeX', '☆ Word', '☆ Pages', 'HTML'],
      Slides: ['☆ PowerPoint', '☆ Keynotes', 'Google Slides'],
      Video: [
        '☆ Final Cut Pro',
        'Premiere',
        'After Effects',
        '☆ DaVinci',
        'iMovie',
        '☆ JianYing',
      ],
      Graph: [
        '☆ Photoshop',
        '☆ Lightroom',
        'Illustrator',
        '☆ InDesign',
        'XD',
        '3D Max',
        '☆ Sharp 3D',
      ],
      Language: ['English', '☆ Chinese(mother tongue)', '☆ SiChuan Dialect'],
      Music: ['Guitar', '☆ Piano'],
    },
    {
      管理: [
        '☆ Jira',
        '☆ SWOT',
        '☆ PEST',
        '☆ 波士顿矩阵',
        '甘特图',
        '组织行为分析',
        '战略管理',
      ],
      文本: ['☆ Markdown', 'LaTeX', '☆ Word', '☆ Pages', 'HTML'],
      幻灯片: ['☆ PowerPoint', '☆ Keynotes', 'Google Slides'],
      视频: [
        '☆ Final Cut Pro',
        'Premiere',
        'After Effects',
        '☆ DaVinci',
        'iMovie',
        '☆ 剪映',
      ],
      图像: [
        '☆ Photoshop',
        '☆ Lightroom',
        'Illustrator',
        '☆ InDesign',
        'XD',
        '3D Max',
        '☆ Sharp 3D',
      ],
      语言: ['英语', '☆ 中文（母语）', '☆ 四川方言'],
      音乐: ['吉他', '☆ 钢琴'],
    },
  ],
};
function Otherability() {
  const lang = useLanguage();
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

  const Otherability = (
    <motion.div className='h-auto rounded-[28px] overflow-hidden col-span-12  md:col-span-6 lg:col-span-8'>
      <motion.div
        className=' bg-gradient-to-t bg-black rounded-[28px] relative pb-[33%] '
        style={{
          backgroundImage: `url(https://cia.hyperos.mi.com/hyperos-homepage/footer_vela_bg_pc.png)`,
          backgroundSize: '100% auto',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right bottom',
          filter: 'contrast(110%)',
        }}
      >
        {/* Skill */}
        <motion.div className=' z-20 p-[20px] lg:p-[36px]  '>
          {Object.entries(Skill.skills[lang]).map(([category, list], index) => (
            <motion.div
              key={index + 'skill'}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.9 }}
              className='flex flex-col text-gradient py-[15px] z-20 gap-[5px] md:pb-[45px]'
            >
              <h2 className='font-[600] text-gray-200 text-[30px]  typography-subsection-headline'>
                {' '}
                {category}
              </h2>

              <p className='text-left text-[15px] text-gray-400 lg:text-[20px] '>
                {list.join('  ｜  ')}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div class='absolute bottom-0 -z-10 left-0 h-full  w-full object-cover object-bottom bg-gradient-to-br from-black via-black/70 to-75% via-40% to-transparent'></div>
        <svg
          aria-hidden='true'
          viewBox='0 0 1896 526'
          class='absolute bottom-0 left-0 -z-20 h-full w-full object-cover object-bottom'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            stroke='#3a6dba'
            opacity='0.7'
            fill='#6a92f8'
            d='M2288.33 404.529L2288.32 404.531C2227.46 463.097 2137.15 487.431 2053.7 468.509C2004.48 456.762 1953.29 451.341 1902.11 451.341C1801.7 451.341 1706.22 473.026 1617.63 514.589C1589.94 527.299 1581.95 550.009 1581.93 561.944C1577.98 582.848 1583.93 604.67 1599.78 620.133C1622.57 642.865 1659.19 648.294 1690.83 633.772L1690.84 633.771C1814.65 576.046 1966.96 572.438 2093.72 623.849C2137.75 641.811 2158.24 689.37 2138.71 729.707C2119.16 770.082 2067.32 788.959 2023.28 770.994L2023.28 770.993C1942.49 738.438 1847.92 741.151 1769.11 777.323L1769.1 777.325C1732.78 794.446 1693.51 802.557 1654.23 802.557C1585.5 802.557 1517.76 776.421 1469.67 727.769C1417.65 674.614 1396.06 603.453 1409.8 533.195C1423.54 462.939 1470.64 404.378 1539.36 371.938C1709.42 291.631 1912.92 270.876 2097.73 313.286L2097.74 313.288L2097.75 313.289C2120.53 317.836 2146.27 310.563 2164.1 293.295C2190.84 267.84 2185.9 238.728 2181.93 226.885C2178.94 215.013 2166.04 188.668 2130.42 180.493C2056.61 163.329 1979.85 155.2 1903.09 155.2C1644.27 155.2 1402.18 250.047 1222.08 421.684C1140.6 499.17 1010.03 512.697 909.881 454.118L909.879 454.117C846.073 417.174 805.84 356.815 797.008 288.358C788.177 219.005 813.686 150.542 866.694 100.084C1101.7 -122.844 1416.35 -262.744 1750.68 -295.237L1750.68 -295.238C1786.32 -298.873 1814.08 -327.962 1814.08 -362.548C1814.08 -381.666 1805.15 -399.862 1789.31 -412.591C1773.45 -426.232 1752.66 -431.673 1730.91 -429.858L1730.91 -429.857C1186.81 -376.573 716.483 -74.024 473.443 378.471C413.576 489.276 271.235 535.258 147.512 483.882C85.6581 457.747 37.5671 409.99 14.9973 351.443L14.9963 351.44C-7.57291 293.795 -3.64919 231.65 25.7913 176.702C262.781 -265.586 670.881 -604.082 1173.4 -775.589C1218.42 -790.861 1269.28 -769.283 1285.89 -728.023C1302.49 -686.788 1279.07 -640.121 1234.06 -624.853L1234.22 -624.38L1234.06 -624.853C773.617 -467.716 400.722 -157.954 183.277 247.549C174.35 263.032 173.358 281.248 180.3 297.638C187.239 315.83 201.114 329.464 219.909 337.635L220.108 337.177L219.909 337.635C255.53 353.075 299.103 339.474 315.962 307.616C586.373 -195.123 1108.52 -529.998 1712.31 -589.573C1782.02 -595.881 1852.71 -575.151 1905.72 -531.901C1957.75 -488.652 1988.16 -426.492 1988.16 -361.645C1988.16 -244.555 1893.96 -146.335 1768.29 -134.619L1768.28 -134.619C1475.06 -105.717 1199.54 17.1169 991.912 213.118C975.085 228.565 967.145 249.484 970.117 270.423C971.113 281.366 977.074 304.103 1002.82 318.649C1032.51 335.906 1070.13 332.285 1093.9 310.459L1093.91 310.452C1307.26 106.497 1594.35 -5.41394 1901.12 -5.41394C1992.56 -5.41394 2083.02 4.51367 2170.52 24.368C2256.93 44.1955 2323.66 102.766 2348.19 182.031L2348.19 182.036C2373.71 261.296 2351.14 345.065 2288.33 404.529Z'
          ></path>
        </svg>
      </motion.div>
    </motion.div>
  );

  return Otherability;
}

export default Otherability;
