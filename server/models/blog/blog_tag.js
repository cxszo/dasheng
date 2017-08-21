var mongoose = require('mongoose')

var BlogTagSchema = new mongoose.Schema({
    id: String,
    name: String,
    subset: [
        {
            id: String,
            name: String
        }
    ]
})


BlogTagSchema.statics = {
    fetch: function(cb) {
      return this
        .find({}, {id:1, name:1, subset:1})
        .exec(cb)
    }
}

module.exports = mongoose.model('BlogTag', BlogTagSchema, 'blog_tag')