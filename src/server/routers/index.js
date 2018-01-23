/**    
 * 整合所有子路由
 */

const routers = require('koa-router')();

const commons = require('./common');
const users = require('./user');

routers.use('/', commons.routes(), commons.allowedMethods());
routers.use('/', users.routes(), users.allowedMethods());

module.exports = routers;