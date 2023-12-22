import React, { useState, useEffect } from 'react';
import Database from '../Datebase.json';
import { Link } from 'react-router-dom';  

const data = Database.PersonalInfo.SelfDescribing

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
    <div id="SelfDescribing" class="rounded-3xl">
      
          <section class="hestia-about section-image " id="about" data-sorder="hestia_about"
              style={{backgroundImage: 'url(./contact.jpg)'}}>
              <div class="container">
              <h2 class="animate__animated animate__slideInUp text-8xl font-bold my-12 py-24 font-mono">Self Describing</h2>
                  <div class="row hestia-about-content">

                      <blockquote class="wp-block-quote has-text-align-left is-style-plain has-text-color"
                          style={{color: '#abb7c29e'}}>
                          <div class="animate__animated animate__zoomIn wp-block-image is-style-rounded">
                              <figure class="animate__animated animate__slideInUp alignright size-full is-resized wp-duotone-unset-1">
                                  <img decoding="async"
                                      src="./Xianzhe&#39;s Personal Page – Welcome to my Page_files/IMG_6753-2.jpg"
                                      alt="" class="wp-image-13" style={{width: '200px'}} width="200"
                                      srcset="./avatar.jpg 1290w, ./avatar.jpg 160w, ./avatar.jpg 600w, ./avatar.jpg 300w, ./avatar.jpg 1024w, ./avatar.jpg 150w, ./avatar.jpg 768w"
                                      sizes="(max-width: 1290px) 100vw, 1290px"></img>
                              </figure>
                          </div>
                          <p class="animate__animated animate__slideInUp text-white mb-12">“I am a person who is positive about every aspect of life. There are many things I like
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
