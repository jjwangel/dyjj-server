/**    
 * 整合User子路由
 */

const routers = require('koa-router')();

const verifyuser = require('./verifyuser');

routers.use('User', verifyuser.routes(), verifyuser.allowedMethods());

module.exports = routers;