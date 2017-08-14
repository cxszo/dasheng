
var express = require('express');
var app = express();
var router = express.Router();
var jwt = require('jsonwebtoken');//用来创建和确认用户信息摘要




// 检查用户会话
module.exports = function(req, res, next) {
  //检查post的信息或者url查询参数或者头信息
  var accessToken = req.params.accessToken || req.query.accessToken || req.headers['x-access-token'];
  // 解析 token
  if (accessToken) {
    // 确认token
    jwt.verify(accessToken, 'wangwei', function(err, decoded) {
      if (err) {
        return res.send({
            code:'0',
            desc:'token过期,请重新登录'
        });
      } else {
        // 如果没问题就把解码后的信息保存到请求中，供后面的路由使用
        req.api_user = decoded;
        next();
      }
    });
  } else {
    // 如果没有token，则返回错误
    res.contentType('json');
    res.send({
        code:'0',
        desc:'用户没登录'
    });
    return false;
  }
};