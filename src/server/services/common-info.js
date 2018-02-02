const commonInfoModel = require('../models/common-info');
const ufInfoModel = require('../models/uf-info');
const logUtil = require('../utils/log_util')

module.exports = {
  async getSysInfo() {
    const result = {
      data: {
        default_acct_no: '',
        acct_list: [

        ]
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
      logUtil.logErrorApp.error(err);
    }
    return result;
  },
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