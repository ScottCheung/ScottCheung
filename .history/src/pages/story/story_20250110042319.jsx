/** @format */

import React from 'react';
import Navbar from '../../conponent/NavBar/Navbar';
const posts = [
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
  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02CGgCT6sZJfRkDwQEz2v8W8C141rQRo2S7JqDWssU334yzYh772hppYcTe5EoWRdWl%26id%3D100085874466260',
  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02CGgCT6sZJfRkDwQEz2v8W8C141rQRo2S7JqDWssU334yzYh772hppYcTe5EoWRdWl%26id%3D100085874466260',
];

export default function gobelldesign() {
  return (
    <div className='flex w-screen h-screen'>
      <Navbar BG={'bg-white'} />
      <div className='pt-[140px] flex flex-col h-full w-full items-center justify-center'>
        <h1 className='text-2xl font-bold text-center'>Story</h1>
        <div className='flex flex-col w-full gap-8 mt-5'>
          {posts.map((post, index) => (
            <div
              key={index}
              className='max-w-[1000px] max-h-[500px] w-full h-auto'
            >
              <iframe
                className='w-full h-full p-[40px]'
                src={post}
                title='facebook post'
                allowtransparency='true'
                allow='encrypted-media'
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
