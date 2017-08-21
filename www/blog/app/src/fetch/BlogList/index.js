import { post , get, ajax } from '../post'

//博客列表
export let bloglist = ()=>{
    let data = {
    	name:'liuzhishan'
    }
    return post('/test/user_article_list.js', data);
}