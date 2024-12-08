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
import WorkExperience from '../conponent/WorkExperience';
import Capability from './Capability';
import KeyFeature from '../conponent/KeyFeature';
import Welcome from '../conponent/Welocome';
import Contact from '../conponent/Contact';
import SubNav from '../conponent/subNav';
import Carousel from '../conponent/Carousel';
import Log from '../conponent/Log';
import Database from '../data/Database.json';
import { useAppContext } from '../help/ContextManager';
import { hideRow, bgPic, useLanguage, SelectText } from '../help/helpFunction';

const bg = Database.PersonalInfo.Welcomebg[0];
const HomeCarousel = [
  {
    href: '/life',
    type: 'image',
    duration: null,
    minisrc: 'https://img.picgo.net/2024/12/06/15cb61b12c6e29e02.jpg',
    src: 'https://img.picgo.net/2024/12/06/1lbc776b9e142932e9.jpg',
  },
  {
    href: '/life',
    type: 'image',
    duration: null,
    minisrc: 'https://img.picgo.net/2024/12/06/2560312f7ac7f2885.jpg',
    src: 'https://img.picgo.net/2024/12/06/2l5853d37bc2e76060.jpg',
  },
  {
    href: '/life',
    type: 'image',
    duration: null,
    minisrc: 'https://img.picgo.net/2024/12/06/15cb61b12c6e29e02.jpg',
    src: 'https://img.picgo.net/2024/12/06/1lbc776b9e142932e9.jpg',
  },
  {
    href: '/life',
    type: 'image',
    duration: null,
    minisrc: 'https://img.picgo.net/2024/12/09/3d2edd6b52c4ac6f0.jpg',
    src: 'https://img.picgo.net/2024/12/09/3l8b1011477c0506cc.jpg',
  },
  {
    href: '/life',
    type: 'image',
    duration: null,
    minisrc: 'https://img.picgo.net/2024/12/09/4ad634cc94fd1b09f.jpg',
    src: 'https://img.picgo.net/2024/12/09/4lf9c1d356de742391.jpg',
  },

  //   {
  //     href: '/life',
  //     type: 'video',
  //     duration: '50s',
  //     src: 'flowbite.com/docs/videos/flowbite.mp4',
  //   },
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
      className={`relative flex flex-col items-center w-[${viewwidth}px] transition-all bg-gray-200 ${windowWidth < 1080 ? 'overflow-x-hidden' : ''} `}
    >
      <Navbar topTextColor={true} />
      <Log />
      <Carousel HomeCarousel={HomeCarousel} interval={3000}></Carousel>

      <Education />

      <KeyFeature viewwidth={viewwidth} />
      <Capability />
      <WorkExperience />
      <AboutMe />
      <WhyMe />
      <Contact />
    </div>
  );
}

export default Home;
