/** @format */

import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Database from '../data/Database.json';
import { useLanguage } from '../help/helpFunction';
import { WaterfallLayout } from './WaterfallLayout/WaterfallLayout';
import { ImagePreviewModal } from './ImagePreviewModel/ImagePreviewModal';

function CertificateGallery() {
  const lang = useLanguage();
  const picturesDate = Database.PersonalInfo.Certificates[lang];
  const [rowHeights, setRowHeights] = useState([]);
  const [displayCount, setDisplayCount] = useState(15);
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // 获取要显示的证书数据 - 使用 useMemo 优化
  const displayedCertificates = useMemo(() => {
    return picturesDate.slice(0, displayCount);
  }, [picturesDate, displayCount]);

  // Map to modal images format
  const modalImages = useMemo(() => {
    return displayedCertificates.map((item, index) => ({
      id: `${item.award}-${index}`,
      url: item.src,
      title: item.award,
    }));
  }, [displayedCertificates]);

  // 加载更多证书 - 使用 useCallback 优化
  const loadMore = useCallback(() => {
    setDisplayCount((prev) => Math.min(prev + 20, picturesDate.length));
  }, [picturesDate.length]);

  // 检查是否还有更多证书可以加载
  const hasMore = displayCount < picturesDate.length;

  // 移除不必要的 useEffect，因为 WaterfallLayout 已经处理了布局
  // useEffect(() => {
  //   const items = document.querySelectorAll('.certificate-item');
  //   const rows = [];
  //   let currentRow = [];
  //   let currentTop = items[0]?.offsetTop || 0;
  //
  //   items.forEach((item) => {
  //     if (item.offsetTop !== currentTop) {
  //       rows.push(currentRow);
  //       currentRow = [];
  //       currentTop = item.offsetTop;
  //     }
  //     currentRow.push(item);
  //   });
  //   rows.push(currentRow);
  //
  //   const heights = rows.map((row) =>
  //     Math.max(...row.map((item) => item.clientHeight)),
  //   );
  //   setRowHeights(heights);
  // }, [displayedCertificates]);

  return (
    <div className='flex w-full py-[20vh] items-center justify-center'>
      <div className='flex flex-col items-center w-full'>
        <WaterfallLayout debounceDelay={500}>
          {displayedCertificates.map((item, index) => (
            <div key={`${item.award}-${index}`}>
              <motion.a
                href={item.src}
                whileHover={{ scale: 1.001 }}
                whileTap={{ scale: 0.99 }}
                target='_blank'
                rel='noopener noreferrer'
                className={`justify-center items-start w-full h-full certificate-item`}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedIndex(index);
                  setIsModalOpen(true);
                }}
              >
                <motion.div className='flex flex-col justify-start items-start'>
                  <motion.div
                    layoutId={`${item.src}`}
                    className='transform-gpu'
                  >
                    <motion.div className='flex rounded-[10px] md:rounded-[28px] w-full backdrop-blur-sm h-auto overflow-hidden border md:p-[14px]  hover:bg-sky-100 justify-center items-center'>
                      <motion.img
                        loading='lazy'
                        decoding='async'
                        fetchpriority='low'
                        className='flex rounded-[10px] md:rounded-[14px]'
                        src={item.src.replace(
                          /\.(png|jpg|jpeg|gif|bmp|svg|webp)$/,
                          '.md.$1',
                        )}
                        alt={item.name}
                      />
                    </motion.div>
                  </motion.div>

                  <div className='flex flex-col pt-[5px] px-[10px] md:px-[20px] justify-start items-start gap-[10px]'>
                    <div className='flex flex-col gap-[5px]'>
                      <h4 className='flex-1 font-[600] text-gray-900 text-[16px] md:text-[20px]  '>
                        {item.award}
                      </h4>{' '}
                      <p className='flex text-gray-500 text-[13px]'>
                        {item.activity}{' '}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.a>
            </div>
          ))}
        </WaterfallLayout>

        {/* 加载更多按钮 */}
        {hasMore && (
          <motion.button
            onClick={loadMore}
            className='px-[28px] py-3 mt-8 font-medium text-white text-[20px] bg-sky-900 rounded-full  transition-colors duration-200 hover:bg-sky-600 hover:shadow-xl'
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.99 }}
          >
            Load More ( {displayedCertificates.length} / {picturesDate.length} )
          </motion.button>
        )}
      </div>
      {isModalOpen && (
        <ImagePreviewModal
          images={modalImages}
          initialIndex={selectedIndex}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}

export default CertificateGallery;
