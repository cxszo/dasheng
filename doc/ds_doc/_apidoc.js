
/**
 * @api {post} /signin  登录
 * @apiGroup Index
 *
 * @apiParam {String} username 输入用户名或者手机号   
 * @apiParam {String} password 登录密码    MTIzNDU2
 *
 * @apiSuccess {Number} code 1登录成功 -1账号不对 -2密码不对.
 * @apiSuccess {String} accessToken 用户的信息标识 .
 * @apiSuccess {String} desc 登录结果描述 .
 * @apiExample 测试账号:
 *     用户名：测试
 *     手机号：13000000000
 *     密码： 123456、MTIzNDU2

 * @apiSuccessExample Success-Response:
{
    "code": "1",
    "data": {
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Iua1i-ivlSIsInBhc3N3b3JkIjoiMTIzNDU2IiwiaWF0IjoxNTAyODcwMDY4LCJleHAiOjE1MDI5NTY0Njh9.ferDSWPLe32oC6na9oKbr_6XYHqeunQ7YHXUU6dktcw"
    },
    "desc": "登录成功"
}
 *
 * @apiErrorExample Error-Response:
 *     {
  *     "code": "-1",
  *     "desc": "帐号或密码错误"
 *     }
 */

/**
 * @api {post} /signup  注册 
 * @apiGroup Index
 *
 * @apiParam {String} username 输入用户名
 * @apiParam {Number} callphone 输入手机号  
 * @apiParam {String} password 登录密码
 *
 * @apiSuccess {Number} code 1登录成功 -1用户名 -2手机号 -3密码.
 * @apiSuccess {String} desc 登录结果描述 .
 * 
 */


/**
 * @api {get} /cdn/list  查询想要检索的库列表
 * @apiGroup CDN
 * @apiParam {String} charAt 需要检索的字符 
 *
 * @apiSuccess {Number} code 1登录成功 否则查询失败.
 * @apiSuccess {String} title 库名 .
 * @apiSuccess {String} link 库地址 .
 * @apiSuccess {String} desc 登录结果描述 .
 * 
 * @apiSuccessExample Success-Response:
{
    "code": 1,
    "data": [
        {
            "title": "dojo",
            "link": "/libs/dojo/1.8.3/dojo.js"
        }
    ],
    "desc": "success"
}
 */


/**
 * @api {get} /cdn/list/:id  获取指定库 版本列表
 * @apiGroup CDN
 * @apiParam {String} id 需要查询的库名
 *
 * @apiSuccess {Number} code 1登录成功 否则查询失败.
 * @apiSuccess {Array} version 版本列表 .
 * @apiSuccess {Array} fresh 最新版的库文件地址 .
 * @apiSuccess {String} homepage 库官网地址 .
 * @apiSuccess {description} description 库描述 .
 * @apiSuccess {JSON} repository 源码位置 .
 * @apiSuccess {Array} keywords 库的标签 .
 * @apiSuccess {String} desc 登录结果描述 .
 * @apiSuccessExample Success-Response:
 {
    "code": 1,
    "data": {
        "version": [
            "1.0.8",
            "1.0.6",
            "1.0.14",
            "0.12.16"
        ],
        "fresh": [
            "/libs/vue/1.0.8/vue.min.js",
            "/libs/vue/1.0.8/vue.js"
        ],
        "info": {
            "homepage": "http://vuejs.org",
            "description": "Simple, Fast & Composable MVVM for building interactive interfaces",
            "repository": {
                "type": "git",
                "url": "https://github.com/vuejs/vue.git"
            },
            "keywords": [
                "mvvm",
                "browser",
                "framework"
            ]
        }
    },
    "desc": "查询成功"
}
 
 */


/**
 * @api {get} /cdn/list/:l/:v 获取指定库 指定版本 数据列表
 * @apiGroup CDN
 * @apiParam {String} l 库名
 * @apiParam {String} v 库版本
 *
 * @apiSuccess {Number} code 1登录成功 否则查询失败.
 * @apiSuccess {String} title 库名 .
 * @apiSuccess {String} link 库地址 .
 * @apiSuccess {String} desc 登录结果描述 .
 * @apiSuccessExample Success-Response:
 {
    "code": 1,
    "data": [
        "/libs/vue/1.0.8/vue.min.js",
        "/libs/vue/1.0.8/vue.js"
    ],
    "desc": "查询成功"
}
 * 
 */

