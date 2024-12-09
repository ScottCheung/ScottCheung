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
    // header: [
    //   "Update CV page's UI and contents.",
    //   '更新简历 UI 和内容，更新Skill部分内容。',
    // ],
    // new: [
    //   [
    //     'Add contents of skill part in Home and CV page.',
    //     'Adjust partial UI and Animations in Home and CV page.',
    //   ],
    //   [
    //     '新增内容，在主页的能力部分和简历页。',
    //     '调整部分在主页和简历页的 UI 和 动画。',
    //   ],
    // ],
    // fix: [['Fix some bugs of animation bugs.'], ['修复了动画 BUG.']],
    // impro: [
    //   [
    //     'Improve some info of the transition.',
    //     'Improve some performance of the Carousel.',
    //   ],
    //   ['修复了翻译不佳的情况.', '优化了轮播图的性能。'],
    // ],

    // 更新内容
    // header: ['Patch Update', '补丁更新'],
    // new: [
    //   [
    //     'Add contents of skill part in CV page.',
    //     'Adjust partial UI and Animations in Home and CV page.',
    //   ],
    //   ['新增内容，简历页。', '调整部分在主页和简历页的 UI 和 动画。'],
    // ],

    fix: [],
    impro: [],

    // 显示优化 💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅💅
    header: ['Patch Update', '补丁更新'],
    new: [],
    fix: [['Fix  some bugs.'], ['修复部分异常']],
    impro: [],

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
