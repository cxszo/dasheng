var express = require('express');
var app = express();
var router = express.Router();
var qs = require("querystring");
var User = require('../db/models/user')

//signup
router.post('/signup', (req, res)=>{
        req.addListener("data",function(data){
            var param = qs.parse(data+'');        //转换成json对象
            var user = new User(param)

            User.find({username: param.username}, (err, _user)=>{
                if(err)console.log(err)
                if(_user.length){
                    var response = {code:0,desc:'用户名已存在'};
                    // res.contentType('json');
                    res.send(response);
                    return false;
                }else{
                    user.save((err, _user)=>{
                        if(err) return console.log(err)
                        var response = {code:1,desc:'注册成功'};
                        res.contentType('json');//返回的数据类型
                        res.send(response);//给客户端返回一个json格式的数据
                        return false;
                    })

                }
            })
        });
        req.addListener("end",function(){
            // res.writeHead(200,{"Content-Type":"text/plain; charset=utf-8"});
            // res.write(urlstr);
            // res.end();
        });
})


//查看注册用户列表
router.get('/userlist', (req, res)=>{
        User.find({}, (err, _user)=>{
            console.log(_user)
            res.contentType('json');
            res.send({
                code:'1',
                data:_user,
                desc:'查询成功'
            });
            return false;
        })

})


router.get('/getUserInfo', function(req, res, next) {

    var user = {}
    // var params = URL.parse(req.url, true).query;

//  if(params.id == '1') {

    user.name = "ligh";
    user.age = "1";
    user.city = "北京市";

// }else{    
//     user.name = "SPTING";
//     user.age = "1";
//     user.city = "杭州市";
// }

  var response = {status:1,data:user};
  res.send(JSON.stringify(response));

});
router.get('/login', function(req, res, next) {

    var user = {}
    // var params = URL.parse(req.url, true).query;

//  if(params.id == '1') {

    user.name = "ligh";
    user.age = "1";
    user.city = "北京市";

// }else{    
//     user.name = "SPTING";
//     user.age = "1";
//     user.city = "杭州市";
// }

  var response = {status:1,data:user};
  res.send(JSON.stringify(response));

});


module.exports = router;