/**
 * @api {post} /blog/list 1.1文章列表
 * @apiGroup blogStartPage
 * @apiParam {String} tag 大分类（可空）
 * @apiParam {String} tag_item 小分类（可空）
 * @apiParam {String} seek 用户手动搜索内容（可空）
 * 
 * @apiSuccess {String} userid 作者id.
 * @apiSuccess {String} title 文章标题 .
 * @apiSuccess {String} intro 文章简介 .
 * @apiSuccess {String} read 被阅读次数 .
 * @apiSuccess {String} love 喜欢数 .
 * @apiSuccess {String} comment 评论数 .
 * @apiSuccess {String} blogger 博主名 .
 * @apiSuccess {String} createAt 文章创建时间 .
 * @apiSuccess {String} headimg 博主头像 .
 * @apiSuccess {String} slug 文章id .
 * @apiSuccess {String} img_url 文章图片地址 .
 * @apiSuccessExample Success-Response:
{
    code:1,
    data:[
        {
            userid:'',
            title:'千万不要试探人性，人的恶连佛都度不了',
            intro:'好友是幼师，带着一群四五岁的小孩子。班上有个姑娘长得乖，表现力也棒，表演节目她很爱选那个小姑娘...',
            read:'1142',
            love:'183',
            comment:'120',
            blogger:'娟娟新月',
            createAt:'08.12 23:12',
            headimg:'http://1.com/1.png'
            slug:'d933a3e4b6a1',
            img_url:'http://1.com/2.png'
        }
    ],
    desc:'success'
}
 */
/**
 * @api {get} /blog/tag 1.2查询大标签 
 * @apiGroup blogStartPage
 * @apiSuccessExample Success-Response:
 {
     code:'1',
     data:[
        {
            id:'1',
            name:'推荐'
        },
        {
            id:'2',
            name:'前端'
        },
        {
            id:'3',
            name:'后端'
        },
        {
            id:'4',
            name:'DB'
        },
        {
            id:'5',
            name:'运维'
        },
     ],
     desc:'success'
 }

 */
/**
 * @api {get} /blog/tag/:id 1.3查询小标签 
 * @apiGroup blogStartPage
 * 
 * @apiParam {String} id 大标签id
 * @apiSuccessExample Success-Response:
 {
     code:'1',
     data:[
         {id:'2_1', name:'javascript'},
         {id:'3_1', name:'node'},
         {id:'4_1', name:'mongodb'},
         {id:'5_1', name:'nginx'},
     ],
     desc:'success'
 }
 */
/**
 * @api {get} /blog/authors 1.4优秀原创作者 
 * @apiGroup blogStartPage
 * 
 * @apiSuccess {Number} code 1成功.
 * @apiSuccess {String} userid 用户id.
 * @apiSuccess {String} headimg 用户头像.
 * @apiSuccess {String} name 用户名.
 * @apiSuccess {String} say 个人介绍.
 * @apiSuccess {String} sex 性别.1男 2女 可能为空
 * @apiSuccess {String} love 喜欢数.
 * @apiSuccessExample Success-Response:
 {
     code:'1',
     data:[
         {
            userid:'',
            headimg:'',
            name:'',
            say:'',
            sex:'',
            love: 0
         }
     ],
     desc:'success'
 }
 */
/**
 * @api {get} /blog/read/:id 2.2统计阅读
 * @apiGroup blogArticle
 * @apiHeader {String} x-access-token 登录信息（可空）
 * 
 * @apiParam {String} id 文章id  ->slug
 *
 * @apiSuccess {Number} code 1统计成功 否则统计失败.
 * 
* @apiSuccessExample Success-Response:
 {
     code:'1',
     desc:'success'
 }
 */
/**
 * @api {post} /blog/article 2.1内容
 * @apiGroup blogArticle
 * @apiHeader {String} x-access-token 登录信息（可空）
 * 
 * @apiParam {String} id 文章id slug
 * 
 * @apiSuccess {String} title 文章标题 .
 * @apiSuccess {String} body 文章内容 .
 * @apiSuccess {Number} read 文章被阅读数 .
 * @apiSuccess {Number} love 文章被喜欢数 .
 * @apiSuccess {Object} blogger 博主信息 .
 * @apiSuccess {Date} createAt 文章创建时间 .
 * @apiSuccess {Boolean} is_following 是否关注过博主 . true 已关注 false 未关注 (作者是自己的额时候 该字段不返回)
 * @apiSuccess {Boolean} is_love 是否点击喜欢 . true 点过 false 未点过
 * @apiSuccess {Boolean} is_collect 是否收藏过 . true 已收藏 false 未收藏
 * @apiSuccess {Boolean} is_me 作者是否是自己 . true 是 false 不是
 * @apiSuccess {Boolean} article_id 文章id . 只有is_me是true的时候才会返回
 * @apiSuccessExample Success-Response:
 {
     code:'1',
     data:{
         title:'千万不要试探人性，人的恶连佛都度不了',
         body:'好友是幼师，带着一群四五岁的小孩子。班上有个姑娘长得乖，表现力...',
         blogger:{
             name:'',//作者名
             id:'',//作者id
             headimg:'',//作者头像
             love:'',//文章获得总喜欢数
             followers:'',//被关注数
             say:'',//个人介绍
             sex: ''//男女 1男 2女
         },
         read:1142,
         love:183,
         createAt:'08.12 23:12',
         is_following:true,
         is_love:true,
         is_collect:true,
         is_me: true,
         article_id:''
     },
     desc:'success'
 }
 */



