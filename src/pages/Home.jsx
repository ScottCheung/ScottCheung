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
import Hero from '../pages/Hero';
import Database from '../Datebase.json';
import { preloadImages } from '../help/helpFunction';
const bg = Database.PersonalInfo.Welcomebg


function Home() {
    const bgImages = Database.preloadImages;
    preloadImages(bgImages);
    return (
        <div>
            <Navbar topTextColor={true} />
            {/* <Hero /> */}
            <body className='bg-fixed bg-center bg-cover left-0 top-0 bottle-0 right-0 overflow-hidden bg-sky-600/40' style={{ backgroundImage: `url(${bg[0]})`}}>
                   <div className='bg-fixed bg-center bg-cover left-0 top-0 bottle-0 right-0 overflow-hidden' style={{ backgroundImage: `url(${bg[1]})`}}>
                    <div className='bg-black/50 '>
                            <Welcome />
                            

                            <div className="mt-[-100px] rounded-[35px] lg:px-[28px] md:px-[14px] shadow-[15px]">
                                <div className='mt-[-70px] absolute min-h-[100px] w-full flex justify-center'><SubNav /></div>
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

                   </div>
            </body>
        </div>
    );
}

export default Home;
