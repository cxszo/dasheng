

var mongoose = require('mongoose')
var Schema = mongoose.Schema
var BlogUserSchema = new Schema({
    user_id: String,
    following: [{ type: Schema.Types.ObjectId, ref: 'BlogUser' }],//关注
    name: String,
    // followers: Array,//粉丝
    // collect: Array,//收藏文章列表
    // likelist: Array,//喜欢文章列表
    // articlenum: Array,//已发布的文章
    // love: Number,//文章点赞数
    say: String,//String 个人介绍
    // sex: String//性别 1男 2女
}, { versionKey: false })



wangwei = new BlogUser({
    name:'王炜',
    say:'我是王炜'
})
zhishan = new BlogUser({
    name:'志山',
    say:'我是志山'
})
yecheng = new BlogUser({
    name:'业成',
    say:'我是业成'
})
wangwei.save((err)=>{
        if(err) throw err;
        zhishan.following.push(wangwei);
        zhishan.save((err)=>{
            if(err) throw err;
            yecheng.following.push(zhishan);
            yecheng.save();
        });
})



BlogUser.findOne({name:'志山'}).populate({
    path:'following',
    populate: { 
        path: 'following',
        populate: {path:'following'}
    }
}).exec((err, _data)=>{
    res.contentType('json');
    res.send({
        code:'1',
        data: _data,
        desc:'查询成功'
    });
    return false;
})