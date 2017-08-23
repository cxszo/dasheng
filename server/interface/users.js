var express = require('express');
var app = express();
var router = express.Router();
var User = require('../models/user')

var $middlewares = require('./mount-middlewares');

//查看注册用户列表
router.get('/userinfo', $middlewares,  (req, res)=>{
    var {username, password} = req.api_user;
    let callphone = ''
    let data = ''
    if(/^\d*$/.test(username)){
        callphone = username
        data = {callphone}
    }else{
        data = {username}
    }
    //王炜-warning   token 我没有对比密码 可能后面会有问题 

    User.find(data, (err, _user)=>{
        res.contentType('json');
        let {username, callphone, headimg} = _user[0] || '';
        if(username){
            res.send({
                code:'1',
                data:{
                    headimg,
                    username,
                    callphone
                },
                desc:'查询成功'
            });
        }else{
            res.send({
                code:'0',
                desc:'不存在该用户'//token 有效但是 数据库里面没有该用户
            });
        }
        return false;
    })
})


module.exports = router;

