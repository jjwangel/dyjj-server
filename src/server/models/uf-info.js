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
  /**
   * @description 获取指定账套的信息
   * @author Michael Jian
   * @param {String} {
   *     uf_acct_no  账套号
   *   } 
   * @returns 返回账套信息
   */
  async getAccountDetail({
    uf_acct_no
  }) {
    let result = {};
    let sql = `select a.cAcc_Id,a.cDatabase,b.cAcc_Name,c.iYear from (
      select top 1 cAcc_Id,cDatabase from UA_AccountDatabase where cAcc_Id='${uf_acct_no}' and iBeginYear is not null and iEndYear is null order by iBeginYear desc) a
      inner join (
      select cAcc_Id,cAcc_Name from UA_Account where cAcc_Id='${uf_acct_no}') b on a.cAcc_Id=b.cAcc_Id
      inner join(
      select top 1 cAcc_Id,iYear from UA_Account_sub where cAcc_Id='${uf_acct_no}' and bIsDelete=0 and bClosing=0 and iYear<>9999 order by iYear desc) c on a.cAcc_Id=c.cAcc_Id`;

    result = await mssql.ufSystemDb.getRequest().query(sql);

    if (result && result.rowsAffected[0] > 0) {
      return {
        acct_no: result.recordset[0].cAcc_Id,
        acct_name: result.recordset[0].cAcc_Name,
        acct_year: result.recordset[0].iYear,
        acct_database: result.recordset[0].cDatabase,
      };
    } else {
      return {};
    }

    return result;
  }


}