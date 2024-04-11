import React, { useEffect, useRef } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  easeInOut,
} from 'framer-motion';
import Navbar from '../conponent/Navbar';
import StudyExperience from '../conponent/StudyExperience';
import WhyMe from '../conponent/WhyMe';
import SelfDescribing from '../conponent/SelfDescribing';
import WorkExperience from '../conponent/WorkExperience';
import Capability from '../conponent/Capability';
import KeyFeature from '../conponent/KeyFeature';
import Welcome from '../conponent/Welocome';
import Contact from '../conponent/Contact';
import SubNav from '../conponent/subNav';
import Carousel from '../conponent/Carousel';
import Database from '../Datebase.json';

const bg = Database.PersonalInfo.Welcomebg[0];
const HomeCarousel = [
  {
    href: '/life',
    type: 'image',
    duration: null,
    src: bg,
  },
  {
    href: '/life',
    type: 'image',
    duration: null,
    src: 'https://3o.hk/images/2024/01/21/IMG_0958.png',
  },
  {
    href: '/life',
    type: 'image',
    duration: null,
    src: 'https://3o.hk/images/2024/01/21/IMG_0895.png',
  },
  {
    href: '/life',
    type: 'image',
    duration: null,
    src: 'https://3o.hk/images/2024/01/21/IMG_0875.png',
  },
  {
    href: '/life',
    type: 'image',
    duration: null,
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
  const videoRef = useRef(null);

  // 页面加载完成后自动播放视频
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 0 ', '7% 7%'],
  });

  // 根据滚动进度计算位移
  const y = useTransform(scrollYProgress, [0, 1], [7, 0]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], [35, 0]);
  const targetValue = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const opacity = useTransform(targetValue, [0, 70], [0.2, 5]);
  const margin = useTransform(scrollYProgress, [0, 1], ['10%', '0%']);
  return (
    <div className='relative overflow-hidden'>
      <Navbar topTextColor={true} />
      <div className='w-full ref={ref}  overflow-hidden transition-all duration-0  fixed'>
        <Carousel interval={3000}>
          {HomeCarousel.map((media, index) => (
            <a
              key={index}
              href={media.href}
              className='w-full h-full object-cover overflow-hidden  '
              style={{
                backgroundImage: `url(${media.src})`,
                backgroundRepeat: 'repeat',
              }}
            >
              <Welcome />
              <span className='bg-black/50 w-full h-full object-cover absolute z-20'></span>
              {media.type === 'image' ? (
                <img
                  className='w-full h-full object-cover object-left'
                  src={media.src}
                  alt=''
                />
              ) : (
                <iframe
                  width='1920px'
                  height='1080px'
                  src='https://www.youtube.com/embed/HAnw168huqA?si=e-ptNjN-B9h_TxdH'
                  //   title='YouTube video player'
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  referrerpolicy='strict-origin-when-cross-origin'
                  allowfullscreen
                ></iframe>
              )}
            </a>
          ))}
        </Carousel>
      </div>
      <div className='w-full h-[100vh]   -z-50'></div>
      <div className='relative z-40 -mt-[85px] w-full flex justify-center '>
        <SubNav />
      </div>
      <motion.div
        style={{
          // y,
          borderRadius,
          opacity,
          marginLeft: margin,
          marginRight: margin,
        }}
        className='-mt-[30px] relative rounded-[35px] overflow-hidden backdrop-blur-[15px] bg-white/70 dark:bg-sky-950/20  z-30 shadow-[15px]'
      >
        {/* <div className='-mt-[70px] absolute min-h-[100px] w-full flex justify-center '> */}

        {/* </div> */}
        <StudyExperience />
        <KeyFeature />
        <Capability />
        <SelfDescribing />
        <WorkExperience />
        <WhyMe />
        <Contact />
        {/* <div className='py-[400px]'>111</div> */}
      </motion.div>
      <span className=''></span>
    </div>
  );
}

export default Home;
