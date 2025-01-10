/** @format */

import React, { useEffect, useState } from 'react';
import Navbar from '../../conponent/NavBar/Navbar';
const posts = [
  <iframe
    src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02CGgCT6sZJfRkDwQEz2v8W8C141rQRo2S7JqDWssU334yzYh772hppYcTe5EoWRdWl%26id%3D100085874466260&show_text=true&width=500'
    width='500'
    height='609'
  ></iframe>,
  <iframe
    src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02i7DiNaQJFGg9ZihcTG4o7DPtr7vRFYXSmLFEV6B96hmit4TGKJSmtwh7t96PfuAyl%26id%3D100085874466260&show_text=true&width=500'
    width='500'
    height='590'
  ></iframe>,
  <iframe
    src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02i7DiNaQJFGg9ZihcTG4o7DPtr7vRFYXSmLFEV6B96hmit4TGKJSmtwh7t96PfuAyl%26id%3D100085874466260&show_text=true&width=500'
    width='500'
    height='590'
  ></iframe>,
  <iframe
    src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02i7DiNaQJFGg9ZihcTG4o7DPtr7vRFYXSmLFEV6B96hmit4TGKJSmtwh7t96PfuAyl%26id%3D100085874466260&show_text=true&width=500'
    width='500'
    height='590'
  ></iframe>,
  <iframe
    src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02BWzXL2yhxLCzdrxKcXi4F11rJNT1rseT7YcNzZnsFML8w8XuHPcWssm6guhe9w9il%26id%3D100085874466260&show_text=true&width=500'
    width='500'
    height='645'
  ></iframe>,
  <iframe
    src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02WtYdd5h52JaSgtPpZLWy8hSJYDwXttnuQRmw1XjY4e6xSzf4NBi6daKtgAwLSQcGl%26id%3D100085874466260&show_text=true&width=500'
    width='500'
    height='645'
  ></iframe>,
  <iframe
    src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0dD4FDh7yuD7ZuQBt8tmd9YRBkQxQd1FutJaXcPauC4FgvvoTwbt1xYpfU7x2jPJjl%26id%3D100085874466260&show_text=true&width=500'
    width='500'
    height='486'
  ></iframe>,
  <iframe
    src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02CGgCT6sZJfRkDwQEz2v8W8C141rQRo2S7JqDWssU334yzYh772hppYcTe5EoWRdWl%26id%3D100085874466260&show_text=true&width=500'
    width='500'
    height='609'
  ></iframe>,
  <iframe
    src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02i7DiNaQJFGg9ZihcTG4o7DPtr7vRFYXSmLFEV6B96hmit4TGKJSmtwh7t96PfuAyl%26id%3D100085874466260&show_text=true&width=500'
    width='500'
    height='590'
  ></iframe>,
  <iframe
    src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02BWzXL2yhxLCzdrxKcXi4F11rJNT1rseT7YcNzZnsFML8w8XuHPcWssm6guhe9w9il%26id%3D100085874466260&show_text=true&width=500'
    width='500'
    height='645'
  ></iframe>,
  <iframe
    src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02WtYdd5h52JaSgtPpZLWy8hSJYDwXttnuQRmw1XjY4e6xSzf4NBi6daKtgAwLSQcGl%26id%3D100085874466260&show_text=true&width=500'
    width='500'
    height='645'
  ></iframe>,
  <iframe
    src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0dD4FDh7yuD7ZuQBt8tmd9YRBkQxQd1FutJaXcPauC4FgvvoTwbt1xYpfU7x2jPJjl%26id%3D100085874466260&show_text=true&width=500'
    width='500'
    height='486'
  ></iframe>,
  <iframe
    src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02CGgCT6sZJfRkDwQEz2v8W8C141rQRo2S7JqDWssU334yzYh772hppYcTe5EoWRdWl%26id%3D100085874466260&show_text=true&width=500'
    width='500'
    height='609'
  ></iframe>,
  <iframe
    src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02i7DiNaQJFGg9ZihcTG4o7DPtr7vRFYXSmLFEV6B96hmit4TGKJSmtwh7t96PfuAyl%26id%3D100085874466260&show_text=true&width=500'
    width='500'
    height='590'
  ></iframe>,
  <iframe
    src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02BWzXL2yhxLCzdrxKcXi4F11rJNT1rseT7YcNzZnsFML8w8XuHPcWssm6guhe9w9il%26id%3D100085874466260&show_text=true&width=500'
    width='500'
    height='645'
  ></iframe>,
  <iframe
    src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02WtYdd5h52JaSgtPpZLWy8hSJYDwXttnuQRmw1XjY4e6xSzf4NBi6daKtgAwLSQcGl%26id%3D100085874466260&show_text=true&width=500'
    width='500'
    height='645'
  ></iframe>,
  <iframe
    src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0dD4FDh7yuD7ZuQBt8tmd9YRBkQxQd1FutJaXcPauC4FgvvoTwbt1xYpfU7x2jPJjl%26id%3D100085874466260&show_text=true&width=500'
    width='500'
    height='486'
  ></iframe>,
  <iframe
    src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02CGgCT6sZJfRkDwQEz2v8W8C141rQRo2S7JqDWssU334yzYh772hppYcTe5EoWRdWl%26id%3D100085874466260&show_text=true&width=500'
    width='500'
    height='609'
  ></iframe>,
  <iframe
    src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02i7DiNaQJFGg9ZihcTG4o7DPtr7vRFYXSmLFEV6B96hmit4TGKJSmtwh7t96PfuAyl%26id%3D100085874466260&show_text=true&width=500'
    width='500'
    height='590'
  ></iframe>,
  <iframe
    src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02BWzXL2yhxLCzdrxKcXi4F11rJNT1rseT7YcNzZnsFML8w8XuHPcWssm6guhe9w9il%26id%3D100085874466260&show_text=true&width=500'
    width='500'
    height='645'
  ></iframe>,
  <iframe
    src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02WtYdd5h52JaSgtPpZLWy8hSJYDwXttnuQRmw1XjY4e6xSzf4NBi6daKtgAwLSQcGl%26id%3D100085874466260&show_text=true&width=500'
    width='500'
    height='645'
  ></iframe>,
  <iframe
    src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0dD4FDh7yuD7ZuQBt8tmd9YRBkQxQd1FutJaXcPauC4FgvvoTwbt1xYpfU7x2jPJjl%26id%3D100085874466260&show_text=true&width=500'
    width='500'
    height='486'
  ></iframe>,
  <iframe
    src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02CGgCT6sZJfRkDwQEz2v8W8C141rQRo2S7JqDWssU334yzYh772hppYcTe5EoWRdWl%26id%3D100085874466260&show_text=true&width=500'
    width='500'
    height='609'
  ></iframe>,
  <iframe
    src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02i7DiNaQJFGg9ZihcTG4o7DPtr7vRFYXSmLFEV6B96hmit4TGKJSmtwh7t96PfuAyl%26id%3D100085874466260&show_text=true&width=500'
    width='500'
    height='590'
  ></iframe>,
  <iframe
    src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02BWzXL2yhxLCzdrxKcXi4F11rJNT1rseT7YcNzZnsFML8w8XuHPcWssm6guhe9w9il%26id%3D100085874466260&show_text=true&width=500'
    width='500'
    height='645'
  ></iframe>,
  <iframe
    src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02WtYdd5h52JaSgtPpZLWy8hSJYDwXttnuQRmw1XjY4e6xSzf4NBi6daKtgAwLSQcGl%26id%3D100085874466260&show_text=true&width=500'
    width='500'
    height='645'
  ></iframe>,
  <iframe
    src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0dD4FDh7yuD7ZuQBt8tmd9YRBkQxQd1FutJaXcPauC4FgvvoTwbt1xYpfU7x2jPJjl%26id%3D100085874466260&show_text=true&width=500'
    width='500'
    height='486'
  ></iframe>,
];

