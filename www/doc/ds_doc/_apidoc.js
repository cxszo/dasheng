
/**
 * @api {post} /data/signin  登录
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
 * @api {post} /data/signup  注册 
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
 * @api {get} /data/cdn/list  查询想要检索的库列表
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
 * @api {get} /data/cdn/list/:id  获取指定库 版本列表
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
 * @api {get} /data/cdn/list/:l/:v 获取指定库 指定版本 数据列表
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
 * @api {post} /data/blog/list 1.1首页-文章列表√
 * @apiGroup blog
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
 * @apiSuccess {String} push_article_id 文章id .
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
            push_article_id:'d933a3e4b6a1',
            img_url:'http://1.com/2.png'
        }
    ],
    desc:'success'
}
 */

/**
 * @api {get} /data/blog/tag 1.2首页-查询标签√ 
 * @apiGroup blog
 * @apiSuccessExample Success-Response:
 {
     code:'1',
     data:[
        {
            id:'1',
            name:'推荐',
            subset:[
                {id:'1', name:'javascript'},

            ]
        },
        {
            id:'1',
            name:'推荐',
            subset:[
                {id:'2_1', name:'javascript'},
                {id:'3_1', name:'node'},
                {id:'4_1', name:'mongodb'},
                {id:'5_1', name:'nginx'},

            ]
        },
        {
            id:'2',
            name:'前端',
            subset:[
                {id:'2_1', name:'javascript'},
                {id:'2_2', name:'css'},
                {id:'2_3', name:'html5'},
                {id:'2_4', name:'webpack'},
                {id:'2_5', name:'react'},
                {id:'2_6', name:'vue'},
                {id:'2_7', name:'angular'},
                {id:'2_8', name:'react-native'},
                {id:'2_9', name:'sass'},
                {id:'2_10', name:'less'},
                {id:'2_11', name:'jquery'},
                {id:'2_12', name:'动画'}
            ]
        },
        {
            id:'3',
            name:'后端',
            subset:[
                {id:'3_1', name:'node'},

            ]
        },
        {
            id:'4',
            name:'DB',
            subset:[
                {id:'4_1', name:'mongodb'},
                {id:'4_2', name:'sql'},
                {id:'4_3', name:'oracel'},

            ]
        },
        {
            id:'5',
            name:'运维',
            subset:[
                {id:'5_1', name:'nginx'}

            ]
        },
     ],
     desc:'success'
 }

 */
/**
 * @api {get} /data/blog/read/:id 2.2文章-统计阅读
 * @apiGroup blog
 * @apiHeader {String} x-access-token 登录信息（可空）
 * 
 * @apiParam {String} id 文章id  ->push_article_id
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
 * @api {post} /data/blog/article 2.1文章-内容√
 * @apiGroup blog
 * @apiHeader {String} x-access-token 登录信息（可空）
 * 
 * @apiParam {String} id 文章id push_article_id
 * 
 * @apiSuccess {String} title 文章标题 .
 * @apiSuccess {String} body 文章内容 .
 * @apiSuccess {Number} read 文章被阅读数 .
 * @apiSuccess {Number} love 文章被喜欢数 .
 * @apiSuccess {Object} blogger 博主信息 .
 * @apiSuccess {Date} createAt 文章创建时间 .
 * @apiSuccess {Boolean} is_following 是否关注过博主 . true 已关注 false 未关注
 * @apiSuccess {Boolean} is_love 是否点击喜欢 . true 点过 false 未点过
 * @apiSuccess {Boolean} is_collect 是否收藏过 . true 已收藏 false 未收藏
 * @apiSuccess {Boolean} is_me 作者是否是自己 . true 是 false 不是
 * @apiSuccess {Boolean} article_id 写-文章id . 只有is_me是true的时候才会返回
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
 * @api {post} /data/blog/comment/create 3.1评论
 * @apiGroup blog
 * @apiHeader {String} x-access-token 登录信息
 * 
 * @apiParam {String} push_article_id 文章id
 * @apiParam {String} msg 评论内容
 *
 * @apiSuccess {String} headimg 评论人头像.
 * @apiSuccess {String} name 评论人名称.
 * @apiSuccess {String} userid 评论人id.
 * @apiSuccess {String} floor 评论人楼层.
 * @apiSuccess {Date} cdate 评论人时间.
 * @apiSuccess {String} msg 评论人内容.
* @apiSuccessExample Success-Response:
 {
     code:'1',
     data:{
        headimg:'',
        name:'成成',
        userid:'',
        floor:'15',
        cdate:'2017.08.15 01:28',
        msg:'深度的剖析，却也带来几分苍凉之感，不敢深思，习惯善意和自我约束的我已无能去臆想那些画面……',
     },
     desc:'success'
 }
 * 
 */
