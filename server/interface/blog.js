var express = require('express');
var app = express();
var router = express.Router();
var U = require('../util')
var BlogTag = require('../models/blog/blog_tag')//标签表
var BlogUser = require('../models/blog/blog_user')//博客用户表
var BlogArticle = require('../models/blog/blog_article')//已发布文章
var BlogComment = require('../models/blog/blog_comment')//评论
var BlogNoteArticle = require('../models/blog/blog_note_article')//文章
var BlogNote = require('../models/blog/blog_note')//文集
var Increment = require('../models/blog/increment')//自增

var $middlewares = require('./mount-middlewares');//获取token中间件


// 1.1首页-文章列表 王炜-warning  没有做分页
router.post('/list', (req, res)=>{
    let {tag, tag_item, seek} = req.body || '';//筛选 tag 大分类 tag_item 小分类 seek用户检索标题
    let fetch_param = {};
    if(!!seek){
        let regExp_title = new RegExp(seek+'+', 'i')
        fetch_param  = {title: regExp_title}
    }else if (!!tag){
        fetch_param = {tag}
    }else if (!!tag_item){
        fetch_param = {tag_item}
    }
    if(!!tag && !!tag_item){
        fetch_param = {tag, tag_item}
    }
    BlogArticle.find(fetch_param, '-_id user_id user_object_id title body love read createAt push_article_id img_url comment')
    .populate({
        path:'user_object_id',
        select: '-_id headimg username sex'
    })
    .sort({createAt: -1}).limit(10)//按最近时间排序 返回前10条
    .exec((err, _data)=>{
        if(err)console.log(err)
        if(_data instanceof Array){
            let resData = _data.map(item=>{
                let userid =  item.user_id || '',
                user_object_id = item.user_object_id || '',
                title =  item.title || '',
                intro =  item.body || '',
                read = item.read || 0,
                love = item.love || [],
                comment = item.comment || [],
                blogger = user_object_id.username || '',
                createAt = item.createAt || '',
                headimg = user_object_id.headimg || '',
                push_article_id = item.push_article_id || '',
                img_url = item.img_url || '';
                love = love.length;
                comment = comment.length;
                intro = intro.substr(0, 30)+'...';
                return {
                    userid,title,intro,read,love,comment,blogger,createAt,headimg,push_article_id,img_url
                }
            })
            console.log(resData)
            res.send({
                code:'1',
                data: resData,
                desc:'查询成功'
            });
            return false;
        }else{
            res.contentType('json');
            res.send({
                code:'-1',
                desc:'查询失败'
            });
            return false;
        }
    })
    
})

//1.2首页-查询标签
router.get('/tag',  (req, res)=>{
    BlogTag.fetch((err, _data)=>{
        if(err)console.log(err)
        res.contentType('json');
        res.send({
            code:'1',
            data: _data,
            desc:'查询成功'
        });
        return false;
    })
})


//1.3首页-优秀原创作者 王炜-warning  这个接口可以静态化
router.get('/authors', (req, res)=>{
    BlogUser.find({}, '-_id user_id say user_object_id love').sort({love:-1}).limit(5)
    .populate({
        path: 'user_object_id',
        select: '-_id headimg username sex',
    })
    .exec((err, _data)=>{
        if(err)console.log(err)
        if(_data instanceof Array){
            let resData = _data.map(item=>{
                let userid = item.user_id || '',
                user_object_id = item.user_object_id || '',
                headimg = user_object_id.headimg || '',
                name = user_object_id.username || '',
                sex = user_object_id.sex || '',
                say = item.say || '',
                love = item.love || 0;
                return {
                    userid,
                    headimg,
                    name,
                    say,
                    sex,
                    love
                }
            })
            res.contentType('json');
            res.send({
                code:'1',
                data: resData,
                desc:'查询成功'
            });
            return false;
        }else{
            res.contentType('json');
            res.send({
                code:'-1',
                desc:'查询失败'
            });
            return false;
        }
    })
})


