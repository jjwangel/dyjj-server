const ufInfoModel = require('../models/uf-info');

module.exports = {

  /**
   * @description 获取账套数据
   * @author Michael Jian
   * @param {any} fromData 来源数据
   * @returns 返回账套数据
   */
  async getUfAccountInfo(fromData) {
    let result = {};
    try {
      let acctInfo = await ufInfoModel.getUfAccountInfo();
      result.retrun_code = acctInfo.retrun_code;
    } catch (err) {

    }

    return result;
  },


}