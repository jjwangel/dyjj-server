const ufInfoModel = require('../models/uf-info');

module.exports = {

  /**
   * @description 获取账套数据
   * @author Michael Jian
   * @param {any} fromData 来源数据
   * @returns 返回账套数据
   */
  async getUfAccountInfo(fromData) {
    let result = {
      retrun_code: fromData.retrun_code,
      uf_acct_list: {
        default_acct_no: '',
        list: [],
      }

    };
    try {
      let acctInfo = await ufInfoModel.getUfAccountInfo();
      let 
      
    } catch (err) {

    }

    return result;
  },


}