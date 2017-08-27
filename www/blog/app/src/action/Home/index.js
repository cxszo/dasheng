import * as types from '../../constant/Home/homeType.js'
import {Util} from '../../util/util.js'
// 博客列表
export const getListData = param =>{
    let _data = {"name1":"value1","name2":"value2"}
    return dispatch =>{
        Util.ajaxGet('/bloglist/user_article_list.js',(data)=>{
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
        Util.ajaxGet('/Blogtag/blogtag.js',(data)=>{
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

//热门原作者
export const getAuthorData = param =>{
    return dispatch =>{
        Util.ajaxGet('/HotAuthor/hotauthor1.js',(data)=>{
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