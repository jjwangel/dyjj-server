module.exports = async (ctx, next) => {

  //url是否需要判断token，如果需要则数据必需为post过来的
  if (ctx.request.originalUrl) {
    // 验证token是否有效
  }
  let result = {
    retrun_code: '000000',
  };

  // 将token的载荷解释出来，并赋给ctx.state中
  ctx.state = {a:123};

  //开始进入到下一个中间件
  await next();

  console.log(ctx.state);
  if(ctx.body && ctx.body.retrun_code==='000000'){
    ctx.body.token='new_token';
  }
  
   
  



}