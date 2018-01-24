/** 
 * 获取用友账套信息
 */

const router = require('koa-router')();
const common = require('../../controllers/common');

module.exports = router.get('/GetUfAccountInfo', common.getUfAccountInfo);