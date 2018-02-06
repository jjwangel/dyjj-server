const Koa = require('koa');
const path = require('path')
const koaStatic = require('koa-static')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors');

const mssql = require('../server/models/db-provide/mssql');
const envConfig = require('../config/env-config')['sit'];
const routers = require('./routers');

const logResMiddWare = require('./middleware/log-middleware');
const tokenMiddWare=require('./middleware/token-middleware');

const app = new Koa();

//解决跨域问题
app.use(cors());

// 配置ctx.body解析中间件
app.use(bodyParser())

// 配置静态资源加载中间件
app.use(koaStatic(
  path.join(__dirname , '../static')
))

//请求日志中间件
app.use(logResMiddWare);

//token验证中间件
app.use(tokenMiddWare);

// 初始化路由中间件
app.use(routers.routes()).use(routers.allowedMethods());

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

app.listen(envConfig.port);


