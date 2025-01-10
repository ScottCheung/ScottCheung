/** @format */

import React from 'react';
import Navbar from '../../conponent/NavBar/Navbar';

const posts = [
  <iframe
    src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02CGgCT6sZJfRkDwQEz2v8W8C141rQRo2S7JqDWssU334yzYh772hppYcTe5EoWRdWl%26id%3D100085874466260&show_text=true&width=500'
    className='iframe-post'
  ></iframe>,
  <iframe
    src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02i7DiNaQJFGg9ZihcTG4o7DPtr7vRFYXSmLFEV6B96hmit4TGKJSmtwh7t96PfuAyl%26id%3D100085874466260&show_text=true&width=500'
    className='iframe-post'
  ></iframe>,
  <iframe
    src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02BWzXL2yhxLCzdrxKcXi4F11rJNT1rseT7YcNzZnsFML8w8XuHPcWssm6guhe9w9il%26id%3D100085874466260&show_text=true&width=500'
    className='iframe-post'
  ></iframe>,
  <iframe
    src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02WtYdd5h52JaSgtPpZLWy8hSJYDwXttnuQRmw1XjY4e6xSzf4NBi6daKtgAwLSQcGl%26id%3D100085874466260&show_text=true&width=500'
    className='iframe-post'
  ></iframe>,
  <iframe
    src='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0dD4FDh7yuD7ZuQBt8tmd9YRBkQxQd1FutJaXcPauC4FgvvoTwbt1xYpfU7x2jPJjl%26id%3D100085874466260&show_text=true&width=500'
    className='iframe-post'
  ></iframe>,
];

export default function GobellDesign() {
  return (
    <div className='flex flex-col w-screen h-screen overflow-auto'>
      <Navbar BG={'bg-white'} />
      <div className='pt-[140px] flex flex-col w-screen h-auto items-center justify-start'>
        <h1 className='text-[40px] font-bold text-center mb-8'>Story</h1>
        <div
          className='grid gap-4 px-4 w-full max-w-[1200px]'
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          }}
        >
          {posts.map((post, index) => (
            <div
              key={index}
              className='rounded-[14px] overflow-hidden bg-gray-200 shadow-md flex justify-center items-center'
            >
              {post}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
