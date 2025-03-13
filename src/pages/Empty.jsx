/** @format */

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Cards = [
  {
    id: 1,
    col: 2,
    title: 'TikTok Overview',
    content:
      'TikTok is a short-form, video-sharing app that allows users to create and share 15-second videos on any topic.',
  },
  {
    id: 1,
    col: 2,
    title: 'TikTok Overview',
    content:
      'TikTok has gained immense popularity for its ease of use and wide variety of content, from dance videos to educational content.',
  },
  {
    id: 2,
    col: 2,
    title: 'For You Page (FYP)',
    content:
      'The "For You" feed is a curated stream of videos tailored to your interests, powered by TikTok\'s recommendation algorithm.',
  },
  {
    id: 3,
    col: 2,
    title: 'TikTok Challenges',
    content:
      'Challenges on TikTok are a key feature, where users participate in trending challenges, often with specific hashtags.',
  },
  {
    id: 2,
    col: 2,
    title: 'Live Streaming',
    content:
      'TikTok Live allows users to broadcast in real-time to their followers, engaging directly through comments and gifts.',
  },
  {
    id: 3,
    col: 2,
    title: 'TikTok Trends',
    content:
      'Trends on TikTok are constantly evolving, with new memes, sounds, and styles emerging daily, shaping popular culture.',
  },
  {
    id: 2,
    col: 3,
    title: 'TikTok Duets',
    content:
      "Duet is a feature that allows users to create a split-screen video with another user's video, enabling collaboration.",
  },
  {
    id: 3,
    col: 3,
    title: 'Monetization',
    content:
      'Creators can monetize their content on TikTok through brand partnerships, sponsored posts, and receiving gifts during live streams.',
  },
  {
    id: 2,
    col: 3,
    title: 'TikTok Effects',
    content:
      'TikTok offers a variety of effects and filters that users can apply to their videos, making content creation fun and engaging.',
  },
  {
    id: 3,
    col: 3,
    title: 'Safety and Privacy',
    content:
      'TikTok provides various safety and privacy features, including account settings to manage who can view and interact with your content.',
  },
  {
    id: 2,
    col: 6,
    title: 'TikTok Algorithm',
    content:
      "TikTok's recommendation algorithm analyzes user interactions and content preferences to deliver a personalized video feed.",
  },
  {
    id: 3,
    col: 3,
    title: 'TikTok Analytics',
    content:
      'TikTok provides creators with analytics tools to track video performance, audience demographics, and engagement rates.',
  },
  {
    id: 2,
    col: 3,
    title: 'Sound Library',
    content:
      'TikTok has an extensive sound library, allowing users to add popular music and sounds to their videos, often driving viral trends.',
  },
  {
    id: 3,
    col: 4,
    title: 'Content Creation Tools',
    content:
      'TikTok offers a wide range of content creation tools, including editing features, music integration, and special effects.',
  },
  {
    id: 2,
    col: 4,
    title: 'TikTok Ads',
    content:
      "Brands can leverage TikTok's advertising platform to reach a global audience through in-feed ads, brand takeovers, and more.",
  },
  {
    id: 3,
    col: 4,
    title: 'Community Guidelines',
    content:
      'TikTok has strict community guidelines to ensure that the platform remains a safe and positive environment for all users.',
  },
  {
    id: 2,
    col: 6,
    title: 'TikTok Influencers',
    content:
      'Influencers on TikTok have significant impact, with the ability to shape trends, promote products, and engage with large audiences.',
  },
  {
    id: 3,
    col: 6,
    title: 'TikTok and Music Industry',
    content:
      'TikTok has become a powerful tool in the music industry, helping artists reach new audiences and drive music chart successes.',
  },
  {
    id: 3,
    col: 12,
    title: 'TikTok Live Features',
    content:
      'TikTok Live allows real-time interaction with followers, where creators can receive gifts, engage with comments, and host Q&A sessions.',
  },
];

const initialAnimation = {
  opacity: 0,
  y: 30,
};

const hoverAnimation = {
  scale: 1.02,
  transition: { duration: 0.3, delay: 0 },
};

const getAnimateAnimation = (index) => ({
  opacity: 1,
  y: 0,
  transition: {
    duration: 0.5,
    ease: 'easeInOut',
    delay: 0.07 * index,
  },
});

function Card({ item, index }) {
  return (
    <motion.div
      initial={initialAnimation}
      whileHover={hoverAnimation}
      animate={getAnimateAnimation(index)}
      className={`bg-white rounded-[14px] shadow-sm min-w-[150px] lg:min-w-[200px]   w-full pb-[20px] text-[30px]  overflow-hidden justify-center  items-center col-span-6 md:col-span-3 lg:rounded-[28px] lg:col-span-${item.col}  `}
    >
      <img
        loading='lazy'
        src={`https://picsum.photos/1920/1080?${index % 8}`}
        alt={item.title}
      />
      {/* Context layer */}
      <div className='p-[14px] lg:p-[28px]'>
        <h2 className='font-[700] text-[20px] line-clamp-1'>{item.title}</h2>
        <p className='text-[12px] line-clamp-3'>{item.content}</p>
        <p className='my-4 text-[10px]'>[more]</p>
      </div>
    </motion.div>
  );
}

export default function Empty() {
  return (
    <div className='bg-gray-100  py-[50px] '>
      <div className=' grid px-[20px] gap-[20px] grid-cols-12 justify-center lg:px-[10vw]'>
        {Cards.map((item, index) => (
          <Card key={item.id + index} item={item} index={index} />
        ))}
      </div>
      <div className='flex mt-[10vh] w-full py-[30px] px-[20px] gap-[20px]  overflow-y-hidden scrollbar-hide overflow-x-auto  justify-start lg:px-[10vw]'>
        {Cards.map((item, index) => (
          <Card key={item.id + index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}
