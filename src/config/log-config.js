var path = require('path');

//错误日志输出完整路径
var wwwErrLogPath = path.resolve(__dirname, "../logs/www/error/error");

//响应日志输出完整路径
var wwwResLogPath = path.resolve(__dirname, "../logs/www/response/response");

//应用错误日志输出完整路径
var appErrLogPath = path.resolve(__dirname, "../logs/app/error/error");

//应用正常日志输出完整路径
var appLogPath = path.resolve(__dirname, "../logs/app/information/info");

module.exports = {
  appenders:{
    wwwErrLogger:{
      type: "console", //日志类型
      filename: wwwErrLogPath, //日志输出位置
      alwaysIncludePattern: true, //是否总是有后缀名
      pattern: "-yyyy-MM-dd.log" //后缀，每天创建一个新的日志文件
    },
    wwwResLogger:{
      type: "console",
      filename: wwwResLogPath,
      alwaysIncludePattern: true,
      pattern: "-yyyy-MM-dd.log" //后缀，每小时创建一个新的日志文件
    },
    appErrLogger:{
      type: "console", //日志类型
      filename: appErrLogPath, //日志输出位置
      alwaysIncludePattern: true, //是否总是有后缀名
      pattern: "-yyyy-MM-dd.log" //后缀，每天创建一个新的日志文件
    },
    appLogger:{
      type: "console",
      filename: appLogPath,
      alwaysIncludePattern: true,
      pattern: "-yyyy-MM-dd.log" //后缀，每小时创建一个新的日志文件
    },
  },
  categories:{
    default: {
      appenders: [
        "wwwErrLogger",
      ],
      level: "debug"
    },
    wwwResLogger: {
      appenders: [
        "wwwResLogger",
      ],
      level: "info"
    },
    appErrLogger: {
      appenders: [
        "appErrLogger",
      ],
      level: "error"
    },
    appLogger: {
      appenders: [
        "appLogger",
      ],
      level: "info"
    },
  }
}