const GobellDesign = () => {
  const [columns, setColumns] = useState([]);
  const [columnCount, setColumnCount] = useState(3); // 初始设置三列

  // 根据窗口大小调整列数
  const handleResize = () => {
    const width = window.innerWidth;
    if (width < 768) {
      setColumnCount(1); // 小屏幕 1 列
    } else if (width < 1024) {
      setColumnCount(2); // 中屏幕 2 列
    } else {
      setColumnCount(3); // 大屏幕 3 列
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); // 初始化布局
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // 动态分配内容到列
    const newColumns = Array.from({ length: columnCount }, () => []);
    posts.forEach((post, index) => {
      const shortestColumnIndex = newColumns.reduce(
        (shortest, current, idx) =>
          (
            current.reduce((sum, item) => sum + item.height, 0) <
            newColumns[shortest].reduce((sum, item) => sum + item.height, 0)
          ) ?
            idx
          : shortest,
        0,
      );
      newColumns[shortestColumnIndex].push(post);
    });
    setColumns(newColumns);
  }, [columnCount]);

  return (
    <div className='flex p-3 '>
      <Navbar BG={'bg-white'} />

      <div style={{ display: 'flex', gap: '16px' }}>
        {post.map((col, colIndex) => (
          <div key={colIndex} style={{ flex: 1 }}>
            {col.map((post, index) => (
              <iframe
                key={index}
                src={post.src}
                width='100%'
                height={post.height}
                style={{ marginBottom: '16px' }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GobellDesign;
