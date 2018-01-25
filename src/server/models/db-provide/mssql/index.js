const Mssql = require('./mssql-provide');
const dbConfig = require('../../../../config/db-config');

const ufAccountDb = new Mssql(dbConfig.uf_account);
const ufSystemDb = new Mssql(dbConfig.uf_system);
const AppDb = new Mssql(dbConfig.application);

module.exports = {
  ufAccountDb,
  ufSystemDb,
  AppDb,
};