/**
 * @api {post} /blog/article/love 2.3喜欢、取消喜欢
 * @apiGroup blogArticle
 * @apiHeader {String} x-access-token 登录信息
 * 
 * @apiParam {String} id 文章id slug
 * @apiSuccessExample Success-Response:
 {
     code:'1',
     desc:'success'
 }
 */
/**
 * @api {get} /blog/article/loverlist/:id 2.4喜欢人列表
 * @apiGroup blogArticle
 * 
 * @apiParam {String} id 文章id slug
 * 
 * @apiSuccess {String} userid 用户id.
 * @apiSuccess {String} name 用户名.
 * @apiSuccess {String} headimg 用户头像.
 * @apiSuccess {Date} cdate 创建时间.
 * 
 * @apiSuccessExample Success-Response:
 {
     code:'1',
     data:[
         {
             userid:'',
             name:'',
             headimg:'',
             cdate:''
         }
     ],
     desc:'success'
 }
 */




/**
 * @api {get} /blog/follow/:id 4.1关注、取消关注
 * @apiGroup blogUser
 * @apiHeader {String} x-access-token 登录信息
 * 
 * @apiParam {String} id 博主userid
 * @apiSuccessExample Success-Response:
 {
     code:'1',
     desc:'success'
 }
 */
/**
 * @api {get} /blog/userinfo/:id 4.2关注数、文章数...
 * @apiGroup blogUser
 * @apiHeader {String} x-access-token 登录信息 (可空)
 * 
 * @apiParam {String} id 博主userid
 * 
 * @apiSuccess {String} userid 被查看人的用户id
 * @apiSuccess {String} headimg 用户头像
 * @apiSuccess {String} name 用户名
 * @apiSuccess {Number} following 关注数
 * @apiSuccess {Number} follower 粉丝数
 * @apiSuccess {Number} articlenum 发布的文章数
 * @apiSuccess {Number} love 获得的喜欢数
 * @apiSuccess {Boolean} is_follow 自己是否也关注了
 * @apiSuccess {Boolean} is_me 是否是自己  true是自己 false 不是 （如果是true is_follow不返回）
 * @apiSuccess {String} sex 性别 1男 2女 0没有设置
 * @apiSuccess {String} say 个人介绍
 * @apiSuccessExample Success-Response:
{
    code:1,
    data:{
        userid: 'xxx',
        headimg: 'xxx',
        name: 'Sir电影',
        following: 15,
        followers: 72167,
        articlenum: 1479,
        love: 81009,
        is_follow:false,
        sex:1,
        say:'暖污暖污的槽值小妹等你撩。',
        is_me: false
    },
    desc:'success'
}
 */
/**
 * @api {post} /blog/followlist 4.3关注、粉丝列表
 * @apiGroup blogUser
 * @apiHeader {String} x-access-token 登录信息 (可空)
 * 
 * @apiParam {String} id 博主userid
 * @apiParam {String} act 操作  1关注  2粉丝
 * 
 * @apiSuccess {String} userid 被查看人的用户id
 * @apiSuccess {String} headimg 用户头像
 * @apiSuccess {String} name 用户名
 * @apiSuccess {Number} following 关注数
 * @apiSuccess {Number} followers 粉丝数
 * @apiSuccess {Number} articlenum 发布的文章数
 * @apiSuccess {Number} love 获得的喜欢数
 * @apiSuccess {Boolean} is_follow 自己是否也关注了
 * @apiSuccess {String} sex 性别 1男 2女 0没有设置
 * 
 * 
 * @apiSuccessExample Success-Response:
 {
     code:'1',
     data:[
            {
                userid: 'xxx',
                headimg: 'xxx',
                name: 'Sir电影',
                following: 15,
                follower: 72167,
                articlenum: 1479,
                love: 81009,
                is_follow:false,
                sex:1
            }
    ],
     desc:'success'
 }
 */

