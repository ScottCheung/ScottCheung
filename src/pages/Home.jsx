import React, { useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  easeInOut,
} from "framer-motion";
import Navbar from "../conponent/Navbar";
import Education from "../conponent/Education";
import WhyMe from "../conponent/WhyMe";
import SelfDescribing from "../conponent/SelfDescribing";
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
import WhyMeCard from "../conponent/WhyMeCard";

const bg = Database.PersonalInfo.Welcomebg[0];
const HomeCarousel = [
  {
    href: "/life",
    type: "image",
    duration: null,
    src: "https://3o.hk/images/2024/01/14/welcomebg.jpg",
  },
  {
    href: "/life",
    type: "image",
    duration: null,
    src: "https://3o.hk/images/2024/01/21/IMG_0958.png",
  },
  {
    href: "/life",
    type: "image",
    duration: null,
    src: "https://3o.hk/images/2024/01/21/IMG_0895.png",
  },
  {
    href: "/life",
    type: "image",
    duration: null,
    src: "https://3o.hk/images/2024/01/21/IMG_0875.png",
  },
  {
    href: "/life",
    type: "image",
    duration: null,
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
  const keyfeature = Database.PersonalInfo.WhyMe[lang];

  // 页面加载完成后自动播放视频
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);
  const ref = useRef(null);

  return (
    <div className="relative overflow-hidden transition-all bg-gray-200">
      <Navbar topTextColor={true} />

      <Carousel interval={3000}>
        {HomeCarousel.map((media, index) => (
          <a
            key={index}
            href={media.href}
            className="z-50 flex w-full h-full bg-cover Carousel-item"
            style={{
              backgroundImage: `url(${media.src})`,
            }}
          >
            <Welcome />
            {/* 
            {media.type === "image" ? (
              <img
                className="object-cover object-left w-full h-full"
                src={media.src}
                alt=""
              />
            ) : (
              <iframe
                width="1920px"
                height="1080px"
                src="https://www.youtube.com/embed/HAnw168huqA?si=e-ptNjN-B9h_TxdH"
                //   title='YouTube video player'
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            )} */}
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
      <SelfDescribing />
      <WhyMe />
      <Contact />
      {Components.whymeCard === "visible" && <WhyMeCard />}
    </div>
  );
}

export default Home;
