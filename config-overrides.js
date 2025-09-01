/** @format */

const path = require('path');

module.exports = function override(config, env) {
  // 完全移除所有热刷新相关配置，让 react-scripts 使用内置功能
  if (env === 'development') {
    // 移除所有热刷新插件
    config.plugins = config.plugins.filter(
      (plugin) => plugin.constructor.name !== 'ReactRefreshWebpackPlugin',
    );

    // 移除热刷新相关的 loader 配置
    if (config.module && config.module.rules) {
      config.module.rules.forEach((rule) => {
        if (rule.oneOf) {
          rule.oneOf.forEach((oneOfRule) => {
            if (oneOfRule.loader && oneOfRule.loader.includes('babel-loader')) {
              // 移除可能的热刷新插件
              if (oneOfRule.options && oneOfRule.options.plugins) {
                oneOfRule.options.plugins = oneOfRule.options.plugins.filter(
                  (plugin) => {
                    if (typeof plugin === 'string') {
                      return !plugin.includes('react-refresh');
                    }
                    if (Array.isArray(plugin) && plugin[0]) {
                      return !plugin[0].includes('react-refresh');
                    }
                    return true;
                  },
                );
              }
            }
          });
        }
      });
    }
  }

  return config;
};
