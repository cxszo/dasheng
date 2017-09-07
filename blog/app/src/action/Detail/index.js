import * as types from '../../constant/Detail/detailType.js'
import {Util} from '../../util/util.js'

// 详情信息
export const getDetailData = param =>{
    let _param = param || {};
     return dispatch =>{
         Util.post(Util.burl+'/blog/article',_param,(data)=>{
            dispatch(blogDetailData(data))
                 
             },(err)=>{
                 console.log(err)
             }
         )
         
     }
 }
 const blogDetailData=data=>({
         type: types.DETAIL_DATA,
         data
 })
 //喜欢
 export const getLike= param =>{
    let _param = param || {};
     return dispatch =>{
         Util.post(Util.burl+'/blog/article/love',_param,(data)=>{
                 dispatch(blogLike(data))
             },(err)=>{
                 console.log(err)
             }
         )
         
     }
 }
 const blogLike=data=>({
         type: types.LIKE,
         data
 })
  //收藏
  export const getCollect= param =>{
    let _param = param || {};
     return dispatch =>{
         Util.post(Util.burl+'/blog/collect',_param,(data)=>{
                 dispatch(blogCollect(data))
             },(err)=>{
                 console.log(err)
             }
         )
         
     }
 }
 const blogCollect=data=>({
         type: types.COLLECT,
         data
 })
 //喜欢列表
 export const getLoveList= param =>{
    
     return dispatch =>{
         Util.ajaxGet(Util.burl+'/blog/article/loverlist/'+param.id+'',(data)=>{
                 dispatch(blogLoveList(data))
             },(err)=>{
                 console.log(err)
             }
         )
         
     }
 }
 const blogLoveList=data=>({
         type: types.LOVELIST,
         data
 })
//喜欢列表是否显示层
  export const getLove= param =>({
    type: types.LOVEMASK,
    data:param
 })
 //点击关注
 export const getGz= param =>{
     return dispatch =>{
         Util.ajaxGet(Util.burl+'/blog/follow/'+param.id+'?accessToken='+param.accessToken,(data)=>{
                 dispatch(blogGZ(data))
             },(err)=>{
                 console.log(err)
             }
         )
         
     }
 }
 const blogGZ=data=>({
         type: types.GUANZHU,
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