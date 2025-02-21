/** @format */

const path = require('path');

module.exports = function override(config, env) {
  config.resolve.alias['react-refresh/runtime'] = path.resolve(
    __dirname,
    'node_modules/react-refresh/runtime.js',
  );
  return config;
};
