const ufInfoModel = require('../models/uf-info');
const commonInfoModel = require('../models/common-info');
const logUtil = require('../utils/log_util')

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
      token: fromData.token,
      data: {
        default_acct_no: '',
        acct_list: [],
      }
    };
    
    try {
      let [sysInfoResult, ufAcctResult] = await Promise.all([commonInfoModel.getSysInfo(), ufInfoModel.getUfAccountInfo()]);
      let allowChangeAcct = false;
      for (let item of sysInfoResult.recordset) {
        switch (item['OptId']) {
          case 3:
            {
              result.data.default_acct_no = item['Opt2'];
              break;
            }
          case 4:
            {
              allowChangeAcct = (item['Opt2'] === '1' ? true : false);
            }
        }
      }

      for (let item of ufAcctResult.recordset) {
        result.data.acct_list.push({
          disable: allowChangeAcct,
          acct_no: item['cAcc_Id'],
          acct_name: item['cAcc_Name'],
        })
      }
    } catch (err) {
      result.retrun_code="SYS0001";
      logUtil.logErrorApp.error(err);
    }
    return result;
  },


}