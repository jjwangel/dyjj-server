const mssql = require('../server/models/db-provide/mssql');



async function ConnectDB() {
  await Promise.all([mssql.ufSystemDb.connectDB(), mssql.AppDb.connectDB(), mssql.ufAccountDb.connectDB()]);
};

function ConnectDB_() {
  ConnectDB().then(() => {
    console.log('connect success!!!');
  }).catch((err) => {
    console.log('connect err: %s', err);
  })
}

ConnectDB_();