//2.1文章-内容
router.post('/article', $middlewares, (req, res)=>{
    let api_user = req.api_user || '';//当前登录用户的信息
    let {id} = req.body;
    BlogArticle.find({push_article_id: id, is_show: true}, '_id user_id user_object_id article_id title body createAt love read')
    .exec((err, _data)=>{
        if(err)console.log(err)
        
        if(!_data instanceof Array){
            res.contentType('json');
            res.send({
                code:'-1',
                desc:'查询失败'
            });
            return false;
        }
        if(!_data.length){
            res.contentType('json');
            res.send({
                code:'-2',
                desc:'没有该文章'
            });
            return false;
        }
        let articleData = _data[0] || '';
        let bloggerid = articleData.user_id;//博主的id
        BlogUser.find({user_id: bloggerid}, '-_id love say collect followers user_object_id')
        .populate({
            path: 'user_object_id',
            select: '-_id username headimg sex'
        })
        .exec((err, authorData)=>{
                if(err)console.log(err)
                if(!authorData instanceof Array){
                    res.contentType('json');
                    res.send({
                        code:'-1',
                        desc:'查询不到博主信息'
                    });
                    return false;
                }
                if(!authorData.length){
                    res.contentType('json');
                    res.send({
                        code:'-1',
                        desc:'博主不存在'
                    });
                    return false;
                }
                let {user_object_id, love, say, collect, followers, likelist } = authorData[0] || '';//作者信息
                followers = followers || [];//粉丝列表
                collect = collect || [];//收藏人列表
                likelist = likelist || [];//喜欢的文章列表
                user_object_id = user_object_id || '';

                let resData = {
                    title: articleData.title || '',
                    body: articleData.body || '',
                    blogger:{
                        name: user_object_id.username || '',
                        id: articleData.user_id,
                        headimg: user_object_id.headimg || '',
                        love: love || 0,//文章获得总喜欢数
                        followers: followers.length,//被关注数
                        say: say||'',//个人介绍
                        sex: user_object_id.sex || ''
                    },
                    read: articleData.read||0,
                    love: articleData.love || '',
                    createAt: articleData.createAt,
                }
                resData.love = resData.love.length;
                if(typeof api_user === 'object'){//api_user 是中间件$middlewares 返回的保存的是当前用户信息
                    let {user_id} = api_user;//获取用户id 查询用户关注
                    if(user_id == bloggerid){//作者就是他自己
                        resData.is_love = (likelist.indexOf(articleData._id) == '-1'? false: true);
                        resData.is_collect = (collect.indexOf(articleData._id) == '-1'? false: true);
                        resData.is_me =  true
                        resData.article_id = articleData.article_id;//编辑文章用的
                    }else{//作者不是他
                        resData.is_me =  false;

                        BlogUser.find({user_id})
                        .exec((err, guestData)=>{
                            if(err)console.log(err)
                            if(U.check_cb(guestData) == 1){
                                console.log(guestData)
                                let {collect, likelist } = guestData[0] || '';//作者信息
                                collect = collect || [];//收藏人列表
                                likelist = likelist || [];//喜欢的文章列表

                                resData.is_following = false;
                                resData.is_love = (likelist.indexOf(articleData._id) == '-1'? false: true);
                                resData.is_collect = (collect.indexOf(articleData._id) == '-1'? false: true);
                                res.contentType('json');
                                res.send({
                                    code:'1',
                                    data: resData,
                                    desc:'success'
                                });
                                return false;
                            }else{
                                res.contentType('json');
                                res.send({
                                    code:'-1',
                                    desc:'查询失败'
                                });
                                return false;
                            }
                        })
                        return false;
                    }
                }else{//没有登录
                    resData.is_following = false;
                    resData.is_love = false;
                    resData.is_collect = false;
                    resData.is_me =  false;
                }
                
                res.contentType('json');
                res.send({
                    code:'1',
                    data: resData,
                    desc:'success'
                });
                return false;
        })
    })
})
// 2.2文章-统计阅读
router.get('/read/:id', $middlewares, (req, res)=>{

    let api_user = req.api_user||'';//登录信息
    let id = req.params.id || '';//文章id
    if(!id){
        res.contentType('json');
        res.send({
            code:'-1',
            desc:'统计失败'
        });
        return false;
    }

    BlogArticle.find({push_article_id: id})
    .exec((err, _data)=>{
        if(err)console.log(err);

        if(U.check_cb(_data) == '1'){
            let {user_id} = _data[0] || '';
            if(typeof api_user === 'object'){
                cUser_id = api_user.user_id || '';
                if(user_id == cUser_id){
                    res.contentType('json');
                    res.send({
                        code:'1',
                        desc:'自己的文章不统计'
                    });
                    return false;
                }
            }
        }

        BlogArticle.findOneAndUpdate({"push_article_id": id},{$inc:{read:1}},{new: true}, (err, inc)=>{
            res.contentType('json');
            res.send({
                code:'1',
                data:{read: inc.read || ''},
                desc:'已更新'
            });
            return false;
        })
    })

    
})
// 2.3文章-喜欢、取消喜欢
router.post('/article/love', (req, res)=>{
    res.contentType('json');
    res.send({
        code:'-1',
        desc:'待开发'
    });
    return false;
})
// 2.4文章-喜欢人列表
router.post('/article/loverlist', (req, res)=>{
    res.contentType('json');
    res.send({
        code:'-1',
        desc:'待开发'
    });
    return false;
})
// 2.5文章-收藏、取消收藏
router.post('/collect', (req, res)=>{
    res.contentType('json');
    res.send({
        code:'-1',
        desc:'待开发'
    });
    return false;
})
// 3.1评论
router.post('/comment/create', (req, res)=>{
    res.contentType('json');
    res.send({
        code:'-1',
        desc:'待开发'
    });
    return false;
})
// 3.2评论-查看评论
router.post('/comment/list', (req, res)=>{
    res.contentType('json');
    res.send({
        code:'-1',
        desc:'待开发'
    });
    return false;
})
// 3.3评论-点赞、取消点赞
router.post('/comment/love', (req, res)=>{
    res.contentType('json');
    res.send({
        code:'-1',
        desc:'待开发'
    });
    return false;
})
// 3.4评论-删除评论
router.post('/comment/delete', (req, res)=>{
    res.contentType('json');
    res.send({
        code:'-1',
        desc:'待开发'
    });
    return false;
})
// 3.5评论-回复别人
router.post('/revert', (req, res)=>{
    res.contentType('json');
    res.send({
        code:'-1',
        desc:'待开发'
    });
    return false;
})
// 3.6评论-删除回复
router.post('/revert/delete', (req, res)=>{
    res.contentType('json');
    res.send({
        code:'-1',
        desc:'待开发'
    });
    return false;
})
// 4.1用户-关注、取消关注
router.post('/follow', (req, res)=>{
    res.contentType('json');
    res.send({
        code:'-1',
        desc:'待开发'
    });
    return false;
})