/**
 * @api {get} /blog/user_article/:id 4.4文章列表
 * @apiGroup blogUser
 * @apiParam {String} id 博主userid
 * 
 * @apiSuccess {String} slug 文章id
 * @apiSuccess {String} userid 用户id
 * @apiSuccess {String} headimg 头像
 * @apiSuccess {String} name 用户名
 * @apiSuccess {Date} cdate 创建时间
 * @apiSuccess {String} title 文章标题
 * @apiSuccess {String} intro 文章内容简介
 * @apiSuccess {Number} read 被阅读数 
 * @apiSuccess {Number} comment 被评论数 
 * @apiSuccess {Number} love 被喜欢数
 * @apiSuccess {String} img_url 文章里面的图片
 * 
 * @apiSuccessExample Success-Response:
{
    code:'1',
    data:[
        {
            slug:'',
            userid:'xxx',
            headimg:'xxx',
            name:'丶齐天大圣丶',
            cdate:'前天 15:47',
            title:'无标题文章',
            intro:'填下第一',
            read:0,
            comment:0,
            love:0,
            img_url:''
        }
    ],
    desc:'success'
}
 * 
 */
/**
 * @api {get} /blog/user_article/:id/love 4.5喜欢的文章列表
 * @apiGroup blogUser
 * @apiParam {String} id 博主userid
 * 
 * @apiSuccess {String} slug 文章id
 * @apiSuccess {String} userid 用户id
 * @apiSuccess {String} headimg 头像
 * @apiSuccess {String} name 用户名
 * @apiSuccess {Date} cdate 创建时间
 * @apiSuccess {String} title 文章标题
 * @apiSuccess {String} intro 文章内容简介
 * @apiSuccess {Number} read 被阅读数 
 * @apiSuccess {Number} comment 被评论数 
 * @apiSuccess {Number} love 被喜欢数
 * @apiSuccess {String} img_url 文章里面的图片
 * 
 * @apiSuccessExample Success-Response:
{
    code:'1',
    data:[
        {
            slug:'',
            userid:'xxx',
            headimg:'xxx',
            name:'丶齐天大圣丶',
            cdate:'前天 15:47',
            title:'无标题文章',
            intro:'填下第一',
            read:0,
            comment:0,
            love:0,
            img_url:''
        }
    ],
    desc:'success'
}
 * 
 */
/**
 * @api {get} /blog/user_article/:id/hot 4.6热门文章列表
 * @apiGroup blogUser
 * @apiParam {String} id 博主userid
 * 
 * @apiSuccess {String} slug 文章id
 * @apiSuccess {String} userid 用户id
 * @apiSuccess {String} headimg 头像
 * @apiSuccess {String} name 用户名
 * @apiSuccess {Date} cdate 创建时间
 * @apiSuccess {String} title 文章标题
 * @apiSuccess {String} intro 文章内容简介
 * @apiSuccess {Number} read 被阅读数 
 * @apiSuccess {Number} comment 被评论数 
 * @apiSuccess {Number} love 被喜欢数
 * @apiSuccess {String} img_url 文章里面的图片
 * 
 * @apiSuccessExample Success-Response:
{
    code:'1',
    data:[
        {
            slug:'',
            userid:'xxx',
            headimg:'xxx',
            name:'丶齐天大圣丶',
            cdate:'前天 15:47',
            title:'无标题文章',
            intro:'填下第一',
            read:0,
            comment:0,
            love:0,
            img_url:''
        }
    ],
    desc:'success'
}
 * 
 */
/**
 * @api {get} /blog/user_article/collect 4.7收藏的文章列表
 * @apiGroup blogUser
 * @apiHeader {String} x-access-token 登录信息 (可空)
 * 
 * @apiSuccess {String} slug 文章id
 * @apiSuccess {String} userid 用户id
 * @apiSuccess {String} headimg 头像
 * @apiSuccess {String} name 用户名
 * @apiSuccess {Date} cdate 创建时间
 * @apiSuccess {String} title 文章标题
 * @apiSuccess {String} intro 文章内容简介
 * @apiSuccess {Number} read 被阅读数 
 * @apiSuccess {Number} comment 被评论数 
 * @apiSuccess {Number} love 被喜欢数
 * @apiSuccess {String} img_url 文章里面的图片
 * @apiSuccessExample Success-Response:
{
    code:'1',
    data:[
        {
            slug:'',
            userid:'xxx',
            headimg:'xxx',
            name:'丶齐天大圣丶',
            cdate:'前天 15:47',
            title:'无标题文章',
            intro:'填下第一',
            read:0,
            comment:0,
            love:0,
            img_url:''
        }
    ],
    desc:'success'
}
 * 
 */
/**
 * @api {post} /blog/user_say 4.8编辑个人介绍
 * @apiGroup blogUser
 * @apiHeader {String} x-access-token 登录信息 (可空)
 * 
 * @apiParam {String} say 个人介绍内容
 * @apiSuccessExample Success-Response:
{
    code:'1',
    desc:'success'
}
 */


/**
 * @api {post} /blog/collect 2.5收藏、取消收藏
 * @apiGroup blogArticle
 * @apiHeader {String} x-access-token 登录信息
 * 
 * @apiParam {String} id 文章id slug
 * 
 * @apiSuccess {Number} code 1收藏、取消成功 .
 * @apiSuccessExample Success-Response:
 {
     code:'1',
     desc:'success'
 }
 */


