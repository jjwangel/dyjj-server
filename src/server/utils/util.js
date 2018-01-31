const jwt = require('jsonwebtoken');

/**
 * @description 获取token
 * @param {object} 附加数据 
 * @param {String} 私有key（用户ID） 
 * @returns 
 */
const tokenSign = function (payload, privateKey) {
  return new Promise((resolve, reject) => {
    if (payload && privateKey) {
      jwt.sign(payload, privateKey, {
        expiresIn: 3600, //单位是秒
      }, function (err, token) {
        if (err) {
          reject(err);
        } else {
          resolve(token);
        }
      })
    } else {
      reject(new Error('无效的签名参数！'))
    }
  })
}

/**
 * @description 验证token，并返回附加数据
 * @param {String} token 
 * @param {String} 私有key（用户ID）  
 * @returns 返回附加数据
 */
const tokenVerify = function (token, privateKey) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, privateKey, function (err, decoded) {
      if (err) {
        reject(err);
      } else {
        resolve(decoded);
      }
    });
  })
}

module.exports = {
  tokenSign,
  tokenVerify,
}