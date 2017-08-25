
var mongoose = require('mongoose')
var Schema = mongoose.Schema
var BlogArticleSchema = new Schema({
    user_id: Number, // 用来查作者信息博主名 博主头像
    user_object_id: { type: Schema.Types.ObjectId, ref: 'user' },//后端用的用户唯一id
    push_article_id: Number,// 发布文章id
    note_id: Number,//笔记本id
    article_id: Number,//文章id
    img_url: String,//文章里面的图片（可空）
    title: String,//String 文章标题
    body: String,//String 文章内容
    createAt: {//Date 第一次发布时间
        type: Date,
        defauld: Date.now()
    },
    love:[//Array 点赞的用户
        {
            user_id: Number,//点赞人
            name: String,//点赞人名
            headimg: String,//点赞人头像
            cdate: {//点赞时间
                type: Date,
                defauld: Date.now()
            }
        }
    ],
    read: Number,// 文章被阅读次数 自己打开的不算
    tag: String,//文章大分类
    tag_item: String,//小分类
    is_show: Boolean,//是否显示当前文章 true 显示 false 不显示
    comment: { type: Array, ref: 'BlogComment' }//用来关联评论
}, { versionKey: false })


BlogArticleSchema.statics = {
    fetch: function(cb) {
      return this
        .find({})
        .exec(cb)
    }
}

module.exports = mongoose.model('BlogArticle', BlogArticleSchema, 'blog_article')