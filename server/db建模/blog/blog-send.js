

/*
*  wangwei 2017年08月15日
*  博客网站 发文章
*  需要登录
*  
*/
let blog_send = {
    userid:'',
    notes:{//笔记本
        10000:{//node_id 默认10000是笔记本 10001是日记 用户自定义的笔记本 id从10002开始自增
            note_name:'笔记本',
        },
        10001:{
            note_name:'日记',
        },
        10002:{
            note_name:'用户自定义',// 笔记本名称
            createAt:'',//Date 创建时间
            is_show: true,//Boolean 是否删除 true 没有被删除 false 被删除（当为false时 subset里面的文章 is_show全部变成false）
            sort:[article_id, ...article_id],//文章排序
            articles:{
                10000:{//note_article_id  
                    parent_id:'',//Number 父级笔记本id
                    title:'',//String 文章标题
                    body:'',//String 文章内容
                    createAt:'',//Date 创建时间
                    deleteAt:'',//Date 删除时间
                    type:'',//1私密 2已发布 3发布更新
                    is_show:true,//Boolean 是否删除 true 没有被删除 false反之
                    push_article_id:'',//已发布的文章id
                    tag:{
                        id:'',//文章大分类
                        item_id:''//小分类
                    },
                    history:[]//先不做放着 
                }
            }

        }
    },
    sort:[10000, 10001, ...x],//笔记本排序
}
