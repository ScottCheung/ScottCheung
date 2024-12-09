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
    <motion.div className='h-auto rounded-[28px] col-span-12  md:col-span-6 lg:col-span-8'>
      <motion.div
        className='bg-black rounded-[28px] pb-[33%] '
        style={{
          backgroundImage: `url(https://cia.hyperos.mi.com/hyperos-homepage/footer_vela_bg_pc.png)`,
          backgroundSize: '100% auto',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right bottom',
          filter: 'contrast(110%)',
        }}
      >
        {/* Skill */}
        <motion.div className='  p-[20px] lg:p-[36px]  '>
          {Object.entries(Skill.skills[lang]).map(([category, list], index) => (
            <motion.div
              key={index + 'skill'}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.9 }}
              className='flex flex-col text-gradient py-[15px] gap-[5px] md:pb-[45px]'
            >
              <h2 className='font-[600] text-gray-200 text-[30px] typography-subsection-headline'>
                {' '}
                {category}
              </h2>

              <p className='text-left text-[15px] text-gray-400 lg:text-[20px] '>
                {list.join('  ｜  ')}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );

  return Otherability;
}

export default Otherability;
