import * as types from '../../constant/Center/centerType.js'
import {Util} from '../../util/util.js'
//账户信息
export const getLoginData = param =>{
    return dispatch =>{
        Util.ajaxGet('http://59.110.143.111/data/user/userinfo/?accessToken='+param.accessToken,(data)=>{
            dispatch(blogLogin(data))
        },(err)=>{
            console.log(err)
        }
    )
    }  
}
const blogLogin=data=>({
    type: types.LOGIN_DATA_CENTER,
    data
})
//头部信息
export const getGuanZhuData = param =>{
    return dispatch =>{
        Util.ajaxGet('http://59.110.143.111/data/blog/userinfo/'+param.id+'?accessToken='+param.accessToken,(data)=>{
            dispatch(getGuanZhu(data))
        },(err)=>{
            console.log(err)
        }
    )
    }  
}
const getGuanZhu=data=>({
    type: types.GETGUANZHU_DATA,
    data
})
//文章列表
export const getArticleList= param =>{
    return dispatch =>{
        Util.ajaxGet('http://59.110.143.111/data/blog/user_article/'+param.id+'/'+param.or+'?accessToken='+param.accessToken,(data)=>{
                dispatch(getArticle(data))
            },(err)=>{
                console.log(err)
            }
        )
        
    }
}
const getArticle=data=>({
    type: types.GETARTICLE_DATA,
    data
})
  //关注和粉丝列表
  export const getFollowListData= param =>{
    let _param = param || {};
     return dispatch =>{
         Util.post('http://59.110.143.111/data/blog/followlist/',_param,(data)=>{
                 dispatch(followList(data))
             },(err)=>{
                 console.log(err)
             }
         )
         
     }
 }
 const followList=data=>({
         type: types.FOLLOWLIST_DATA,
         data
 })
 //收藏列表
 export const getCollectList= param =>{
    return dispatch =>{
        Util.ajaxGet('http://59.110.143.111/data/blog/user_article/collect?accessToken='+param.accessToken,(data)=>{
                dispatch(getCollect(data))
            },(err)=>{
                console.log(err)
            }
        )
        
    }
}
const getCollect=data=>({
    type: types.COLLECT_DATA,
    data
})
//编辑个人介绍
export const getEdit= param =>{
    let _param = param || {};
     return dispatch =>{
         Util.post('http://59.110.143.111/data/blog/user_say',_param,(data)=>{
                 dispatch(edit(data))
             },(err)=>{
                 console.log(err)
             }
         )
         
     }
 }
 const edit=data=>({
         type: types.EDIT_DATA,
         data
 })
 //关注，取消关注
 export const getGz= param =>{
    return dispatch =>{
        Util.ajaxGet('http://59.110.143.111/data/blog/follow/'+param.id+'?accessToken='+param.accessToken,(data)=>{
                dispatch(blogGZ(data))
            },(err)=>{
                console.log(err)
            }
        )
        
    }
}
const blogGZ=data=>({
        type: types.GUANZHU_DATA,
        data
})