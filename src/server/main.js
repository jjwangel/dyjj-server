const mssql = require('../server/models/db-provide/mssql');
const config = require('../config/env-config')['sit'];


/**
 * @description 初始化服务端
 * @author Michael Jian
 */
function initServer() {

  mssql.ConnectDB()
    .then(() => {
      console.log("connect database success!");
    }).catch((err) => {
      console.error('connect database error %s', err);
    })
}

initServer();