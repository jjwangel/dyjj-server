const sql = require('mssql');
const sb_pool = Symbol('pool');
const sb_dbconfig = Symbol('dbconfig');

module.exports = class Mssql_Provide {
  constructor(dbconfig) {
    this[sb_dbconfig] = dbconfig;
  };
  async connectDB() {
    this[sb_pool] = await new sql.ConnectionPool(this[sb_dbconfig]).connect();
  };
  getRequest() {
    return this[sb_pool].request();
  }
}