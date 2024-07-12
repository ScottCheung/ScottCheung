const fs = require("fs");
const path = require("path");

// 获取当前时间
const currentTime = new Date().toISOString();

// 读取 package.json 文件
const packageJsonPath = path.resolve(__dirname, "package.json");
const logPath = path.resolve(__dirname, "update-log.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
const log = JSON.parse(fs.readFileSync(logPath, "utf8"));

// 更新发布时间戳
packageJson.lastPublishedAt = currentTime;

// 创建新的日志条目
const newLogEntry = {
  new: "updateInfo",
  time: currentTime,
  fix: "updateInfo",
  feature: "updateInfo",
  description: "This function adds new information to the package.json file",
  version: packageJson.version,
  address: {
    street: "Wolli Creek",
    city: "Sydney",
    state: "NSW",
    zipcode: "2205",
  },
};

// 将新日志条目添加到日志字典中，以时间戳作为键
log[currentTime] = newLogEntry;

// 将更新后的内容写回 package.json 文件和 update-log.json 文件
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
fs.writeFileSync(logPath, JSON.stringify(log, null, 2));

console.log(
  `Updated package.json and update-log.json with current time: ${currentTime}`,
);
