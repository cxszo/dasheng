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
