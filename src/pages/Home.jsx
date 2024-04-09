import React, { useEffect, useRef } from 'react';
import Navbar from '../conponent/Navbar';
import StudyExperience from '../conponent/StudyExperience';
import WhyMe from '../conponent/WhyMe';
import SelfDescribing from '../conponent/SelfDescribing'
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
import { motion, useTime, AnimatePresence } from "framer-motion";
const bg = Database.PersonalInfo.Welcomebg


function Home() {
    const bgImages = Database.preloadImages;
    preloadImages(bgImages);
    
    return (
        <div className='overflow-hidden '>
            <Navbar topTextColor={true} />
            <div className='z-0 w-full block  overflow-hidden transition-all duration-0'>
                        <Carousel interval={3000}>
                            <div className='w-full h-full object-cover'><img className='' src={`${bg[1]}`} alt="" /></div>
                           <div className='w-full h-full object-cover'><img className='w-full h-full object-cover' src={`${Database.PersonalInfo.Contacts.bg}`} alt="" /></div>
                            <div className='w-full h-full object-cover'><img className='w-full h-full object-cover' src={`/Graphs/whyme/LearningAbility2.jpg`} alt="" /></div>
                            <div className='w-full h-full object-cover'><img  className='' src={`https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg`} alt="" /></div>
                            <div className='w-full h-full object-cover'><img  className='' src={`https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg`} alt="" /></div> 
                            
                            
                            
                            
                            
                            
                            
                        </Carousel>
            </div>
            <div className="mt-[-100px] rounded-[35px] lg:px-[28px] md:px-[14px] shadow-[15px] overflow-hidden z-40  ">
                                <div className='mt-[-70px] absolute min-h-[100px] w-full flex justify-center '><SubNav /></div>
                                <div className="bg-[#fafafa] dark:bg-gray-950 rounded-[35px]">
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
        </div>
    );
}

export default Home;
