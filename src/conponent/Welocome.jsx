import React from 'react';
import data from '../Datebase.json';
import { useLanguage } from '../help/helpFunction';

import { useState, useEffect } from 'react';



function Welcome () {
  const lang = useLanguage();
  const Welcome = (
    <div className="bg-cover bg-center">
        <div className="h-[100vh] flex items-center">
            {/* Home hello des */}
            <div className="visblecontainer">
                <div className="flex flex-col justify-end">
                    <h1 className="text-white text-right animate__animated font-black animate__slideInLeft text-[35px] md:text-[50px] font-[Verdana] font-[] lg:text-9xl">{data.Navbar.Hero.hello[lang]}</h1>
                    <h2 className="text-white text-right animate__animated animate__slideInRight lg:text-[30px] font-[Cambria] p-[20px]">{data.Navbar.Hero.word[lang]}</h2>
                </div>
            </div>


        </div>
    </div>
  );

  return (
    <div >
      {Welcome}
    </div>
  );
}

export default Welcome;
