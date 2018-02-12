const util = require('../utils/util');
const logUtil = require('../utils/log_util');

const noTokenURL = ['/Common/GetUfAccountInfo','/User/VerifyUser'];

module.exports = async (ctx, next) => {
  
  const req = ctx.request;
  let token = '';
  let payload = {};

  let result = {
    retrun_code: '000000',
    token: '',
  };

  ctx.body = result;

  if (req.originalUrl == '/favicon.ico') {
    result.retrun_code = 'SYS0000';
    return;
  }

  //url是否需要判断token，如果需要则数据必需为post过来的
  if (!noTokenURL.includes(req.originalUrl.trim())) {
    token = req.body.token || '';
    if (token === '') {
      result.retrun_code = 'SYS0004';
      return;
    } else {
      //验证token
      try {
        payload = await util.tokenVerify(token, req.body.user_id);
      } catch (err) {
        logUtil.logErrorApp.error(err);
        result.retrun_code = 'SYS0004';
        return;
      }
    }
  }

  // 将token的载荷解释出来，并赋给ctx.state中，用于传到下一个中间件
  ctx.state = payload;
  //开始进入到下一个中间件
  await next();

  //更新token
  payload = ctx.state;
  if (!noTokenURL.includes(req.originalUrl.trim())) {
    try {
      token = await util.tokenSign(payload, req.body.user_id);
      ctx.body.token = token;
    } catch (err) {
      logUtil.logErrorApp.error(err);
      result.retrun_code = 'SYS0001';
      return;
    }
  }
}