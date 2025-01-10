/** @format */

import React from 'react';
import Navbar from '../../conponent/NavBar/Navbar';
const posts = [
  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02CGgCT6sZJfRkDwQEz2v8W8C141rQRo2S7JqDWssU334yzYh772hppYcTe5EoWRdWl%26id%3D100085874466260',
  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02i7DiNaQJFGg9ZihcTG4o7DPtr7vRFYXSmLFEV6B96hmit4TGKJSmtwh7t96PfuAyl%26id%3D100085874466260',
  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02CGgCT6sZJfRkDwQEz2v8W8C141rQRo2S7JqDWssU334yzYh772hppYcTe5EoWRdWl%26id%3D100085874466260',
  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02CGgCT6sZJfRkDwQEz2v8W8C141rQRo2S7JqDWssU334yzYh772hppYcTe5EoWRdWl%26id%3D100085874466260',
  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02CGgCT6sZJfRkDwQEz2v8W8C141rQRo2S7JqDWssU334yzYh772hppYcTe5EoWRdWl%26id%3D100085874466260',
  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02CGgCT6sZJfRkDwQEz2v8W8C141rQRo2S7JqDWssU334yzYh772hppYcTe5EoWRdWl%26id%3D100085874466260',
  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02CGgCT6sZJfRkDwQEz2v8W8C141rQRo2S7JqDWssU334yzYh772hppYcTe5EoWRdWl%26id%3D100085874466260',
  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02CGgCT6sZJfRkDwQEz2v8W8C141rQRo2S7JqDWssU334yzYh772hppYcTe5EoWRdWl%26id%3D100085874466260',
  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02CGgCT6sZJfRkDwQEz2v8W8C141rQRo2S7JqDWssU334yzYh772hppYcTe5EoWRdWl%26id%3D100085874466260',
  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02CGgCT6sZJfRkDwQEz2v8W8C141rQRo2S7JqDWssU334yzYh772hppYcTe5EoWRdWl%26id%3D100085874466260',
  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02CGgCT6sZJfRkDwQEz2v8W8C141rQRo2S7JqDWssU334yzYh772hppYcTe5EoWRdWl%26id%3D100085874466260',
  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02CGgCT6sZJfRkDwQEz2v8W8C141rQRo2S7JqDWssU334yzYh772hppYcTe5EoWRdWl%26id%3D100085874466260',
  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02CGgCT6sZJfRkDwQEz2v8W8C141rQRo2S7JqDWssU334yzYh772hppYcTe5EoWRdWl%26id%3D100085874466260',
  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02CGgCT6sZJfRkDwQEz2v8W8C141rQRo2S7JqDWssU334yzYh772hppYcTe5EoWRdWl%26id%3D100085874466260',
  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02CGgCT6sZJfRkDwQEz2v8W8C141rQRo2S7JqDWssU334yzYh772hppYcTe5EoWRdWl%26id%3D100085874466260',
  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02CGgCT6sZJfRkDwQEz2v8W8C141rQRo2S7JqDWssU334yzYh772hppYcTe5EoWRdWl%26id%3D100085874466260',
];

export default function gobelldesign() {
  return (
    <div className='flex w-screen h-screen'>
      <Navbar BG={'bg-white'} />
      <div className='pt-[140px] flex flex-col h-full w-full items-center justify-start'>
        <h1 className='text-[40px] font-bold text-center'>Story</h1>
        <div className='max-w-[1200px] w-full grid-container'>
          {posts.map((post, index) => (
            <div
              key={index}
              className='grid-item rounded-[14px] md:rounded-[20px] lg:rounded-[14px] overflow-hidden'
            >
              <iframe
                className='max-w-[1000px] flex  w-full h-full'
                src={post}
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