/**
 * @api {post} /data/blog/comment/list 3.2评论-查看评论
 * @apiGroup blog
 * @apiHeader {String} x-access-token 登录信息（可空）
 * 
 * @apiParam {String} id 文章id  push_article_id
 * @apiParam {String} order 排序 love按喜欢排 seq按时间正序 order按时间倒序
 *
 * @apiSuccess {String} headimg 评论人头像.
 * @apiSuccess {String} name 评论人名称.
 * @apiSuccess {String} userid 评论人id.
 * @apiSuccess {String} floor 评论人楼层.
 * @apiSuccess {Date} cdate 评论人时间.
 * @apiSuccess {String} msg 评论人内容.
 * @apiSuccess {String} is_me 是否是自己. true是 false 不是
 * @apiSuccess {String} is_love 是否给评论点赞. true 是 false 不是
 * @apiSuccess {String} revert.name 回复人名.
 * @apiSuccess {String} revert.userid 回复id人id.
 * @apiSuccess {String} revert.msg 回复的内容.
 * @apiSuccess {Date} revert.cdate 回复的时间.
 * @apiSuccess {String} revert.at_userid 被@人id.
 * @apiSuccess {String} revert.at_name 被@人名.
 * 
 * @apiSuccessExample Success-Response:
  {
     code:'1',
     data:[
         {
            headimg:'',
            name:'成成',
            userid:'',
            floor:'15',
            cdate:'2017.08.15 01:28',
            msg:'深度的剖析，却也带来几分苍凉之感，不敢深思，习惯善意和自我约束的我已无能去臆想那些画面……',
            is_me:true,
            is_love:true,
            revert:[
                {
                    name:'',
                    userid:'',
                    msg:'',
                    cdate:'',
                    at_userid:'',
                    at_name:''
                }
            ]
        }
     ],
     desc:'success'
 }
 */
/**
 * 
 * @api {post} /data/blog/comment/love 3.3评论-点赞、取消点赞
 * @apiGroup blog
 * @apiHeader {String} x-access-token 登录信息
 * 
 * @apiParam {String} id 文章id push_article_id
 * @apiParam {String} floor 楼数 
 * @apiParam {String} act 操作  1点赞  2取消点赞
 *
 * @apiSuccessExample Success-Response:
 {
     code:'1',
     desc:'success'
 }
 */
/**
 * @api {post} /data/blog/article/love 2.3文章-喜欢、取消喜欢
 * @apiGroup blog
 * @apiHeader {String} x-access-token 登录信息
 * 
 * @apiParam {String} id 文章id push_article_id
 * @apiParam {String} act 操作  1喜欢  2取消喜欢
 * @apiSuccessExample Success-Response:
 {
     code:'1',
     desc:'success'
 }
 */
/**
 * @api {post} /data/blog/article/loverlist 2.4文章-喜欢人列表
 * @apiGroup blog
 * 
 * @apiParam {String} id 文章id push_article_id
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
 * @api {post} /data/blog/comment/delete 3.4评论-删除评论、
 * @apiGroup blog
 * @apiHeader {String} x-access-token 登录信息
 * 
 * @apiParam {String} id 文章id push_article_id
 * @apiParam {String} floor 评论楼层 
 * @apiSuccessExample Success-Response:
 {
     code:'1',
     desc:'success'
 }
 */
/**
 * @api {post} /data/blog/revert 3.5评论-回复别人
 * @apiGroup blog
 * @apiHeader {String} x-access-token 登录信息
 * 
 * @apiParam {String} id 文章id push_article_id
 * @apiParam {String} floor 评论楼层 
 * @apiParam {String} userid  被@人id
 * @apiParam {String} name  被@人姓名
 * @apiParam {String} msg 回复的内容  
 * @apiSuccessExample Success-Response:
 {
     code:'1',
     desc:'success'
 }
 */
/**
 * @api {post} /data/blog/revert/delete 3.6评论-删除回复
 * @apiGroup blog
 * @apiHeader {String} x-access-token 登录信息
 * 
 * @apiParam {String} id 文章id push_article_id
 * @apiParam {String} floor 评论楼层 
 * @apiParam {String} revertfloor 回复的楼层 
 *
 * @apiSuccessExample Success-Response:
 {
     code:'1',
     desc:'success'
 }
 */

