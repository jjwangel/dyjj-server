const mssql = require('./db-provide/mssql');

module.exports = {
  /**
   * @description 获取账套信息
   * @author Michael Jian
   * @returns 返回账套数据
   */
  async getUfAccountInfo() {
    let result = {};
    let sql = 'select a.cAcc_Id,a.cAcc_Name from UA_Account a';
    result = await mssql.ufSystemDb.getRequest().query(sql);
    return result;
  },


}