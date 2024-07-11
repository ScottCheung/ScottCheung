const fs = require("fs");
const path = require("path");

// 获取当前时间
const currentTime = new Date().toISOString();

// 读取 package.json 文件
const packageJsonPath = path.resolve(__dirname, "package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

// 更新发布时间戳
packageJson.lastPublishedAt = currentTime;

// 将更新后的内容写回 package.json 文件
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log(`Updated package.json with current time: ${currentTime}`);
