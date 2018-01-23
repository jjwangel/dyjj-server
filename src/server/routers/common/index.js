/**    
 * 整合Common子路由
 */

const routers = require('koa-router')();

const ufaccountinfo = require('./getufaccountinfo');
const verifyfunction=require('./verifyfunction');

routers.use('Common', ufaccountinfo.routes(), ufaccountinfo.allowedMethods());
routers.use('Common', verifyfunction.routes(), verifyfunction.allowedMethods());

module.exports = routers;