/**
 * @api {post} /data/blog/follow 4.1用户-关注、取消关注
 * @apiGroup blog
 * @apiHeader {String} x-access-token 登录信息
 * 
 * @apiParam {String} act 操作  1关注  2取消关注
 * @apiParam {String} userid 博主userid
 * @apiSuccessExample Success-Response:
 {
     code:'1',
     desc:'success'
 }
 */
/**
 * @api {post} /data/blog/userinfo 4.2用户-关注数、文章数...
 * @apiGroup blog
 * @apiHeader {String} x-access-token 登录信息 (可空)
 * 
 * @apiParam {String} userid 博主userid
 * 
 * @apiSuccess {String} userid 被查看人的用户id
 * @apiSuccess {String} headimg 用户头像
 * @apiSuccess {String} name 用户名
 * @apiSuccess {Number} following 关注数
 * @apiSuccess {Number} follower 粉丝数
 * @apiSuccess {Number} articlenum 发布的文章数
 * @apiSuccess {Number} love 获得的喜欢数
 * @apiSuccess {Boolean} is_follow 自己是否也关注了
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
        follower: 72167,
        articlenum: 1479,
        love: 81009,
        is_follow:false,
        sex:1,
        say:'暖污暖污的槽值小妹等你撩。'
    },
    desc:'success'
}
 */
/**
 * @api {post} /data/blog/followlist 4.3用户-关注、粉丝列表
 * @apiGroup blog
 * @apiHeader {String} x-access-token 登录信息 (可空)
 * 
 * @apiParam {String} userid 博主userid
 * @apiParam {String} act 操作  1关注  2粉丝
 * 
 * @apiSuccess {String} userid 被查看人的用户id
 * @apiSuccess {String} headimg 用户头像
 * @apiSuccess {String} name 用户名
 * @apiSuccess {Number} following 关注数
 * @apiSuccess {Number} follower 粉丝数
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
 * @api {post} /data/blog/user_article_list 4.4用户-文章&喜欢的文章列表
 * @apiGroup blog
 * @apiParam {String} userid 博主userid
 * @apiParam {String} love (可空) 空查发布文章列表 非空查喜欢的文章列表
 * 
 * @apiSuccess {String} push_article_id 文章id
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
            push_article_id:'',
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
 * @api {post} /data/blog/user_say 4.5用户-编辑个人介绍
 * @apiGroup blog
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
 * @api {post} /data/blog/user_collect_list 4.6用户-收藏的文章列表
 * @apiGroup blog
 * @apiHeader {String} x-access-token 登录信息 (可空)
 * 
 * @apiSuccess {String} push_article_id 文章id
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
            push_article_id:'',
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
 * @api {post} /data/blog/collect 2.5文章-收藏、取消收藏
 * @apiGroup blog
 * @apiHeader {String} x-access-token 登录信息
 * 
 * @apiParam {String} id 文章id push_article_id
 * @apiParam {String} act 操作  1收藏  2取消收藏
 * 
 * @apiSuccess {Number} code 1收藏成功 否则收藏失败.
 * @apiSuccessExample Success-Response:
 {
     code:'1',
     desc:'success'
 }
 */

/**
 * @api {post} /data/blog/note_sort 5.2写-排序文集、文章
 * @apiGroup blog
 * @apiHeader {String} x-access-token 登录信息
 * 
 * @apiParam {Array} sort 排序  exmp [start_point, end_point]
 * @apiParam {String} note_id 文集id (可空) 空代表排序文集 非空代表排序文集下面的文章
 * 
 * @apiSuccess {Number} code 1成功 .
 * @apiSuccessExample Success-Response:
 {
     code:'1',
     desc:'success'
 }
 */

/**
 * @api {post} /data/blog/note/list 5.1写-查询自己文集列表
 * @apiGroup blog
 * @apiHeader {String} x-access-token 登录信息
 * 
 * @apiSuccess {Number} code 1成功.
 * @apiSuccess {String} name 文集名.
 * @apiSuccess {String} note_id 文集id.
 * @apiSuccessExample Success-Response:
 {
     code:'1',
     data:[
         {
             name:'',
             note_id:''
         }
     ]
     desc:'success'
 }
 */
/**
 * @api {post} /data/blog/note/articlelist 5.3写-拿文集id查文章列表
 * @apiGroup blog
 * @apiHeader {String} x-access-token 登录信息
 * 
 * @apiParam {String} note_id 文集id 
 * 
 * @apiSuccess {Number} code 1成功.
 * @apiSuccess {Number} name 文章标题.
 * @apiSuccess {Number} article_id 笔记文章id.
 * @apiSuccess {Number} type 1私密 2已发布 3发布更新.
 * @apiSuccessExample Success-Response:
 {
     code:'1',
     data:[
        {
            name:'',
            article_id:'',
            type:''
        }
     ],
     desc:'success'
 }
 */

