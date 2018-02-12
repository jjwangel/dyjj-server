const userInfoService = require('../services/user-info');

module.exports = {
  /**
   * @description 验证用户登录信息
   * @author Michael Jian
   * @param {any} ctx 前端数据
   * @returns 返回验证结果与账套信息
   */
  async verifyUser(ctx) {
    let bodyData = ctx.request.body;
    let fromData = {
      retrun_code: '000000',
      token: '',
      user_acct: bodyData.user_acct,
      user_pwd: bodyData.user_pwd,
      uf_acct_no: bodyData.uf_acct_no,
    };
    let result = {};
    result = await userInfoService.verifyUser(fromData);
    ctx.body = result;
  }
}