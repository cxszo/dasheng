

/*
*  wangwei 2017年08月20日
*  博客网站 文章表
*  需要登录
*  
*/

let blog_note_article = {
    userid:'',
    article_id:'',//文章id
    note_id:'',//Number 父级笔记本id
    title:'',//String 文章标题
    body:'',//String 文章内容
    createAt:'',//Date 创建时间
    deleteAt:'',//Date 删除时间
    type:'',//1私密 2已发布 3发布更新
    is_show:true,//Boolean 是否删除 true 没有被删除 false反之
    push_article_id:'',//已发布的文章id
    tag:'',//文章大分类
    tar_item:'',//小分类
    history:[]//先不做放着 
}