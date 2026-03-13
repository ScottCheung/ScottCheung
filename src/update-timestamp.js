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

    /****************
     *
     * 自定义
     *
     ******************/

    // header: [
    //   'Optimized animation curves, characteristics (duration, intervals, interaction triggers). Improved mobile layout (home, buttons, carousel). Adjusted desktop UI (education, abilities). Added project module to navbar (6 demos). Fixed translation/overflow issues. Adjusted/cropped images, re-uploaded with lazy loading for faster speeds. Component layout adjustments for different devices.',
    //   '优化了动画曲线、特性（时长、间隔、交互触发）。改进了移动端布局（首页、按钮、轮播图）。调整了桌面端 UI（教育、能力）。导航栏新增项目模块（6个演示）。修复了翻译/溢出问题。调整/裁剪了图片，重新上传并使用懒加载以加快速度。针对不同设备调整了组件布局。',
    // ],
    // new: [
    //   [
    //     'Optimized animation curves, characteristics (duration, intervals, interaction triggers). Improved mobile layout (home, buttons, carousel). Added project module to navbar (6 demos).',
    //     'Adjusted desktop UI (education, abilities).',
    //     'Adjusted/cropped images, re-uploaded with lazy loading for faster speeds. Component layout adjustments for different devices.',
    //   ],
    //   [
    //     '优化了动画曲线、特性（时长、间隔、交互触发）。改进了移动端布局（首页、按钮、轮播图）。导航栏新增项目模块（6个演示）。',
    //     '调整了桌面端 UI（教育、能力）。',
    //     '调整/裁剪了图片，重新上传并使用懒加载以加快速度。针对不同设备调整了组件布局。',
    //   ],
    // ],
    // fix: [
    //   ['Fixed translation/overflow issues.', 'Fixed minor UI display errors.'],
    //   ['修复了翻译/溢出问题。', '修复了细小的UI显示错误。'],
    // ],
    // impro: [
    //   [
    //     'Improved animation performance.',
    //     'Improved loading speed with optimized images and lazy loading.',
    //   ],
    //   ['优化了动画性能。', '通过优化图片和懒加载提高了加载速度。'],
    // ],

    /****************
     *
     * 更新内容
     *
     ******************/

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

    /****************
     *
     * 补丁更新
     *
     ******************/
    header: ['Patch Update', '补丁更新'],
    new: [],
    fix: [['Fix some bugs.'], ['修复部分异常']],
    impro: [],

    // 视觉优化
    // header: ['Project Navbar visual Patch Update', '项目顶端栏显示优化更新'],
    // new: [],
    // fix: [
    //   [
    //     'Fix some Card Animation disppear issues.',
    //     'Fix Project Cards overflow issues.',
    //   ],
    //   ['修复卡片溢出，调整比例。', '修复卡片动画消失显示问题。'],
    // ],
    // impro: [],

    // 性能优化 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
    // header: ['Optimise First Page loading time', '优化首屏加载时间'],
    // new: [],
    // fix: [
    //   [
    //     'Fix performance issues, Optimise First page loading time, using lazy loading.',
    //   ],
    //   ['修复性能问题,优化首屏加载时间，使用懒加载。'],
    // ],
    // impro: [],

    // header: ['Carousel Component UI Update', 'Carousel 组件UI更新'],
    // new: [
    //   ['New UI.', 'Support Book function.'],
    //   ['全新UI。', '支持预定功能'],
    // ],
    // fix: [],
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
