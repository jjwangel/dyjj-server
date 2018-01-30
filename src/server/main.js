// const mssql = require('../server/models/db-provide/mssql');
// const config = require('../config/env-config')['sit'];


/**
 * @description 初始化服务端
 * @author Michael Jian
 */
// function initServer() {

//   mssql.ConnectDB()
//     .then(() => {
//       console.log("connect database success!");
//     }).catch((err) => {
//       console.error('connect database error %s', err);
//     })
// }

// initServer();

const Koa = require('koa');
const app = new Koa();
const logRes = require('./middleware/log-middleware');

app.use(logRes);
// response
app.use(ctx => {
  ctx.body = 'Hello Koa';
});

app.listen(3000);