/**
 * @api {post} /blog/notebooks 5.1 新增文集
 * @apiGroup blogWrite
 * @apiHeader {String} x-access-token 登录信息
 * 
 * @apiParam {String} seq 排序标识 这里写死传 -1 文集 seq 可能会重复  重复的按照时间排序
 * @apiParam {String} name 文章名
 * 
 * @apiSuccess {String} name 文集名.
 * @apiSuccess {String} id 文集id.
 * @apiSuccess {String} is_show 是否显示.true显示
 * @apiSuccess {String} seq 排序. 小的排在前面
 * @apiSuccess {String} createAt 创建时间.
 * @apiSuccessExample Success-Response:
 {
     code:'1',
     data:[
         {
            "id": 150025,
            "name": "笔记本",
            "is_show": true,
            "seq": 0,
            "createAt": "2017-08-23T09:31:40.388Z"
        }
     ],
     desc:'success'
 }
 */
/**
 * @api {post} /blog/notebooks/:id/soft_destroy 5.2 删除文集
 * @apiGroup blogWrite
 * @apiHeader {String} x-access-token 登录信息
 * 
 * @apiParam {String} id 文集id
 * 
 * @apiSuccess {Number} id 被删除的文集id.
 * @apiSuccess {Number} notes 文集里面的文章列表. 没有的话返回 notes:[]
 * @apiSuccess {Number} notes.id 文章id.
 * @apiSuccess {Number} notes.deleted_at 删除时间.（用来给回收站用）
 * 
 * @apiSuccessExample Success-Response:
 {
     code:'1',
     data:{
        id: 13266091,
        notes: [
            {id: 13283755, deleted_at: '2017-08-29'},
            {id: 13283756, deleted_at: '2017-08-29'}
        ]
     },
     desc:'success'
 }
 */
/**
 * @api {put} /blog/notebooks/:id 5.3 修改文集名
 * @apiGroup blogWrite
 * @apiHeader {String} x-access-token 登录信息
 * 
 * @apiParam {String} id 文集id
 * @apiParam {String} name 文集新名
 * 
 * @apiSuccessExample Success-Response:
 {
     code:'1',
     desc:'success'
 }
 */
/**
 * @api {get} /blog/notebooks 5.4 文集列表
 * @apiGroup blogWrite
 * @apiHeader {String} x-access-token 登录信息
 * 
 * @apiSuccess {String} name 文集名.
 * @apiSuccess {String} id 文集id.
 * @apiSuccess {String} is_show 是否显示.true显示
 * @apiSuccess {String} seq 排序. 小的排在前面
 * @apiSuccess {String} createAt 创建时间.
 * @apiSuccessExample Success-Response:
 {
     code:'1',
     data:[
         {
            "id": 150025,
            "name": "笔记本",
            "is_show": true,
            "seq": 0,
            "createAt": "2017-08-23T09:31:40.388Z"
        }
     ],
     desc:'success'
 }
 */
/**
 * @api {post} /blog/notebooks/update_seq 5.5 排序文集❌
 * @apiGroup blogWrite
 * @apiHeader {String} x-access-token 登录信息
 * 
 * @apiParam {String} xxx seq[note_id]: 
 * @apiParam {String} xxxx seq[15938423]:0
 * 
 * @apiSuccess {String} id 文集id.
 * @apiSuccess {String} seq 位置编号.

 * @apiSuccessExample Success-Response:
 {
     code:'1',
     data:[
         {id: 16403319, seq: 0},
         {id: 16403336, seq: 2},
         {id: 16403347, seq: 1}
     ],
     desc:'success'
 }
 */


/**
 * @api {post} /blog/notes 6.1 新增文章
 * @apiGroup blogWrite
 * @apiHeader {String} x-access-token 登录信息
 * 
 * @apiParam {String} note_id 父级的文集id
 * @apiParam {String} seq_in_nb 排序标识 文章 seq_in_nb 不能重复  头部添加 -1 -2 -3  底部添加 2 3 4  排序之后 都从0开始
 * @apiParam {String} title 文章名
 * 
 * @apiSuccess {Number} id 文章id.
 * @apiSuccess {Number} note_id 父级的文集id.
 * @apiSuccess {Number} slug 文章发布之后的id.
 * @apiSuccess {String} title 文章名.
 * @apiSuccess {String} content 文章内容简介.
 * @apiSuccess {Boolean} is_show 是否显示.true显示
 * @apiSuccess {Number} type //1私密 2已发布 3发布更新
 * @apiSuccess {Number} seq_in_nb 排序. 小的排在前面
 * @apiSuccess {String} note_type 文章编辑器. 
 * @apiSuccess {Date} createAt 创建时间.
 * @apiSuccessExample Success-Response:
 {
     code:'1',
     data:[
         {
            "id": '',
            "note_id": '',
            "slug": '',
            "title": "笔记本",
            "content": '星座书上说我们不合...',
            "is_show": true,
            "type": '',
            "seq_in_nb": 0,
            "note_type": '',
            "createAt": "2017-08-23T09:31:40.388Z"
        }
     ],
     desc:'success'
 }
 */
