/** @format */

import React, { useEffect, useRef } from 'react';
import Navbar from '../../conponent/NavBar/Navbar';

const posts = [
  'https://www.instagram.com/p/DEP-NTcvgrC/',
  'https://www.instagram.com/p/DEFAn3fPb1V/',
  'https://www.instagram.com/p/DEAraw0Th6A/',
  'https://www.instagram.com/reel/DDKZBeXviBs/',
  'https://www.instagram.com/p/DDBcdmvvlCX/',
  'https://www.instagram.com/p/DCvzz7tPa7L/',
  'https://www.instagram.com/p/DBl9aiHvbCT/',
  'https://www.instagram.com/p/DAl0RsiTq7s/',
  'https://www.instagram.com/reel/DAdqEErPSrc/',
  'https://www.instagram.com/reel/DAI_opKP4UB/',
  'https://www.instagram.com/p/C_p_3SbvMIL/',
  'https://www.instagram.com/p/C_i8lRsTnMF/',
  'https://www.instagram.com/reel/C_V2DsWP_Ou/',
];

export default function GobellDesign() {
  const containerRef = useRef();

  useEffect(() => {
    // 动态将帖子分配到高度最小的列中
    const masonryLayout = () => {
      const container = containerRef.current;
      const columns = Array.from(container.children); // 获取所有列
      columns.forEach((col) => (col.innerHTML = '')); // 清空列内容

      posts.forEach((post, index) => {
        const iframe = document.createElement('iframe');
        iframe.src = `${post}embed`;
        iframe.style.width = '100%';
        iframe.style.border = 'none';
        iframe.onload = function () {
          iframe.style.height =
            iframe.contentWindow.document.body.scrollHeight + 'px';
        };

        // 找到当前高度最小的列
        const shortestColumn = columns.reduce((prev, curr) =>
          prev.offsetHeight < curr.offsetHeight ? prev : curr,
        );
        shortestColumn.appendChild(iframe); // 将 iframe 添加到最短列
      });
    };

    masonryLayout();

    // 监听窗口大小变化，重新布局
    window.addEventListener('resize', masonryLayout);
    return () => window.removeEventListener('resize', masonryLayout);
  }, []);

  return (
    <div className='flex p-3 bg-gray-100'>
      <Navbar BG={'bg-gray-100'} />
      <div className='pt-[140px] flex flex-col w-screen h-full overflow-x-hidden items-center justify-start'>
        <h1 className='text-[40px] font-bold text-center mb-8'>Story</h1>
        {/* 瀑布流容器 */}
        <div
          ref={containerRef}
          className='masonry-grid flex gap-4'
          style={{ maxWidth: '1400px', width: '100%' }}
        >
          {/* 创建 3 列用于动态布局 */}
          <div className='masonry-column flex flex-col gap-4 flex-1'></div>
          <div className='masonry-column flex flex-col gap-4 flex-1'></div>
          <div className='masonry-column flex flex-col gap-4 flex-1'></div>
        </div>
      </div>
    </div>
  );
}
