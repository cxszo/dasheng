import * as types from '../../constant/Home/homeType.js'
import {Util} from '../../util/util.js'

// 博客列表
export const getListData = param =>{
   let _param = param || {};
    return dispatch =>{
        Util.post(Util.burl+'/blog/list',_param,(data)=>{
                dispatch(bloglistData(data))
            },(err)=>{
                console.log(err)
            }
        )
        
    }
}
const bloglistData=data=>({
        type: types.BLOGLIST_DATA,
        data
})
//博客一级标题
export const getTitleData = param =>{
 
    return dispatch =>{
        Util.ajaxGet(Util.burl+'/blog/tag',(data)=>{
            dispatch(titleData(data))
            },(err)=>{
                console.log(err)
            }
        )
    }
}
const titleData = data =>({
    type: types.TITLE_DATA,
    data
})

//博客二级标题
export const getTitleData_2 = param =>{
    
       return dispatch =>{
           Util.ajaxGet(Util.burl+'/blog/tag/'+param,(data)=>{
               dispatch(titleData_2(data))
               },(err)=>{
                   console.log(err)
               }
           )
       }
   }
   const titleData_2 = data =>({
       type: types.TITLE_DATA_2,
       data
   })

//热门原作者
export const getAuthorData = param =>{
    return dispatch =>{
        Util.ajaxGet(Util.burl+'/blog/authors',(data)=>{
            dispatch(authorData(data))
        },(error)=>{
            console.log(error)
        }
      )
    }
}
const authorData=data=>({
    type: types.AUTHOR_DATA,
    data
})
//账户信息
export const getLoginData = param =>{
    return dispatch =>{
        Util.ajaxGet(Util.burl+'/user/userinfo/?accessToken='+param.accessToken,(data)=>{
            dispatch(blogLogin(data))
        },(err)=>{
            console.log(err)
        }
    )
    }  
}
const blogLogin=data=>({
    type: types.LOGIN_DATA,
    data
})