/**
 * @api {post} /data/blog/note/article 5.4写-拿文章id查文章
 * @apiGroup blog
 * @apiHeader {String} x-access-token 登录信息
 * 
 * @apiParam {String} note_id 文集id 
 * @apiParam {String} article_id 笔记文章id
 * 
 * @apiSuccess {Number} code 1成功.
 * @apiSuccess {String} title 文章标题.
 * @apiSuccess {String} body 文章内容.
 * @apiSuccess {String} type 1私密 2已发布 3发布更新.
 * @apiSuccessExample Success-Response:
 {
     code:'1',
     data:{
        title:'',
        body:'',
        type:''
     },
     desc:'success'
 }
 */

/**
 * @api {post} /data/blog/note/act 5.5写-删除,新建,重命名文集
 * @apiGroup blog
 * @apiHeader {String} x-access-token 登录信息
 * 
 * @apiParam {String} note_id 文集id （act）
 * @apiParam {String} note_name 文集名 （act为3的时候 需要传）
 * @apiParam {String} act 操作  1删除  2新建 3重命名
 * 
 * @apiSuccess {Number} code 1成功.
 * @apiSuccessExample Success-Response:
 {
     code:'1',
     desc:'success'
 }
 */



 /**
 * @api {post} /data/blog/note/article/act 5.6写-删除, 取消发布, 恢复， 彻底删除
 * @apiGroup blog
 * @apiHeader {String} x-access-token 登录信息
 * 
 * @apiParam {String} note_id 文集id 
 * @apiParam {String} article_id 文章id 
 * @apiParam {String} act 1删除文章 2取消发布 3恢复文章 4彻底删除
 * 
 * @apiSuccess {Number} code 1成功.
 * @apiSuccessExample Success-Response:
 {
     code:'1',
     desc:'success'
 }
 */
/**
 * @api {post} /data/blog/article/save 5.7写-发布文章，保存文章
 * @apiGroup blog
 * @apiHeader {String} x-access-token 登录信息
 * 
 * @apiParam {String} note_id 文集id
 * @apiParam {String} article_id 文章id
 * @apiParam {String} title 文章标题
 * @apiParam {String} body 文章内容
 * @apiParam {String} act 1发布 2保存
 * 
 * @apiSuccess {Number} code 1成功.
 * @apiSuccess {String} push_article_id 发布文章id
 * @apiSuccessExample Success-Response:
 {
     code:'1',
     data:{
        push_article_id:''
     },
     desc:'success'
 }
 */
  /**
 * @api {post} /data/blog/note/article/create 5.8写-新增文章
 * @apiGroup blog
 * @apiHeader {String} x-access-token 登录信息
 * 
 * @apiParam {String} note_id 文集id 
 * @apiParam {String} act 1头部新增 2下方新增
 * 
 * @apiSuccess {Number} code 1成功.
 * apiSuccess {String} article_id 文章id.
 * apiSuccess {String} name 标题.
 * @apiSuccessExample Success-Response:
 {
     code:'1',
     data:{
        article_id:'',
        name:'',
     },
     desc:'success'
 }
 */


/**
 * @api {post} /data/blog/note/article/settag 5.9写-设置文章标签
 * @apiGroup blog
 * @apiHeader {String} x-access-token 登录信息
 * 
 * @apiParam {String} note_id 文集id
 * @apiParam {String} article_id 文章id
 * @apiParam {String} tag 大分类
 * @apiParam {String} tag_item 小分类
 * 
 * @apiSuccess {Number} code 1成功.
 * @apiSuccessExample Success-Response:
 {
     code:'1',
     desc:'success'
 }
 */

 
/**
 * @api {post} /data/blog/note/dustbin 6.1查询回收站列表
 * @apiGroup blog
 * @apiHeader {String} x-access-token 登录信息
 * 
 * @apiSuccess {Number} code 1成功.
 * @apiSuccess {String} article_id 文章id.
 * @apiSuccess {String} name 文章名.
 * @apiSuccess {Date} date 删除时间.
 * @apiSuccessExample Success-Response:
 {
     code:'1',
     data:{
        article_id:'',
        name:'',
        date:'',
     },
     desc:'success'
 }
 */
/**
 * @api {get} /data/blog/authors 1.3首页-优秀原创作者√ 
 * @apiGroup blog
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