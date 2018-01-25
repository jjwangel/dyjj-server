const mssql = require('./mssql-provide');
const dbConfig = require('../../../../config/db-config');

const ufSystemDb = new mssql(dbConfig.uf_system);
const AppDb = new mssql(dbConfig.application);

const ConnectDB = async() => {
  await Promise.all([ufSystemDb.connectDB(), AppDb.connectDB()]);
};

module.exports = {
  ufSystemDb,
  AppDb,
  ConnectDB,
};