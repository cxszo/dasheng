

var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');
var mongoose = require('mongoose')
let User = require('./db/models/user')
let fs = require('fs')
var qs = require("querystring");
let url = require('url')
// let lu = '/Users/wangwei/dasheng/www/';//王炜本地
let lu = '/opt/www/';//王炜本地
//链接数据库
mongoose.connect('mongodb://59.110.143.111/dasheng',{useMongoClient:true});
var db = mongoose.connection

db.on('error', console.error.bind(console, '连接错误:'));
db.once('open', function() {
    console.log('连接成功');
});


//接口导进来
var interface = require('./interface/index');
app.use('/data', interface);



//处理静态页面
var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now());
  }
}
app.use(express.static(lu, options));



// 如何处理 404 
app.use(function(req, res, next) {
    let pn = lu+'404.html'
    var content =  fs.readFileSync(pn,"binary");   
    res.status(404).sendFile(pn);
});



app.listen(3000)