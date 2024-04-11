import React, { useEffect, useRef } from 'react';
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
import Hero from '../pages/Hero';
import Database from '../Datebase.json';
import { preloadImages } from '../help/helpFunction';
import { motion, useTime, AnimatePresence } from 'framer-motion';
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
    src: 'https://picsum.photos/1920/1080?2',
  },
  {
    href: '/life',
    type: 'image',
    duration: null,
    src: 'https://picsum.photos/1920/1080?3',
  },
  {
    href: '/life',
    type: 'image',
    duration: null,
    src: 'https://picsum.photos/1080/1920?4',
  },
  {
    href: '/life',
    type: 'image',
    duration: null,
    src: 'https://picsum.photos/1080/1920?5',
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

  return (
    <div className='overflow-hidden relative'>
      <Navbar topTextColor={true} />
      <div className='w-full  overflow-hidden transition-all duration-0  fixed'>
        <Carousel interval={3000}>
          {HomeCarousel.map((media, index) => (
            <a
              key={index}
              href={media.href}
              className='w-full h-full overflow-hidden relative '
            >
              <div>
                <span className='bg-black/50 w-full h-full absolute z-20'></span>
                {media.type === 'image' ? (
                  <img className='gradient-mask' src={media.src} alt='' />
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
                {media.duration && <p>播放时长：{media.duration}</p>}
              </div>
            </a>
          ))}
        </Carousel>
      </div>
      <div className='w-full h-[100vh]   -z-50'></div>
      <div className='absolute z-40 -mt-[85px] w-full flex justify-center '>
        {' '}
        <SubNav />
      </div>

      <div className='-mt-[3%] rounded-[35px] lg:mx-[28px] md:mx-[14px]  overflow-visible   bg-gradient-to-b from-white/30 backdrop-blur-[15px] to-gray-50/90 dark:bg-gray-450  z-30 shadow-[15px]'>
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
      </div>
    </div>
  );
}

export default Home;
