const fs = require("fs");
const path = require("path");
const axios = require("axios");

// 获取当前时间
const currentTime = new Date().toISOString();

// 读取 package.json 文件
const packageJsonPath = path.resolve(__dirname, "package.json");
const logPath = path.resolve(__dirname, "./src/update-log.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
const log = JSON.parse(fs.readFileSync(logPath, "utf8"));

// 更新发布时间戳
packageJson.lastPublishedAt = currentTime;

// 获取地理位置信息
const getGeolocation = async () => {
  try {
    const response = await axios.get(
      "https://ipinfo.io/json?token=7ea9f53eb7d899",
    );
    const { city, region, postal, loc } = response.data;
    return {
      city,
      state: region,
      zipcode: postal,
      loc,
    };
  } catch (error) {
    console.error("Error fetching geolocation:", error);
    return {
      city: "Unknown",
      state: "Unknown",
      zipcode: "Unknown",
      loc: "Unknown",
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
  // 创建新的日志条目
  const newLogEntry = {
    version: packageJson.version,
    time: currentTime,
    author: "Scott Cheung",
    address,
    // 自定义
    // header: ["New Log Function", "更新 Log 记录功能"],
    // new: [
    //   [
    //     "Update the info of the Update-Log, show the update contents every time.",
    //   ],
    //   ["新增了更新日志功能，可以查看每次更新的内容"],
    // ],
    // fix: [["Fix some bugs of animation bugs."], ["修复了动画 BUG."]],
    // impro: [
    //   [
    //     "Improve some situations of transition, update the info of the transition.",
    //   ],
    //   ["修复了翻译不佳的情况."],
    // ],

    // 显示优化

    // 性能优化
    header: ["Patch Update", "补丁更新"],
    new: [],
    fix: [
      [
        "Fix performance issues in home page. Optimise long task.",
        "Fix some bugs of animation bugs.",
        ,
      ],
      ["修复主页性能问题. 优化长事件", "修复了动画 BUG."],
    ],
    impro: [],
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
