var express = require('express');
var app = express();
var router = express.Router();
var BlogTag = require('../models/blog/blog_tag')//标签表
// var BlogTag = require('../models/blog/blog_tag')//标签表
var BlogUser = require('../models/blog/blog_user')//博客用户表


var $middlewares = require('./mount-middlewares');//获取token中间件

//查看分类标签
router.get('/tag',  (req, res)=>{
    BlogTag.fetch((err, _data)=>{
        res.contentType('json');
        res.send({
            code:'1',
            data: _data,
            desc:'查询成功'
        });
        return false;
    })
})
//王炜-warning  这个接口可以静态化
router.get('/authors', (req, res)=>{
    BlogUser.find({}, '_id ').sort({love:-1}).limit(2)
    // .populate('user_object_id', '-_id headimg')

    .populate({
        path: 'user_object_id',
        // match: { age: { $gte: 21 }},
        select: '-_id headimg',
        // options: { limit: 5 },
        // model: 'modelName'
    })
    .exec((err, _data)=>{
        res.contentType('json');
        res.send({
            code:'1',
            data: _data,
            desc:'查询成功'
        });
        return false;
    })
})
// router.get('/tag', (req, res)=>{

// })

module.exports = router;
