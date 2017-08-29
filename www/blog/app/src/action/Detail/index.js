import * as types from '../../constant/Detail/detailType.js'
import {Util} from '../../util/util.js'

// 详情信息
export const getDetailData = param =>{
    let _param = param || {};
     return dispatch =>{
         Util.post('http://10.0.10.2:3000/data/blog/article',_param,(data)=>{
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
         Util.post('http://10.0.10.2:3000/data/blog/article/love',_param,(data)=>{
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
         Util.post('http://10.0.10.2:3000/data/blog/collect',_param,(data)=>{
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