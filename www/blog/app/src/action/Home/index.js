import * as types from '../../constant/Home/homeType.js'
import {Util} from '../../util/util.js'
// 博客列表
export const getListData = param =>{
   let _param = param || {};
    return dispatch =>{
        Util.post('http://10.0.10.2:3000/data/blog/list',_param,(data)=>{
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
        Util.ajaxGet('http://10.0.10.2:3000/data/blog/tag',(data)=>{
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
           Util.ajaxGet('http://10.0.10.2:3000/data/blog/tag/'+param,(data)=>{
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
        Util.ajaxGet('http://10.0.10.2:3000/data/blog/authors',(data)=>{
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