/** @format */

import { useLayoutEffect, useState } from 'react';
import Navbar from '../conponent/NavBar/Navbar';
import Contact from '../conponent/Contact';
import database from '../data/Database.json';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../help/helpFunction';
import { Link } from 'react-router-dom';
import LifeCategory from '../conponent/lifeCategory';

const Lifes = database.PersonalInfo.Lifes;
const introText = [
  {
    title: 'My story starts with you.',
    content:
      'You are the beginning of my story, a key player in my life. Every moment spent with you is a good time, and your presence makes my life richer and fuller. You are my strong pillar of support in the midst of the storm, and it is because of you that the good life has become so indispensable. Thank you, I love you.',
  },
  {
    title: '我的故事始于你',
    content:
      '你是我故事的开端，生命中的关键角色。与你共度的每一刻都是美好，你的存在让我的生活变得更加丰富完整。在风雨中，你是我坚强的支柱，因为有了你，美好生活才变得如此不可或缺。感恩有你❤。',
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
            className='absolute top-0 w-full h-full bgrid-colsenter bgrid-colsover'
            style={{
              backgroundImage:
                "url('https://3o.hk/images/2024/01/20/IMG_0742.png')",
              backgroundPosition: 'top',
              backgroundSize: 'cover',
            }}
          >
            <span
              id='blackOverlay'
              className='absolute w-full h-full bg-black opacity-60'
            ></span>
          </motion.div>
          <div className='relative mx-auto '>
            <div className='flex items-center justify-between'>
              <div className='w-full px-4 ml-auto mr-auto text-right'>
                <div className='container'>
                  <div className='lg:w-12/4 md:w-12/6 flex justify-end lg:mt-[500px] mt-[-40px]'>
                    <p className='lg:w-6/12 animate__animated animate__fadeInUp mt-4 sm:text-[20px] text-[15px] text-gray-300 text-justify'>
                      {text.content}
                    </p>
                  </div>
                  <h1 className='animate__animated animate__zoomIn text-white font-semibold lg:text-[70px] text-[35px]'>
                    {text.title}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className='pt-20 bg-gray-300 '>
          <LifeCategory />
          <div className='visblecontainer'>
            <div className='text-center text-[30px]'>
              {' '}
              PAGE is developing...Looking forward to seeing you with more
              Content!{' '}
            </div>
            <div className='text-center text-[30px] pb-[200px]'>
              {' '}
              网页正在开发中...期待更多内容与您见面!{' '}
            </div>
            <div className='flex items-center justify-between hidden mt-32'>
              <div className='w-full px-4 ml-auto mr-auto md:w-5/12'>
                <div className='inline-flex items-center justify-center w-16 h-16 p-3 mb-6 text-center text-gray-600 bg-gray-100 rounded-full shadow-lg'>
                  <i className='text-xl fas fa-user-friends'></i>
                </div>
                <h3 className='mb-2 text-3xl font-semibold leading-normal'>
                  Working with us is a pleasure
                </h3>
                <p className='mt-4 mb-4 text-lg font-light leading-relaxed text-gray-700'>
                  Don't let your uses guess by attaching tooltips and popoves to
                  any element. Just make sure you enable them first via
                  JavaScript.
                </p>
                <p className='mt-0 mb-4 text-lg font-light leading-relaxed text-gray-700'>
                  The kit comes with three pre-built pages to help you get
                  started faster. You can change the text and images and you're
                  good to go. Just make sure you enable them first via
                  JavaScript.
                </p>
                <a
                  href='https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation'
                  className='mt-8 font-bold text-gray-800'
                >
                  Check Tailwind Starter Kit!
                </a>
              </div>

              <div className='w-full px-4 ml-auto mr-auto md:w-4/12'>
                <div className='relative flex flex-col w-full min-w-0 mb-6 break-words bg-white bg-pink-600 rounded-lg shadow-lg'>
                  <img
                    loading='lazy'
                    alt='...'
                    src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auhref=format&fit=crop&w=1051&q=80'
                    className='w-full align-middle rounded-t-lg'
                  />
                  <blockquote className='relative p-8 mb-4'>
                    <svg
                      preserveAspectRatio='none'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 583 95'
                      className='absolute left-0 block w-full'
                      style={{
                        height: '95px',
                        top: '-94px',
                      }}
                    >
                      <polygon
                        points='-30,95 583,95 583,65'
                        className='text-pink-600 fill-current'
                      ></polygon>
                    </svg>
                    <h4 className='text-xl font-bold text-white'>
                      Top Notch Services
                    </h4>
                    <p className='mt-2 font-light text-white text-md'>
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer, and that process will
                      continue whatever happens.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 
        <section className="pt-20 pb-48 ">
          <div className="px-4 mx-auto visblecontainer">
            <div className="flex justify-center justify-between mb-24 text-center">
              <div className="w-full px-4 lg:w-6/12">
                <h2 className="text-4xl font-semibold">
                  Here are our heroes
                </h2>
                <p className="m-4 text-lg leading-relaxed text-gray-600">
                  According to the National Oceanic and Atmospheric
                  Administration, Ted, Scambos, NSIDClead scentist, puts the
                  potentially record maximum.
                </p>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="w-full px-4 mb-12 md:w-6/12 lg:w-3/12 lg:mb-0">
                <div className="px-6">
                  <img loading="lazy"
                    alt="..."
                    src={"/Graphs/home/bg.jpg"}
                    className="max-w-full mx-auto rounded-full shadow-lg"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      Ryan Tompson
                    </h5>
                    <p className="mt-1 text-sm font-semibold text-gray-500 uppercase">
                      Web Developer
                    </p>
                    <div className="mt-6">
                      <button
                        className="w-8 h-8 mb-1 mr-1 text-white bg-blue-400 rounded-full outline-none focus:outline-none"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="w-8 h-8 mb-1 mr-1 text-white bg-blue-600 rounded-full outline-none focus:outline-none"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                      <button
                        className="w-8 h-8 mb-1 mr-1 text-white bg-pink-500 rounded-full outline-none focus:outline-none"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 mb-12 md:w-6/12 lg:w-3/12 lg:mb-0">
                <div className="px-6">
                  <img loading="lazy"
                    alt="..."
                    src={"/Graphs/home/bg.jpg"}
                    className="max-w-full mx-auto rounded-full shadow-lg"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      Romina Hadid
                    </h5>
                    <p className="mt-1 text-sm font-semibold text-gray-500 uppercase">
                      Marketing Specialist
                    </p>
                    <div className="mt-6">
                      <button
                        className="w-8 h-8 mb-1 mr-1 text-white bg-red-600 rounded-full outline-none focus:outline-none"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="w-8 h-8 mb-1 mr-1 text-white bg-blue-600 rounded-full outline-none focus:outline-none"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 mb-12 md:w-6/12 lg:w-3/12 lg:mb-0">
                <div className="px-6">
                  <img loading="lazy"
                    alt="..."
                    src={"/Graphs/home/bg.jpg"}
                    className="max-w-full mx-auto rounded-full shadow-lg"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      Alexa Smith
                    </h5>
                    <p className="mt-1 text-sm font-semibold text-gray-500 uppercase">
                      UI/UX Designer
                    </p>
                    <div className="mt-6">
                      <button
                        className="w-8 h-8 mb-1 mr-1 text-white bg-red-600 rounded-full outline-none focus:outline-none"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="w-8 h-8 mb-1 mr-1 text-white bg-blue-400 rounded-full outline-none focus:outline-none"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="w-8 h-8 mb-1 mr-1 text-white bg-gray-800 rounded-full outline-none focus:outline-none"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 mb-12 md:w-6/12 lg:w-3/12 lg:mb-0">
                <div className="px-6">
                  <img loading="lazy"
                    alt="..."
                    src={"/Graphs/home/bg.jpg"}
                    className="max-w-full mx-auto rounded-full shadow-lg"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                      Jenna Kardi
                    </h5>
                    <p className="mt-1 text-sm font-semibold text-gray-500 uppercase">
                      Founder and CEO
                    </p>
                    <div className="mt-6">
                      <button
                        className="w-8 h-8 mb-1 mr-1 text-white bg-pink-500 rounded-full outline-none focus:outline-none"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                      <button
                        className="w-8 h-8 mb-1 mr-1 text-white bg-red-600 rounded-full outline-none focus:outline-none"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="w-8 h-8 mb-1 mr-1 text-white bg-blue-400 rounded-full outline-none focus:outline-none"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="w-8 h-8 mb-1 mr-1 text-white bg-gray-800 rounded-full outline-none focus:outline-none"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* <section className="relative block pb-20 bg-gray-900">
          <div
            className="absolute top-0 left-0 right-0 bottom-auto w-full -mt-20 overflow-hidden pointer-events-none"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-900 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="px-4 mx-auto visblecontainer lg:pt-24 lg:pb-64">
            <div className="flex justify-center justify-between text-center">
              <div className="w-full px-4 lg:w-6/12">
                <h2 className="text-4xl font-semibold text-white">
                  Build something
                </h2>
                <p className="mt-4 mb-4 text-lg leading-relaxed text-gray-500">
                  Put the potentially record low maximum sea ice extent tihs year down to low ice.
                  According to the National Oceanic and Atmospheric Administration, Ted, Scambos.
                </p>
              </div>
            </div>
            <div className="flex justify-center justify-between mt-12">
              <div className="w-full px-4 text-center lg:w-3/12">
                <div className="inline-flex items-center justify-center w-12 h-12 p-3 text-gray-900 bg-white rounded-full shadow-lg">
                  <i className="text-xl fas fa-medal"></i>
                </div>
                <h6 className="mt-5 text-xl font-semibold text-white">
                  Excelent Services
                </h6>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full px-4 text-center lg:w-3/12">
                <div className="inline-flex items-center justify-center w-12 h-12 p-3 text-gray-900 bg-white rounded-full shadow-lg">
                  <i className="text-xl fas fa-poll"></i>
                </div>
                <h5 className="mt-5 text-xl font-semibold text-white">
                  Grow your market
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full px-4 text-center lg:w-3/12">
                <div className="inline-flex items-center justify-center w-12 h-12 p-3 text-gray-900 bg-white rounded-full shadow-lg">
                  <i className="text-xl fas fa-lightbulb"></i>
                </div>
                <h5 className="mt-5 text-xl font-semibold text-white">
                  Launch time
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </section> */}
      </main>
      <Contact />
    </div>
  );
}
