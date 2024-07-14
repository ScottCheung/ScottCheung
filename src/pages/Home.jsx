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
import Contact from '../conponent/Contact';
import Carousel from '../conponent/Carousel';
import Database from '../data/Database.json';
import { useAppContext } from '../help/ContextManager';
import { useLanguage } from '../help/helpFunction';

const HomeCarousel = [
  {
    href: '/life',
    type: 'image',
    duration: null,
    minisrc: 'https://3o.hk/images/2024/05/22/welcomebg2.jpg',
    src: 'https://3o.hk/images/2024/01/14/welcomebg.jpg',
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
    minisrc: 'https://3o.hk/images/2024/05/22/IMG_08952.png',
    src: 'https://3o.hk/images/2024/01/21/IMG_0895.png',
  },
  {
    href: '/life',
    type: 'image',
    duration: null,
    minisrc: 'https://3o.hk/images/2024/05/25/IMG_08752.png',
    src: 'https://3o.hk/images/2024/01/21/IMG_0875.png',
  },
  {
    href: '/life',
    type: 'image',
    duration: null,
    minisrc: 'https://3o.hk/images/2024/05/22/IMG_08432.png',
    src: 'https://3o.hk/images/2024/01/21/IMG_0843.png',
  },
];

function Home() {
  const { Components, setComponents, whymeCard, setWhymeCard } =
    useAppContext();
  const lang = useLanguage();
  const keyfeature = Database.PersonalInfo.WhyMe[lang];
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [scrollbarWidth, setScrollbarWidth] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    const div = document.createElement('div');
    div.style.visibility = 'hidden';
    div.style.overflow = 'scroll';
    document.body.appendChild(div);
    const scrollbarWidth = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);
    setScrollbarWidth(scrollbarWidth);

    setViewportHeight(window.innerHeight);
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

  return (
    <div
      className={`relative flex flex-col w-full items-center justify-center transition-all  bg-gray-200`}
    >
      <Navbar topTextColor={true} viewwidth={viewwidth} />
      <Carousel HomeCarousel={HomeCarousel} interval={5000}></Carousel>
      <Education />
      <KeyFeature />
      <Capability />
      <WorkExperience />
      <AboutMe viewwidth={viewwidth} />
      <WhyMe />
      <Contact />
    </div>
  );
}

export default Home;
