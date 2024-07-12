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
  const newLogEntry = {
    new: "None",
    fix: "Fix some bugs of transition, update the info of the transition.",
    feature: "updateInfo",
    description: "This function adds new information to the package.json file",
    version: packageJson.version,
    time: currentTime,
    address,
  };

  // 将新日志条目添加到日志字典中，以时间戳作为键
  log[currentTime] = newLogEntry;

  // 将更新后的内容写回 package.json 文件和 update-log.json 文件
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  fs.writeFileSync(logPath, JSON.stringify(log, null, 2));

  console.log(
    `Updated package.json and update-log.json with current time: ${currentTime}`,
  );
})();
