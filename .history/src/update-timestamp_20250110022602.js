/** @format */

const fs = require('fs');
const path = require('path');
const axios = require('axios');

// 获取当前时间
const currentTime = new Date().toISOString();

// 读取 package.json 文件
const packageJsonPath = path.resolve(__dirname, '../package.json');
const logPath = path.resolve(__dirname, './data/update-log.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const log = JSON.parse(fs.readFileSync(logPath, 'utf8'));

// 更新发布时间戳
packageJson.lastPublishedAt = currentTime;

// 获取地理位置信息
const getGeolocation = async () => {
  try {
    const response = await axios.get(
      'https://ipinfo.io/json?token=7ea9f53eb7d899',
    );
    const { city, region, postal, loc } = response.data;
    return {
      city,
      state: region,
      zipcode: postal,
      loc,
    };
  } catch (error) {
    console.error('Error fetching geolocation:', error);
    return {
      city: 'Unknown',
      state: 'Unknown',
      zipcode: 'Unknown',
      loc: 'Unknown',
    };
  }
};

(async () => {
  const address = await getGeolocation();
  // 创建新的日志条目
  // 创建新的日志条目
  // 创建新的日志条目
  // 创建新的日志条目

  // 创建新的日志条目
  // 创建新的日志条目
  // 创建新的日志条目
  const newLogEntry = {
    version: packageJson.version,
    time: currentTime,
    author: 'Scott Cheung',
    address,
    // 自定义
    header: [
      "Optimised the performance of some device's animations that were not smooth, using progressive technology to optimise the animation performance.",
      '优化部分设备动画性能不佳的体验，使用了渐进式技术优化动画性能。',
    ],
    new: [
      [
        'By implementing Progressive Image Loading, low-resolution images are prioritized during the animation process to reduce rendering overhead. After the animation completes, high-resolution images are dynamically swapped in, achieving a smooth transition effect while significantly optimizing first-screen loading performance and overall rendering efficiency. This approach greatly enhances the smoothness and stability of card transition animations.',
      ],
      [
        '更改部分动画效果，例如卡片翻转动画，优化了动画性能。',
        '使用渐进式图片加载（Progressive Image Loading）技术，通过优先显示低分辨率图片并附带动画效果，动画完成后切换为高分辨率图片，既实现了流畅的过渡效果，又优化了首屏加载性能与动画渲染效率，大幅提升了卡片 transition 动画的流畅性与稳定性。',
      ],
    ],
    fix: [
      [
        'Fix some bugs of animation bugs.',
        'Fix the bug of pic CDN problem that leads picture disappear',
      ],
      ['修复了动画 BUG.', '修复了图片 CDN 问题导致图片消失的问题。'],
    ],
    impro: [
      [
        'Improve some info of the transition.',
        'Improve some performance of the animation.',
      ],
      ['修复了翻译不佳的情况.', '优化了部分动画的性能。'],
    ],

    // 更新内容
    // header: ['Patch Update', '补丁更新'],
    // new: [
    //   [
    //     'Add contents of skill part in CV page.',
    //     'Adjust partial UI and Animations in Home and CV page.',
    //   ],
    //   ['新增内容，简历页。', '调整部分在主页和简历页的 UI 和 动画。'],
    // ],

    // fix: [],
    // impro: [],

    // 显示优化 💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅
    // header: ['Patch Update', '补丁更新'],
    // new: [],
    // fix: [['Fix  some bugs.'], ['修复部分异常']],
    // impro: [],

    // 性能优化 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
    // header: ["Patch Update", "补丁更新"],
    // new: [],
    // fix: [
    //   [
    //     "Fix performance issues, Optimise long task.",
    //     "Fix some bugs.",
    //     ,
    //   ],
    //   ["修复性能问题，优化长事件。", "修复了动画 BUG。"],
    // ],
    // impro: [],
  };

  // 将新日志条目添加到日志字典中，以时间戳作为键
  log[currentTime] = newLogEntry;

  // 将更新后的内容写回 package.json 文件和 update-log.json 文件
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  fs.writeFileSync(logPath, JSON.stringify(log, null, 2));

  console.log(
    `Updated package.json and update-log.json with update-log. time: ${currentTime}`,
  );
})();
