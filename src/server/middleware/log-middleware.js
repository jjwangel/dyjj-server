const logUtil = require('../utils/log_util');

module.exports = async (ctx, next) => {
  //响应开始时间
  const start = new Date();
  //响应间隔时间
  let ms;
  try {
    //开始进入到下一个中间件
    await next();
    ms = new Date() - start;
    //记录响应日志
    logUtil.logResponseWWW(ctx, ms);
  } catch (error) {
    ms = new Date() - start;
    //记录异常日志
    logUtil.logErrorWWW(ctx, error, ms);
  }
}