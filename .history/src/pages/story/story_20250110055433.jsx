/** @format */

import React from 'react';
import Navbar from '../../conponent/NavBar/Navbar';
const posts = [
  <iframe
    src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02CGgCT6sZJfRkDwQEz2v8W8C141rQRo2S7JqDWssU334yzYh772hppYcTe5EoWRdWl%26id%3D100085874466260&show_text=true&width=500'
    // width='500'
    height='609'
  ></iframe>,
  <iframe
    src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02i7DiNaQJFGg9ZihcTG4o7DPtr7vRFYXSmLFEV6B96hmit4TGKJSmtwh7t96PfuAyl%26id%3D100085874466260&show_text=true&width=500'
    // width='500'
    height='590'
  ></iframe>,
  <iframe
    src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02BWzXL2yhxLCzdrxKcXi4F11rJNT1rseT7YcNzZnsFML8w8XuHPcWssm6guhe9w9il%26id%3D100085874466260&show_text=true&width=500'
    // width='500'
    height='645'
  ></iframe>,
  <iframe
    src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02WtYdd5h52JaSgtPpZLWy8hSJYDwXttnuQRmw1XjY4e6xSzf4NBi6daKtgAwLSQcGl%26id%3D100085874466260&show_text=true&width=500'
    // width='500'
    height='645'
  ></iframe>,
  <iframe
    src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0dD4FDh7yuD7ZuQBt8tmd9YRBkQxQd1FutJaXcPauC4FgvvoTwbt1xYpfU7x2jPJjl%26id%3D100085874466260&show_text=true&width=500'
    // width='500'
    height='486'
  ></iframe>,
];

export default function gobelldesign() {
  return (
    <div className='flex flex-col w-screen h-screen overflow-auto'>
      <Navbar BG={'bg-white'} />
      <div className='pt-[140px] flex flex-col w-screen h-screen items-center justify-start'>
        <h1 className='text-[40px] font-bold text-center mb-8'>Story</h1>
        <div className='max-w-[1200px] flex w-full masory-grid'>
          {posts.map((post, index) => (
            <div
              key={index}
              className='rounded-[14px] justify-center flex overflow-hidden grid-item'
            >
              {post}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