/**
 * @api {post} /blog/notes/:id/soft_destroy 6.2 删除文章
 * @apiGroup blogWrite
 * @apiHeader {String} x-access-token 登录信息
 * 
 * @apiParam {Number} id 文章id
 * 
 * @apiSuccess {Number} id 文章id.
 * @apiSuccess {Date} deletedAt 删除时间.
 * @apiSuccessExample Success-Response:
 {
     code:'1',
     data:[
         {
            "id": 150025,
            "deletedAt": "2017-08-23T09:31:40.388Z"
        }
     ],
     desc:'success'
 }
 */



/**
 * @api {post} /blog/notes/update_seq 6.3 排序文章❌
 * @apiGroup blogWrite
 * @apiHeader {String} x-access-token 登录信息
 * 
 * @apiParam {String} xxx seq[note_id]: 
 * @apiParam {String} xxxx seq[15938423]:0
 * 
 * @apiSuccess {String} id 文章id.
 * @apiSuccess {String} seq_in_nb 位置编号.
 * @apiSuccessExample Success-Response:
 {
     code:'1',
     data:[
         {id: 16403319, seq_in_nb: 0},
         {id: 16403336, seq_in_nb: 2},
         {id: 16403347, seq_in_nb: 1}
     ],
     desc:'success'
 }
 */
/**
 * @api {get} /blog/notes 6.4 文章列表
 * @apiGroup blogWrite
 * @apiHeader {String} x-access-token 登录信息
 * 
 * @apiSuccess {Number} id 文章id.
 * @apiSuccess {Number} note_id 父级的文集id.
 * @apiSuccess {Number} slug 文章发布之后的id.
 * @apiSuccess {String} title 文章名.
 * @apiSuccess {String} content 文章内容简介.
 * @apiSuccess {Boolean} is_show 是否显示.true显示
 * @apiSuccess {Number} type //1私密 2已发布 3发布更新
 * @apiSuccess {Number} seq_in_nb 排序. 小的排在前面
 * @apiSuccess {String} note_type 文章编辑器. 
 * @apiSuccess {Date} createAt 创建时间.
 * @apiSuccessExample Success-Response:
 {
     code:'1',
     data:[
         {
            "id": '',
            "note_id": '',
            "slug": '',
            "title": "笔记本",
            "content": '星座书上说我们不合...',
            "is_show": true,
            "type": '',
            "seq_in_nb": 0,
            "note_type": '',
            "createAt": "2017-08-23T09:31:40.388Z"
        }
     ],
     desc:'success'
 }
 */
/**
 * @api {put} /blog/notes/:id 6.5 保存文章
 * @apiGroup blogWrite
 * @apiHeader {String} x-access-token 登录信息
 * 
 * @apiParam {Number} id 文章id.
 * @apiParam {String} title 文章标题. (可空) 空的时候前端必须提示用户
 * @apiParam {String} content 文章内容. (可空)
 * @apiParam {String} note_type 文章编辑器. (可空)默认markdown
 * 
 * @apiSuccessExample Success-Response:
 {
     code:'1',
     desc:'success'
 }
 */
/**
 * @api {post} /blog/notes/:id/publicize 6.6 发布文章
 * @apiGroup blogWrite
 * @apiHeader {String} x-access-token 登录信息
 * 
 * @apiParam {String} id 文章id
 * 
 * @apiSuccess {Number} id 文章id.
 * @apiSuccess {Date} createAt 发布时间.
 * @apiSuccess {Number} type 文章id.//1私密 2已发布 3发布更新
 * @apiSuccessExample Success-Response:
 {
     code:'1',
     data:{
            "id": 150025,
            "type": 2,
            "createAt": "2017-08-23T09:31:40.388Z"
     },
     desc:'success'
 }
 */
/**
 * @api {post} /blog/notes/:id/privatize 6.7 设为私有
 * @apiGroup blogWrite
 * @apiHeader {String} x-access-token 登录信息
 * 
 * @apiParam {String} id 文章id
 * 
 * @apiSuccess {Number} id 文章id.
 * @apiSuccess {Number} type 文章id.//1私密 
 * @apiSuccessExample Success-Response:
 {
     code:'1',
     data:{
        id: '',
        type: 1
     },
     desc:'success'
 }
 */

