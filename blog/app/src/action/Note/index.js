import * as types from '../../constant/Note/noteType.js'
import{Util} from '../../util/util.js'
// 文集列表
export const getNotetData = param =>{
        return dispatch =>{
            Util.ajaxGet(Util.burl+'/blog/notebooks?accessToken='+param.accessToken,(data)=>{
                    dispatch(noteData(data))
                },(err)=>{
                    console.log(err);
                }
            )
        }
     
 }

 const noteData=data=>({
         type: types.NOTE_DATA,
         data
 })
 //新建文集
 export const getNewData = param =>{
    let _param = param || {};
    return dispatch =>{
        Util.post(Util.burl+'/blog/notebooks',_param,(data)=>{
                dispatch(noteNewData(data,{code:data.code,desc:data.desc}))
            },(err)=>{
                console.log(err)
            }
        )
    }
}

const noteNewData=(data,codeDesc)=>({
     type: types.NEW_NOTE_DATA,
     data,
     codeDesc:codeDesc
})

