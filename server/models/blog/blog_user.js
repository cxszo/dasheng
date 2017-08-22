var mongoose = require('mongoose')

var BlogUserSchema = new mongoose.Schema({
    user_id: String,
    following: Array,//关注
    followers: Array,//粉丝
    collect: Array,//收藏文章列表
    likelist: Array,//喜欢文章列表
    articlenum: Array,//已发布的文章
    love: Number,//文章点赞数
    say: String,//String 个人介绍
    sex: String//性别 1男 2女
}, { versionKey: false })



BlogUserSchema.pre('save', (next)=>{
    next()
})

BlogUserSchema.statics = {
    fetch: function(cb) {
      return this
        .find({})
        .exec(cb)
    }
}

module.exports = mongoose.model('BlogUser', BlogUserSchema, 'blog_user')