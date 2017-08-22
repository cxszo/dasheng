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
router.get('/authors', (req, res)=>{
    BlogUser.fetch((err, _data)=>{
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
