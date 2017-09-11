import * as types from '../../constant/Note/noteType.js'
import{Util} from '../../util/util.js'
// 博客列表
export const getNotetData = param =>{
    let _param = param || {};
     return dispatch =>{
        return dispatch =>{
            Util.ajaxGet(Util.burl+'/blog/notebooks/'+param.id+'?accessToken='+param.accessToken,(data)=>{
                    dispatch(noteData(data))
                },(err)=>{
                    console.log(err)
                }
            )
            
        }
         
     }
 }
 const noteData=data=>({
         type: types.NOTE_DATA,
         data
 })