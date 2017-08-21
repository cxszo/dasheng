



/*
*  wangwei 2017年08月15日
*  博客网站 所有发布的文章
*  不需要登录
*  所有发布的文章都会进入这个表
*/
let blog_article = {
    user_id:'', //Number 用来查作者信息
    push_article_id:'',//Number 文章id
    blogger:'',//String 博主名
    headimg:'',//博主头像
    img_url:'',//文章里面的图片（可空）
    title:'',//String 文章标题
    body:'',//String 文章内容
    createAt:'',//Date 第一次发布时间
    love:[//Array 点赞的用户
        {
            user_id:'',//点赞人
            name:'',//点赞人名
            headimg:'',//点赞人头像
            cdate:''//点赞时间
        }
    ],
    read:'',//Number 文章被阅读次数 自己打开的不算
    note:{
        name:'',//笔记本名字
        id:'',//笔记本id
        article_id:''//文章id
    },
    tag:'',//文章大分类
    tag_item:'',//小分类
    comment:[//评论
        {
            userid:'',//评论人id
            cdate:'',//评论时间
            thumb:[user_id, ...xxx],//点赞人列表
            msg:'',//评论内容
            revert:[
                {
                    userid:'',//回复人id
                    name:'',//回复人名字
                    cdate:'',//回复时间
                    msg:'',//回复内容
                    at_userid:'',//被@人id
                    at_name:''//被@人名
                }
            ] 
        }
    
    ],
    is_show:true,//是否显示当前文章 true 显示 false 不显示
}

