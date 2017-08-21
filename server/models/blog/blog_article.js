var mongoose = require('mongoose')

var BlogArticleSchema = new mongoose.Schema({
    user_id: String, // 用来查作者信息博主名 博主头像
    push_article_id: String,// 发布文章id
    note_id: String,//笔记本id
    article_id: String,//文章id
    img_url: String,//文章里面的图片（可空）
    title: String,//String 文章标题
    body: String,//String 文章内容
    createAt: {//Date 第一次发布时间
        type: Date,
        defauld: Date.now()
    },
    love:[//Array 点赞的用户
        {
            user_id: String,//点赞人
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
    is_show:true,//是否显示当前文章 true 显示 false 不显示
})


BlogArticleSchema.statics = {
    fetch: function(cb) {
      return this
        .find({})
        .exec(cb)
    }
}

module.exports = mongoose.model('BlogArticle', BlogArticleSchema, 'blog_article')