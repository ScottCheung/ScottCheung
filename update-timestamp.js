const fs = require("fs");
const path = require("path");

// 获取当前时间
const currentTime = new Date().toISOString();

// 读取 package.json 文件
const packageJsonPath = path.resolve(__dirname, "package.json");
const Log = path.resolve(__dirname, "update-log.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

// 更新发布时间戳
packageJson.lastPublishedAt = currentTime;

// 更新发布时间戳
packageJson.lastPublishedAt = currentTime;

// 添加地址信息
packageJson.address = {
  street: "Wolli Creek",
  city: "Sydney",
  state: "NSW",
  zipcode: "2205",
};

packageJson.updateInfo = {
  new: "updateInfo",
  fix: "updateInfo",
  feature: "updateInfo",
  description: "This function adds new information to the package.json file",
  version: "1.0.0",
  date: currentTime,
};

// 将更新后的内容写回 package.json 文件
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
fs.writeFileSync(Log, JSON.stringify(Log, null, 2);
