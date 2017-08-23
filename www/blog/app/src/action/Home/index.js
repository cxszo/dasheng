import * as types from '../../constant/Home/homeType.js'
import {Util} from '../../util/util.js'

export const getListData = param =>{
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
