import React, { useState, useEffect } from 'react';
import Database from '../Datebase.json';
import { Link } from 'react-router-dom';  

const data = Database.PersonalInfo.SelfDescribing
const floateMenu = {
  start: { opacity: 0, scale: 0 },
  end: {
    scale: 1,
    opacity: 1,
  }
};

function SelfDescribing () {
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
  
  const SelfDescribing = (
    <div id="SelfDescribing" class="">
      
          <section class=" -about section-image " 
              style={{backgroundImage: 'url(./contact.jpg)'}}>
              <div class="container block">
              <h2 class="  animate__animated animate__slideInUp text-8xl font-bold my-12 py-24 font-mono"><i class="fi fi-rr-chart-user mr-3 pt-3"></i>Self Describing</h2>
                  <div class="-about-content pb-48">

                      <blockquote class="">
                          <div class="  animate__animated animate__zoomIn rounded-full">
                              <div class=" rounded-full animate__animated animate__slideInUp alignright  ">
                                  <img width="200"
                                      className='rounded-full bg-gray-400'
                                      srcset="./avatar.jpg 1290w, ./avatar.jpg 160w, ./avatar.jpg 600w, ./avatar.jpg 300w, ./avatar.jpg 1024w, ./avatar.jpg 150w, ./avatar.jpg 768w"
                                      sizes="(max-width: 1290px) 100vw, 1290px"></img>
                              </div>
                          </div>
                          <p class=" block  animate__animated animate__slideInUp text-white">“I am a person who is positive about every aspect of life. There are many things I like
                              to do, to see, and to experience. I like to read, I like to write; I like to think, I
                              like to dream; I like to talk, I like to listen. I like to see the sunrise in the
                              morning, I like to see the moonlight at night; I like to feel the music flowing on my
                              face, I like to smell the wind coming from the ocean. I like to look at the clouds in
                              the sky with a blank mind, I like to do thought experiment when I cannot sleep in the
                              middle of the night. I like flowers in spring, rain in summer, leaves in autumn, and
                              snow in winter. I like to sleep early, I like to get up late; I like to be alone, I
                              like to be surrounded by people. I like country’s peace, I like metropolis’ noise; I
                              like the beautiful west lake in Hangzhou, I like the flat cornfield in Champaign. I
                              like delicious food and comfortable shoes; I like good books and romantic movies. I
                              like the land and the nature, I like people. And, I like to laugh.”</p>
                      </blockquote>

                  </div>
              </div>
          </section>

    </div>
  );

  return (
    <div>
      {SelfDescribing}
    </div>
  );
}

export default SelfDescribing;
