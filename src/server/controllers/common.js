const ufInfoService = require('../services/uf-info');
const commonInfoService = require('../services/common-info');

module.exports = {
  /**
   * @description 获取账套数据
   * @author Michael Jian
   * @param {any} ctx 前端数据
   * @returns 返回账套数据
   */
  async getUfAccountInfo(ctx) {
    let bodyData = ctx.request.body;
    let fromData = {
      retrun_code: bodyData.retrun_code || '000000',
      token: '',
    };
    let result = {};
    result = await ufInfoService.getUfAccountInfo(fromData);
    ctx.body = result;
  },

  /**
   * @description 鉴别功能权限
   * @author Michael Jian
   * @param {any} ctx 前端数据
   * @returns 返回判断结果
   */
  async verifyFunction(ctx) {
    let bodyData = ctx.request.body;
    let fromData = {};
    return await commonInfoService.verifyFunction(fromData);
  },
}