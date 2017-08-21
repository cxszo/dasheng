var mongoose = require('mongoose')

var BlogNoteArticleSchema = new mongoose.Schema({
    userid: String,
    article_id: String,//文章id
    note_id: String,// 父级笔记本id
    title: String,// 文章标题
    body: String,// 文章内容
    createAt: {// 创建时间
        type: Date,
        default: Date.now()
    },
    deleteAt: {// 删除时间
        type: Date,
        default: Date.now()
    },
    type: String,//1私密 2已发布 3发布更新
    is_show: Boolean,// 是否删除 true 没有被删除 false反之
    note_type: String,//plain  markdown 
    tag: String,//文章大分类
    tar_item: String,//小分类
    seq_in_nb: Number,//排序
    history: Array//先不做放着 
})


BlogNoteArticleSchema.statics = {
    fetch: function(cb) {
      return this
        .find({})
        .exec(cb)
    }
}

module.exports = mongoose.model('BlogNoteArticle', BlogNoteArticleSchema, 'blog_note_article')