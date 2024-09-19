import React from 'react';
import { FloatingDock } from '../ui/floating-dock';

export default function Docker() {
  const links = [
    {
      title: 'Home',
      icon: <i className='fi fi-sr-home pt-[5px] '></i>,
      href: '#',
    },

    {
      title: 'Products',
      icon: <i className='fi fi-sr-home pt-[5px] '></i>,
      href: '#',
    },
    {
      title: 'Components',
      icon: <i className='fi fi-sr-home pt-[5px] '></i>,
      href: '#',
    },
    {
      title: 'Aceternity UI',
      icon: (
        <img
          src='https://assets.aceternity.com/logo-dark.png'
          width={20}
          height={20}
          alt='Aceternity Logo'
        />
      ),
      href: '#',
    },
    {
      title: 'Changelog',
      icon: <i className='fi fi-sr-home pt-[5px] '></i>,
      href: '#',
    },

    {
      title: 'Twitter',
      icon: <i className='fi fi-sr-home pt-[5px] '></i>,
      href: '#',
    },
    {
      title: 'GitHub',
      icon: <i className='fi fi-sr-home pt-[5px] '></i>,
      href: '#',
    },
  ];
  return (
    <div className='flex items-center justify-center h-[35rem] w-full'>
      <FloatingDock mobileClassName='translate-y-20' items={links} />
    </div>
  );
}
