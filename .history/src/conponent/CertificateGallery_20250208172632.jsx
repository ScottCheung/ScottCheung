/** @format */

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Database from '../data/Database.json';

import { useLanguage } from '../help/helpFunction';

function CertificateGallery() {
  const lang = useLanguage();
  const picturesDate = Database.PersonalInfo.Certificates[lang];
  const [rowHeights, setRowHeights] = useState([]);

  useEffect(() => {
    const items = document.querySelectorAll('.certificate-item');
    const rows = [];
    let currentRow = [];
    let currentTop = items[0]?.offsetTop || 0;

    items.forEach((item) => {
      if (item.offsetTop !== currentTop) {
        rows.push(currentRow);
        currentRow = [];
        currentTop = item.offsetTop;
      }
      currentRow.push(item);
    });
    rows.push(currentRow);

    const heights = rows.map((row) =>
      Math.max(...row.map((item) => item.clientHeight)),
    );
    setRowHeights(heights);
  }, [picturesDate]);

  return (
    <div className='flex w-full py-[20vh] items-center justify-center'>
      <motion.div
        // variants={Welcomevisblecontainer}
        // initial="hidden"
        // whileInView="visible"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        Transition={{ duration: 2 }}
        viewport={{ once: true, margin: '-30%' }}
        className='w-full grid px-[20px] grid-cols-12 relative lg:gap-[20px]'
      >
        {picturesDate.map((item, index) => (
          <motion.a
            key={index}
            href={item.src}
            // variants={WelcomeItem}

            whileHover={{ scale: 1.001 }}
            whileTap={{ scale: 0.99 }}
            target='_blank'
            rel='noopener noreferrer'
            className={`flex-1 items-start justify-center lg:col-span-2 md:col-span-3 col-span-6  certificate-item`}
            style={{
              height: `${rowHeights[Math.floor(index / 6)] || 'auto'}px`,
            }}
          >
            <motion.div
              key={index}
              className='flex flex-col items-start justify-start '
            >
              <div className=' flex h-[200px] w-full justify-center items-center '>
                <img
                  className='flex rounded-[14px] w-auto max-h-[200px] overflow-hidden'
                  src={item.src.replace(
                    /\.(png|jpg|jpeg|gif|bmp|svg|webp)$/,
                    '.md.$1',
                  )}
                  alt={item.name}
                />
              </div>

              <div className='flex flex-col pt-[20px] gap-[10px]'>
                <p className='flex-1 font-[600] text-gray-900 text-[20px] '>
                  {item.award}
                </p>
                <p className='flex-1 text-gray-500 text-[13px]'>
                  {item.activity}
                </p>
              </div>
            </motion.div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}

export default CertificateGallery;
