/* eslint valid-jsdoc: "off" */

'use strict';
let whiteList = require('./whiteList')
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1578444142193_3362';
  // add your middleware config here
  config.middleware = ['userJwt'];
  config.userJwt = [...whiteList]
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    security : {
      csrf: false
    },
    session : {
      key: 'EGG_SESS',
      maxAge: 24 * 3600 * 1000, // 1 天
      httpOnly: true,
      encrypt: true,
    },
    
    mysql : {
      // 单数据库信息配置
      client: {
        // host
        host: 'localhost',
        // 端口号
        port: '3306',
        // 用户名
        user: 'root',
        // 密码
        password: '12344321',
        // 数据库名
        database: 'db_1707c',
      },
      // 是否加载到 app 上，默认开启
      app: true,
      // 是否加载到 agent 上，默认关闭
      agent: false,
    }
  };
  
  return {
    ...config,
    ...userConfig,
  };
};
