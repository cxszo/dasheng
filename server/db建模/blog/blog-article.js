



/*
*  wangwei 2017年08月15日
*  博客网站 所有发布的文章
*  不需要登录
*  所有发布的文章都会进入这个表
*/
let blog_article = {
    user_id:'', //Number 用来查作者信息
    push_article_id:'',//Number 文章id
    title:'',//String 文章标题
    body:'',//String 文章内容
    createAt:'',//Date 第一次发布时间
    love:[user_id, ...user_id],//Array 点赞的用户
    read:'',//Number 文章被阅读次数 自己打开的不算
    note:{
        name:'',//笔记本名字
        id:'',//笔记本id
        article_id:''//文章id
    },
    tag:{
        id:'',//文章大分类
        item_id:''//小分类
    },
    comment:[//评论
        {
            userid:'',//评论人 根据这个查询评论人的头像 用户名
            cdate:'',//评论时间
            thumb:'',//点赞数
            msg:'',//评论内容
            revert:[
                {
                    userid:'',//回复人id
                    name:'',//回复人名字
                    cdate:'',//回复时间
                    msg:''//回复内容
                }
            ] 
        }
    
    ],
    is_show:true,//是否显示当前文章 true 显示 false 不显示
}

