/** @format */

import { useLayoutEffect, useState } from 'react';
import Navbar from '../conponent/NavBar/Navbar';
import Contact from '../conponent/Contact';
import database from '../data/Database.json';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../help/helpFunction';
import Story from '../pages/story/story';
import LifeCategory from '../conponent/lifeCategory';
import Music from '../conponent/music';

const Lifes = database.PersonalInfo.Lifes;
const introText = [
  {
    title: 'Embracing Life, Creating My Story',
    quato:
      'Life is not just about passing time, but about filling every moment with meaning.I believe that in this world, there is always a beam of light belongs to me, there is always a stage belongs to me, and there is always a person who comes for me.',
    content:
      'I believe in living passionately, in embracing every sunrise with curiosity and every challenge with courage. Life is not just a journey—it’s a masterpiece that I create with my own hands, filled with adventure, laughter, and love. I cherish the people who walk this path with me, those who bring warmth, inspiration, and strength. Every connection, every moment, every experience shapes the story I tell. And I choose to make it extraordinary. This is my life—bold, vibrant, and deeply felt. 🌿✨',
  },
  {
    title: '热爱生活，书写我的故事',
    quato:
      '人生不仅仅是时间的流逝，而是赋予每一刻真正的意义。我相信这个世界上，总有一束光是属于我的，总有一个舞台是属于我的，总有一个人是为我而来的。',
    content:
      '我热爱生活，喜欢用好奇去迎接每一个清晨，用勇气去面对每一次挑战。人生不是一场简单的旅程，而是一幅我亲手描绘的画卷，充满探索、欢笑与热爱。我珍惜那些与我同行的人，他们带来温暖、灵感与力量。每一段关系、每一个瞬间、每一次经历，都是构成我故事的重要篇章。而我选择，让它熠熠生辉。这就是我的人生——大胆、鲜活、充满力量。🌿✨',
  },
];

export default function Life() {
  const lang = useLanguage();
  const text = introText[lang];
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // useLayoutEffect(() => {
  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };
  //   window.addEventListener('resize', handleResize);
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  document.body.style.overflowX = 'hidden';
  return (
    <div
      draggable={false}
      className={`w-screen h-full overflow-hidden flex flex-col`}
    >
      <Navbar topTextColor={true} />

      <div className='relative flex items-center  h-[50vh] lg:h-[110vh] content-center justify-center '>
        <motion.div
          initial={{ opacity: 0.95, y: '60px', scale: 0.95 }}
          transition={{ ease: [0.455, 0.03, 0.515, 0.955], duration: 0.7 }}
          whileInView={{ opacity: 1, y: '0px', scale: 1 }}
          className='absolute top-0 w-full h-full overflow-hidden'
          style={{
            backgroundImage:
              "url('https://img.picgo.net/2025/03/19/IMG_48462ed652b541841a51.jpg')",
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
          }}
        >
          <span
            id='blackOverlay'
            className='absolute w-full h-full bg-gradient-to-b from-black/40 via-transparent via-70% to-black/30 '
          ></span>
          <svg
            data-v-226d292e=''
            viewBox='0 0 1440 62'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={`absolute bottom-0 left-0 right-0 z-20 scale-105`}
          >
            <path
              data-v-226d292e=' '
              d='M0 0c106.167 13.333 399.8 62 725 62s612.17-48.667 715-62v62H0V0z'
              fill='#f5f5f7'
            ></path>
          </svg>
        </motion.div>
      </div>

      <div
        style={{
          paddingInline:
            window.innerWidth > 1024 &&
            'calc(60vw - min(1680px, var(--global-viewport-content-responsive)) / 2)',
        }}
        className='py-[50px] bg-gray-100 px-[10px] lg:px-[30px]'
      >
        <LifeCategory />
        {/* <div>
          <div className='flex items-center justify-between '>
            <div className='relative z-20 w-full h-full'>
              <div className='right-0 w-full '>
                <h1 className='animate__animated animate__zoomIn text-black font-black lg:text-[50px] text-[35px] mb-[30px]'>
                  {text.title}
                </h1>
                <quato className='animate__animated animate__fadeInUp mt-4 sm:text-[20px] text-[15px] text-gray-600 text-justify'>
                  {text.quato}
                </quato>
                <p className='animate__animated animate__fadeInUp mt-4 sm:text-[20px] text-[15px] text-gray-600 text-justify'>
                  {text.content}
                </p>
              </div>
            </div>
          </div>
        </div> */}

        <div className='flex items-center justify-center min-h-screen px-6 text-left'>
          <div className='relative z-20 w-full max-w-4xl  lg:max-w-[1200px] gap-y-[20px]'>
            <h1 className='animate__animated animate__zoomIn text-black font-black lg:text-[50px] text-[35px] mb-6'>
              {text.title}
            </h1>
            <blockquote className='animate__animated my-[50px] border-sky-500 animate__fadeInUp mt-4 sm:text-[20px] text-[15px] text-gray-600 italic border-l-4  pl-[30px]'>
              {text.quato}
            </blockquote>
            <p className='animate__animated animate__fadeInUp mb-[50px] mt-4 sm:text-[20px] text-[15px] text-gray-600 leading-relaxed'>
              {text.content}
            </p>
            <Music />
          </div>
        </div>
      </div>

      <Story />

      {/* <Contact /> */}
    </div>
  );
}
