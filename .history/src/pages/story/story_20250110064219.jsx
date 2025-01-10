/** @format */

import React from 'react';
import Navbar from '../../conponent/NavBar/Navbar';
const posts = [
  'https://www.threads.net/@sydneyscottcheung/post/DEP-NsNPByM?xmt=AQGzXB5dGjjmUzQXgObuD6iLwidnVKpMFjO2DVPRCJy4qg',
  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02i7DiNaQJFGg9ZihcTG4o7DPtr7vRFYXSmLFEV6B96hmit4TGKJSmtwh7t96PfuAyl%26id%3D100085874466260',
  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02WtYdd5h52JaSgtPpZLWy8hSJYDwXttnuQRmw1XjY4e6xSzf4NBi6daKtgAwLSQcGl%26id%3D100085874466260',
  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02BWzXL2yhxLCzdrxKcXi4F11rJNT1rseT7YcNzZnsFML8w8XuHPcWssm6guhe9w9il%26id%3D100085874466260',
  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0dD4FDh7yuD7ZuQBt8tmd9YRBkQxQd1FutJaXcPauC4FgvvoTwbt1xYpfU7x2jPJjl%26id%3D100085874466260',
  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02CGgCT6sZJfRkDwQEz2v8W8C141rQRo2S7JqDWssU334yzYh772hppYcTe5EoWRdWl%26id%3D100085874466260',
  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02i7DiNaQJFGg9ZihcTG4o7DPtr7vRFYXSmLFEV6B96hmit4TGKJSmtwh7t96PfuAyl%26id%3D100085874466260',
  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02WtYdd5h52JaSgtPpZLWy8hSJYDwXttnuQRmw1XjY4e6xSzf4NBi6daKtgAwLSQcGl%26id%3D100085874466260',
  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02BWzXL2yhxLCzdrxKcXi4F11rJNT1rseT7YcNzZnsFML8w8XuHPcWssm6guhe9w9il%26id%3D100085874466260',
  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0dD4FDh7yuD7ZuQBt8tmd9YRBkQxQd1FutJaXcPauC4FgvvoTwbt1xYpfU7x2jPJjl%26id%3D100085874466260',
  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02CGgCT6sZJfRkDwQEz2v8W8C141rQRo2S7JqDWssU334yzYh772hppYcTe5EoWRdWl%26id%3D100085874466260',
  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02i7DiNaQJFGg9ZihcTG4o7DPtr7vRFYXSmLFEV6B96hmit4TGKJSmtwh7t96PfuAyl%26id%3D100085874466260',
  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02WtYdd5h52JaSgtPpZLWy8hSJYDwXttnuQRmw1XjY4e6xSzf4NBi6daKtgAwLSQcGl%26id%3D100085874466260',
  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02BWzXL2yhxLCzdrxKcXi4F11rJNT1rseT7YcNzZnsFML8w8XuHPcWssm6guhe9w9il%26id%3D100085874466260',
  'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0dD4FDh7yuD7ZuQBt8tmd9YRBkQxQd1FutJaXcPauC4FgvvoTwbt1xYpfU7x2jPJjl%26id%3D100085874466260',
];

export default function gobelldesign() {
  return (
    <div className='flex p-3 '>
      <Navbar BG={'bg-white'} />
      <div className='pt-[140px] flex flex-col w-screen h-full overflow-x-hidden items-center justify-start'>
        <h1 className='text-[40px] font-bold text-center mb-8'>Story</h1>
        <div className='max-w-[1400px] w-full masonry-grid'>
          {posts.map((post, index) => (
            <div
              key={index}
              className='flex overflow-hidden bg-red-500 grid-item'
            >
              <iframe src={post} width='100%' height='100%'></iframe>,
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
