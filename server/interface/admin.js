var express = require('express');
var app = express();
var router = express.Router();
var User = require('../models/user')

//查看注册用户列表
router.get('/userlist', (req, res)=>{
    User.fetch((err, _user)=>{
        res.contentType('json');
        res.send({
            code:'1',
            data:_user,
            desc:'查询成功'
        });
        return false;
    })
})


module.exports = router;