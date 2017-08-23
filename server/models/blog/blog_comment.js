var mongoose = require('mongoose')

var BlogCommentSchema = new mongoose.Schema({
    push_article_id: Number,//发布的文章id
    user_id: Number,//评论人id
    cdate: {//评论时间
        type: Date,
        default: Date.now()
    },
    thumb: Array,//点赞人列表
    msg: String,//评论内容
    revert:[
        {
            user_id: Number,//回复人id
            name: String,//回复人名字
            cdate: {//回复时间
                type: Date,
                default: Date.now()
            },
            msg: String,//回复内容
            at_userid: Number,//被@人id
            at_name: String//被@人名
        }
    ] 

}, { versionKey: false })


BlogCommentSchema.statics = {
    fetch: function(cb) {
      return this
        .find({})
        .exec(cb)
    }
}

module.exports = mongoose.model('BlogComment', BlogCommentSchema, 'blog_comment')