/**
 * @api {get} /blog/notes/:id/content 6.8 文章内容
 * @apiGroup blogWrite
 * @apiHeader {String} x-access-token 登录信息
 * 
 * @apiParam {Number} id 文章id
 * 
 * @apiSuccess {String} content 文章内容.
 * @apiSuccess {String} title 文章标题.
 * @apiSuccessExample Success-Response:
{
    "code": "1",
    "data": {
        "content": "最爱你的人是我 为什么舍得我难过",
        "title": "不会后悔"
    },
    "desc": "success"
}
 */
/**
 * @api {DELETE} /blog/notes/:id 7.1 销毁文章
 * @apiGroup blogWrite
 * @apiHeader {String} x-access-token 登录信息
 * 
 * @apiParam {String} id 文章id
 * 
 * @apiSuccess {Number} id 文章id.
 * @apiSuccessExample Success-Response:
 {
     code:'1',
     data:{
        "id": 150025
     },
     desc:'success'
 }
 */
/**
 * @api {post} /blog/notes/:id/put_back 7.2 恢复文章
 * @apiGroup blogWrite
 * @apiHeader {String} x-access-token 登录信息
 * 
 * @apiParam {String} id 文章id
 * 
 * @apiSuccess {Number} id 文章id.
 * @apiSuccess {Number} note_id 文集id.
 * @apiSuccess {Boolean} is_show 是否显示. true显示
 * @apiSuccessExample Success-Response:
 {
     code:'1',
     data: {
             "id": 150025,
             "note_id": '',
             "is_show": true
     },
     desc:'success'
 }
 */
/**
 * @api {post} /blog/notes/:id/tag 8.1 设置大标签
 * @apiGroup blogWrite
 * @apiHeader {String} x-access-token 登录信息
 * 
 * @apiParam {String} id 文章id.
 * @apiParam {String} tag 标签 只能选.
 * 
 * @apiSuccess {Boolean} tag 大标签.
 * @apiSuccess {Boolean} tag_item 小标签.
 * @apiSuccess {Boolean} type 1私有 2已发布 3更新发布
 * @apiSuccessExample Success-Response:
 {
     code:'1',
     data:{
        tag: '1',
        tag_item: '1_1',
        type: 1
     },
     desc:'success'
 }
 */