// 4.2用户-关注数、文章数
router.post('/userinfo', (req, res)=>{
    res.contentType('json');
    res.send({
        code:'-1',
        desc:'待开发'
    });
    return false;
})
// 4.3用户-关注、粉丝列表
router.post('/followlist', (req, res)=>{
    res.contentType('json');
    res.send({
        code:'-1',
        desc:'待开发'
    });
    return false;
})
// 4.4用户-文章&喜欢的文章列表
router.post('/user_article_list', (req, res)=>{
    res.contentType('json');
    res.send({
        code:'-1',
        desc:'待开发'
    });
    return false;
})

// 4.5用户-编辑个人介绍
router.post('/user_say', (req, res)=>{
    res.contentType('json');
    res.send({
        code:'-1',
        desc:'待开发'
    });
    return false;
})
// 4.6用户-收藏的文章列表
router.post('/user_collect_list', (req, res)=>{
    res.contentType('json');
    res.send({
        code:'-1',
        desc:'待开发'
    });
    return false;
})
// 5.1写-查询自己文集列表
router.post('/note/list', (req, res)=>{
    res.contentType('json');
    res.send({
        code:'-1',
        desc:'待开发'
    });
    return false;
})
// 5.2写-排序文集、文章
router.post('/note/note_sort', (req, res)=>{
    res.contentType('json');
    res.send({
        code:'-1',
        desc:'待开发'
    });
    return false;
})
// 5.3写-拿文集id查文章列表

router.post('/note/articlelist', (req, res)=>{
    res.contentType('json');
    res.send({
        code:'-1',
        desc:'待开发'
    });
    return false;
})
// 5.4写-拿文章id查文章
router.post('/note/article', (req, res)=>{
    res.contentType('json');
    res.send({
        code:'-1',
        desc:'待开发'
    });
    return false;
})
// 5.5写-删除,新建,重命名文集
router.post('/note/act', (req, res)=>{
    res.contentType('json');
    res.send({
        code:'-1',
        desc:'待开发'
    });
    return false;
})
// 5.6写-删除, 取消发布, 恢复， 彻底删除
router.post('/note/article/act', (req, res)=>{
    res.contentType('json');
    res.send({
        code:'-1',
        desc:'待开发'
    });
    return false;
})
// 5.7写-发布文章，保存文章
router.post('/article/save', (req, res)=>{
    res.contentType('json');
    res.send({
        code:'-1',
        desc:'待开发'
    });
    return false;
})
// 5.8写-新增文章
router.post('/note/article/create', (req, res)=>{
    res.contentType('json');
    res.send({
        code:'-1',
        desc:'待开发'
    });
    return false;
})
// 5.9写-设置文章标签
router.post('/note/article/settag', (req, res)=>{
    res.contentType('json');
    res.send({
        code:'-1',
        desc:'待开发'
    });
    return false;
})

// 6.1查询回收站列表
router.post('/note/dustbin', (req, res)=>{
    res.contentType('json');
    res.send({
        code:'-1',
        desc:'待开发'
    });
    return false;
})



module.exports = router;

