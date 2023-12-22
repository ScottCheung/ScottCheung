import React, { useState, useEffect } from 'react';
import Database from '../../Datebase.json';
import { motion, AnimatePresence } from "framer-motion"
import { LazyMotion, domAnimation, m } from "framer-motion"
import { Link } from 'react-router-dom';  

// loaddata
const language = Database.PersonalInfo.Capability.language
const personality = Database.PersonalInfo.Capability.personality
// animation
const StagerFadeInUp = Database.Animation.Transition.StagerFadeInUp
const WelcomeContainer = Database.Animation.Variant.WelcomeContainer
const WelcomeItem = Database.Animation.Variant.WelcomeItem
const ProgressBar = Database.Animation.Variant.ProgressBar
const ProgressBarContainer = Database.Animation.Variant.ProgressBarContainer
const ProgressBarItem = Database.Animation.Variant.ProgressBarItem

function Capability () {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const Capability = (
      <>
  <div className="section-intro section-sapphire" >
    <h2 className="typography-section-intro-headline section-intro-headline">
      Capability
    </h2>
  </div>
  <div className="grid container section-sapphire">
    {/* stack */}
  <div
      className="grid-item large-span-12 tile-body-no-pad-left tile-body-no-pad-right tile-body-no-pad-bottom grid-item-stickers"
      data-analytics-section-engagement="name:all your stickers in one place"
      data-tile-name="stickers"
    >
        <div className="tile tile-rounded">
        <div className="tile-content bg-white">
          {/* Front-end */}
          <div className="tile-header">
            <h3 className="tile-headline typography-subsection-headline">
            Front-end
            </h3>
            <div className='grid grid-cols-5'>
                <div className='flex justify-center items-center flex-col w-24'>
                  <img src="https://www.svgrepo.com/show/17134/html-file-with-code-symbol.svg" alt="" />
                  <p className='text-2xl text-black'>HTML</p>
                </div>
                <div className='flex justify-center items-center flex-col w-24'>
                  <img src="https://www.svgrepo.com/show/521591/css.svg" alt="" />
                  <p className='text-2xl text-black'>CSS</p>
                </div>
                <div className='flex justify-center items-center flex-col w-24'>
                  <img src="https://www.svgrepo.com/show/510028/javascript-file.svg" alt="" />
                  <p className='text-2xl text-black'>JavaScript</p>
                </div>
                <div className='flex justify-center items-center flex-col w-24'>
                  <img src="https://www.svgrepo.com/show/473768/react.svg" alt="" />
                  <p className='text-2xl text-black'>React</p>
                </div>
                <div className='flex justify-center items-center flex-col'>
                  <img  className='w-24' src="https://www.svgrepo.com/show/333609/tailwind-css.svg" alt="" />
                  <p className='text-2xl text-black'>Tailwind</p>
                </div>
                <div className='flex justify-center items-center flex-col w-24'>
                  <img src="https://www.svgrepo.com/show/371686/animation.svg" alt="" />
                  <p className='text-2xl text-black'>Framer motion</p>
                </div>
                <div className='flex justify-center items-center flex-col w-24'>
                  <img src="https://www.svgrepo.com/show/473768/react.svg" alt="" />
                  <p className='text-2xl text-black'>React</p>
                </div>
                <div className='flex justify-center items-center flex-col w-24'>
                  <img src="https://www.svgrepo.com/show/38133/ui8.svg" alt="" />
                  <p className='text-[8px] text-black text-center'></p>
                </div>
            </div>
          </div>
          {/* Back-end */}
          <div className="tile-header">
            <h3 className="tile-headline typography-subsection-headline">
            Backend
            </h3>
            <div className='grid grid-cols-5'>
                <div className='flex justify-center items-center flex-col w-24'>
                  <img src="https://www.svgrepo.com/show/510150/python-file.svg" alt="" />
                  <p className='text-2xl text-black'>Python</p>
                </div>
                <div className='flex justify-center items-center flex-col w-24'>
                  <img src="https://www.svgrepo.com/show/473736/nodejs.svg" alt="" />
                  <p className='text-2xl text-black'>NodeJS</p>
                </div>
                <div className='flex justify-center items-center flex-col w-24'>
                  <img src="https://www.svgrepo.com/show/74933/json-file.svg" alt="" />
                  <p className='text-2xl text-black'>Json</p>
                </div>
                <div className='flex justify-center items-center flex-col w-24'>
                  <img src="https://www.svgrepo.com/show/532228/table-list.svg" alt="" />
                  <p className='text-2xl text-black'>TablePlus</p>
                </div>
            </div>
          </div>
          {/* Database */}
          <div className="tile-header">
            <h3 className="tile-headline typography-subsection-headline">
            Database
            </h3>
            <div className='grid grid-cols-5'>
                <div className='flex justify-center items-center flex-col w-24'>
                  <img src="https://www.svgrepo.com/show/394296/mysql.svg" alt="" />
                  <p className='text-2xl text-black'>MySQL</p>
                </div>
                <div className='flex justify-center items-center flex-col w-24'>
                  <img src="https://www.svgrepo.com/show/473760/postgresql.svg" alt="" />
                  <p className='text-2xl text-black'>PostgreSQL</p>
                </div>
            </div>
          </div>
          {/* Algorithm */}
          <div className="tile-header">
            <h3 className="tile-headline typography-subsection-headline">
            Algorithm
            </h3>
            <div className='grid grid-cols-5'>
                <div className='flex justify-center items-center flex-col w-24'>
                  <img src="https://www.svgrepo.com/show/17134/html-file-with-code-symbol.svg" alt="" />
                  <p className='text-2xl text-black'>ML</p>
                </div>
                <div className='flex justify-center items-center flex-col w-24'>
                  <img src="https://www.svgrepo.com/show/521591/css.svg" alt="" />
                  <p className='text-2xl text-black'>DL</p>
                </div>
                <div className='flex justify-center items-center flex-col w-24'>
                  <img src="https://www.svgrepo.com/show/521714/js.svg" alt="" />
                  <p className='text-2xl text-black'>NLP</p>
                </div>
                <div className='flex justify-center items-center flex-col w-24'>
                  <img src="https://www.svgrepo.com/show/521714/js.svg" alt="" />
                  <p className='text-2xl text-black'>RS</p>
                </div>
            </div>
          </div>
          {/* Other */}
          <div className="tile-header">
            <h3 className="tile-headline typography-subsection-headline">
            Other
            </h3>
            <div className='grid grid-cols-5'>
                <div className='flex justify-center items-center flex-col w-24'>
                  <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="" />
                  <p className='text-2xl text-black'>Github</p>
                </div>
                <div className='flex justify-center items-center flex-col w-24'>
                  <img src="https://www.svgrepo.com/show/438984/ssh.svg" alt="" />
                  <p className='text-2xl text-black'>SSH</p>
                </div>
            </div>
          </div>



        </div>
      </div>
    </div>
    {/* row1-left */}
    <div
      
      className="grid-item large-span-6 small-span-12 grid-item-send-menu"
    >
      <div className="tile tile-rounded" >
        <div className="tile-content" style={{ background: "linear-gradient(135deg,#3d44c3,#6dffe8)"}}>
          <div className='content-between'>
              <div className="tile-header">
                <h3 className="tile-headline typography-subsection-headline text-white">
                  Good User
                </h3>
              </div>
              <div className="tile-body">
                <div class="flex justify-center items-center w-full h-full grid grid-cols-5 content-center mb-24 " >
                  <img src="https://cdn.worldvectorlogo.com/logos/word-1.svg" alt="Word"/>
                  <img src="https://cdn.worldvectorlogo.com/logos/excel-4.svg" alt="Excel"/>
                  <img src="https://cdn.worldvectorlogo.com/logos/powerpoint-2.svg" alt="PPT" />
                  <img src="https://cdn.worldvectorlogo.com/logos/adobe-photoshop-2.svg" alt="PS" />
                  <img src="https://cdn.worldvectorlogo.com/logos/after-effects-1.svg" alt="AE"/>
                  <img src="https://cdn.worldvectorlogo.com/logos/adobe-illustrator-cc-icon.svg" alt="AI"/>
                  <img src="https://cdn.worldvectorlogo.com/logos/adobe-photoshop-lightroom-cc-icon.svg" alt="AI"/>
                  <img src="https://cdn.worldvectorlogo.com/logos/adobe-indesign-cc-icon.svg" alt="AI"/>
                  <img src="https://cdn.worldvectorlogo.com/logos/premiere-pro-cc.svg" alt="AI"/>
                  <img src="https://cdn.worldvectorlogo.com/logos/adobe-audition-cc-icon-2020-.svg" alt="AI"/>
                  <div class="flex-shrink-0">
                  <img className='bg-white rounded-2xl px-4 py-4' src="https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg" alt="AI"/>
                  </div>
                  <img src="https://cdn.worldvectorlogo.com/logos/pycharmedu-icon.svg" alt="AI"/>
                  <img src="https://cdn.worldvectorlogo.com/logos/clion-1.svg" alt="AI"/>
                  <img src="https://cdn.worldvectorlogo.com/logos/webstorm-icon.svg" alt="AI"/>
                  <img src="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" alt="AI"/>
                  <img src="https://www.icloud.com/system/icloud.com/2404Project58/43f50d5d6df53dc6bddf56d7ceb257d0.png" alt="Keynote"/>
                  <img src="https://www.icloud.com/system/icloud.com/2404Project58/3c581ce16ec89eedc1d6862e31ccd8b3.png" alt="Pages"/>
                  <img src="https://www.icloud.com/system/icloud.com/2404Project58/f5b837094af69a157a6fc7f413e04fb7.png" alt="Numbers"/>
                  <div class="square-image object-center">
                  <img className='bg-white rounded-2xl p-4' src="https://cdn.worldvectorlogo.com/logos/tailwind-css-1.svg" alt="AI"/>
                  </div>
                  <img src="https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg" alt="AI"/>
                  <div class="square-image">
                  <img className='bg-white rounded-2xl p-4' src="https://cdn.worldvectorlogo.com/logos/material-ui-1.svg" alt="AI"/>
                  </div>
                  <div class=" square-image">
                  <img className='bg-white rounded-2xl px-3 py-2 ' src="https://cdn.worldvectorlogo.com/logos/element-ui-1.svg" alt="AI"/>
                  </div>
                  <img src="https://cdn.worldvectorlogo.com/logos/framer-motion.svg" alt="Pages"/>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    {/* row1-right-with-button */}
    <div
      className="grid-item large-span-6 small-span-12 grid-item-check-in will-change carnival-item-in-view min-h-[550px]"
      data-component-list="CarnivalInlineVideo TileOverlay WillChange"
      data-analytics-section-engagement="name:let your friend know when you arrive safely"
      data-tile-name="check-in"
    >
      <div className="tile tile-rounded tile-with-overlay">
        <div className="tile-content"
        style={{
          backgroundImage: `url(/Graphs/capability/code.jpg)`,
          backgroundSize: '100% auto',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center bottom'
        }}>
          <div className="tile-header">
            <h3 className="tile-headline typography-subsection-headline">
              High Quality? Not just for code
            </h3>
            <p className="tile-copy typography-subsection-copy">
            As a perfectionist, I approach every project I handle with a commitment to high quality, ensuring that every aspect is flawless. 
            </p>
          </div>
          <div className="tile-body">
            <div className="overview-messages-image-container large-centered">
              <figure
                role="img"
                className="overview-messages-check-in"
                aria-label="顯示平安通報的訊息。"
                data-anim-lazy-image-download-complete=""
              />
              <span aria-hidden="true">
                <div className="inline-video-container inline-video-check-in inline-video-is-webm loaded ended">
                  <video
                    data-inline-media=""
                    data-inline-media-basepath="/105/media/us/ios/ios-17/2023/c9a831f8-a45b-4e07-9759-de93afc14b8e/anim/check-in/"
                    data-inline-media-plugins="AnimLoad, ViewportMimeTypeSource"
                    playsInline=""
                    muted=""
                    preload="none"
                    excludedsizes="xlarge"
                    src="/105/media/us/ios/ios-17/2023/c9a831f8-a45b-4e07-9759-de93afc14b8e/anim/check-in/large_2x.webm"
                  />
                  <figure
                    className="start-frame"
                    aria-hidden="true"
                    data-anim-lazy-image-download-complete=""
                  />
                  <figure
                    className="static-frame end-frame"
                    aria-hidden="true"
                    data-anim-lazy-image-download-complete=""
                  />
                </div>
              </span>
            </div>
          </div>
        </div>
        <input
          type="checkbox"
          className="tile-overlay-toggle"
          id="tile-overlay-toggle-check-in"
        />
        <div className="tile-overlay" >
          <label
            tabIndex={0}
            className="tile-button-wrapper"
            htmlFor="tile-overlay-toggle-check-in"
          >
            <span className="tile-button">
              <svg
                className="tile-icon-alt"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M18.5,8.51h-7v-7A1.5,1.5,0,0,0,10,0h0A1.5,1.5,0,0,0,8.5,1.5v7h-7a1.5,1.5,0,0,0,0,3h7v7A1.5,1.5,0,0,0,10,20h0a1.5,1.5,0,0,0,1.5-1.5v-7h7a1.5,1.5,0,0,0,0-3Z" />
              </svg>
            </span>
            <span
              className="tile-button-text"
              role="button"
              aria-expanded="false"
              aria-controls="content-toggle-check-in"
            >
              <span className="visuallyhidden">
                進一步了解讓親友知道你已平安抵達。
              </span>
            </span>
          </label>
          <div
            className="tile-overlay-content" 
            style={{ background: "linear-gradient(135deg,#3d44c3,#6dffe8)"}}
          >
            <div className="tile-overlay-header" id="content-toggle-check-in">
              <h3 className="tile-overlay-headline typography-subsection-headline">
              High Quality? Not just for code
              </h3>
            </div>
            <div className="tile-overlay-body">
              <p className="tile-overlay-copy typography-subsection-copy">
              I meticulously consider details such as code quality, user usability, aesthetics, and more. Perfection, for me, extends across all facets of the project and life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* row2-left */}
    <div
      className="grid-item large-span-8 medium-span-6 small-span-12 grid-item-swipe-reply carnival-item-in-view h-auto"
      data-component-list="CarnivalInlineVideo"
      data-analytics-section-engagement="name:catch up and swipe to reply"
      data-tile-name="swipe-reply"
    >
      <div className="tile tile-rounded">
        <div className="tile-content bg-white">
          {/* Front-end */}
          <div className="tile-header">
            <h3 className="tile-headline typography-subsection-headline">
            Front-end
            </h3>
            <div className='grid grid-cols-5'>
                <div className='flex justify-center items-center flex-col w-24'>
                  <img src="https://www.svgrepo.com/show/17134/html-file-with-code-symbol.svg" alt="" />
                  <p className='text-2xl text-black'>HTML</p>
                </div>
                <div className='flex justify-center items-center flex-col w-24'>
                  <img src="https://www.svgrepo.com/show/521591/css.svg" alt="" />
                  <p className='text-2xl text-black'>CSS</p>
                </div>
                <div className='flex justify-center items-center flex-col w-24'>
                  <img src="https://www.svgrepo.com/show/510028/javascript-file.svg" alt="" />
                  <p className='text-2xl text-black'>JavaScript</p>
                </div>
                <div className='flex justify-center items-center flex-col w-24'>
                  <img src="https://www.svgrepo.com/show/473768/react.svg" alt="" />
                  <p className='text-2xl text-black'>React</p>
                </div>
                <div className='flex justify-center items-center flex-col'>
                  <img  className='w-24' src="https://www.svgrepo.com/show/333609/tailwind-css.svg" alt="" />
                  <p className='text-2xl text-black'>Tailwind</p>
                </div>
                <div className='flex justify-center items-center flex-col w-24'>
                  <img src="https://www.svgrepo.com/show/371686/animation.svg" alt="" />
                  <p className='text-2xl text-black'>Framer motion</p>
                </div>
                <div className='flex justify-center items-center flex-col w-24'>
                  <img src="https://www.svgrepo.com/show/473768/react.svg" alt="" />
                  <p className='text-2xl text-black'>React</p>
                </div>
                <div className='flex justify-center items-center flex-col w-24'>
                  <img src="https://www.svgrepo.com/show/38133/ui8.svg" alt="" />
                  <p className='text-[8px] text-black text-center'></p>
                </div>
            </div>
          </div>
          {/* Back-end */}
          <div className="tile-header">
            <h3 className="tile-headline typography-subsection-headline">
            Backend
            </h3>
            <div className='grid grid-cols-5'>
                <div className='flex justify-center items-center flex-col w-24'>
                  <img src="https://www.svgrepo.com/show/510150/python-file.svg" alt="" />
                  <p className='text-2xl text-black'>Python</p>
                </div>
                <div className='flex justify-center items-center flex-col w-24'>
                  <img src="https://www.svgrepo.com/show/473736/nodejs.svg" alt="" />
                  <p className='text-2xl text-black'>NodeJS</p>
                </div>
                <div className='flex justify-center items-center flex-col w-24'>
                  <img src="https://www.svgrepo.com/show/74933/json-file.svg" alt="" />
                  <p className='text-2xl text-black'>Json</p>
                </div>
            </div>
          </div>
          {/* Database */}
          <div className="tile-header">
            <h3 className="tile-headline typography-subsection-headline">
            Database
            </h3>
            <div className='grid grid-cols-5'>
                <div className='flex justify-center items-center flex-col w-24'>
                  <img src="https://www.svgrepo.com/show/394296/mysql.svg" alt="" />
                  <p className='text-2xl text-black'>MySQL</p>
                </div>
                <div className='flex justify-center items-center flex-col w-24'>
                  <img src="https://www.svgrepo.com/show/473760/postgresql.svg" alt="" />
                  <p className='text-2xl text-black'>PostgreSQL</p>
                </div>
            </div>
          </div>
          {/* Algorithm */}
          <div className="tile-header">
            <h3 className="tile-headline typography-subsection-headline">
            Algorithm
            </h3>
            <div className='grid grid-cols-5'>
                <div className='flex justify-center items-center flex-col w-24'>
                  <img src="https://www.svgrepo.com/show/17134/html-file-with-code-symbol.svg" alt="" />
                  <p className='text-2xl text-black'>ML</p>
                </div>
                <div className='flex justify-center items-center flex-col w-24'>
                  <img src="https://www.svgrepo.com/show/521591/css.svg" alt="" />
                  <p className='text-2xl text-black'>DL</p>
                </div>
                <div className='flex justify-center items-center flex-col w-24'>
                  <img src="https://www.svgrepo.com/show/521714/js.svg" alt="" />
                  <p className='text-2xl text-black'>NLP</p>
                </div>
                <div className='flex justify-center items-center flex-col w-24'>
                  <img src="https://www.svgrepo.com/show/521714/js.svg" alt="" />
                  <p className='text-2xl text-black'>RS</p>
                </div>
            </div>
          </div>
          {/* Other */}
          <div className="tile-header">
            <h3 className="tile-headline typography-subsection-headline">
            Other
            </h3>
            <div className='grid grid-cols-5'>
                <div className='flex justify-center items-center flex-col w-24'>
                  <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="" />
                  <p className='text-2xl text-black'>Github</p>
                </div>
                <div className='flex justify-center items-center flex-col w-24'>
                  <img src="https://www.svgrepo.com/show/438984/ssh.svg" alt="" />
                  <p className='text-2xl text-black'>SSH</p>
                </div>
            </div>
          </div>



        </div>
      </div>
    </div>
    {/* row2-right */}
    <div
      className="grid-item large-span-4 medium-span-6 small-span-12 grid-item-search min-h-[830px]"
      data-analytics-section-engagement="name:search filters"
      data-tile-name="search"
    >
      <div className="tile tile-rounded" >
        <div className="tile-content bg-[#fed9d3]"
        style={{
          backgroundImage: `url(/Graphs/capability/infp.jpg)`,
          backgroundSize: '100% auto',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center bottom'
        }}>
          <div className="tile-header">
            <div className='flex justify-between'>
                <h3 className="tile-headline typography-subsection-headline py-4 text-gray-600">
                  Personality 
                </h3>
                <a href="https://www.16personalities.com/infp-personality" className="tile-headline text-xl typography-subsection-headline py-4 text-white">
                INFP 
                </a>
            </div>
            <motion.div 
            variants={ProgressBarContainer}
            initial="hidden"
            whileInView="visible"
            // viewport={{ once: true }}
            className='space-y-8 '>
            {personality.map((personality, index) => (
            <div>
                <div 
                  key={index}
                  className= {`${personality.color1+" "+personality.color2} flex justify-between bg-gradient-to-r text-transparent bg-clip-text`}>
                      <div className="text-2xl font-normal">{personality.name}</div>
                      <div className="typography-subsection-copy">{personality.label}</div>
                  </div>
                  <div className="w-full bg-white rounded-full h-4 mb-4 dark:bg-gray-700">
                    <motion.div
                      key={index}
                      variants={{
                        "hidden": { "width": "0%"},
                        "visible": {
                          "width": `${personality.colum}`
                        }
                      }}
                      transition={ProgressBar}
                      className={`${personality.color1+" "+personality.color2} bg-gradient-to-r  h-4 rounded-full`}
                      style={{ width: `0%` }}
                    ></motion.div>
                  </div>
                </div>))}
              </motion.div>
          </div>
          <motion.div 
          variants={ProgressBarContainer}
          initial="hidden"
          whileInView="visible"
          // viewport={{ once: true }}
          className="tile-header">
            <div className='flex justify-between'>
                <h3 className="tile-headline typography-subsection-headline py-4 text-gray-600">
                Language 
                </h3>
                <a href="https://en.wikipedia.org/wiki/Multilingualism" className="tile-headline text-xl typography-subsection-headline py-4 text-white">
                Multi-language 
                </a>
            </div>
              <div className='space-y-8'>
              {language.map((personality, index) => (<div>
                <div 
                  key={index}
                  className= {`${personality.color1+" "+personality.color2} flex justify-between bg-gradient-to-r text-transparent bg-clip-text`}>
                      <div className="text-2xl font-normal">{personality.name}</div>
                      <div className="typography-subsection-copy">{personality.label}</div>
                  </div>
                  <div className="w-full bg-white rounded-full h-4 mb-4 dark:bg-gray-700">
                  <motion.div
                      key={index}
                      variants={{
                        "hidden": { "width": "0%"},
                        "visible": {
                          "width": `${personality.colum}`
                        }
                      }}
                      transition={ProgressBar}
                      className={`${personality.color1+" "+personality.color2} bg-gradient-to-r  h-4 rounded-full`}
                      style={{ width: `0%` }}
                    ></motion.div>
                  </div>
                </div>))}
              </div>
          </motion.div>

        </div>
      </div>
    </div>
    <div
      className="grid-item large-span-6 small-span-12 grid-item-location"
      data-analytics-section-engagement="name:a new way to share and view locations"
      data-tile-name="location"
    >
      <div className="tile tile-rounded">
        <div className="tile-content">
          <div className="tile-header">
            <h3 className="tile-headline typography-subsection-headline">
              以新方式分享和檢視位置
            </h3>
            <p className="tile-copy typography-subsection-copy">
              使用加號按鈕分享你的位置，或要求好友分享所在的位置。還可在對話中，直接查看對方分享的位置。
            </p>
          </div>
          <div className="tile-body">
            <glass-container
              className="glass-hardware portrait-hardware1 large-centered"
              data-anim-lazy-image-download-complete=""
            >
              <glass-hardware
                role="img"
                aria-label="iPhone 上的 iMessage 顯示使用者正在分享他們的位置。"
              />
              <glass-screen></glass-screen>
            </glass-container>
          </div>
        </div>
      </div>
    </div>
    <div
      className="grid-item large-span-6 small-span-12 grid-item-transcript"
      data-analytics-section-engagement="name:read an audio message from transcription"
      data-tile-name="transcript"
    >
      <div className="tile tile-rounded">
        <div className="tile-content">
          <div className="tile-header">
            <h3 className="tile-headline typography-subsection-headline">
              將語音訊息轉換為文字
            </h3>
            <p className="tile-copy typography-subsection-copy">
              語音訊息現在可以轉換成文字，讓你當下看到內容並於稍後再聽。
            </p>
          </div>
          <div className="tile-body">
            <figure
              role="img"
              className="overview-messages-transcript large-centered"
              aria-label="聽寫記錄展示未打開的語音訊息內容被轉換成文字。"
              data-anim-lazy-image-download-complete=""
            />
          </div>
        </div>
      </div>
    </div>

    

  </div>
      </>
  );

  return (
    <div>
      {Capability}
    </div>
  );
}

export default Capability;
