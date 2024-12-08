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
    minisrc: 'https://3o.hk/images/2024/05/22/IMG_2951-2.jpg',
    src: 'https://3o.hk/images/2024/05/22/IMG_2951.jpg',
  },
  {
    href: '/life',
    type: 'image',
    duration: null,
    minisrc: 'https://img.picgo.net/2024/12/06/3l85d36c2c9a367805.jpg',
    src: 'https://3o.hk/images/2024/01/21/IMG_0895.png',
  },
  {
    href: '/life',
    type: 'image',
    duration: null,
    minisrc: 'https://img.picgo.net/2024/12/06/47f3a4cd4d00d453f.jpg',
    src: 'https://3o.hk/images/2024/01/21/IMG_0875.png',
  },
  {
    href: '/life',
    type: 'image',
    duration: null,
    minisrc: 'https://3o.hk/images/2024/05/22/IMG_08432.png',
    src: 'https://3o.hk/images/2024/01/21/IMG_0843.png',
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
