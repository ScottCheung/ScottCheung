import React from 'react'
import Navbar from '../conponent/Navbar'
import { motion } from "framer-motion"

export default function Errorpage () {
  return (
    <div >
      <Navbar topTextColor={true}/>
      <main className="h-[100vh] place-items-center flex justify-center  px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center ">
          <p className="animate__animated animate__fadeInUp text-9xl font-semibold text-white">404</p>
          <h1 style={{ animationDelay: `0.2s` }} className="animate__animated animate__fadeInUp mt-4 text-7xl font-bold tracking-tight text-gray-200 sm:text-4xl">Page not found</h1>
          <p style={{ animationDelay: `0.3s` }} className="animate__animated animate__fadeInUp mt-6 text-2xl leading-7 text-gray-200">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10 flex items-center place-items-center justify-center gap-x-6">
            
          <motion.div
                  whileHover={{ scale: 1.05}}
                  whileTap={{ scale: 0.95 }}
                  whileFocus={{ scale: 1 }}
                  className="animate__animated animate__zoomIn animate__slow">
            <a
            style={{ animationDelay: `0.4s` }} href="/" className="animate__animated animate__fadeInUp rounded-lg text-3xl  bg-sky-900 px-10 py-6 font-semibold text-white shadow-sm hover:bg-sky-700 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:scale-[1.05]">
                      <i className='fi fi-rr-home-heart mr-3 mt-1'></i>Go home
              </a>
              </motion.div>
            <a
            href="/milestone" style={{ animationDelay: `0.6s` }} className="animate__animated animate__fadeInUp text-3xl  font-semibold text-gray-200 hover:text-white hover:scale-[1.05]">
                  <motion.div 
                  whileHover={{ scale: 1.05}}
                  whileTap={{ scale: 0.95 }}
                  whileFocus={{ scale: 1 }}>
                    <i className='fi fi-rr-trophy-star mr-3 mt-1'></i>Milestone →
                  </motion.div>
            </a>
          </div>
        </div>
      </main>
      <div className="header-filter" style={{backgroundImage: 'url(./bg.jpg)'}}>
                                        <div className="background-overlay lg:h-[13%] h-[12%] sm:h-[10%] text-white"></div>
                                        </div>
    </div>
  )
}
