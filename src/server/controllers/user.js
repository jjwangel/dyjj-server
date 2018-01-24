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
    let fromData = {};
    return await userInfoService.verifyUser(fromData);
  }
}