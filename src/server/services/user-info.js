const userInfoModel = require('../models/user-info');

module.exports = {
  /**
   * @description 验证用户登录信息
   * @author Michael Jian
   * @param {any} fromData 数据来源
   * @returns 返回验证结果与账套信息
   */
  async verifyUser(fromData) {
    const result = {};
    try {
      vefifyResult = await userInfoModel.verifyUser(fromData);
    } catch (err) {

    }
    return result;
  }
}