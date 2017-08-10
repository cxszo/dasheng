var express = require('express');
var app = express();
var router = express.Router();
var qs = require("querystring");
var User = require('../models/user')






var bcrypt = require('bcrypt')
var SALT_WORK_FACTOR = 10;
//signup
router.post('/signup', (req, res)=>{
        req.addListener("data",function(data){
            /*
            *   注册通过规则
            *   用户名必须是中文 切 2-6位
            *   手机号 不为空
            *   密码必须是[a-zA-Z0-9`~!@#$%^&*()_+-={}[]\|;:'"<,>.?/] 6-10位  
            *   return {code:1, desc:'用户名不对'}
            *   code 1成功 -1用户名不对  -2手机号不对  -3密码不对
            *
            */
            var filterName = /(齐天大圣|王炜|习近平|毛泽东|周恩来|操|干他娘|干她娘|妈逼)/;//设置敏感词语
            var param = qs.parse(data+'');//转换成json对象
            var user = new User(param);
            let {username, callphone, password} = param;
            password = Buffer.from(password, 'base64').toString()//对应atob
            if( !/^[\u4E00-\u9FA5]{2,6}$/.test(username) ){
                var response = {code:-1,desc:'请输入2-6位汉字'};
                res.contentType('json');
                res.send(response);
                return false;
            }else if( filterName.test(username) ){
                var response = {code:-1,desc:'包含了敏感词汇'};
                res.contentType('json');
                res.send(response);
                return false;
            }else if( !/^1[3|4|5|7|8]\d{9}$/.test(callphone) ){
                var response = {code:-2,desc:'手机号格式不正确'};
                res.contentType('json');
                res.send(response);
                return false;
            }else if( !/^[a-zA-Z0-9`~!@#$%^&*()-+_={}\[\]\\|;:'"<,>.?/]{6,10}$/.test(password) ){
                var response = {code:-3,desc:'密码格式不对'};
                res.contentType('json');
                res.send(response);
                return false;
            }else {
                User.find({username}, (err, _user)=>{
                    if(err)console.log(err)
                    if(_user.length){
                        var response = {code:-1,desc:'用户名已存在'};
                        res.contentType('json');
                        res.send(response);
                        return false;
                    }else{
                        User.find({callphone}, (err, __user)=>{
                            if(err)console.log(err)
                            if(__user.length){
                                var response = {code:-2,desc:'手机号已注册'};
                                res.send(response);
                                return false;
                            }else{
                                user.save((err, __user)=>{
                                    if(err) return console.log(err)
                                    var response = {code:1,desc:'注册成功'};
                                    res.contentType('json');//返回的数据类型
                                    res.send(response);//给客户端返回一个json格式的数据
                                    return false;
                                })
                            }
                        })
                    }
                })
            }
        });
})

// async let encrypt = ()=>{
//     bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
//         if (err) return next(err)

//         bcrypt.hash(password, salt, function(err, hash) {
//         if (err) return next(err)

//             password = hash
//             console.log(password)
//         })
//     })
// }

//signin
router.post('/signin', (req, res)=>{
        /*
        *   注册通过规则
        *   return {code:1, desc:'用户名不对'}
        *   code 1成功 -1账号不对  -2密码格式不对 
        */
        req.addListener("data", function(data){
            var param = qs.parse(data+'');//转换成json对象
            var user = new User(param);
            let {username, password} = param;

            if( !/^[\u4E00-\u9FA5]{2,6}$/.test(username) && !/^1[3|4|5|7|8]\d{9}$/.test(username) ){//用户
                var response = {code:'-1', desc:'帐号或密码错误'};
                res.send(response);
                return false;
            }

            if( !/^[a-zA-Z0-9`~!@#$%^&*()-+_={}\[\]\\|;:'"<,>.?/]{6,10}$/.test(password) ){
                var response = {code:'-2', desc:'帐号或密码错误'};
                res.send(response);
                return false;
            }
            if( /^[\u4E00-\u9FA5]{2,6}$/.test(username)){//根据用户名查

                
                
                User.find({username, password}, (err, _user)=>{
                    if(err)console.log(err)
                    if(!_user.length){
                        var response = {code:0,desc:'帐号或密码错误'};
                        res.send(response);
                        return false;
                    }else{
                        var response = {code:1,desc:'登录成功'};
                        res.send(response);
                        return false;
                    }
                })
            }else{//根据手机号查
                User.find({callphone: username, password}, (err, _user)=>{
                    if(err)console.log(err)
                    if(!_user.length){
                        var response = {code:0,desc:'帐号或密码错误'};
                        res.send(response);
                        return false;
                    }else{
                        var response = {code:1,desc:'登录成功'};
                        res.send(response);
                        return false;
                    }
                })
            }
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