/** @format */

import { useLayoutEffect, useState } from 'react';
import Navbar from '../conponent/NavBar/Navbar';
import Contact from '../conponent/Contact';
import database from '../data/Database.json';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../help/helpFunction';
import Story from './story/story';
import LifeCategory from '../conponent/lifeCategory';
import Music from '../conponent/music';

const Lifes = database.PersonalInfo.Lifes;
const introText = [
  {
    title: 'The Rhythm of My Life',
    quato:
      'Music is not just sound—it’s emotion, memory, and the heartbeat of life. Every note tells a story, and every melody paints a picture of who I am.',
    content:
      'I believe that life has its own rhythm, and music is the soundtrack that fills every moment with meaning. From the quiet whispers of a rainy afternoon to the electrifying beats of a late-night drive, every song carries a piece of my heart. Music inspires me, heals me, and reminds me that I am never alone. With every lyric and melody, I create my own story—one that is passionate, bold, and unforgettable. 🎵✨',
  },
  {
    title: '音乐，生命的律动',
    quato:
      '音乐不仅仅是旋律，它是情感、记忆，也是生命的脉搏。每一个音符都在诉说，每一首旋律都在描绘属于我的故事。',
    content:
      '我相信生活有自己的节奏，而音乐，就是填满每个瞬间的灵魂之声。从细雨微风中的轻吟，到深夜公路上的震撼节拍，每一首歌都承载着我的心情与回忆。音乐激励我、治愈我，也让我知道，我从未孤单。用旋律书写人生，让音符点缀梦想，我的故事，由音乐谱写，激情、自由、无法忘怀。🎵✨',
  },
];

export default function Life() {
  const lang = useLanguage();
  const text = introText[lang];

  document.body.style.overflowX = 'hidden';
  return (
    <div
      draggable={false}
      className={`w-screen h-full overflow-hidden flex flex-col`}
    >
      <Navbar />

      <div
        style={{
          paddingInline:
            window.innerWidth > 1024 &&
            'calc(60vw - min(1680px, var(--global-viewport-content-responsive)) / 2)',
        }}
        className='py-[50px] pt-[150px] bg-gray-100 px-[10px] lg:px-[30px]'
      >
        <div className='flex items-center justify-center min-h-screen px-6 text-left'>
          <div className='relative z-20 w-full max-w-4xl  lg:max-w-[1200px] gap-y-[20px]'>
            <h1 className='animate_animated animate__zoomIn text-black font-black lg:text-[50px] text-[35px] mb-6'>
              {text.title}
            </h1>
            <blockquote className='animate_animated my-[50px] border-sky-500 animate__fadeInUp mt-4 sm:text-[20px] text-[15px] text-gray-600 italic border-l-4  pl-[30px]'>
              {text.quato}
            </blockquote>
            <p className='animate_animated animate__fadeInUp mb-[50px] mt-4 sm:text-[20px] text-[15px] text-gray-600 leading-relaxed'>
              {text.content}
            </p>
            <Music />
          </div>
        </div>
      </div>

      <Contact />
    </div>
  );
}
