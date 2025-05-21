/** @format */

import React, { useEffect, useRef, useState } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  easeInOut,
} from 'framer-motion';
import Navbar from '../conponent/NavBar/Navbar';
import Education from '../conponent/Education';
import WhyMe from '../conponent/WhyMe';
import AboutMe from '../conponent/AboutMe';
import WorkExperience from '../conponent/workData';
import Capability from './Capability';
import KeyFeature from '../conponent/KeyFeature';
import Contact from '../conponent/Contact';
import GoldenNav from '../conponent/GoldenNav';
import Carousel from '../conponent/Carousel2';
import Log from '../conponent/Log';
import Database from '../data/Database.json';
import { useAppContext } from '../help/ContextManager';
import { hideRow, bgPic, useLanguage, SelectText } from '../help/helpFunction';
import { Header } from '../ui/hero-parallax';

const bg = Database.PersonalInfo.Welcomebg[0];
// const path = '../';
const HomeCarousel = [
  {
    href: 'https://medium.com/@scott5443003/what-makes-a-good-component-in-react-8858a1ab7b5c',
    type: 'image',
    x: '56vw',
    y: '-420px',
    tag: ['Read the Essay', '阅读原文'],
    header: ['What Makes a Good Component?', '什么是一个好组件？'],
    des: [
      'Ever wondered why some components feel buttery smooth while others lag? What makes a component truly "good" — performance, beauty, stability, or reusability? Dive into my thoughts!',
      '有没有想过，为什么有些组件丝滑流畅，而有些卡顿迟钝？什么才是好组件？性能？美观？稳定？复用？来看看我的分享吧',
    ],
    duration: 5,

    minisrc: 'czs',
    src: 'https://img.picgo.net/2024/12/09/3l8b1011477c0506cc.jpg',
  },
  {
    href: 'https://appt.link/swimming-H87sIi0z/web-conference',
    type: 'video',
    x: '66vw',
    y: '-520px',
    tag: ['Book', '立即预约'],
    header: ['Coffee Catch Up?', '一起喝个咖啡吧'],
    des: [
      'Let’s meet for a relaxed coffee chat. Share your stories, your dreams, or anything you’d like. Or if you have opportunities to collaborate, let’s connect!',
      '想找个人轻松聊聊天？分享你的故事、你的梦想，或者探讨合作的机会？一起喝杯咖啡吧',
    ],
    duration: 5,
    src: `video/22.MOV`,
  },
  {
    href: 'https://appt.link/swimming-H87sIi0z/study-together',
    type: 'image',
    x: '56vw',
    y: '-520px',
    tag: ['Book', '立即预约'],
    header: ['Study Together?', '一起学习，约图书馆吗？'],
    des: [
      'Need a study buddy? Let’s hit the library, focus, and encourage each other to grow!',
      '想找学习搭子？我们可以一起去图书馆专注努力，一起进步～',
    ],
    duration: 5,
    minisrc: 'https://img.picgo.net/2024/12/09/5e39d2ea1a917a07b.jpg',
    src: 'https://img.picgo.net/2025/03/18/5l163d3bf3a2f2c513.jpg',
  },

  {
    href: 'https://appt.link/swimming-H87sIi0z/in-person-meeting',
    type: 'video',
    x: '5vw',
    y: '-320px',
    tag: ['Book', '立即预约'],
    header: ['Swimming Time!', '游泳，必须是我的最爱!'],
    des: [
      'Weekend swim date? I love swimming! Let’s dive into the water and enjoy the cool vibes.',
      '周末一起去游泳吧，我超爱游泳！一起跳进水里，享受清凉和快乐！',
    ],
    duration: 7,
    src: `video/swimming.mov`,
  },

  {
    href: 'https://appt.link/swimming-H87sIi0z/photograph',
    type: 'image',
    x: '15vw',
    y: '-470px',
    tag: ['Book', '立即预约'],
    header: ['Capture Memories', '我们一起拍好看的照片'],
    des: [
      'Want to go somewhere beautiful and take amazing photos? Let’s explore and create memories together!',
      '想去美丽的地方拍照留念？一起去吧，留下属于我们的美好回忆～',
    ],
    duration: 5,
    minisrc: 'https://img.picgo.net/2024/12/09/4ad634cc94fd1b09f.jpg',
    src: 'https://img.picgo.net/2025/03/18/home3793114672391e8ca.jpg',
  },

  {
    href: 'https://appt.link/swimming-H87sIi0z/',
    type: 'image',
    x: '5vw',
    y: '-470px',
    tag: ['Book', '立即预约'],
    header: ['Outdoor Adventure?', '想试试户外运动吗?'],
    des: [
      "Want to enjoy the outdoors but don’t want to go alone? Hiking, jogging, tennis — let's sweat and have fun together!",
      '想出去运动，但一个人有点无聊？徒步、快走、跑步、打网球……叫上我，一起流汗、一起快乐！',
    ],
    duration: 5,

    minisrc: 'https://img.picgo.net/2024/12/06/15cb61b12c6e29e02.jpg',
    src: 'https://img.picgo.net/2024/12/06/1lbc776b9e142932e9.jpg',
  },

  {
    href: 'https://appt.link/swimming-H87sIi0z/deep-talk',
    type: 'image',
    x: '60vw',
    y: '-470px',
    tag: ['Book', '立即预约'],
    tag: ['Book', '立即预约'],
    header: ['Deep Talks', '深度交谈'],
    des: [
      'Sometimes, a deep conversation can light up the heart. Let’s talk about life, dreams, and everything in between.',
      '有时候，来一场深度交谈，能点亮心灵。聊聊人生、梦想和一切美好吧～',
    ],
    duration: 5,
    minisrc: 'https://img.picgo.net/2024/12/06/2560312f7ac7f2885.jpg',
    src: 'https://img.picgo.net/2024/12/06/2l5853d37bc2e76060.jpg',
  },
  {
    href: 'https://appt.link/swimming-H87sIi0z/photograph',
    type: 'image',
    x: '37vw',
    y: '-470px',
    tag: ['Book', '立即预约'],
    header: ['Explore New Places', '一起探索新风景'],
    des: [
      'Let’s discover new scenic spots together. Hike, stroll, and enjoy every breathtaking view!',
      '一起去探索新的美景吧！徒步、漫步，感受每一处令人惊叹的风光～',
    ],
    duration: 5,
    minisrc: 'https://img.picgo.net/2024/12/09/4ad634cc94fd1b09f.jpg',
    src: 'https://img.picgo.net/2024/12/09/4lf9c1d356de742391.jpg',
  },
];

