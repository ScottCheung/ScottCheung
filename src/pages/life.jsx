/** @format */

import { useLayoutEffect, useState } from 'react';
import Navbar from '../conponent/NavBar/Navbar';
import Contact from '../conponent/Contact';
import database from '../data/Database.json';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../help/helpFunction';
import Story from '../pages/story/story';
import LifeCategory from '../conponent/lifeCategory';

const Lifes = database.PersonalInfo.Lifes;
const introText = [
  {
    title: 'Embracing Life, Creating My Story',
    quato:
      'Life is not just about passing time, but about filling every moment with meaning.',
    content:
      'I believe in living passionately, in embracing every sunrise with curiosity and every challenge with courage. Life is not just a journey—it’s a masterpiece that I create with my own hands, filled with adventure, laughter, and love. I cherish the people who walk this path with me, those who bring warmth, inspiration, and strength. Every connection, every moment, every experience shapes the story I tell. And I choose to make it extraordinary. This is my life—bold, vibrant, and deeply felt. 🌿',
  },
  {
    title: '热爱生活，书写我的故事',
    quato: '人生不仅仅是时间的流逝，而是赋予每一刻真正的意义。',
    content:
      '我热爱生活，喜欢用好奇去迎接每一个清晨，用勇气去面对每一次挑战。人生不是一场简单的旅程，而是一幅我亲手描绘的画卷，充满探索、欢笑与热爱。我珍惜那些与我同行的人，他们带来温暖、灵感与力量。每一段关系、每一个瞬间、每一次经历，都是构成我故事的重要篇章。而我选择，让它熠熠生辉。这就是我的人生——大胆、鲜活、充满力量。🌿✨',
  },
];

export default function Life() {
  const lang = useLanguage();
  const text = introText[lang];
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useLayoutEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className='overflow-hidden'>
      <Navbar topTextColor={true} />
      <main>
        <div
          className='relative flex items-center content-center justify-center pt-16 pb-32'
          style={{
            minHeight: '100vh',
          }}
        >
          <motion.div
            initial={{ opacity: 0.95, y: '60px', scale: 0.95 }}
            transition={{ ease: [0.455, 0.03, 0.515, 0.955], duration: 0.7 }}
            whileInView={{ opacity: 1, y: '0px', scale: 1 }}
            className='absolute top-0 w-full h-[110%] bgrid-colsenter bgrid-colsover'
            style={{
              backgroundImage:
                "url('https://img.picgo.net/2025/03/19/IMG_48462ed652b541841a51.jpg')",
              backgroundPosition: 'top',
              backgroundSize: 'cover',
            }}
          >
            <span
              id='blackOverlay'
              className='absolute w-full h-full bg-gradient-to-b from-black/40 via-black/10 via-[200px] to-transparent '
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

        <section className='py-[50px] bg-gray-100 '>
          <LifeCategory />
          <div className='visblecontainer'>
            <div className='flex items-center justify-between '>
              <div className='relative z-20 w-full h-full'>
                <div className='right-0 w-full '>
                  <h1 className='animate__animated animate__zoomIn text-black font-semibold lg:text-[70px] text-[35px]'>
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
          </div>
        </section>
        <Story />
      </main>
      <Contact />
    </div>
  );
}
