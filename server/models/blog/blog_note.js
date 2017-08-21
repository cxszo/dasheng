var mongoose = require('mongoose')

var BlogNoteSchema = new mongoose.Schema({
    userid: String,
    id: String,//note-id
    name: String,//note-name
    createAt: {//创建时间
        type: Date,
        default: Date.now()
    },
    is_show: Boolean,// 是否删除 true 没有被删除 false 被删除（当为false时 subset里面的文章 is_show全部变成false）
    seq: Number//排序
})


BlogNoteSchema.statics = {
    fetch: function(cb) {
      return this
        .find({})
        .exec(cb)
    }
}

module.exports = mongoose.model('BlogNote', BlogNoteSchema, 'blog_note')