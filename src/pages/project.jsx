import React from 'react';
import Navbar from '../conponent/NavBar/Navbar';
import { motion } from 'framer-motion';
import { HeroParallax } from '../ui/hero-parallax.tsx';
import Contact from '../conponent/Contact';
const products = [
  {
    title: 'Moonbeam',
    link: 'https://xianzhe.site',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/moonbeam.png',
  },
  {
    title: 'Cursor',
    link: 'https://xianzhe.site',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/cursor.png',
  },
  {
    title: 'Rogue',
    link: 'https://xianzhe.site',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/rogue.png',
  },

  {
    title: 'Editorially',
    link: 'https://xianzhe.site',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/editorially.png',
  },
  {
    title: 'Editrix AI',
    link: 'https://xianzhe.site',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/editrix.png',
  },
  {
    title: 'Pixel Perfect',
    link: 'https://xianzhe.site',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/pixelperfect.png',
  },

  {
    title: 'Algochurn',
    link: 'https://xianzhe.site',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/algochurn.png',
  },
  {
    title: 'Aceternity UI',
    link: 'https://xianzhe.site',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/aceternityui.png',
  },
  {
    title: 'Tailwind Master Kit',
    link: 'https://xianzhe.site',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png',
  },
  {
    title: 'SmartBridge',
    link: 'https://xianzhe.site',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/smartbridge.png',
  },
  {
    title: 'Renderwork Studio',
    link: 'https://xianzhe.site',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/renderwork.png',
  },

  {
    title: 'Creme Digital',
    link: 'https://xianzhe.site',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/cremedigital.png',
  },
  {
    title: 'Golden Bells Academy',
    link: 'https://xianzhe.site',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png',
  },
  {
    title: 'Invoker Labs',
    link: 'https://xianzhe.site',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/invoker.png',
  },
  {
    title: 'E Free Invoice',
    link: 'https://xianzhe.site',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png',
  },
  {
    title: 'Renderwork Studio',
    link: 'https://xianzhe.site',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/renderwork.png',
  },

  {
    title: 'Creme Digital',
    link: 'https://xianzhe.site',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/cremedigital.png',
  },
  {
    title: 'Golden Bells Academy',
    link: 'https://xianzhe.site',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png',
  },
  {
    title: 'Invoker Labs',
    link: 'https://xianzhe.site',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/invoker.png',
  },
  {
    title: 'E Free Invoice',
    link: 'https://xianzhe.site',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png',
  },
  {
    title: 'Renderwork Studio',
    link: 'https://xianzhe.site',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/renderwork.png',
  },

  {
    title: 'Creme Digital',
    link: 'https://xianzhe.site',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/cremedigital.png',
  },
  {
    title: 'Golden Bells Academy',
    link: 'https://xianzhe.site',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png',
  },
  {
    title: 'Invoker Labs',
    link: 'https://xianzhe.site',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/invoker.png',
  },
  {
    title: 'E Free Invoice',
    link: 'https://xianzhe.site',
    thumbnail:
      'https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png',
  },
];

export default function project() {
  return (
    <div className='relative bg-black'>
      <span className='absolute w-full flex h-[100vh] bg-gradient-to-b from-[0%] to-[90%] from-black via-[30%] via-black/50 to-transparent'></span>

      <Navbar topTextColor={true} />
      <div className='vh-[200vh]'>
        {' '}
        <HeroParallax Items={products} />
      </div>
      <div className='relative flex w-full h-full min-h-[100vh]'>
        <span className='absolute -top-[30vh]  left-0 right-0 w-full flex h-[30vh] bg-gradient-to-t from-[0%] to-[100%] from-black to-transparent'></span>
        sdsd
        <span className='absolute -bottom-[10vh] z-30 left-0 right-0 w-full flex h-[10vh] bg-gradient-to-b from-[0%] to-[100%] from-black to-transparent'></span>
      </div>
      <Contact />
    </div>
  );
}
