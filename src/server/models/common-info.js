const mssql = require('./db-provide/mssql');

module.exports = {
  /**
   * @description 读取公共参数表数据
   * @author Michael Jian
   * @returns 
   */
  async getSysInfo() {
    let result = {};
    let sql = 'select * from J_SynOpt';
    result = await mssql.AppDb.getRequest().query(sql);
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

    //判断功能权限

    return result;
  },
}