/**
 * @api {post} /blog/notes/:id/tag_item 8.2 设置小标签
 * @apiGroup blogWrite
 * @apiHeader {String} x-access-token 登录信息
 * 
 * @apiParam {String} id 文章id.
 * @apiParam {String} tag 标签 可以选 可以自定义.
 * 
* @apiSuccess {Boolean} tag 大标签.
 * @apiSuccess {Boolean} tag_item 小标签.
 * @apiSuccess {Boolean} type 1私有 2已发布 3更新发布
 * @apiSuccessExample Success-Response:
 {
     code:'1',
     data:{
        tag: '1',
        tag_item: '1_1',
        type: 1
     },
     desc:'success'
 }
 */




 /**
 * @api {get} /blog/comment/:id 3.1查看评论
 * @apiGroup blogComment
 * @apiHeader {String} x-access-token 登录信息
 * 
 * @apiParam {String} id 文章id.
 * @apiParam {String} order 排序 love按喜欢排 seq按时间正序 order按时间倒序. （可空）默认按照seq排
 *
 * @apiSuccess {String} count 总评论数.
 * @apiSuccess {String} id 当前评论的唯一id.
 * @apiSuccess {String} headimg 评论人头像.
 * @apiSuccess {String} name 评论人名称.
 * @apiSuccess {String} userid 评论人id.
 * @apiSuccess {String} floor 评论人楼层.
 * @apiSuccess {Date} cdate 评论人时间.
 * @apiSuccess {String} msg 评论人内容.
 * @apiSuccess {Number} love 点赞数.
 * @apiSuccess {Boolean} is_auther 是否是作者本人. true是 
 * @apiSuccess {Boolean} is_me 是否是自己. true是 false 不是
 * @apiSuccess {Boolean} is_love 是否给评论点赞. true 是 false 不是
 * @apiSuccess {String} revert.name 回复人名.
 * @apiSuccess {String} revert.userid 回复id人id.
 * @apiSuccess {String} revert.msg 回复的内容.
 * @apiSuccess {Date} revert.cdate 回复的时间.
 * @apiSuccess {String} revert.at_userid 被@人id.
 * @apiSuccess {String} revert.at_name 被@人名.
 * @apiSuccessExample Success-Response:
{
    code:'1',
    data:{
        count: 11,
        list:[
                {
                id:'',
                headimg:'',
                name:'成成',
                userid:'',
                floor:'15',
                cdate:'2017.08.15 01:28',
                msg:'深度的剖析，却也带来几分苍凉之感，不敢深思，习惯善意和自我约束的我已无能去臆想那些画面……',
                is_me:true,
                love: '',
                is_love:true,
                is_auther: true,
                revert:[
                    {
                        floor: 1,
                        name:'',
                        userid:'',
                        msg:'',
                        cdate:'',
                        at_userid:'',
                        at_name:''
                        is_me:true,
                    }
                ]
            }
        ]
    },
    desc:'success'
}
 * 
 */

 /**
 * @api {post} /blog/comment/:id 3.2评论
 * @apiGroup blogComment
 * @apiHeader {String} x-access-token 登录信息
 * 
 * @apiParam {String} id 文章id
 * @apiParam {String} msg 评论内容
 *
 * @apiSuccess {String} id 当前评论的唯一id.
 * @apiSuccess {String} headimg 评论人头像.
 * @apiSuccess {String} name 评论人名称.
 * @apiSuccess {String} userid 评论人id.
 * @apiSuccess {String} floor 评论人楼层.
 * @apiSuccess {Date} cdate 评论人时间.
 * @apiSuccess {String} msg 评论人内容.
 * @apiSuccess {Number} love 点赞数.
 * @apiSuccess {Boolean} is_auther 是否是作者本人. true是 
 * @apiSuccess {Boolean} is_me 是否是自己. true是 false 不是
 * @apiSuccess {Boolean} is_love 是否给评论点赞. true 是 false 不是
 * @apiSuccessExample Success-Response:
{
    code:'1',
    data: {
           id:'',
           headimg:'',
           name:'成成',
           userid:'',
           floor:'15',
           cdate:'2017.08.15 01:28',
           msg:'深度的剖析，却也带来几分苍凉之感，不敢深思，习惯善意和自我约束的我已无能去臆想那些画面……',
           is_me:true,
           love: '',
           is_auther: true,
           is_love:true
    },
    desc:'success'
}
 * 
 */

  /**
 * @api {post} /blog/comment/:slug/love 3.3评论点赞
 * @apiGroup blogComment
 * @apiHeader {String} x-access-token 登录信息
 * 
 * @apiParam {String} slug 文章id.
 * @apiParam {String} id 评论的唯一id.
 *
 * @apiSuccess {String} headimg 评论人头像.

 * @apiSuccessExample Success-Response:
{
    code:'1',
    desc:'点赞success'
}
 * 
 */
 /**
 * @api {delete} /blog/comment/:slug/delete 3.4删除评论
 * @apiGroup blogComment
 * @apiHeader {String} x-access-token 登录信息
 * 
 * @apiParam {String} slug 文章id.
 * @apiParam {String} id 评论id.
 *
 * @apiSuccessExample Success-Response:
{
    code:'1',
    desc:'删除success'
}
 * 
 */

 /**
 * @api {post} /blog/comment/:slug/revert 3.5回复评论
 * @apiGroup blogComment
 * @apiHeader {String} x-access-token 登录信息
 * 
 * @apiParam {String} slug 文章id.
 * @apiParam {String} id 评论id.
 * @apiParam {String} u_id 被@人id.
 * @apiParam {String} msg 回复内容.
 *
 * @apiSuccess {Number} user_id 回复人id.
 * @apiSuccess {String} name 回复人姓名.
 * @apiSuccess {String} headimg 回复人头像.
 * @apiSuccess {Date} cdate 回复时间.
 * @apiSuccess {String} msg 回复内容.
 * @apiSuccess {Number} at_userid 被@人id.
 * @apiSuccess {String} at_name 被@人名.
 * @apiSuccess {String} at_headimg 被@人头像.
 * @apiSuccess {String} floor 楼层. 删除的时候 需要用
 * @apiSuccess {Boolean} is_me 是否是自己回复的.true 是自己

 * @apiSuccessExample Success-Response:
{
    "code": "1",
    "data": {
        "user_id": 2222223,
        "name": "齐天大圣",
        "headimg": "http://ov0zo91tq.bkt.clouddn.com/headimg/default/323.jpg",
        "cdate": 1504255660767,
        "msg": "我爱你",
        "at_userid": "2222225",
        "at_name": "小圣",
        "at_headimg": "http://ov0zo91tq.bkt.clouddn.com/headimg/default/3545.jpg",
        "floor": "r_1",
        "is_me": true
    },
    "desc": "回复success"
}
 * 
 */

/**
* @api {delete} /blog/comment/:slug/delete_revert 3.6删除回复
* @apiGroup blogComment
* @apiHeader {String} x-access-token 登录信息
* 
* @apiParam {String} slug 文章id.
* @apiParam {String} id 评论id.
* @apiParam {String} floor 回复楼层.
*
@apiSuccess {String} floor 被删除的楼层.
* @apiSuccessExample Success-Response:
{
    code:'1',
    data:{
        floor: 'r_1'
    },
    desc:'success'
}
* 
*/