function Home() {
  const { Components, setComponents, whymeCard, setWhymeCard } =
    useAppContext();
  const videoRef = useRef(null);
  const lang = useLanguage();
  const keyfeature = Database.PersonalInfo.WhyMe[lang];
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [scrollbarWidth, setScrollbarWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  useEffect(() => {
    const div = document.createElement('div');
    div.style.visibility = 'hidden';
    div.style.overflow = 'scroll';
    document.body.appendChild(div);
    const scrollbarWidth = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);
    setScrollbarWidth(scrollbarWidth);
  }, []);
  const viewwidth = window.innerWidth - scrollbarWidth;

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);
  const ref = useRef(null);

  return (
    <div
      draggable={false}
      className={`relative flex flex-col items-center w-[${viewwidth}px]  overflow-x-clip  bg-[#f5f5f7]`}
    >
      <Navbar topTextColor={true} setIsPaused={setIsPaused} />
      {/* <Log /> */}
      <Carousel
        HomeCarousel={HomeCarousel}
        interval={3000}
        isPaused={isPaused}
        setIsPaused={setIsPaused}
      ></Carousel>

      <GoldenNav />
      <WorkExperience />
      <AboutMe />
      <div className='lg:-mt-[25vh] flex w-full'>
        <Education />
      </div>

      <KeyFeature viewwidth={viewwidth} />
      <Capability />

      <WhyMe mt={true} />
      <Contact />
    </div>
  );
}

export default Home;
