/** 
 * 验证用户登录信息
 */

const router = require('koa-router')();
const user = require('../../controllers/user');

module.exports = router.post('/VerifyUser', user.verifyUser);