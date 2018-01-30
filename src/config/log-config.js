var path = require('path');

//错误日志输出完整路径
var wwwErrLogPath = path.resolve(__dirname, "../logs/www/error/error");

//响应日志输出完整路径
var wwwResLogPath = path.resolve(__dirname, "../logs/www/response/response");

module.exports = {
  appenders:{
    wwwErrLogger:{
      type: "dateFile", //日志类型
      filename: wwwErrLogPath, //日志输出位置
      alwaysIncludePattern: true, //是否总是有后缀名
      pattern: "-yyyy-MM-dd.log" //后缀，每天创建一个新的日志文件
    },
    wwwResLogger:{
      type: "dateFile",
      filename: wwwResLogPath,
      alwaysIncludePattern: true,
      pattern: "-yyyy-MM-dd-hh.log" //后缀，每小时创建一个新的日志文件
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
  }
}
