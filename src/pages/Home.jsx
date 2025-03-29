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

const bg = Database.PersonalInfo.Welcomebg[0];
// const path = '../';
const HomeCarousel = [
  {
    href: '/life',
    type: 'image',
    duration: 3,

    minisrc: 'https://img.picgo.net/2024/12/09/3d2edd6b52c4ac6f0.jpg',
    src: 'https://img.picgo.net/2024/12/09/3l8b1011477c0506cc.jpg',
  },

  {
    href: '/life',
    type: 'video',
    duration: 7,
    src: `video/swimming.mov`,
  },
  {
    href: '/life',
    type: 'image',
    duration: 3,

    minisrc: 'https://img.picgo.net/2024/12/06/15cb61b12c6e29e02.jpg',
    src: 'https://img.picgo.net/2024/12/06/1lbc776b9e142932e9.jpg',
  },
  {
    href: '/life',
    type: 'video',
    duration: 3,
    src: `video/22.MOV`,
  },

  {
    href: '/life',
    type: 'image',
    duration: 3,
    minisrc: 'https://img.picgo.net/2024/12/09/5e39d2ea1a917a07b.jpg',
    src: 'https://img.picgo.net/2025/03/18/5l163d3bf3a2f2c513.jpg',
  },

  {
    href: '/life',
    type: 'image',
    duration: 3,
    minisrc: 'https://img.picgo.net/2024/12/09/4ad634cc94fd1b09f.jpg',
    src: 'https://img.picgo.net/2025/03/18/home3793114672391e8ca.jpg',
  },
  {
    href: '/life',
    type: 'image',
    duration: 3,
    minisrc: 'https://img.picgo.net/2024/12/06/2560312f7ac7f2885.jpg',
    src: 'https://img.picgo.net/2024/12/06/2l5853d37bc2e76060.jpg',
  },
  {
    href: '/life',
    type: 'image',
    duration: 3,
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
      <Navbar topTextColor={true} />
      <Log />
      <Carousel HomeCarousel={HomeCarousel} interval={3000}></Carousel>

      <GoldenNav />

      <Education />

      <KeyFeature viewwidth={viewwidth} />
      <Capability />
      <WorkExperience />
      <AboutMe />
      <WhyMe mt={true} />
      <Contact />
    </div>
  );
}

export default Home;
