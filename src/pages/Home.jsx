import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  easeInOut,
} from "framer-motion";
import Navbar from "../conponent/NavBar/Navbar";
import Education from "../conponent/Education";
import WhyMe from "../conponent/WhyMe";
import AboutMe from "../conponent/AboutMe";
import WorkExperience from "../conponent/WorkExperience";
import Capability from "./Capability";
import KeyFeature from "../conponent/KeyFeature";
import Welcome from "../conponent/Welocome";
import Contact from "../conponent/Contact";
import SubNav from "../conponent/subNav";
import Carousel from "../conponent/Carousel";
import Database from "../Database.json";
import { useAppContext } from "../help/ContextManager";
import { hideRow, bgPic, useLanguage, SelectText } from "../help/helpFunction";

const bg = Database.PersonalInfo.Welcomebg[0];
const HomeCarousel = [
  {
    href: "/life",
    type: "image",
    duration: null,
    minisrc: "https://3o.hk/images/2024/05/22/welcomebg2.jpg",
    src: "https://3o.hk/images/2024/01/14/welcomebg.jpg",
  },
  {
    href: "/life",
    type: "image",
    duration: null,
    minisrc: "https://3o.hk/images/2024/05/22/IMG_2951-2.jpg",
    src: "https://3o.hk/images/2024/05/22/IMG_2951.jpg",
  },
  {
    href: "/life",
    type: "image",
    duration: null,
    minisrc: "https://3o.hk/images/2024/05/22/IMG_08952.png",
    src: "https://3o.hk/images/2024/01/21/IMG_0895.png",
  },
  {
    href: "/life",
    type: "image",
    duration: null,
    minisrc: "https://3o.hk/images/2024/05/25/IMG_08752.png",
    src: "https://3o.hk/images/2024/01/21/IMG_0875.png",
  },
  {
    href: "/life",
    type: "image",
    duration: null,
    minisrc: "https://3o.hk/images/2024/05/22/IMG_08432.png",
    src: "https://3o.hk/images/2024/01/21/IMG_0843.png",
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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const keyfeature = Database.PersonalInfo.WhyMe[lang];

  // 页面加载完成后自动播放视频
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);
  const ref = useRef(null);

  return (
    <div className="relative overflow-x-hidden transition-all bg-gray-200">
      <Navbar topTextColor={true} />

      <Carousel interval={5000}>
        {HomeCarousel.map((media, index) => (
          <a
            key={index}
            href={media.href}
            className="z-50 flex w-[100vw] h-[100vh] bg-cover bg-center Carousel-item"
            style={{
              backgroundImage: `url(${windowWidth < 768 ? media.minisrc : media.src})`,
            }}
          >
            {/* <Welcome /> */}
          </a>
        ))}
      </Carousel>
      <div
        className="bg-center bg-no-repeat bg-cover "
        style={
          {
            // backgroundImage: `url(${HomeCarousel[0].src})`,
          }
        }
      >
        <div className="backdrop-blur-[10px] bg-white/20 ">
          <Education />
        </div>
      </div>

      <KeyFeature />
      <Capability />
      <WorkExperience />
      <AboutMe />
      <WhyMe />
      <Contact />
    </div>
  );
}

export default Home;
