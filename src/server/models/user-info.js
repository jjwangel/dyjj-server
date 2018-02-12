const mssql = require('./db-provide/mssql');

module.exports = {
  /**
   * @description 验证用户登录信息
   * @author Michael Jian
   * @param {any} fromData 数据来源
   * @returns 返回验证结果与账套信息
   */
  async verifyUser({
    user_acct,
    user_pwd
  }) {
    let result = {};

    let sql = `select a.* from J_User_Info a where a.LoginId='${user_acct}' and a.LoginPws='${user_pwd}'`;
    result = await mssql.AppDb.getRequest().query(sql);
    
    if(result && result.rowsAffected[0]>0){
      return {
        user_acct: result.recordset[0].LoginId,
        user_id: result.recordset[0].UserGuid,
        user_name: result.recordset[0].LoginName,
        user_dept: result.recordset[0].UserDep,
        limits: []
      };
    }else{
      return {};
    }
  },
}