const userInfoModel = require('../models/user-info');
const ufInfoModel = require('../models/uf-info');
const logUtil = require('../utils/log_util')

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
      let [vefifyResult, accountInfo] = await Promise.all([userInfoModel.verifyUser(fromData), ufInfoModel.getAccountDetail(fromData)]);
      
      console.log(vefifyResult);
      console.log(accountInfo);
    } catch (err) {
      logUtil.logErrorApp.error(err);
    }
    return result;
  }
}