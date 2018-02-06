const commonInfoModel = require('../models/common-info');
const ufInfoModel = require('../models/uf-info');
const logUtil = require('../utils/log_util')

module.exports = {
  /**
   * @description 鉴别功能权限
   * @author Michael Jian
   * @param {any} fromData 数据来源
   * @returns 返回判断结果
   */
  async verifyFunction(fromData) {
    const result = {};
    try {
      vefifyResult = await userInfoModel.verifyFunction(fromData);
    } catch (err) {

    }
    return result;
  },
}